import axios from "axios";
import { NOTIFY_ME_PATH } from "~/features/applications/urls/api";


const notifyMe = async (email, appId) => {
  const response = await axios.post(NOTIFY_ME_PATH, { email, appId });
  return response.data;
};

export default notifyMe;
