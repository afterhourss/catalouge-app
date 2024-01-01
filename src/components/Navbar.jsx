import { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { CgMenuRightAlt } from "react-icons/cg";
import Button from "./Button";


function Navbar() {

  const [sidebar, setSidebar] = useState(false)

  const navContent = {
    navLogo: 'Furniture.',
    navList: ['Home','Catalog','About','Contact']
  }

  return (
  <div className='navbar'>
    <div className='navbar-logo'>
      <h2>{navContent.navLogo}</h2>
    </div>
    <div className="navbar-menu">
      <ul>      
        {navContent.navList.map(content => {
          return <li key={content}><a href="#">{content}</a></li>
        })}
      </ul>
    </div>
    <div className="navbar-icon">
      <IoCartOutline /> 
      <CgMenuRightAlt onClick={() => setSidebar(!sidebar)}/>
    </div>
    <div className={`overlay ${sidebar ? '' : 'hidden'}`} onClick={() => setSidebar(!sidebar)}></div>
    <div className={`sidebar ${sidebar ? '' : 'hidden'}`} onClick={() => setSidebar(!sidebar)}>
      <ul>      
        {navContent.navList.map(content => {
          return <li key={content}><a href="#">{content}</a></li>
        })}
      </ul>
    </div>
  </div>
  )
}

export default Navbar