import { toggleFormVisibility, addNewSack, handleClick, changeSelectedSack }
import { useSelector } from "react-redux"

describe('toggleFormVisiblity', () => {

  test('Should return true', () => {
    const state = useSelector((store) => store.sackControl)
    let dispatch = useDispatch();
    dispatch(toggleFormVisibility());
    expect(state.formVisibleOnPage).toEqual(true);
  })
})