import {hamburger,notification,cross,trading,dashboard,analsys} from '../assests/index'
import logout from '../assests/logout.png'
import {useState} from "react";
import NavLinks from "./NavLinks";
import {useDispatch} from "react-redux";
import {AuthAction} from "../store/AuthSlice";

const Navbar=()=>{
	const [toggle,setToggle]=useState(false);
	const disptach=useDispatch();
	const toggleHandler=()=>{
		setToggle(prevState => !prevState)
	}

	const logoutHandler=()=>{
		disptach(AuthAction.logout());
	}

	const data=[
		{name:'Dashboard',logo:dashboard},
		{name:'Analytics',logo:analsys},
		{name:'Trading',logo:trading},
		{name:'Notifications',logo:notification},

	]
	return (
		<>
			<div className={`hamburger w-10 ${toggle && 'hidden'} lg:hidden`} onClick={toggleHandler}>
				<img src={hamburger} className='w-full' alt="ham"/>
			</div>
			<nav className={`navbar ${!toggle && 'hidden'} z-10 bg-white fixed top-0 bottom-0 lg:block  w-1/3  sm:w-1/5 lg:w-1/12`}>
				<div className={`nav__items  flex flex-col items-center`}>
					<div className="close-icon mt-4 lg:hidden" onClick={toggleHandler}>
						<img src={cross} alt="" className='w-7'/>
					</div>
					<div className='nav__links mt-8 h-1/2 flex flex-col justify-between items-center'>
						{data.map(item=>{
							return (<NavLinks key={item.name} name={item.name} logo={item.logo}/>)
						})}
					</div>
					<div className='mt-16' onClick={logoutHandler}>
						<NavLinks name='Logout' logo={logout}/>
					</div>
				</div>
			</nav>
		</>
	)
}

export default Navbar;