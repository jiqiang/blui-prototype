import { produce } from 'immer';

const bluiApp = (state, action) => {
  switch (action.type) {
    case 'ACTIVE_TAB': {
      return produce(state, draft => {
        draft.summary.active_tab_index = action.tab_index;
      });
    }
    case 'EXPAND_ACTIVITY': {
      return produce(state, draft => {
        draft.newLendingRequest.expandedActivityId = action.activityId;
      });
    }
    default:
      return { ...state };
  }
}

export default bluiApp;
