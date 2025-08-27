'use client'

import { JSX } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"

// Definimos las props que recibira el componente
interface Props{
    path:string,
    icon: JSX.Element,
    title:string,
    subTitle:string
}

// Componente que representa un item del menu lateral
export const SidebarMenuItem = ({path,icon,title,subTitle}:Props) => {

    // Hook de next para obtener la ruta actual
    const currentPath = usePathname();

  return (
    // Si la ruta actual es igual a la ruta del item, se aplica una clase adicional para resaltar el item
    <Link href={path} className={`
    w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3  hover:bg-white/5 transition ease-linear duration-150
    ${currentPath === path ? 'bg-blue-800' : ''}
    `}>
        <div>
            {icon}
        </div>
        <div className="flex flex-col">
            <span className="text-lg font-bold leading-5 text-white">{title}</span>
            <span className="text-sm text-white/50 hidden md:block">{subTitle}</span>
        </div>
        
    </Link>
)   
}