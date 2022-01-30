import React from 'react';
import "../../App.css"

const LoadingPage = (props) => {
  return <div id={props.load ? "preloader" : "preloader-none"}></div>
};

export default LoadingPage;
