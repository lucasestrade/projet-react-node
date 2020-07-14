export const initialState = {
  merchants: []
};
  
export const reducer = (state, action) => {
    switch (action.type) {
      case "GET_MERCHANTS":
        return {
          ...state,
          merchants: action.payload
        }
      default:
        return state;
    }
};
  