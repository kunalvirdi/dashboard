const Price=({name,price,percent,icon,className,color})=>{
	return (
		<div className={`price ${className} lg:ml-0 mt-3 mb-4 w-3/4 border-r-2 flex justify-evenly items-center`}>
			<div className>
				<h2 className='mb-1 text-gray-500'>{name}</h2>
				<p className='font-bold text-xl'>${price}</p>
			</div>
			<div className='flex mt-8'>
				<div className='text-green-600'>{icon}</div>
				<p className={`${color}`}>{percent}</p>
			</div>
		</div>
	)
}

export default Price