import Main from "./pages/Main";
import {Routes, Route} from "react-router-dom";
import Services from "./pages/Services";
import Contacts from "./pages/Contacts";
import NotFound from "./pages/NotFound";


function App() {
	return (
		<Routes>
			<Route path='/main' element={<Main />} />
			<Route path='/servises' element={<Services />} />
			<Route path='/contacts' element={<Contacts />} />
			<Route path='*' element={<NotFound />} />
		</Routes>

	);
}

export default App;
