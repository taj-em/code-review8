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
  }
})

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


export const { formControl } = sackControlSlice.actions;

export default sackControlSlice.reducer;