import React from "react";
import PropTypes from "prop-types";

function Sack(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenSackClicked(props.id)}>
        <h3>Name: {props.name}</h3>
        <h3>Quantity: {props.quantity} (lbs)</h3>
        <h5>Click to view details</h5>
      </div>
      <hr />
    </React.Fragment>
  );
}

Sack.propTypes = {
  name: PropTypes.string,
  origin: PropTypes.string,
  price: PropTypes.string,
  roast: PropTypes.string,
  id: PropTypes.string,
  whenSackClicked: PropTypes.func
}

export default Sack;