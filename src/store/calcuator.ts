export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export type State = {
  count: number;
};

type Action =
  | {
      type: 'INCREMENT';
      value: number;
    }
  | {
      type: 'DECREMENT';
      value: number;
    };

export default function calculator(
  state: State = { count: 0 },
  action: Action
): State {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + action.value
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - action.value
      };
    default:
      return state;
  }
}
