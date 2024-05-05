import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip"

interface TooltipProps {
  children: React.ReactNode
  content: string
}

export default function TooltipComp({ children, content }: TooltipProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild >{children}</TooltipTrigger>
        <TooltipContent side="bottom">{content}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
