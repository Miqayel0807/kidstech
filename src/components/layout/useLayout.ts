import { useCallback, useEffect, useMemo, useState } from 'react';

import { ALL_THEMES } from '../../constants';

interface ICourse {
  name: string;
  id: string;
  image: string;
  bgColor: string;
  tags: string[];
}
type TCourses = Record<string, Omit<ICourse, 'tags'>[]>;

export const useLayout = () => {
  const [tab, setTab] = useState(ALL_THEMES);
  const [courses, setCourses] = useState<TCourses>({});
  const [loader, setLoader] = useState(false);

  const handleChangeTab = useCallback((tab: string) => {
    setTab(tab);
  }, []);

  const getCourses = useCallback(async () => {
    try {
      setLoader(true);
      const result = await fetch('https://logiclike.com/docs/courses.json');
      const data = await result.json();

      const fetchedCourses: TCourses = {};

      data.forEach(({ name, id, image, bgColor, tags }: ICourse) => {
        tags.forEach(tag => {
          fetchedCourses[tag]
            ? fetchedCourses[tag].push({ name, id, image, bgColor })
            : (fetchedCourses[tag] = [{ name, id, image, bgColor }]);
        });
      });

      setCourses(fetchedCourses);
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  }, []);

  const course = useMemo(() => {
    if (tab === ALL_THEMES) {
      const allCourses: Record<string, Omit<ICourse, 'tags'>> = {};
      Object.values(courses).forEach(courseList => {
        courseList.forEach(course => {
          allCourses[course.id] = course;
        });
      });
      return Object.values(allCourses);
    }
    return courses[tab] || [];
  }, [tab, courses]);

  const tags = useMemo(() => {
    return Object.keys(courses);
  }, [courses]);

  useEffect(() => {
    getCourses();
  }, [getCourses]);

  return {
    tab,
    tags,
    handleChangeTab,
    course,
    loader,
  };
};
