import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";

function NewSackForm(props){

  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    props.onNewSackCreation({
      name: event.target.name.value,
      origin: event.target.origin.value,
      price: event.target.price.value,
      roast: event.target.roast.value,
      id: v4()
    })
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

NewSackForm.propTypes = {
  onNewSackCreation: PropTypes.func
}

export default NewSackForm;