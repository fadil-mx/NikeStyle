

import { navLinks } from "../../../constants";
import { hamburger } from "../../icons";
import { headerLogo } from "../../images/index";

const Navbar = () => {
 
  return (
    <div>
      <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container '>
            <a href="/" className="">
                <img src={headerLogo} width={130} height={29}/>
            </a>
            <ul className=" flex-1 flex justify-center items-center gap-16 max-lg:hidden">
              {navLinks.map((items) => (
                <li key={items.label} className=''>
                  <a className="font-montserrat leading-normal text-lg font-bold text-slate-gray" href={items.href}>{items.label}</a>
                </li>
              ))}
            </ul>
            <div className="lg:hidden ">
              <img src={hamburger} alt="error" width={25} height={25}/>
            </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
