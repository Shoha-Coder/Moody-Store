import React from 'react';
import Style from "./Footer.module.scss";
import { GrFacebookOption } from "react-icons/gr";
import { BsTwitter } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { TfiYoutube } from "react-icons/tfi";

const Footer = () => {
  return (
    <footer>
      <div className={Style.Footer__Top}>
        <div className={Style.Contact}>
          <h1 className={Style.Urban}>URBAN OUTFITTERS</h1>
          <p className={Style.Lorem}>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor.</p>
          <h2>121 king street, Melbourne 3000</h2>
          <h2>+61 3 8376 6284</h2>
          <h2>contact@urbanoutfitters.com</h2>
          <div className={Style.SCI}>
            <GrFacebookOption size={25} fill='#fff' />
            <BsTwitter size={25} fill='#fff' />
            <RiInstagramFill size={25} fill='#fff' />
            <TfiYoutube size={25} fill='#fff' />
          </div>
        </div>
        <div className={Style.Shopping}>
          <h1 className={Style.Heading}>SHOPPING</h1>
          <div className={Style.Bottom}>
            <h2>Your cart</h2>
            <h2>Your orders</h2>
            <h2>Compared items</h2>
            <h2>Wishlist items</h2>
            <h2>Shipping detail</h2>
          </div>
        </div>
        <div className={Style.More__Link}>
          <h1 className={Style.Heading}>MORE LINK</h1>
          <div className={Style.Bottom}>
            <h2>Blog</h2>
            <h2>Gift Center</h2>
            <h2>Buying Guides</h2>
            <h2>New Arrivals</h2>
            <h2>Clearance</h2>
          </div>
        </div>
        <div className={Style.From_Blog}>
          <h1 className={Style.Heading}>FROM THE BLOG</h1>
          <div className={Style.Bottom}>
            <h2>26 <span>May</span></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <h2 className={Style.Comment}>3 comments</h2>
            <h2>27 <span>May</span></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <h2>3 comments</h2>
          </div>
        </div>
      </div>
      <div className={Style.Footer__Bottom}>
        <p>Urban Outfitters © – All rights reserved </p>
      </div>
    </footer>
  )
}

export default Footer;