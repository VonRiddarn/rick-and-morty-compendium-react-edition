import { PageName } from "../../../pages/PageName";
import "./Header.scss";

type HeaderProps = {
	currentPage: PageName;
	setCurrentPage: (newPage: PageName) => void;
};

const Header = ({ currentPage, setCurrentPage }: HeaderProps) => {
	return (
		<header className="Header">
			<span>
				<button onClick={() => setCurrentPage("Home")} disabled={currentPage === "Home"}>
					Home
				</button>
				<button onClick={() => setCurrentPage("Favorites")} disabled={currentPage === "Favorites"}>
					Favorites
				</button>
			</span>
			<h1>{currentPage === "Home" ? "Rick and Morty compendium" : "Favorites"}</h1>
			<button>Filter</button>
		</header>
	);
};

export default Header;
