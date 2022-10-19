import store from "Store";
import { setUser } from "Store/auth";

export const userHandle = (data) => {
  store.dispatch(setUser(data));
};
