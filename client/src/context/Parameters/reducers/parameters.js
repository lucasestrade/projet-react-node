export const initialState = {

  userInfo:
  {
    name: 'Dupond',
    firstname: 'Michel',
    email: 'michel@mich.com',
    contact: 'michelenterprise@mich.com',
    confirmation: 'confimation',
    annulation: 'annulation',
    publicKey: 'afzershsethg587q4gq6g4qs',
    secret: 'affg4g+86s4gqs64g5s6d51g',
    refund: 20
  }
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_FORM_NAME":
      return {
        ...state,
        name: action.payload,
      };

    case "CHANGE_FORM_FIRSTNAME":
      return {
        ...state,
        firstname: action.payload,
      };

    case "CHANGE_FORM_EMAIL":
      return {
        ...state,
        email: action.payload,
      };

    case "CHANGE_FORM_CONTACT":
      return {
        ...state,
        contact: action.payload,
      };

    case "CHANGE_FORM_CONFIRMATION":
      return {
        ...state,
        confirmation: action.payload,
      };

    case "CHANGE_FORM_ANNULATION":
      return {
        ...state,
        annulation: action.payload,
      };

    case "CHANGE_FORM_PUBLIC":
      return {
        ...state,
        publicKey: action.payload,
      };

    case "CHANGE_FORM_SECRET":
      return {
        ...state,
        secret: action.payload,
      };

    case "CHANGE_FORM_REFUND":
      return {
        ...state,
        refund: action.payload,
      };

    default:
      return state;
  }
};