// para la creacion del componente
//import React from "react";
//Para crear una interface viendo siendo un contrato que se va aplicar a una clase 
//si no le coloco la palabra exportar solo me funciona a dentro
interface Props {
     icon?: React.ReactNode ;
     text: string;
     active?: boolean;
     to: string;

}


export const NavLink = ({icon, text, active = false, to} : Props) => {
    return (
        <a href= {to}
        className={`flex items-center px-3 py-2  text font-LexendDeca-Medium
         ${active ? "bg-blue-700 text-white" : " text-blue-100 hover:bg-blue-500"}`}>

            {icon && (
                 <span className="mr-2">{icon}</span>
            )}
           
        {text}
        </a>
    );
};
