import Link from 'next/link';
import Card, { ICard } from '../card/card';
import styles from './collection.module.css'

async function getData() {
  const response = await fetch('https://fakestoreapi.com/products?limit=3')
  return response.json()
}

export default async function Collection() {
  
  const data = await getData()
  console.log(data);
  return ( 
    <section className={styles.collection}>
      <div className={styles.box}>
        {data && data.map((item: ICard) => (
            <Card 
              id={item.id}
              price={item.price}
              image={item.image}
              title={item.title}
            />
        ))}
      </div>
    </section>
   );
}
