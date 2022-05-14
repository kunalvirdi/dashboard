import {useState} from "react";
import {useSelector} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

const Header=()=>{
	const [visible,setVisible]=useState(false);
	const toggleHandler=()=>{
		setVisible(prevState => !prevState);
	}
	const name=useSelector(state=>state.name);
	const img=useSelector(state=>state.imgUrl);
	return (
		<header className='flex px-4 justify-between items-center lg:mt-7'>
			<div className='heading lg:ml-32 2xl:ml-52'>
				<h1 className='text-black font-bold text-3xl mb-4'>Dashboard</h1>
				<p>Welcome back, {name}</p>
			</div>
			<div className='profile lg:flex lg:flex-row lg:w-1/4 lg:justify-between lg:items-center'>
				<div className='img w-12'>
					<img className='w-full cursor-pointer rounded-full' src={img} onClick={toggleHandler} alt=""/>
				</div>
				<div className={`${!visible&&'hidden'} flex flex-col items-center justify-between px-2 py-5 top-25 right-2 absolute border lg:flex lg:border-none lg:static lg:flex-row lg:justify-evenly lg:w-full`}>
					<div className='name'>{name}</div>
					<button className='button border p-2 bg-green-600 lg:px-6 cursor-pointer text-white'><FontAwesomeIcon className='mr-1' icon={faPlus}/>Add Unit</button>
				</div>
			</div>
		</header>
	)
}

export default Header;