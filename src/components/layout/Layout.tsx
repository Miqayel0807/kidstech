import Card from '../card/Card';
import Loader from '../loader/Loader';
import Sidebar from '../sidebear/Sidebar';

import { useLayout } from './useLayout';

import styles from './Layout.module.scss';

const Layout = () => {
  const { tab, handleChangeTab, tags, course, loader } = useLayout();

  return (
    <main>
      {loader ? (
        <Loader />
      ) : (
        <div className={styles.container}>
          <div className={styles.grid}>
            <Sidebar tags={tags} activeTab={tab} handleChangeTab={handleChangeTab} />
            <div className={styles.cardsWrapper}>
              {course?.map(({ name, image, bgColor, id }) => (
                <Card key={id} name={name} bgColor={bgColor} image={image} />
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Layout;
