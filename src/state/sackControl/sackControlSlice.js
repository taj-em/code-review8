import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  formVisibleOnPage: false,
  mainSackList: [],
  selectedSack: null
}

const sackControlSlice = createSlice({
  name: "sackControl",
  initialState,
  reducers: {
    toggleFormVisibility: (state) => {
      state.formVisibleOnPage = !state.formVisibleOnPage;
    },
    changeSelectedSack: (state, action) => {
      const { id } = action;
      state.selectedSack = state.mainSackList.find(sack => sack.id === id);
    },
    addNewSack: (state, action) => {
      state.mainSackList.push(action.payload);
    },
    handleClick: (state) => {
      if (state.selectedSack !== null) {
        state.formVisibleOnPage = false;
        state.selectedSack = null;
      } else {
        state.formVisibleOnPage = !state.formVisibleOnPage;
      }
    }
  }
})

// handleClick = () => {
//   if (this.state.selectedSack != null) {
//     this.setState({
//       formVisibleOnPage: false,
//       selectedSack: null
//     });
//   } else {
//     this.setState(prevState => ({
//       formVisibleOnPage: !prevState.formVisibleOnPage
//     }));
//   }
// }

// handleAddingNewSackToList = (newSack) => {
//   const newMainSackList = this.state.mainSackList.concat(newSack);
//   this.setState({
//     mainSackList: newMainSackList,
//     formVisibleOnPage: false,
//   })
// }



// handleChangingSelectedSack = (id) => {
//   const selectedSack = this.state.mainSackList.filter(sack => sack.id === id)[0];
//   this.setState({ selectedSack: selectedSack });
// }

// Convert to Redux Store
// constructor(props) {
//   super(props);
//   this.state = {
//     formVisibleOnPage: false,
//     mainSackList: [],
//     selectedSack: null
//   };
// }

//     formVisibleOnPage: false,
// ^convert to hook


export const { toggleFormVisibility, changeSelectedSack, addNewSack, handleClick } = sackControlSlice.actions;

export default sackControlSlice.reducer;