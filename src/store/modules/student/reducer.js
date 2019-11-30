import produce from 'immer';

const INITIAL_STATE = {
  profile: null,
};

export default function student(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@student/CALL_REQUEST': {
        draft.profile = action.payload.profile;
        break;
      }
      default:
    }
  });
}
