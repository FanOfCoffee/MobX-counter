import React from 'react';
import { observer } from 'mobx-react';
import counterStore from './store/CounterStore';
import './CounterComponent.css'

const CounterComponent = observer(() => {
    return (
        <div className='counter'>
            <h1>Counter: {counterStore.count}</h1>
            <div className='btn'>
            <button className='glow-on-hover' onClick={() => counterStore.decrement()}>Increase</button>
            <button className='glow-on-hover' onClick={() => counterStore.increment()}>Decrease</button>
            </div>
        </div>
    );
});

export default CounterComponent;