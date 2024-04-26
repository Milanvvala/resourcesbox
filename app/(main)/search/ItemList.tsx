import { db } from "@/lib/db"
import { Resource } from "@prisma/client"

interface Props {
  item: Resource
}
export default async function ItemList(props: Props) {
  const { title, categoryId } = props.item

  const cat = await db.category.findFirst({
    where: { id: categoryId || 0 }
  })

  return (
    <div>
      {title}
      {cat?.label}
    </div>
  )
}
