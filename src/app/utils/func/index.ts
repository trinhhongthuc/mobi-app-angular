import { userLogin } from '../../models/index';
export const login = (user: userLogin) => {
  if (user.email && user.password) {
    window.localStorage.setItem('user', JSON.stringify(user));
  }
};
