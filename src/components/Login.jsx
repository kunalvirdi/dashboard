import logo from '../assests/google-1015751.svg'
import {auth,provider} from "../firebase/firebase";
import {signInWithPopup} from 'firebase/auth'
import {AuthAction} from "../store/AuthSlice";
import {useDispatch} from "react-redux";

const Login=()=>{
	const dispatch=useDispatch();
	const loginHandler= async (e)=>{
		e.preventDefault();
		const response=await signInWithPopup(auth,provider);
		const u={
			name:response.user.displayName,
			email:response.user.email,
			token:response.user.uid,
			url:response.user.photoURL
		}
		dispatch(AuthAction.login({user:u}))
	}
	return(
		<div className="login flex flex-col justify-center items-center min-h-screen">
			<div className='image w-1/2 sm:w-1/3 lg:w-1/6'>
				<img src={logo} className='w-full' alt="logo"/>
			</div>
			<div className='button mt-10'>
				<button className='border border-red-500 bg-red-500 text-white p-2 hover:bg-red-400 2xl:text-xl p-4' onClick={loginHandler}>Sign in with Google</button>
			</div>
		</div>
	)
}

export default Login;