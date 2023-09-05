import { http } from "../../utils/reponse";
import { GetListActivityAction } from "./ActivityAction";
import { VNPayAction } from "./VNPayAction";

export const DonationAction = (value,openPopup) => {
  return async (dispatch) => {
    try {
      let result = await http.post("/Donation/create-Donation-activity", value);
      console.log(result.data.data?.donationId);
      const action = GetListActivityAction();
      dispatch(action);
      console.log(result.data.data?.donationId);
      const action1 = VNPayAction(result.data.data?.donationId);
      dispatch(action1);
      const action2 = {
        type: "DONATE",
        message: "",
      };
      dispatch(action2);
      openPopup()
    } catch (error) {
      console.log(error);
      console.log(error.response?.data?.message);
      const action2 = {
        type: "DONATE",
        message: error.response?.data?.message,
      };
      dispatch(action2);
    }
  };
};

export const HistoryDonationAction = (value) => {
  return async (dispatch) => {
    try {
      let result = await http.get("/Donation/get-Donation-User?id=" + value);
      const action = {
        type: "GET_LIST_HISTORYDONATION",
        arrDonation: result.data.data,
      };
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
};
