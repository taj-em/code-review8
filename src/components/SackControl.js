import React from 'react';
import NewSackForm from './NewSackForm';
import SackList from './SackList';

class SackControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainSackList: []
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  handleAddingNewSackToList = (newSack) => {
    const newMainSackList = this.state.mainSackList.concat(newSack);
    this.setState({
      mainSackList: newMainSackList,
      formVisibleOnPage: false
    })
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewSackForm onNewSackCreation={this.handleAddingNewSackToList} />;
      buttonText = "Return to Sack List";
    } else {
      currentlyVisibleState = <SackList sackList={this.state.mainSackList} />
      buttonText = "Add Sack";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default SackControl;