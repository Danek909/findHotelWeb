import { reducer as formReducer } from "redux-form";
import thunkMiddleware from "redux-thunk";
import { applyMiddleware, createStore , combineReducers} from "redux";

let reducers = combineReducers({
    form: formReducer,
});

let store = createStore( reducers,  applyMiddleware(thunkMiddleware));

export default store;