import styles from './Card.module.scss';

interface CardProps {
  name: string;
  image: string;
  bgColor: string;
}

const Card = ({ name, image, bgColor }: CardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage} style={{ backgroundColor: bgColor }}>
        <img src={image} alt="Course Image" />
      </div>
      <div className={styles.cardContent}>
        <h2>{name}</h2>
      </div>
    </div>
  );
};

export default Card;
