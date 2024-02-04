import React from 'react';
import Style from "./Member__Exclusive.module.scss";

const MemberExclusive = () => {
  return (
    <div className={Style.MemberExclusive}>
          <h1>MEMBER EXCLUSIVE</h1>
          <p>15% OFF EVERYTHING + EXTRA $10 OFF FOR PLUS STATUS</p>
          <h5>NOT A MEMBER? JOIN NOW TO SHOP.</h5>
    </div>
  )
}

export default MemberExclusive