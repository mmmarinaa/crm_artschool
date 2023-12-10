// import { IUser } from "../models/IUser";
// import { makeAutoObservable } from "mobx";
// import AuthService from "../services/AuthService";
// import axios from "axios";

// export default class Store {
//   constructor() {
//     this.user = {};
//     this.isAuth = false;

//     // Делаем все свойства наблюдаемыми
//     makeAutoObservable(this);
//   }

//   setAuth(bool) {
//     this.isAuth = bool;
//   }

//   setUser(user) {
//     this.user = user;
//   }

//   async login(login, password) {
//     try {
//       console.log(login, password);
//       const response = await AuthService.login(login, password);
//       console.log(response.data.accessToken);
//       localStorage.setItem("token", response.data.accessToken);
//       this.setAuth(true);
//       this.setUser(response.data.user);
//     } catch (e) {
//       console.log(e.response?.data?.message);
//     }
//   }

//   async logout() {
//     try {
//       const response = await AuthService.logout();
//       localStorage.removeItem("token");
//       this.setAuth(false);
//       this.setUser({});
//     } catch (e) {
//       console.log(e.response?.data?.message);
//     }
//   }
//   async checkAuth() {
//     try {
//       const response = await axios.get(`${API_URL}/refresh`, {
//         withCredentials: true,
//       });
//       console.log(response.data.accessToken);
//       localStorage.setItem("token", response.data.accessToken);
//       this.setAuth(true);
//       this.setUser(response.data.user);
//     } catch (e) {
//       console.log(e.response?.data?.message);
//     }
//   }
// }
