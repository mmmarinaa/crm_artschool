import React, { useContext, useState } from "react";
import "../styles/LoginForm.css";
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import { login } from "../http/userAPI";
import { useNavigate } from "react-router-dom";
import { JOURNAL_ROUTE } from "../utils/consts";

const LoginForm = observer(() => {
  const { user } = useContext(Context);
  const [userLogin, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { store } = useContext(Context);

  const signIn = async () => {
    try {
      let data;
      data = await login(userLogin, password);
      user.setUser(user);
      user.setIsAuth(true);
      navigate(JOURNAL_ROUTE);
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <div className="form__login">
      <h4>Авторизация</h4>
      <label>Логин:</label>
      <input
        onChange={(e) => setLogin(e.target.value)}
        value={userLogin}
        type="text"
      />
      <label>Пароль:</label>
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
      />
      <button onClick={signIn} className="btn-auth">
        Войти
      </button>
    </div>
  );
});

export default LoginForm;
