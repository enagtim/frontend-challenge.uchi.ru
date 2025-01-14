import { useEffect, useState } from "react"
import { IEnimal } from "../../entity/Enimal.interface"
import axios from "axios";
import styles from './EnimalsPage.module.css';
import EnimalCard from "../../entity/EnimalCard";

function EnimalsPage () {
    const [enimals, setEnimals] = useState<IEnimal[]>([]);
    // const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const getEnimal = async () => {
            try{
                const {data} = await axios.get<IEnimal[]>('https://api.thecatapi.com/v1/images/search', {
                    params: {limit: 10},
                    headers: {
                        'x-api-key': 'live_TBLnlWhrOf7nxEWZfpocXXqiT6NcaF5wmgPCGo1NuTGmFeF74R6kCcE7JyUFtdlA',
                        'Content-Type': 'application/json'
                    }
                })
                setEnimals(data)
                return data
            }catch(error){
                if(error instanceof Error) {
                    // setError(error.message);
                    console.log(error.message);
                }
            }
        }
        getEnimal();
    }, [])

    return (
        <div className={styles.card_container}>
            {enimals.map((enimal) => (
                <EnimalCard key={enimal.id} id={enimal.id} width={225} height={225} url={enimal.url}/> 
            ))}
        </div>
    )
}
export default EnimalsPage