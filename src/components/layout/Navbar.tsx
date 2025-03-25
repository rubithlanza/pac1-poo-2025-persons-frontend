import {  Globe, Home, Menu, User } from "lucide-react"
import { NavLink } from "../shared/NavLink"

export const Navbar = () => {

    return(
       <nav className="bg-blue-600 text-white shadow-md">
        <div className="max=w-7x1 mx-auto px-4">
            <div className="flex justify-between h-16">
            {/* Logo y titulo */}

            <div className="flex items-center">
                <span className="font-LexendDeca-Bold text-xl">
                    Gestion de Personas
                </span>
            </div>

            {/* Navegacion en escritorio */}

            <div className=" hidden md:flex">
                <NavLink to="#" active text="Inicio" icon ={<Home size = {18}/>}/>
                <NavLink to="#" text="Paises" icon = {<Globe size = {18}/>} />
                <NavLink to="#" text="Personas" icon = {<User size = {18}/>} />
            </div>
            {/* Boton de menu movil */}
            <div className="md:hidden flex items-center">
                <button
                className="text-white hover:text-blue-200 focus: outline-none"
                >
                    <Menu size ={24}/>
                </button>
            </div>
            </div>

        </div>

        {/* Menu movil */}
       </nav>
    )
}