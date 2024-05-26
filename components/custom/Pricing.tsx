import { Badge, TooltipComp } from "@/components/comps"
import { InfoIcon } from "lucide-react"
import { SelectDataType } from "@/components/utils/SelectComp"
import { CalendarClock, Handshake, RefreshCw } from "lucide-react"
import { MdMoneyOff } from "react-icons/md"
import { TbPaywall } from "react-icons/tb"

interface Props {
  type: number
}

export const price_types: SelectDataType[] = [
  {
    id: 0,
    label: "Free",
    info: "This Product is Totally Free of Charge",
    icon: <MdMoneyOff size={16} />
  },
  {
    id: 1,
    label: "Freemium",
    info: "Paid Product with Free Trial Period",
    icon: <CalendarClock size={16} />,
    color: "green"
  },
  {
    id: 2,
    label: "Free + Paid",
    info: "Some Part of Product is Free of Charge, Acess to other Part requires Payment",
    icon: <TbPaywall size={16} />,
    color: "indigo"
  },
  {
    id: 3,
    label: "One Time Payment",
    info: "Just Pay One Time and Use Forever",
    icon: <Handshake size={16} />,
    color: "yellow"
  },
  {
    id: 4,
    label: "Subscription",
    info: "Recurring Payment at regular Intervals for access to a Product",
    icon: <RefreshCw size={16} />,
    color: "red"
  }
]

export default function Pricing({ type }: Props) {
  const filteredTypes = price_types.filter((ele) => ele.id === type)

  return (
    <>
      {filteredTypes.map((ele) => {
        return (
          <div key={ele.id}>
            <TooltipComp content={ele.info || "info"} side={"right"}>
              <Badge
                className="rounded md:flex items-center space-x-1 gap-2 text-md my-1"
                variant={"outline"}
              >
                {ele.icon}
                {ele.label}
                <InfoIcon className="h-4 w-4 text-muted-foreground" />
              </Badge>
            </TooltipComp>
          </div>
        )
      })}
    </>
  )
}
