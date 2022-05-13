import Login from "./components/Login";
import {useSelector} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Redirect, Route, Switch} from "react-router-dom";
import {faBars} from "@fortawesome/free-solid-svg-icons";

function App() {
	const token=useSelector(state=>state.token);
	console.log(token);
	return (
		<div className="App">
			<Switch>
				{!token && <Redirect to='/login' />}
				{token && <Redirect to='dashboard'/>}
			</Switch>
			<Route path='/login' exact>
				<Login/>
			</Route>
			<Route path='/dashboard' exact>

			</Route>
		</div>
	);
}

export default App;
