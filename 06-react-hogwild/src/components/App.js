import { useState } from "react";
import Header from "./Header";
import Hoglist from "./Hoglist";
import Filter from "./Filter";

import HOGS from "../porkers_data";

function App() {
	const [hogs, setHogs] = useState(HOGS)
	return (
		<div className="App">
			<Header />
			<Filter />
			<Hoglist hogs={hogs} />
		</div>
	);
}

export default App;
