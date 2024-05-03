import { Badge } from "@/components/ui/badge"
import { db } from "@/lib/db"
import { Resource } from "@prisma/client"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

interface Props {
  item: Resource
}
export default async function ItemList(props: Props) {
  const { title, categoryId, badge, logoUrl } = props.item

  const cat = await db.category.findFirst({
    where: { id: categoryId || 0 }
  })

  return (
    <article className="flex gap-3 border rounded p-3 hover:bg-muted/60 h-fit relative">
      <Image
        src={logoUrl || "/plogo.png"}
        alt="logo"
        width={64}
        height={64}
        className="rounded self-center w-16 h-16"
      />
      <section className="flex-grow space-y-3">
        <div>
          <h2 className="text-md font-semibold line-clamp-1">{title}</h2>
          <p className="text-muted-foreground text-sm">{cat?.label}</p>
        </div>
        <div className="text-muted-foreground mt-0">
          {/* <Badge className="rounded md:flex items-center space-x-1 mt-0"  variant={"secondary"}> {badge} </Badge>
            <p className="flex items-center gap-1 sm:hidden"> <Briefcase size={16} className="shrink-0 " /> {type} </p>
            <p className="flex items-center gap-1 "> <MapPin size={16} className="shrink-0 " /> {locationType || "LocationType"} </p> 
             <p className="flex items-center gap-1 "> <Globe2 size={16} className="shrink-0 " /> {location || "location"} </p> */}
        </div>
      </section>
      <div className="hidden sm:flex flex-col shrink-0 items-end justify-between">
        {badge && (
          <Badge
            className="rounded absolute -top-3 right-3 hidden md:flex items-center space-x-1"
            variant={"secondary"}
          >
            {badge}
          </Badge>
        )}
        {/* <span className="flex items-center gap-1.5 text-muted-foreground"> <ExternalLink size={16} /> </span> */}
      </div>
    </article>
  )
}
