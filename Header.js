import React from 'react'
import "./Header.css"
import { Link } from "react-router-dom"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from "./StateProvider"
import './Headerformobile.css'


function Header() {
   const [{ basket }] = useStateValue();


    return (
        <nav className="header">
            
         {/*LOGO ON THE LEFT -> IMAGE */}
       
         <Link to="/">
        <img className="header-logo"
         src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
         alt=""></img>
         </Link>

         {/* SEARCH BOX */}
    
        <div className="searchdiv">
        <input placeholder="What are you looking for?" type="text" className="header-searchinput"></input>
        <SearchIcon className="searchicon"></SearchIcon>
        </div>
        
         {/* 3 Links */}   

         <div className="header-nav">

          {/* 1ST LINK */ }
           
           <Link className="header-link" to="/login">
               <div className="headeroption">
               <span className="headeroptionlineone">Hello Rafay</span>
               <span className="headeroptionlinetwo">Sign In</span>
               </div>
           </Link>

          {/* 2ND LINK */}


          <Link className="header-link" to="/">
               <div className="headeroption">
               <span className="headeroptionlineone">Returns</span>
               <span className="headeroptionlinetwo">& Orders</span>
               </div>
           </Link>

          {/* 3RD LINK */}


          <Link className="header-link" to="/login">
               <div className="headeroption">
               <span className="headeroptionlineone">Your</span>
               <span className="headeroptionlinetwo">Prime</span>
               </div>
           </Link>


          {/* 4TH LINK */}


          <Link className="header-link" to="/checkout">
               <div className="headeroption">
                   {/*Shopping Basket Icon */}
    <span className="no">{basket?.length}</span>
                 <ShoppingBasketIcon />
                   {/* Number of items in the basket */}
                   

                   
               
               </div>
           </Link>



         </div>





        </nav>
    )
}

export default Header
