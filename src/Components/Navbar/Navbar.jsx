import { useState } from 'react';
import './navbar.css';
import logo from '../../assets/car.png'
import { AiFillCloseCircle } from 'react-icons/ai';
import {BsFillPlusCircleFill} from 'react-icons/bs';
const Navbar = () => {
  //State Hold For Navbar
  const [navbar,setNavbar] = useState('navbar');
  const showNavbar = ()=>{
    setNavbar('navbar showNavbar')
  }
  const removeNavbar = ()=>{
    setNavbar('navbar')
  }

  const [header,setHeader] = useState('header')
  const addBg = ()=>{
    if(window.scrollY>=20){
      setHeader('header addBg');
    }
  }
  window.addEventListener('scroll',addBg)
const rmBg = ()=>{
  if(window.scrollY<=0){
    setHeader('header');
  }
}
window.addEventListener('scroll',rmBg)

  return (
    <div className={header}>
      <div className="logoDiv">
        <img src={logo} alt="" className="logo" />
        <h1 className="brand">CarVekho</h1>
      </div>
      <div className={navbar}>
        <ul className="menu">
          <li onClick={removeNavbar}  className="list"><a href="/" className="links">New Cars</a></li>
          <li onClick={removeNavbar} className="list"><a href="/" className="links">Used Cars</a></li>
          <li onClick={removeNavbar} className="list"><a href="/" className="links">Auctions</a></li>
          <li onClick={removeNavbar} className="list"><a href="/" className="links">Sellers</a></li>
        </ul>
        <AiFillCloseCircle className='icon closeIcon' onClick={removeNavbar}/>
      </div>
      <div className="signup flex">
        <div className="text">Sign Up</div>
      <BsFillPlusCircleFill className='icon openIcon' onClick={showNavbar}/>
      </div>
    </div>
  )
}

export default Navbar