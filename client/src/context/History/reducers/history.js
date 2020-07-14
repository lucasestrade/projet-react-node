export const initialState = {

  history: [
    /*{
      idCommande: 'DG0440KUYTKHJ',
      date: '2020-02-02 15:52',
      price: '35,45',
      status: 'fini'
    },
    {
      idCommande: 'DG0440KUYTKHJ',
      date: '2020-02-02 15:52',
      price: '35,45',
      status: 'fini'
    },
    {
      idCommande: 'DG0440KUYTKHJ',
      date: '2020-02-02 15:52',
      price: '35,45',
      status: 'fini'
    }
    ,
    {
      idCommande: 'DG0440KUYTKHJ',
      date: '2020-02-02 15:52',
      price: '35,45',
      status: 'fini'
    }
    ,
    {
      idCommande: 'DG0440KUYTKHJ',
      date: '2020-02-02 15:52',
      price: '35,45',
      status: 'fini'
    }*/

  ]

};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_HISTORY_LIST":
      return {
        ...state,
        history: action.payload,
      }
    default:
      return state;
  }
};