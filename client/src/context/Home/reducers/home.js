export const initialState = {
    isHomeLoaded: false,
    products: {
      seller1: [
        {
          id: 1,
          reference: "122244788965",
          name: "le produit 1",
          description: "la description du produit 1",
          date: "2020-02-02 15:52",
          background: "",
          price: 15,
          quantity: 7,
          seller: 1
        },
        {
          id: 2,
          reference: "122244788965",
          name: "le produit 2",
          description: "la description du produit 2",
          date: "2020-02-02 15:52",
          background: "",
          price: 15,
          quantity: 7,
          seller: 1
        },
        {
          id: 3,
          reference: "122244788965",
          name: "le produit 3",
          description: "la description du produit 3",
          date: "2020-02-02 15:52",
          background: "",
          price: 15,
          quantity: 7,
          seller: 1
        },
        {
          id: 4,
          reference: "122244788965",
          name: "le produit 4",
          description: "la description du produit 4",
          date: "2020-02-02 15:52",
          background: "",
          price: 15,
          quantity: 7,
          seller: 1
        },
        {
          id: 5,
          reference: "122244788965",
          name: "le produit 5",
          description: "la description du produit 5",
          date: "2020-02-02 15:52",
          background: "",
          price: 15,
          quantity: 7,
          seller: 1
        },
        {
          id: 6,
          reference: "122244788965",
          name: "le produit 6",
          description: "la description du produit 6",
          date: "2020-02-02 15:52",
          background: "",
          price: 15,
          quantity: 7,
          seller: 1
        },
        {
          id: 7,
          reference: "122244788965",
          name: "le produit 7",
          description: "la description du produit 7",
          date: "2020-02-02 15:52",
          background: "",
          price: 15,
          quantity: 7,
          seller: 1
        },
        {
          id: 8,
          reference: "122244788965",
          name: "le produit 8",
          description: "la description du produit 8",
          date: "2020-02-02 15:52",
          background: "",
          price: 15,
          quantity: 7,
          seller: 1
        },
        {
          id: 9,
          reference: "122244788965",
          name: "le produit 9",
          description: "la description du produit 9",
          date: "2020-02-02 15:52",
          background: "",
          price: 15,
          quantity: 7,
          seller: 1
        }
      ],
      seller2: [
        {
          id: 1,
          reference: "122244788965",
          name: "le produit 1",
          description: "la description du produit 1",
          date: "2020-02-02 15:52",
          background: "",
          price: 15,
          quantity: 7,
          seller: 2
        },
        {
          id: 2,
          reference: "122244788965",
          name: "le produit 2",
          description: "la description du produit 2",
          date: "2020-02-02 15:52",
          background: "",
          price: 15,
          quantity: 7,
          seller: 2
        },
        {
          id: 3,
          reference: "122244788965",
          name: "le produit 3",
          description: "la description du produit 3",
          date: "2020-02-02 15:52",
          background: "",
          price: 15,
          quantity: 7,
          seller: 2
        },
        {
          id: 4,
          reference: "122244788965",
          name: "le produit 4",
          description: "la description du produit 4",
          date: "2020-02-02 15:52",
          background: "",
          price: 15,
          quantity: 7,
          seller: 2
        },
        {
          id: 5,
          reference: "122244788965",
          name: "le produit 5",
          description: "la description du produit 5",
          date: "2020-02-02 15:52",
          background: "",
          price: 15,
          quantity: 7,
          seller: 2
        },
        {
          id: 6,
          reference: "122244788965",
          name: "le produit 6",
          description: "la description du produit 6",
          date: "2020-02-02 15:52",
          background: "",
          price: 15,
          quantity: 7,
          seller: 2
        },
        {
          id: 7,
          reference: "122244788965",
          name: "le produit 7",
          description: "la description du produit 7",
          date: "2020-02-02 15:52",
          background: "",
          price: 15,
          quantity: 7,
          seller: 2
        },
        {
          id: 8,
          reference: "122244788965",
          name: "le produit 8",
          description: "la description du produit 8",
          date: "2020-02-02 15:52",
          background: "",
          price: 15,
          quantity: 7,
          seller: 2
        },
        {
          id: 9,
          reference: "122244788965",
          name: "le produit 9",
          description: "la description du produit 9",
          date: "2020-02-02 15:52",
          background: "",
          price: 15,
          quantity: 7,
          seller: 2
        }
      ]
    },
    priceSeller1: 0,
    priceSeller2: 0
  };
  
export const reducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_HOME_LOADED":
        return {
          ...state,
          isHomeLoaded: action.payload,
        }
      case "ADD_PRICE_SELLER_1":
        return {
          ...state,
          priceSeller1: state.priceSeller1 + parseInt(action.payload)
        }
      case "ADD_PRICE_SELLER_2":
        return {
          ...state,
          priceSeller2: state.priceSeller2 + parseInt(action.payload)
        }
      case "REMOVE_PRICE_SELLER_1":
        return {
          ...state,
          priceSeller1: state.priceSeller1 - parseInt(action.payload)
        }
      case "REMOVE_PRICE_SELLER_2":
        return {
          ...state,
          priceSeller2: state.priceSeller2 - parseInt(action.payload)
        }
      default:
        return state;
    }
};
  