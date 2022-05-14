import Profile from "./Profile";
import {useSelector} from "react-redux";
import {user} from '../assests'
import Comparison from "./Comparison";
const Data=()=>{
	const name=useSelector(state=>state.name);
	const img=useSelector(state=>state.imgUrl)
	return(
		<div className='flex mt-7 flex-col justify-between w-5/6 m-auto sm:w-4/5 sm:m-auto md:flex-row md:w-5/6 lg:ml-44'>
			<div className='ml-2 mr-2 md:w-full md:mr-9'>
				<div className='flex mb-8 justify-between items-center'>
					<h1 className='text-2xl'>Team Members</h1>
					<div>
						<div className='text-blue-500 cursor-pointer hover:underline'>View all</div>
					</div>
				</div>
				<Profile name={name} className='text-green-600 bg-green-100 hover:bg-green-200 border-green-400' title="Top Trader" img={img}/>
				<Profile name='Anna Atkinsons' title='Manager' className='text-purple-600 bg-purple-100 hover:bg-purple-200 border-purple-400' img={user}/>
				<Profile name='Mark Atkinsons' title='Top Trader' className='text-green-600 bg-green-100 border-green-400 hover:bg-green-200' img={user}/>
				<Profile name='Johanna Tairons' title='Manager' className='text-purple-600 bg-purple-100 hover:bg-purple-200 border-purple-400' img={user}/>
			</div>
			<div className='mt-4 md:mt-0 ml-2 mr-2 mr-2 md:w-full'>
				<div className='flex mb-8 justify-between items-center'>
					<h1 className='text-2xl'>Comparison</h1>
					<div>
						<div className='text-blue-500 cursor-pointer hover:underline'>View all</div>
					</div>
				</div>
				<Comparison/>
			</div>
		</div>
	)
}

export default Data