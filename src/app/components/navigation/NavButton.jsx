import {
  Apple,
  Github,
  Home,
  Linkedin,
  NotebookText,
  Palette,
  Twitter,
  User,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import ResponsiveComponent from "../ResponsiveComponent";
import clsx from "clsx";

const getIcon = (icon) => {
  switch (icon) {
    case "home":
      return <Home className="w-full h-auto" strokeWidth={1.5}></Home>;
    case "about":
      return <User className="w-full h-auto" strokeWidth={1.5}></User>;
    case "projects":
      return <Palette className="w-full h-auto" strokeWidth={1.5}></Palette>;
    case "contact":
      return <Apple className="w-full h-auto" strokeWidth={1.5}></Apple>;
    case "github":
      return <Github className="w-full h-auto" strokeWidth={1.5}></Github>;
    case "linkedin":
      return <Linkedin className="w-full h-auto" strokeWidth={1.5}></Linkedin>;
    case "twitter":
      return <Twitter className="w-full h-auto" strokeWidth={1.5}></Twitter>;
    case "resume":
      return <NotebookText className="w-full h-auto" strokeWidth={1.5}></NotebookText>;
    default:
      return <Home className="w-full h-auto" strokeWidth={1.5}></Home>;
  }
};

const NavButton = ({ x, y, label, link, icon, newTab, laberDirection = 'right' }) => {
  return (
  <ResponsiveComponent>
    {({size}) => {
      return size && size >= 480 ? 
      <div
      className="absolute cursor-pointer z-50"
      style={{ transform: `translate(${x}, ${y})` }}
    >
      <Link
        href={link}
        target={newTab ? "_blank" : "_self"}
        className="text-foreground rounded-full flex items-center justify-center costom-bg"
        aria-label="{label}"
        name={label}
      >
        <span  className="relative w-14 h-14 p-4 animate-spin-slow-reverse group-hover:pause hover:text-accent">{getIcon(icon)}
        <span className="peer bg-transparent absolute top-0 left-0 w-full h-full"></span>
        <span className="absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background 
        text-foreground text-sm rounded-sm shadow-xl whitespace-nowrap">{label}</span>
        </span>
        
      </Link>
    </div>

      :

(  <div
  className="w-fit cursor-pointer z-50"
>
  <Link
    href={link}
    target={newTab ? "_blank" : "_self"}
    className="text-foreground rounded-full flex items-center justify-center costom-bg"
    aria-label="{label}"
    name={label}
  >
    <span  className="relative w-10 h-10 xs:w-14 xs:h-14 p-2.5 xs:p-4 hover:text-accent">{getIcon(icon)}
    <span className="peer bg-transparent absolute top-0 left-0 w-full h-full"></span>
    <span className={clsx("absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-sm shadow-xl whitespace-nowrap", laberDirection === "left" ? "right-full left-auto" : "")}>{label}</span>
    </span>
    
  </Link>
</div>)

    }}
  </ResponsiveComponent>
  );
};

export default NavButton;


//background: linear-gradient(90deg, #beaaff 0, #ff8dff 33%, #fafa19 66%, #00c7ad);