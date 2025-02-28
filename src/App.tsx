import React from "react";
import "./App.scss";
import Home from "./pages/Home/Home";
import { PageName } from "./pages/PageName";
import Favorites from "./pages/Favorites/Favorites";
import Header from "./components/layout/Header/Header";

function App() {
	const [currentPage, setCurrentPage] = React.useState<PageName>("Home");

	const renderPage = () => {
		switch (currentPage) {
			case "Home":
				return (
					<>
						<Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
						<Home />
					</>
				);
			case "Favorites":
				return (
					<>
						<Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
						<Favorites />
					</>
				);

			default:
				return <div> ERROR </div>;
		}
	};

	return <>{renderPage()}</>;
}
export default App;
