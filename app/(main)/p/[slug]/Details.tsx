import { Availability, Button, Pricing } from "@/components/comps"
import { Product } from "@prisma/client"
import { Bookmark, ExternalLink, Share2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface PageProps {
  product: Product
}

export default function Details(props: PageProps) {
  const { product } = props

  return (
    <div className="flex flex-col sm:flex-row items-start gap-6 justify-between p-4 md:p-6 lg:border rounded-lg lg:my-8 my-4 w-full">
      <div className="flex flex-col sm:flex-row items-start sm:gap-4 w-full">
        <div className="flex items-start justify-between w-full sm:w-fit">
          {product.logoUrl && (
            <Image
              src={product.logoUrl}
              alt="logo"
              width={120}
              height={120}
              className="w-24 h-24 sm:w-[120px] sm:h-[120px] rounded-xl"
            />
          )}

          <div className="flex sm:hidden">
            <Button asChild>
              <Link
                href={product.visitLink || "/"}
                target="_blank"
                className="gap-2 font-semibold text-xl"
              >
                <ExternalLink className="h-5 w-5" strokeWidth={2.5} />
                Visit
              </Link>
            </Button>
            <div className="flex">
              <Button variant={"secondary"} size={"icon"}>
                <Bookmark />
              </Button>
              <Button variant={"secondary"} size={"icon"}>
                <Share2 />
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4">
          <div className="space-y-2">
            <h1 className="text-2xl md:text-4xl font-bold">{product.title}</h1>
            <Link
              href={"/search/marketing"}
              className="underline text-accent-foreground"
            >
              {product.categoryId && "Marketing"}
            </Link>
            <p className="text-muted-foreground text-sm">
              {/* {product.description} */}
              This is Dummy Description for Product Undurstanding
            </p>
            <div className="w-fit">
              <Pricing type={product.price || 2} />
            </div>
            <div className="text-muted-foreground">
              <Availability number={123456789} />
            </div>
          </div>
        </div>
      </div>

      <div className="hidden sm:flex-col sm:flex gap-4">
        <Button asChild>
          <Link
            href={product.visitLink || "/"}
            target="_blank"
            className="gap-2 font-semibold text-xl"
          >
            <ExternalLink className="h-5 w-5" strokeWidth={2.5} />
            Visit
          </Link>
        </Button>

        <Button variant={"secondary"} className="gap-2 font-semibold text-xl">
          <Bookmark className="h-5 w-5" strokeWidth={2.5} />
          Save
        </Button>
        <Button variant={"secondary"} className="gap-2 font-semibold text-xl">
          <Share2 className="h-5 w-5" strokeWidth={2.5} />
          Share
        </Button>
      </div>
    </div>
  )
}
