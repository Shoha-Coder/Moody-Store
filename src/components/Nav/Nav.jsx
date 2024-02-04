import React from 'react';
import "./Nav.scss"
import { ImSearch } from "react-icons/im";
import { AiOutlineUser } from "react-icons/ai";
import { PiShoppingCartSimple } from "react-icons/pi";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from 'react-router-dom';
const Nav = () => {
    return (
        <nav>
            <Link to={"/"}><h1>MOODY STUDIO</h1></Link>
            <div className="icons">
                <Link to={"*"}>
                    <ImSearch size={27} fill='#323334' />
                </Link>
                <Link to={"/shop-bag/"}>
                    <PiShoppingCartSimple size={31.5} fill='#323334' />
                </Link>
                <Link to={"*"}>
                    <AiOutlineUser size={32} fill='#323334' />
                </Link>
                <Link to={"*"} target='_blank'>
                    <AiOutlineHeart size={30} fill='#323334' fontWeight={900} />
                </Link>
            </div>
        </nav>
    )
}

export default Nav;