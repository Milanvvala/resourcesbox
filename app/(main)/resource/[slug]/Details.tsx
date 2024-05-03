import Availability from "@/components/Availability"
import { Button } from "@/components/ui/button"
import { Resource } from "@prisma/client"
import { Briefcase, ExternalLink, Globe2, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import React from "react"

interface PageProps {
  resource: Resource
}

export default function Details(props: PageProps) {
  const { resource } = props

  return (
    <div className="flex flex-col md:flex-raw items-start gap-6 justify-between p-3 md:p-6 md:border rounded-lg md:my-8 my-4">
      <div className="flex flex-col sm:flex-raw sm:items-center gap-4 justify-between ">
        {resource.logoUrl && (
          <Image
            src={resource.logoUrl}
            alt="logo"
            width={120}
            height={120}
            className="w-24 h-24 sm:w-[120px] sm:h-[120px] rounded-xl"
          />
        )}

        <div>
          <div className="space-y-3">
            <h1 className="text-xl md:text-3xl font-bold">{resource.title}</h1>
            <Link href={'/search/marketing'} className="underline text-accent-foreground">{resource.categoryId && "Marketing"}</Link>
          </div>
            <p className="text-muted-foreground text-sm mt-1">
              {resource.description}
            </p>

          <div className="text-muted-foreground mt-3">
            <p className="flex items-center gap-1 ">
              <Briefcase size={16} className="shrink-0 " /> {resource.price}
            </p>

            <Availability number={123456789}/>
          </div>
        </div>
      </div>

      <Button asChild>
        <Link href={resource.visitLink || "/"} target="_blank" className="gap-2 font-semibold text-xl">
          <ExternalLink className="h-5 w-5" strokeWidth={2.5}/>
          Visit
        </Link>
      </Button>
    </div>
  )
}
