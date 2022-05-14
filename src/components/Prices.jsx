import Price from './Price'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretUp,faCaretDown,faBitcoinSign,faDollar,faEuroSign,faYenSign} from "@fortawesome/free-solid-svg-icons";

const Prices=()=>{
	return (
		<section className='prices grid grid-cols-2 justify-items-start items-center md:grid-cols-4 md:justify-items-start md:ml-3 lg:ml-32 2xl:ml-36 mt-5'>
			<Price name='BALANCE' price='5900.00'/>
			<Price name='PROFITS' price='950.00' color='text-green-600'  icon={<FontAwesomeIcon className='text-green-600' icon={faCaretUp}/>} percent='+56%'/>
			<Price className='ml-4' name='LOSSES' color='text-red-600' price='450.00' icon={<FontAwesomeIcon className='text-red-600' icon={faCaretDown}/>} percent='-56%'/>
			<div className='self-start mt-2 w-1/3'>
				<h1 className='text-sm font-bold text-gray-500'>CURRENCIES</h1>
				<div className='flex justify-between mt-2 w-full'>
					<div>
						<FontAwesomeIcon className='border cursor-pointer rounded-full w-5 h-5 bg-blue-200 text-blue-500' icon={faBitcoinSign}/>
					</div>
					<div>
						<FontAwesomeIcon className='border cursor-pointer rounded-full w-5 h-5 bg-blue-200 text-blue-500' icon={faDollar}/>
					</div>
					<div>
						<FontAwesomeIcon className='border cursor-pointer rounded-full w-5 h-5 bg-blue-200 text-blue-500' icon={faEuroSign}/>
					</div>
					<div>
						<FontAwesomeIcon className='border cursor-pointer rounded-full w-5 h-5 bg-blue-200 text-blue-500' icon={faYenSign}/>
					</div>

				</div>
			</div>
		</section>
	)
}

export default Prices;