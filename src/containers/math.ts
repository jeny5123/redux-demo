import { connect } from 'react-redux';
import { INCREMENT, DECREMENT } from '../store/calcuator';
import { State } from '../store';
import { Dispatch } from 'redux';

const mapStateToProps = (state: State) => ({
  value: state.calculator.count
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  increment: (delta: number) =>
    dispatch({
      type: INCREMENT,
      value: delta
    }),
  decrement: (delta: number) =>
    dispatch({
      type: DECREMENT,
      value: delta
    })
});

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connector;
