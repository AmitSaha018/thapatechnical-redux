const initialState = { counter: 0 };

const changeTheNumber = (state = initialState, actions) => {

    if (actions.type === 'INCREASE') {
        return state.counter + actions.payload;
    }

    if (actions.type === 'DECREASE') {
        return state.counter - 1;
    }

}

export default changeTheNumber;