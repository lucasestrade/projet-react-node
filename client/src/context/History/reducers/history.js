export const initialState = {

  history: [
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
    }

  ]

};

export const reducer = (state, action) => {
  switch (action.type) {
    /* case "CHANGE_HOME_LOADED":
      return {
        ...state,
        isHomeLoaded: action.payload,
      } */
    default:
      return state;
  }
};