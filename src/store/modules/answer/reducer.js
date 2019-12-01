import produce from 'immer';

const INITIAL_STATE = {
  close: true,
};

export default function answer(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@answer/ANSWER_CHANNEL_OPEN': {
        draft.close = false;
        break;
      }
      case '@answer/ANSWER_CHANNEL_CLOSE': {
        draft.close = true;
        break;
      }
      default: {
        draft.close = true;
      }
    }
  });
}
