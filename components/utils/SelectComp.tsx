"use client"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"

export type SelectDataType = {
  id?: number
  label: string
  info?: string
  icon?: React.ReactNode
  color?: string
  link?: string
}

interface Props {
  data: SelectDataType[]
  label: string
  defaultValue: string | undefined
}

export default function SelectComp(props: Props) {
  const { data, label, defaultValue } = props
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={label} className="capitalize">
        {label}
      </Label>
      <Select defaultValue={defaultValue} name={label}>
        <SelectTrigger>
          <SelectValue placeholder={label} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          {data.map((el: any) => {
            return (
              <SelectItem key={el?.id} value={el.label}>
                <div className="flex gap-2 items-start">
                  {el?.icon}
                  {el.label}
                </div>
              </SelectItem>
            )
          })}
        </SelectContent>
      </Select>
    </div>
  )
}
