export type Dog = string;

export type State = {
  favorites: Dog[];
};

export const ADD = 'ADD';
export const REMOVE = 'REMOVE';

type Action =
  | {
      type: typeof ADD;
      dog: Dog;
    }
  | {
      type: typeof REMOVE;
      dog: Dog;
    };

function dogs(state: State = { favorites: [] }, action: Action): State {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        favorites: [...state.favorites, action.dog]
      };
    case REMOVE:
      return {
        ...state,
        favorites: state.favorites.filter(dog => dog !== action.dog)
      };
    default:
      return state;
  }
}

export default dogs;
