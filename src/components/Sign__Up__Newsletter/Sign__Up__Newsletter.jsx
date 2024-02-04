import React from 'react'
import Style from "./Sign__Up__Newsletter.module.scss"
import { AiOutlineMail } from "react-icons/ai"

const SingUp = () => {
    return (
        <div className={Style.Sign__up}>
            <div className={Style.left}>
                <h1>SING UP FOR THE NEWSLETTER</h1>
                <h3>Subscribe for the latest stories and promotions</h3>
            </div>
            <div className={Style.right}>
                <input
                    type="email"
                    placeholder='Enter your e-mail address'
                />
                <button
                    className={Style.Submit__inp}
                >
                    <AiOutlineMail className={Style.mail} />
                </button>
            </div>
        </div>
    )
}

export default SingUp