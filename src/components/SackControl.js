import React from 'react';
import NewSackForm from './NewSackForm';
import SackList from './SackList';
import SackDetail from './SackDetail';
import { useDispatch, useSelector } from 'react-redux';
import { formVisible, formHidden } from '../state/sackControl/sackControlSlice';

// class SackControl extends React.Component {

function SackControl() {
const state = useSelector((store) => store.sackControl)
let dispatch = useDispatch();
dispatch(formVisible());
console.log(state)


} 

export default SackControl;