import React, { Component } from 'react';
import { connect } from 'react-redux'
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {


    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={this.props.onCounterAddition}  />
                <CounterControl label="Subtract 15" clicked={this.props.onCounterSubtraction}  />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
        onCounterAddition: () => dispatch({type: 'ADDITION', val: 10}),
        onCounterSubtraction: () => dispatch({type: 'SUBTRACTION', val: 15})
    }
}
const mapStateToProps = state => {
    return {
        ctr: state.counter
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);