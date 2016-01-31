import { combineReducers } from 'redux';

import transactions from './transactions';
import ui from './ui';

const app = combineReducers({
  transactions,
  ui
});

export default app;
