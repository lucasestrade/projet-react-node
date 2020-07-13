export const initialState = {
  avg: 0,
  transacPerDate: []
};
  
export const reducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_DATAS":
        return {
          ...state,
          avg: action.payload1,
          transacPerDate: action.payload2
        }
      default:
        return state;
    }
};
  