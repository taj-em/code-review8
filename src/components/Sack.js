import React from "react";
import PropTypes from "prop-types";

function Sack(props){
  return (
    <React.Fragment>
      <h3>Name: {props.name}</h3>
      <h3>Origin: {props.origin}</h3>
      <h3>Price: {props.price}</h3>
      <h3>Roast: {props.roast}</h3>
      <hr/>
    </React.Fragment>
  );
}

Sack.propTypes = {
name: PropTypes.string,
origin: PropTypes.string,
price: PropTypes.string,
roast: PropTypes.string
}

export default Sack;