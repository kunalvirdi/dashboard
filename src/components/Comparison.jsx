import './comparison.css'
import {us,italy,spain} from "../assests";

const Comparison=()=>{
	return (
		<div className='my-4 px-6 h-56 border md:h-4/5 flex flex-col justify-evenly md:px-9 bg-white rounded-xl shadow-lg'>
			<div>
				<div className='flex items-center'>
					<img src={us} className='w-10' alt=""/>
					<h1 className='ml-2'>Uniter States</h1>
				</div>
				<div className='flex'>
					<div className='bar1 mt-4'>

					</div>
					<div>93%</div>
				</div>
			</div>
			<div>
				<div className='flex items-center'>
					<img src={italy} className='w-10' alt=""/>
					<h1 className='ml-2'>Italy</h1>
				</div>
				<div className='flex'>
					<div className='bar2 mt-4 flex'>

					</div>
					<div>73%</div>
				</div>
			</div>
			<div>
				<div className='flex items-center'>
					<img src={spain} className='w-10' alt=""/>
					<h1 className='ml-2'>Spain</h1>
				</div>
				<div className='flex'>
					<div className='bar3 mt-4 flex'>

					</div>
					<div>23%</div>
				</div>
			</div>
		</div>
	)
}

export default Comparison;