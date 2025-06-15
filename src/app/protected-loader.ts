import { ROUTES } from '@/shared/model/routes';
import { redirect } from 'react-router-dom';

export async function protectedLoader() {
  const token = null;

  if (!token) {
    return redirect(ROUTES.LOGIN);
  }

  return null;
}
