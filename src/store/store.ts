import { legacy_createStore as createStore } from 'redux';
import { rootReducer } from './reducer';

export type  RootStore = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)
