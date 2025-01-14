import { useEffect, useState } from 'react';
import { IEnimal } from '../../entity/Enimal.interface';
import axios from 'axios';
import styles from './EnimalsPage.module.css';
import EnimalCard from '../../entity/EnimalCard';

function EnimalsPage() {
	const [enimals, setEnimals] = useState<IEnimal[]>([]);
	const [loading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const getEnimals = async () => {
			setIsLoading(true);
			try {
				const { data } = await axios.get<IEnimal[]>('https://api.thecatapi.com/v1/images/search', {
					params: { limit: 10 },
					headers: {
						'x-api-key': 'live_TBLnlWhrOf7nxEWZfpocXXqiT6NcaF5wmgPCGo1NuTGmFeF74R6kCcE7JyUFtdlA',
						'Content-Type': 'application/json',
					},
				});
				setEnimals(data);
				return data;
			} catch (error) {
				if (error instanceof Error) {
					setError(error.message);
				}
			} finally {
				setIsLoading(false);
			}
		};
		getEnimals();
	}, []);

	if (loading) {
		return <p>Загрузка....</p>;
	}
	if (error) {
		return <p>Ошибка: {error}</p>;
	}
	return (
		<div className={styles.card_container}>
			{enimals.map((enimal) => (
				<EnimalCard key={enimal.id} id={enimal.id} url={enimal.url} />
			))}
		</div>
	);
}
export default EnimalsPage;
