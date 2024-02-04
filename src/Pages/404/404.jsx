import React from 'react';
import Style from "./404.module.scss";
import { Link } from 'react-router-dom';

const Page404 = () => {
    return (
      <div className={Style.page404}>
        <img src={"https://app.netlify.com/de767369724fb71fc2b5.svg"} alt="" />
        <h1>Page not found</h1>
        <h3>You might not have permissions to see this page.</h3>
        <Link to={"/"}>Back to home</Link>
      </div>
    );
}

export default Page404;