import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet"

interface SheetCompProps {
  trigger: React.ReactNode
  header?: React.ReactNode
  title?: string
  description?: string
  side: "top" | "bottom" | "left" | "right" | null | undefined
  children: React.ReactNode
  footer?: React.ReactNode
  close?: React.ReactNode
}

export default function SheetComp(props: SheetCompProps) {
  const { trigger, header, title, description, side, children, footer, close } =
    props

  return (
    <Sheet>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent side={side}>
        {(header || title || description) && (
          <SheetHeader className="mb-4">
            {title && <SheetTitle>{title}</SheetTitle>}
            {description && <SheetDescription>{description}</SheetDescription>}
          </SheetHeader>
        )}
        {children}
        {(footer || close) && (
          <SheetFooter>{close && <SheetClose asChild>{close}</SheetClose>}</SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  )
}
