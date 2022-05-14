
const NavLinks=(props)=>{
	return (
		<div className='flex cursor-pointer p-2 hover:bg-slate-200 flex-col justify-center items-center mt-6'>
			<div className='w-8'>
				<img src={props.logo} className='w-full' alt=""/>
			</div>
			<div>
				{props.name}
			</div>
		</div>
	)
}

export default NavLinks;