export const initialState = {
  avg: 0
};
  
export const reducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_PRICES_AVG":
        return {
          ...state,
          avg: action.payload
        }
      default:
        return state;
    }
};
  