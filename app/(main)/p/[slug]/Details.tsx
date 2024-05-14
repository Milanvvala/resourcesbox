import { Availability, Button, Pricing } from "@/components/comps"
import { Product } from "@prisma/client"
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface PageProps {
  product: Product
}

export default function Details(props: PageProps) {
  const { product } = props

  return (
    <div className="flex flex-col sm:flex-row items-start gap-6 justify-between p-4 md:p-6 laptop:border rounded-lg laptop:my-8 my-4 w-full">
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

          <Button asChild className="flex sm:hidden">
            <Link
              href={product.visitLink || "/"}
              target="_blank"
              className="gap-2 font-semibold text-xl"
            >
              <ExternalLink className="h-5 w-5" strokeWidth={2.5} />
              Visit
            </Link>
          </Button>
        </div>

        <div>
          <div className="space-y-3">
            <h1 className="text-2xl md:text-4xl font-bold">{product.title}</h1>
            <Link
              href={"/search/marketing"}
              className="underline text-accent-foreground"
            >
              {product.categoryId && "Marketing"}
            </Link>
          </div>
          <p className="text-muted-foreground text-sm mt-1">
            {/* {product.description} */}
          </p>

          <div className="text-muted-foreground space-y-2">
            <Pricing type={product.price || 2} />
            <Availability number={123456789} />
          </div>
        </div>
      </div>

      <Button asChild className="hidden sm:flex">
        <Link
          href={product.visitLink || "/"}
          target="_blank"
          className="gap-2 font-semibold text-xl"
        >
          <ExternalLink className="h-5 w-5" strokeWidth={2.5} />
          Visit
        </Link>
      </Button>
    </div>
  )
}
