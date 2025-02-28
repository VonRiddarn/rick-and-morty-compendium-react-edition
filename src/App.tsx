import React from "react";
import "./App.scss";
import Home from "./pages/Home/Home";
import { PageName } from "./pages/PageName";

function App() {
	const [currentPage, setCurrentPage] = React.useState<PageName>("Home");

	const renderPage = () => {
		switch (currentPage) {
			case "Home":
				return <Home currentPage={currentPage} setCurrentPage={setCurrentPage} />;
			case "Favorites":
				return <div>NOT IMPLEMENTED</div>;
			default:
				return <div> ERROR </div>;
		}
	};

	return <>{renderPage()}</>;
}
export default App;
