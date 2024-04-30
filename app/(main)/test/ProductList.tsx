import { Product } from "@prisma/client"
import Image from "next/image"
import img from "@/public/plogo.png"
import { Briefcase, ExternalLink, Globe2, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface Props {
  product: Product
}
export default function ProductList(props: Props) {
  const { title, companyName, type, location, locationType } = props.product
  return (
    
      <article className="flex gap-3 border rounded p-5 hover:bg-muted/60">
        <Image
          src={img}
          alt="logo"
          width={100}
          height={100}
          className="rounded self-center"
        />
        <section className="flex-grow space-y-3">
          <div>
            <h2 className="text-xl font-medium">{title}</h2>
            <p className="text-muted-foreground">{companyName}</p>
          </div>
          <div className="text-muted-foreground">
            <p className="flex items-center gap-1 sm:hidden">
              <Briefcase size={16} className="shrink-0 " />
              {type}
            </p>
            <p className="flex items-center gap-1 ">
              <MapPin size={16} className="shrink-0 " />
              {locationType || "LocationType"}
            </p>
            <p className="flex items-center gap-1 ">
              <Globe2 size={16} className="shrink-0 " />
              {location || "location"}
            </p>
          </div>
        </section>
        <div className="hidden sm:flex flex-col shrink-0 items-end justify-between">
          <Badge className="rounded" variant={"secondary"}>
            {type}
          </Badge>
          <span className="flex items-center gap-1.5 text-muted-foreground">
            <ExternalLink size={16} />
          </span>
        </div>
      </article>
    
  )
}
