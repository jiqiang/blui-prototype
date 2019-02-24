import React from 'react';
import { createStore } from 'redux';
import bluiApp from '../reducers';
import {
  Tab1,
  Tab2,
  Tab3,
  Tab4
} from '../components/SummaryTabs'

const initialState = {
  summary: {
    tabs: [
      {label: 'tab1', component: <Tab1 />},
      {label: 'tab2', component: <Tab2 />},
      {label: 'tab3', component: <Tab3 />},
      {label: 'tab4', component: <Tab4 />},
    ],
    active_tab_index: 0
  },
  newLendingRequest: {
    activities: [
      {id: 1, name: 'activity1'},
      {id: 2, name: 'activity2'},
      {id: 3, name: 'activity3'}
    ],
    subActivities: [
      {id: 1, activityId: 1, name: 'sub11'},
      {id: 2, activityId: 1, name: 'sub12'},
      {id: 3, activityId: 2, name: 'sub21'},
      {id: 4, activityId: 2, name: 'sub22'},
      {id: 5, activityId: 3, name: 'sub3'}
    ],
    expandedActivityId: null
  }
};
const store = createStore(bluiApp, initialState);
export default store;
