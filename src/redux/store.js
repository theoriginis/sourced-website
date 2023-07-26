import {createStore ,applyMiddleware,compose} from "redux";
import thunk from "redux-thunk";

import root_reducer from "./rootReducer";

export function  configureStore(initialState){

    const store = createStore(
        root_reducer,
        initialState,
        compose(
            applyMiddleware(thunk),
            window.REDUX_DEVTOOLS_EXTENSION__
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : (f) => f
        )
    );
return store
}