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

  test("should add new sack to mainSackList", () => {
    const newState = sackControlReducer(initialState, addNewSack({
      name: "f",
      origin: "f",
      price: 1,
      roast: "f",
      quantity: 130
    }));

    expect(newState.mainSackList).toEqual(
      expect.arrayContaining([
        {
          name: "f",
          origin: "f",
          price: 1,
          roast: "f",
          quantity: 130
        },
      ])
    );
    expect(newState).toEqual({
      formVisibleOnPage: false,
      mainSackList: expect.any(Array),
      selectedSack: null
    })
  });
});