import axios from 'axios';
import { useMutation, MutationOptions } from 'react-query';

export function useLogin(options?: MutationOptions<any, any, any>) {
  const requestLogin = useMutation<any, any, any>(
    ({ email, password }) =>
      axios.post('https://reqres.in/api/login', {
        email,
        password,
      }),
    options
  );

  return requestLogin;
}
