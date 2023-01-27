import { isDevEnv } from "./isEnv";
import { worker } from "~/mocks/browser";


const initApp = () => {
  if (isDevEnv()) {
    worker.start();
  }
};

export default initApp;
