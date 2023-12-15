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
    formVisible: (state) => {
      state.formVisibleOnPage = true
    },
    formHidden: (state) => {
      state.formVisibleOnPage = false
    },
    changeSelectedSack: (state, action) => {
      const { id } = action;
      state.selectedSack = state.mainSackList.filter(sack => sack.id === id)[0];
    },
    addNewSack: (state, action) => {
      const { newSack } = action;
      state.mainSackList = state.mainSackList.concat(newSack);
    }
  }
})

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


export const { formVisible, formHidden } = sackControlSlice.actions;

export default sackControlSlice.reducer;