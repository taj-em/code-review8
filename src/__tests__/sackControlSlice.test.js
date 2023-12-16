import sackControlReducer, { toggleFormVisibility, addNewSack, handleClick, changeSelectedSack } from "../state/sackControl/sackControlSlice";

describe("reducers", () => {

  test("should toggle form visibility", () => {
    const initialState = { formVisibleOnPage: false }
    const newState = sackControlReducer(initialState, toggleFormVisibility());
    expect(newState).toEqual({
      formVisibleOnPage: true,
    })
  });

  test("should add new sack to mainSackList", () => {
    const initialState = { mainSackList: [] };
    const newState = sackControlReducer(initialState, addNewSack({
      name: "f",
      origin: "f",
      price: 1,
      roast: "f",
      quantity: 130
    }));

    expect(newState.mainSackList).toEqual(
      [
        {
          name: "f",
          origin: "f",
          price: 1,
          roast: "f",
          quantity: 130
        }
      ]
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

  test("Should change the selected Sack", () => {
    const initialState = {
      mainSackList: [{id: 1}, {id: 2}],
      selectedSack: null
    };
    const newState = sackControlReducer(initialState, changeSelectedSack({id: 1}))
    expect(newState.selectedSack).toEqual(newState.mainSackList[{id: 1}])
    // May be a self-fulfilling test;  Leave a note about it if not finished by Monday
  })
});
