import React from "react"
 
interface Props {
    icon?: React.ReactNode;
    text: string;
    active?: boolean
    to: string;
}


export const MobileNaveLink = ({icon, text, active = false, to} : Props) => {
  return (
<a
    href="to"
    className={`flex items-center px-3 py-2 rounded-md text-base font-LexendDeca-Medium
    ${
        active ? 
        "bg-blue-700" : 
        "text-blue-100 hover:bg-blue-500"
    } `}
>
    <span className="mr-3">{icon}</span>
    {text}
</a>
)
}