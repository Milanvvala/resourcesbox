import { SelectDataType } from "@/components/utils/SelectComp"
import { CodeXml, Palette, Volume2 } from "lucide-react"

export const category_types: SelectDataType[] = [
  { id: 1, label: "Design", link: "/search/design", icon: <Palette /> },
  {
    id: 2,
    label: "Development",
    link: "/search/development",
    icon: <CodeXml />
  },
  { id: 3, label: "Marketing", link: "/search/marketing", icon: <Volume2 /> }
]
