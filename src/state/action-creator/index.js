export const depositMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "searchInfo",
            payload: amount
        });
    }
}



export const withdrawMoney = () => {
    return (dispatch) => {
        dispatch({
            type: "submitInfo",
        });
    }
}