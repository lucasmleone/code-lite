import { useCallback } from 'react';
import { nanoid } from 'nanoid';

import { User } from '../types';

const useAPI = () => {
  const getUser = useCallback(async (email: string, password: string): Promise<User> => {
    console.log('Emulating a sign in for:', email, 'with password:', password);

    return new Promise((resolve) => {
      setTimeout(resolve, 1000, { id: nanoid(), email });
    });
  }, []);

  return {
    getUser
  };
};

export default useAPI;
