export const defaultStatus = {
    data: null
};
const Reducer = (state= defaultStatus, action) => {
    switch (action.type) {
        case "TEST_DATA" :
            return {
                ...state,
                data: action.payload.data
            };
        default:{
            return state;
        }
    }
};

export default Reducer;
