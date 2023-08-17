import { ICard } from '@/app/components/card/card'
import styles from './page.module.css'


async function getData(id:string) {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`)
  return response.json()
}

export type Props = {
  params: {
    id: string
  }
}

export default async function ItemOne({params: { id }}: Props) {
  const item: ICard = await getData(id)
  return ( 
    <div>
      <h1>
        {item.title}
      </h1>
    </div>
   );
}

