import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { State } from '../store';
import { ADD, REMOVE, Dog } from '../store/dogs';

const mapStateToProps = (state: State) => ({
  dogs: state.dogs.favorites
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addDog: (dog: Dog) => dispatch({ type: ADD, dog }),
  removeDog: (dog: Dog) => dispatch({ type: REMOVE, dog })
});

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connector;
