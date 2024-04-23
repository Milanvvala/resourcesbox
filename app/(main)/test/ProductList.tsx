import { Product } from "@prisma/client"

interface Props {
  product: Product
}
export default function ProductList(props: Props) {
  const { title } = props.product
  return <article>{title}</article>
}
