import React from "react";

function NewSackForm(props){

  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    console.log(event.target.name.value);
    console.log(event.target.origin.value);
    console.log(event.target.price.value);
    console.log(event.target.roast.value);
  }
  
  return (
    <React.Fragment>
      <form onSubmit={handleNewTicketFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Bean Name' />
        <input
          type='text'
          name='origin'
          placeholder='Origin' />
        <input
          type='number'
          name='price'
          placeholder='Price' />
        <input
          type='text'
          name='roast'
          placeholder='Roast' />
        <button type='submit'>Order Sack</button>
      </form>
    </React.Fragment>
  );
}

export default NewSackForm;