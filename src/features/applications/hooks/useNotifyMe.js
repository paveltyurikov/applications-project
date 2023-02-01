import { useMutation } from "react-query";
import notifyMe from "~/features/applications/api/notifyMe";


const useNotifyMe = (options = {}) => {
  return useMutation(
    "notify-my",
    ({ email, appId }) => notifyMe(email, appId),
    { ...options }
  );
};

export default useNotifyMe;
