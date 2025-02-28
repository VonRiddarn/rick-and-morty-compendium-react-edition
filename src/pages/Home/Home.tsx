import Header from "../../components/layout/Header/Header";
import { PageName } from "../PageName";

interface HomeProps {
	currentPage: PageName;
	setCurrentPage: (newPage: PageName) => void;
}

const Home = ({ currentPage, setCurrentPage }: HomeProps) => {
	return (
		<>
			<Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
			<main>Test</main>
		</>
	);
};

export default Home;
