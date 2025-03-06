import useFetchCard from "../../hooks/useFetchCard";

type CardProps = {
	entityId: number;
};

const Card = ({ entityId }: CardProps) => {
	const { isLoading, data } = useFetchCard(entityId);

	return <article className="Card">{renderCard(isLoading, data)}</article>;
};

const renderCard = (isLoading: boolean, content: string | Error | null) => {
	if (isLoading) return loadingCard();
	if (content instanceof Error) return errorCard(content);

	return entityCard(content as string);
};

const loadingCard = () => (
	<>
		<h2>⌚</h2>
		<h2>LOADING...</h2>
	</>
);
const errorCard = (content: Error) => (
	<>
		<h2>{content.message}</h2>
	</>
);

// TODO: Make generic later
const entityCard = (content: string) => (
	<>
		<h2>{content}</h2>
	</>
);

export default Card;
