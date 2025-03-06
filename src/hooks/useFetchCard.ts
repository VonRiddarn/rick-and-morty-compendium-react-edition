import { useEffect, useState } from "react";

const cacheRef = new Map<number, string | Error>();
// TODO: Make this generic later.
// Right now this will always return characters
function useFetchCard(id: number, forceFetch: boolean) {
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if (cacheRef.has(id) && !forceFetch) {
			return;
		}

		const fetchData = async () => {
			setIsLoading(true);

			try {
				const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
				const jsonData = await response.json();

				if (!response.ok)
					throw new Error(
						`Error ${response.status}: ${
							jsonData.error || response.statusText || "An unknown error has occured!"
						}`
					);

				cacheRef.set(id, jsonData.name as string); // Euw. Uncertain type stuff. Nasty bnusiness.
			} catch (error) {
				cacheRef.set(id, error as Error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
	}, [id, forceFetch]);

	const data = cacheRef.get(id) || null;
	return { data, isLoading };
}

export default useFetchCard;
