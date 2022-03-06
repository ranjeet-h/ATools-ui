import React from 'react';
import { Button } from 'antd';

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="navBar__logo">
        <h1 className="navBar-heading__one">
          ATools<span className="navBar-heading__one__dot">.</span>
        </h1>
      </div>
      <div className="navBar__links">
        <Button
          type="primary"
          className="navBar__links__button__trial"
          danger
        >
          Start Free Trial
        </Button>
        <Button
          type="primary"
          className="navBar__links__button__login"
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default NavBar;
