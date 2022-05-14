
const Stat=({name,icon,chart,amount})=>{
	return (
		<div className='h-full flex flex-col items-center'>
			<div className='flex flex-col items-center'>
				<div>{name}</div>
				<div className='flex items-center justify-between'>
					<div className='font-bold text-2xl'>{amount}</div>
					<div className='ml-2'>{icon}</div>
				</div>
			</div>
			<div>
				<img src={chart} alt=""/>
			</div>
		</div>
	)
}
export default Stat;