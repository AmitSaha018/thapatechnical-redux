export const increment = (num) => {
    return {
        type: 'INCREASE',
        payload: num
    }
};
export const decrement = () => {
    return {
        type: 'DECREASE'
    }
};