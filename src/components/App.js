import React from "react";
import Header from "./Header";
import SackList from "./SackList";

function App(){
  const name = "Thato";
  const name2 = "Haley";
  return (
    <React.Fragment>
      <Header />
      <SackList />
    </React.Fragment>
  );
}

export default App;