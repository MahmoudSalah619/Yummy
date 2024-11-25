import store from "reducers";
import { login } from "reducers/authReducer";
import api from "@/src/apis";

export default function loginHandler({
  token = "",
  refreshToken = "",
  withoutResetCache = false,
} = {}) {
  if (token) localStorage.setItem("token", token);
  if (refreshToken) localStorage.setItem("refreshToken", refreshToken);
  if (!withoutResetCache) store.dispatch(api.util.resetApiState());
  store.dispatch(login(token));
}
