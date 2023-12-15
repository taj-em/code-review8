import sackControlReducer, { toggleFormVisibility, addNewSack, handleClick, changeSelectedSack } from "../state/sackControl/sackControlSlice";
let initialState;

beforeEach(() => {
  initialState = {
    formVisibleOnPage: false,
    mainSackList: [],
    selectedSack: null
  };
});

describe("reducers", () => {
  
  test("should toggle form visibility", () => {
    const newState = sackControlReducer(initialState, toggleFormVisibility());
    expect(newState).toEqual({
      formVisibleOnPage: true,
      mainSackList: [],
      selectedSack: null
    })
  });
});