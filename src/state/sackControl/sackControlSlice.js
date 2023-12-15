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

export const { formControl } = sackControlSlice.actions;

export default sackControlSlice.reducer;