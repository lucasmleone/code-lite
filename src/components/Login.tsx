import { FC, useState } from 'react';
import { toast } from 'react-toastify';
import useAPI from '../hooks/useAPI';


const Login: FC = () => {
  const { getUser } = useAPI();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

async function onLoggin(e:React.FormEvent<HTMLFormElement>) {
   e.preventDefault();
   if(!email || !password){
    toast('Please complete all fields', { type: 'error' })
  }else{
    const user=  await getUser(email,password)
    toast(`Login successful ${user.email}`, { type: 'success' })
  }
    

}

  return (
    <>
      <div className="grid  grid-cols-1 mobile:grid-cols-2 mx-auto min-h-screen">

        <div className="min-m-screen grid place-content-center">
          <div className='flex justify-center'>
            <p className='text-xl font-semibold'>VINCI</p>
            <span className='self-start text-sm text-vinci-main'>BETA</span>
          </div>
          <form
            className='flex flex-col'
            onSubmit={onLoggin}
          >
            <input
              type="email"
              className="p-2 w-96 mt-[46px] h-[54px] text-black text-lg border-vinci-gray border-2 rounded-vc"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              placeholder="Email"
            />
            <input
              type="password"
              className="p-2 w-96 h-[54px] mt-4 text-black text-lg border-vinci-gray border-2 rounded-vc"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
              placeholder="Password"
            />

            <div className='flex justify-between mt-4 '>
              <label className='text-lg'> <input className='text-lg' type='checkbox' name='rememberMe' id='rememberMe' /> Remember me</label>
              <a href='#' className='text-lg self-end' >Forgot Password?</a>
            </div>

            <input className="text-white mt-6 bg-vinci-main cursor-pointer rounded-vc text-base font-semibold h-[54px] hover:text-vinci-main hover:bg-vinci-gray" type="submit" value="Continue" />
          </form>
          <hr className="h-px bg-vinci-gray mt-[30px] border-0 "/>

          <div className=' mt-4 flex justify-center'>
          <p className='text-vinci-gray-dark'>Don’t have an account?</p>
          <a className='text-vinci-main cursos-pointer underline' href='#'>Sign up</a>
          </div>
        </div>
        <div className='bg-pyramid bg-cover'></div>
      </div>
    </>
  );
};

export default Login;
