import { SiLinux, SiApple, SiAppstore, SiGoogleplay } from "react-icons/si"
import { RiAndroidFill } from "react-icons/ri"
import { IoGlobe, IoExtensionPuzzle } from "react-icons/io5"
import { ImWindows8 } from "react-icons/im"
import { TooltipComp } from "@/components/comps"

interface AvailabilityProps {
  number: Number
}
export default function Availability({ number }: AvailabilityProps) {
  let str = number.toString()
  const iconStyle = "w-6 h-6"

  const temp = [
    {
      id: "1",
      content: "available on Web as Website or Webapp",
      icon: <IoGlobe className={`${iconStyle}`} />
    },
    {
      id: "2",
      content: "Google PlayStore",
      icon: <SiGoogleplay className={`${iconStyle}`} />
    },
    {
      id: "3",
      content: "IOS AppStore",
      icon: <SiAppstore className={`${iconStyle}`} />
    },
    {
      id: "4",
      content: "Windows",
      icon: <ImWindows8 className={`${iconStyle}`} />
    },
    {
      id: "5",
      content: "Apple MacOS",
      icon: <SiApple className={`${iconStyle}`} />
    },
    { id: "6", content: "Linux", icon: <SiLinux className={`${iconStyle}`} /> },
    {
      id: "7",
      content: "Android",
      icon: <RiAndroidFill className={`${iconStyle}`} />
    },
    {
      id: "8",
      content: "Browser Extention",
      icon: <IoExtensionPuzzle className={`${iconStyle}`} />
    }
  ]

  return (
    <>
      <div className="flex items-center gap-1">
        <div className="flex gap-2">
          {temp.map((ele) => {
            return (
              <div key={ele.id}>
                {str.includes(ele.id) && (
                  <TooltipComp content={ele.content}>{ele.icon}</TooltipComp>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
