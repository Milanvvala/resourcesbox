"use client"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"

interface Props {
  data: string[]
  label: string
  defaultValue: string | undefined
}

export default function SelectComp(props: Props) {
  const { data, label, defaultValue } = props
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={label}>{label}</Label>
      <Select defaultValue={defaultValue} name={label}>
        <SelectTrigger>
          <SelectValue placeholder={label} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          {data.map((el) => {
            return (
              <SelectItem key={el} value={el}>
                {el}
              </SelectItem>
            )
          })}
        </SelectContent>
      </Select>
    </div>
  )
}
