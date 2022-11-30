import { FC, useState } from 'react';
import { toast } from 'react-toastify';

import useAPI from '../hooks/useAPI';

const Login: FC = () => {
  const { getUser } = useAPI();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <div className="bg-gray-900 px-20 text-white py-10">
        <h1 className="text-lg font-semibold">Sign in</h1>
      </div>
      <div className="px-20 text-white py-10 text-base max-w-2xl">
        To the VINCI code test. Please have a look at the README.md.
        <br />
        <br />
        Good  luck!
        <br />
        <i>- VINCI</i>
        <form
          className="flex flex-col mt-12"
          onSubmit={async (e) => {
            e.preventDefault();

            toast('I am incomplete 😢', { type: 'error' });
          }}
        >
          <input
            type="email"
            className="mt-2 text-black"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            placeholder="Email"
          />
          <input
            type="password"
            className="mt-2 text-black"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            placeholder="Password"
          />
          <input className="mt-2 hover:bg-white/20 cursor-pointer" type="submit" value="Sign in" />
        </form>
      </div>
    </>
  );
};

export default Login;
