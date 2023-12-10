import { IUser } from "../IUser";

const AuthResponse = {
  accessToken: "",
  refreshToken: "",
  user: { login: "", id: "" }, // предполагаемый объект IUser
};

export default AuthResponse;
