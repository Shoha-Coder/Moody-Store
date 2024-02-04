import React from 'react';
import Style from "./Header_Bottom.module.scss";
import { BsTruck } from "react-icons/bs";
import MoneyBack from "../../Images/Vector.svg";
import { TfiHeadphoneAlt } from "react-icons/tfi"

const HeaderBottom = () => {
  return (
    <div className={Style.Header_Bottom}>
      <div className={Style.Header_Bottom_div}>
        <BsTruck size={30} fill='#F2C94C' />
        <h3>FREE SHIPPING</h3>
      </div>
      <div className={Style.Header_Bottom_div}>
        <img className={Style.money_back_img} src={MoneyBack} alt="" />
        <h3>100% MONEY BACK</h3>
      </div>
      <div className={Style.Header_Bottom_div}>
        <TfiHeadphoneAlt size={22} fill='#F2C94C' />
      <h3>SUPPORT 24/7</h3>
      </div>
    </div>
  )
}
export default HeaderBottom;