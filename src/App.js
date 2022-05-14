import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import {useSelector} from "react-redux";
import {Redirect, Route, Switch} from "react-router-dom";

function App() {
	const token=useSelector(state=>state.token);
	console.log(token);
	return (
		<div className="App">
			<Dashboard/>
			{/*<Switch>*/}
			{/*	{!token && <Redirect to='/login' />}*/}
			{/*	{token && <Redirect to='dashboard'/>}*/}
			{/*</Switch>*/}
			{/*<Route path='/login' exact>*/}
			{/*	<Login/>*/}
			{/*</Route>*/}
			{/*<Route path='/dashboard' exact>*/}
			{/*	<Dashboard/>*/}
			{/*</Route>*/}
		</div>
	);
}

export default App;
