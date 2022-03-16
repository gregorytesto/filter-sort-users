import "./App.css";
import users from "./data/users.js";
import { useState } from "react";

const App = () => {
	const [searchInput, setSearchInput] = useState("");
	const [sortInput, setSortInput] = useState("");
	// Filter users
	let filteredUsers = users.filter((user) => {
		let lowerCaseName = user.name.toLowerCase();
		let lowerCaseSearchInput = searchInput.toLowerCase();
		return lowerCaseName.includes(lowerCaseSearchInput);
	});

	if (sortInput) {
		filteredUsers.sort((a, b) => {
			if (a[sortInput] < b[sortInput]) {
				return -1;
			}
			if (a[sortInput] > b[sortInput]) {
				return 1;
			}
			return 0;
		});
	}

	let renderUsers = filteredUsers.map((user, index) => {
		return (
			<li key={index}>
				{user.name} - {user.currency}
			</li>
		);
	});

	const handleSearchInput = (e) => {
		setSearchInput(e.target.value);
	};
	const handleSortOnChange = (e) => {
		setSortInput(e.target.value);
	};
	return (
		<div>
			<h1>Users Filter Sort</h1>
			<form>
				<label htmlFor="search_input">Search Name: </label>
				<input id="search_input" type="text" value={searchInput} onChange={handleSearchInput} />

				{/* <label>Sort</label> */}
				<select onChange={handleSortOnChange}>
					<option>--Sort--</option>
					<option value="name">Name</option>
					<option value="currency">Currency</option>
				</select>
			</form>
			<ul>{renderUsers}</ul>
		</div>
	);
};

export default App;
