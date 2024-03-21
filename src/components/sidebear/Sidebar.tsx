import { ALL_THEMES } from '../../constants';
import Button from '../button/Button';

import styles from './Sidebar.module.scss';

interface ISidebarProps {
  tags: string[];
  activeTab: string;
  handleChangeTab: (tag: string) => void;
}

const Sidebar = ({ tags, activeTab, handleChangeTab }: ISidebarProps) => {
  return (
    <div className={styles.aside}>
      <ul>
        <li>
          <Button onClick={() => handleChangeTab(ALL_THEMES)} active={activeTab === ALL_THEMES} text={ALL_THEMES} />
        </li>
        {tags.map(tag => (
          <li key={tag}>
            <Button onClick={() => handleChangeTab(tag)} active={activeTab === tag} text={tag} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
