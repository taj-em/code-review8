import React from "react";
import Sack from "./Sack";

const mainSackList = [
  {
    name: "Bean",
    origin: "Place",
    price: "$12",
    roast: "Burnt"
  },
  {
    name: "Bean",
    origin: "Place",
    price: "$12",
    roast: "Light"
  },
  {
    name: "Bean",
    origin: "Place",
    price: "$12",
    roast: "Dark"
  }
]


function SackList() {
  return (
    <React.Fragment>
        <hr/>
        {mainSackList.map((sack, index) =>
          <Sack names={sack.name}
            origin={sack.origin}
            price={sack.price}
            roast={sack.roast}
            key={index}/>
        )}
      </React.Fragment>
  );
}

export default SackList;