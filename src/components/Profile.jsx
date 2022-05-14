const Profile=({name,className,title,img})=>{
	return (
		<div className='flex mt-4 items-center justify-between px-3 bg-white py-2 rounded-xl shadow-lg'>
			<div className='flex items-center'>
				<img className='w-10 rounded-full' src={img} alt=""/>
				<h1 className='ml-2'>{name}</h1>
			</div>
			<div>
				<h1 className={`border cursor-pointer ${className}  px-2 py-1 rounded-xl`}>{title}</h1>
			</div>
		</div>
	)
}

export default Profile;