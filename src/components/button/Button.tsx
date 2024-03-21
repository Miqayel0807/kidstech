import clsx from 'clsx';

import styles from './Button.module.scss';

interface IButtonProps {
  onClick: () => void;
  active: boolean;
  text: string;
}
const Button = ({ onClick, active, text }: IButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(styles.button, {
        [styles.active]: active,
      })}
    >
      {text}
    </button>
  );
};

export default Button;
