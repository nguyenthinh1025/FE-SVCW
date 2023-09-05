const stateDefault = {
  arrDonation: [],
  message: "",
};

export const DonationReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "GET_LIST_HISTORYDONATION": {
      state.arrDonation = action.arrDonation;
      return { ...state };
    }
    case "DONATE": {
      state.message = action.message;
      return { ...state };
    }

    default:
      return state;
  }
};
