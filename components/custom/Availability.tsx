import {
  SiLinux,
  SiApple,
  SiAppstore,
  SiGoogleplay
} from "react-icons/si"
import { RiAndroidFill } from "react-icons/ri"
import { IoGlobe, IoExtensionPuzzle } from "react-icons/io5"
import { ImWindows8 } from "react-icons/im"
import TooltipDemo from "../utils/TooltipComp"

interface AvailabilityProps {
  number: Number
}
export default function Availability({ number }: AvailabilityProps) {
  let str = number.toString()
  const iconStyle = "w-6 h-6"

  return (
    <>
      <div className="flex items-center gap-1">
        <div className="flex gap-2">
          {str.includes("1") && (
            <TooltipDemo content="available on Web as Website or Webapp">
              <IoGlobe className={`${iconStyle}`} />
            </TooltipDemo>
          )}
          {str.includes("2") && (
            <TooltipDemo content="Google PlayStore">
              <SiGoogleplay className={`${iconStyle}`} />
            </TooltipDemo>
          )}
          {str.includes("3") && (
            <TooltipDemo content="IOS AppStore">
              <SiAppstore className={`${iconStyle}`} />
            </TooltipDemo>
          )}
          {str.includes("4") && (
            <TooltipDemo content="Windows">
              <ImWindows8 className={`${iconStyle}`} />
            </TooltipDemo>
          )}
          {str.includes("5") && (
            <TooltipDemo content="Apple MacOS">
              <SiApple className={`${iconStyle}`} />
            </TooltipDemo>
          )}
          {str.includes("6") && (
            <TooltipDemo content="Linux">
              <SiLinux className={`${iconStyle}`} />
            </TooltipDemo>
          )}
          {str.includes("7") && (
            <TooltipDemo content="Android">
              <RiAndroidFill className={`${iconStyle}`} />
            </TooltipDemo>
          )}
          {str.includes("8") && (
            <TooltipDemo content="Browser Extention">
              <IoExtensionPuzzle className={`${iconStyle}`} />
            </TooltipDemo>
          )}
        </div>
      </div>
    </>
  )
}

// {str.includes('2') && <Tooltip label=''></Tooltip>}
