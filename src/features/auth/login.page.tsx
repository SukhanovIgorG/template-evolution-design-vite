import { ROUTES } from "@/shared/model/routes";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <>
      Нет аккаунта? <Link to={ROUTES.REGISTER}>Зарегистрироваться</Link>
    </>
  );
}

export const Component = LoginPage;
