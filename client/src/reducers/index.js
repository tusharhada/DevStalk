import { combineReducers } from 'redux';

import projects from './projects';
import auth from './auth'
export const reducers = combineReducers({projects, auth });
