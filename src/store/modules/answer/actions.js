export function answerChannelClose(disable) {
  return {
    type: '@order/ANSWER_CHANNEL_CLOSE',
    payload: { disable },
  };
}

export function answerChannelOpen(disable) {
  return {
    type: '@order/ANSWER_CHANNEL_OPEN',
    payload: { disable },
  };
}
