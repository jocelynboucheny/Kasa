import React from 'react';
import "./Main.scss";

function Main({ children }) {
    // const children = children.props;
  return (
    <div className="main">  
        {children}
        </div>
  )
}

export default Main ;