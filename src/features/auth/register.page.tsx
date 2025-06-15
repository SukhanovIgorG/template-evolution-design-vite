import { ROUTES } from "@/shared/model/routes";
import { Link } from "react-router-dom";

function RegisterPage() {
  return (
    <>
      Уже есть аккаунт? <Link to={ROUTES.LOGIN}>Войти</Link>
    </>
  );
}

export const Component = RegisterPage;
