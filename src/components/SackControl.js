import React from 'react';
import NewSackForm from './NewSackForm';
import SackList from './SackList';
import SackDetail from './SackDetail';
import { useDispatch, useSelector } from 'react-redux';
import { formVisible, formHidden } from '../state/sackControl/sackControlSlice';

// class SackControl extends React.Component {
function SackControl() {

  const formVisible = useSelector((state) => state.formVisible);
  const formHidden = useSelector((state) => state.formHidden);
  const dispatch = useDispatch();

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainSackList: [],
      selectedSack: null
    };
  }

  handleClick = () => {
    if (this.state.selectedSack != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedSack: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }



  handleAddingNewSackToList = (newSack) => {
    const newMainSackList = this.state.mainSackList.concat(newSack);
    this.setState({
      mainSackList: newMainSackList,
      formVisibleOnPage: false,
    })
  }

  handleChangingSelectedSack = (id) => {
    const selectedSack = this.state.mainSackList.filter(sack => sack.id === id)[0];
    this.setState({ selectedSack: selectedSack });
  }


  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.selectedSack != null) {
      currentlyVisibleState = <SackDetail sack={this.state.selectedSack} />
      buttonText = "Return to Sack List"
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewSackForm onNewSackCreation={this.handleAddingNewSackToList} />;
      buttonText = "Return to Sack List";
    } else {
      currentlyVisibleState = <SackList sackList={this.state.mainSackList} onSackSelection={this.handleChangingSelectedSack} />
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
// }

export default SackControl;