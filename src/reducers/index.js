import{combineReducers} from 'redux';
import commonReducer from './commonReducer';
import userReducer from "./userReducer";


const combineRed = combineReducers({
    commonReducer,
    userReducer,

});

export default combineRed