export const initialState = {

  history: [

  ]

};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_HISTORY_LIST":
      return {
        ...state,
        history: action.payload,
      };
    default:
      return state;
  }
};