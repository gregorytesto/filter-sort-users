import "./App.css";
import users from "./data/users.js";

const App = () => {
	let renderUsers = users.map((user, index) => {
		return <li key={index}>{user.name}</li>;
	});
	return (
		<div>
			<h1>Users Filter Sort</h1>
			<ul>{renderUsers}</ul>
		</div>
	);
};

export default App;
