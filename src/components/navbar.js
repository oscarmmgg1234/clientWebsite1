import React from 'react';
import '../style/navbar.css';

const NavBar = () => {
    return(
      <>
          <div className={"navContainer"}>
              <div className={"navItem"}>Home</div>
              <div className={"navItem"}>About Us</div>
              <div className={"navItem"}>Services</div>
              <div className={"navItem"}>Pricing</div>
              <div className={"navItem"}>Contact Us</div>
          </div>
      </>
    );
};
export default NavBar;
