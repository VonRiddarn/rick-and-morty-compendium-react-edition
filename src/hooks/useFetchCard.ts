import { useEffect, useState } from "react";

// TODO: Make this generic later.
// Right now this will always return characters
function useFetchCard(id: number) {
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState<string | Error>(""); // TODO: specify type later. Will be Entity OR error (as string)

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			setData("");

			try {
				const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);

				const jsonData = await response.json();

				if (!response.ok)
					throw new Error(
						`Error ${response.status}: ${
							jsonData.error || response.statusText || "An unknown error has occured!"
						}`
					);

				setData(jsonData.name);
			} catch (error) {
				setData((error as Error).message);
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
	}, [id]);

	return { data, isLoading };
}

export default useFetchCard;
