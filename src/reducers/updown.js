const initialState = { counter: 0 };

const changeTheNumber = (state = initialState, actions) => {

    if (actions.type === 'INCREASE') {
        console.log('increase');
        return {
            counter:state.counter + actions.payload
        };
    }

    if (actions.type === 'DECREASE') {
        console.log('decrease');
        return {counter:state.counter - 1};
    }
    return initialState;

}

export default changeTheNumber;