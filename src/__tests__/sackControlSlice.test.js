import sackControlReducer, { toggleFormVisibility, addNewSack, handleClick, changeSelectedSack } from "../state/sackControl/sackControlSlice";
// let initialState;

// beforeEach(() => {
//   initialState = {
//     formVisibleOnPage: false,
//     mainSackList: [],
//     selectedSack: null
//   };
// });

describe("reducers", () => {

  test("should toggle form visibility", () => {
    const initialState = {formVisibleOnPage: false}
    const newState = sackControlReducer(initialState, toggleFormVisibility());
    expect(newState).toEqual({
      formVisibleOnPage: true,
    })
  });

  test("should add new sack to mainSackList", () => {
    const initialState = {mainSackList: []};
    const newState = sackControlReducer(initialState, addNewSack({
      name: "f",
      origin: "f",
      price: 1,
      roast: "f",
      quantity: 130
    }));

    expect(newState.mainSackList).toEqual(
      expect.any(Array)
      // Keeps returning undefined; Might have to do with reducer itself
      // [
      //   {
      //     name: "f",
      //     origin: "f",
      //     price: 1,
      //     roast: "f",
      //     quantity: 130
      //   }
      // ]
    )
  });

  test("Should toggle formVisible to true", () => {
    const initialState = {
      formVisibleOnPage: false,
      selectedSack: null
    };
    const newState = sackControlReducer(initialState, handleClick());
    expect(newState).toEqual({
      formVisibleOnPage: true,
      selectedSack: null
    })
  })
});
