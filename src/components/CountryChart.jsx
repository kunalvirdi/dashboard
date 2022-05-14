import Stat from './Stat'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretUp,faCaretDown} from "@fortawesome/free-solid-svg-icons";
import upChart from "../assests/chart-up.png";
import downChart from '../assests/chart-down.png'
const CountryChart=()=>{
	return (
		<div className='pl-4 grid grid-cols-3 mx-6 py-4 justify-items-center items-stretch lg:p-5 md:grid-cols-4 lg:grid-cols-6 mt-8 mb-8 lg:ml-44 lg:mr-20 shadow-xl border bg-white'>
			<Stat name='Italy' chart={upChart} icon={<FontAwesomeIcon className='text-green-600' icon={faCaretUp}/>} amount='475'/>
			<Stat name='United States' chart={upChart} icon={<FontAwesomeIcon className='text-green-600' icon={faCaretUp}/>} amount='431'/>
			<Stat name='Canada' chart={downChart} icon={<FontAwesomeIcon className='text-red-600' icon={faCaretDown}/>} amount='174'/>
			<Stat name='Spain' chart={upChart} icon={<FontAwesomeIcon className='text-green-600' icon={faCaretUp}/>} amount='475'/>
			<Stat name='Japan' chart={upChart} icon={<FontAwesomeIcon className='text-green-600' icon={faCaretUp}/>} amount='134'/>
			<Stat name='South Africa' chart={downChart} icon={<FontAwesomeIcon className='text-red-600' icon={faCaretDown}/>} amount='471'/>
		</div>
	)
}

export default CountryChart;