import React, { useState } from "react";
import PropTypes from "prop-types";

function SackDetail(props) {
  const { sack } = props
  const [sackQuantity, setQuantity] = useState(sack.quantity);

  const handleQuantityUpdate = (newQuantity) => {
    setQuantity(newQuantity)
  }

  const handleSellingSack = () => {
    if (sack.quantity >= 1) {
      const quantityAfterSell = sackQuantity - 1;
      sack.quantity = quantityAfterSell;
      handleQuantityUpdate(quantityAfterSell);
    } else {
      handleQuantityUpdate(sack.quantity);
    }
  }

  const handleRestockingSack = () => {
    const quantityAfterRestock = 130;
    sack.quantity = quantityAfterRestock;
    handleQuantityUpdate(quantityAfterRestock);
  }

  return (
    <React.Fragment>
      <h1>Sack Details - {sackQuantity} lbs remaining</h1>
      <h3>Bean Name: {sack.name}</h3>
      <h4>Origin: {sack.origin}</h4>
      <h4>Price: ${sack.price}</h4>
      <h5>Roast: {sack.roast}</h5>
      <button onClick={handleSellingSack}>Sell Sack</button>
      <button onClick={handleRestockingSack}>Restock Sack</button>
      <hr />
    </React.Fragment>
  );
}

SackDetail.propTypes = {
  sack: PropTypes.object
}

export default SackDetail;