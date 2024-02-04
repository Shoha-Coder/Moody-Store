import React from 'react';
import Header from '../../components/Header/Header';
import HeaderBottomBrand from '../../components/Header_Bottom/Header_Bottom_Brand';
import Style from "./B-Products.module.scss";
import MemberExclusive from '../../components/Member__Exclusive/Member__Exclusive';
import FilterSide from '../../components/Filter_Side/Filter_Side';

const BProducts = () => {
  return (
    <React.Fragment>
      <Header className={Style.Header}/>
      <HeaderBottomBrand className={Style.Header} />
      <MemberExclusive />
      <FilterSide />
    </React.Fragment>
  )
}

export default BProducts