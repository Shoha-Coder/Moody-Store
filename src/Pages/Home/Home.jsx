import React from 'react';
import HeaderBottom from '../../components/Header_Bottom/Header_Bottom';
import Header from '../../components/Header/Header';
import MCards from '../../components/Cards/Cards';
import TCards from '../../components/Top_Cards_Home/Cards';
import BedSets from '../../components/Bed__Sets/Bed__Sets';
import BCards from '../../components/Bottom__Cards__Home/Bottom__Cards__Home';
import SingUp from '../../components/Sign__Up__Newsletter/Sign__Up__Newsletter';
import Footer from '../../components/Footer/Footer';
import Style from "./Home.module.scss";
const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <HeaderBottom />
      <div className={Style.Home}>
        <TCards />
        <MCards />
        <BedSets />
        <BCards />
        <SingUp />
      </div>
      <Footer />
    </React.Fragment>
  )
}
export default Home;