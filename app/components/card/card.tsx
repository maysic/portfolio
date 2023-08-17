import Link from 'next/link';
import styles from './card.module.css';

export interface ICard {
  image: string
  title: string
  id: number
  price: number
  description?: string
  category?: string
  rating?: number
}

export default function Card(props: ICard) {
  return ( 
    <>
      <div className={styles.card} key={props.id}>
        <Link href={`shop/${props.id}`}>
          <img src={props.image} alt={props.title} className={styles.img} />
          <h2 className={styles.title}>
            {props.title}
          </h2>
          <span className={styles.price}>
            {props.price}
          </span>
        </Link>
      </div>
    </>
   );
}


