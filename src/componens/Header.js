import React from "react";

const Header = (props) => {
  return (
    <nav className = 'navbar navbar-dark bg-dark navbar-expand-lg justify-content-center'>
      <div className = 'navbar-brand '>
          <h2 style = {{'font-weight': 'bold'}}>{props.text}</h2>
      </div>
    </nav>
  );
};

export default Header;