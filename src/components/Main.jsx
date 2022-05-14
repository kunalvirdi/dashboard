import Header from './Header'
import Prices from './Prices'
import Data from './Data'
import CountryChart from './CountryChart'
const Main=()=>{
	return (
		<div className='main'>
			<Header/>
			<Prices/>
			<CountryChart/>
			<Data/>
		</div>
	)
}

export default Main;