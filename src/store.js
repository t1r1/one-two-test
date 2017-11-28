import { createStore } from 'redux';
import rootReducer from  './reducers';

const StoreInstance = createStore(rootReducer)
export default StoreInstance