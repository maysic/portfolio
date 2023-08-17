import { ICard } from "../components/card/card"


export async function useCategory(category: string) {
  const response = await (await fetch('https://fakestoreapi.com/products')).json()
        .then(json => json.filter((item: ICard) => item.category === category))
  return response
}


