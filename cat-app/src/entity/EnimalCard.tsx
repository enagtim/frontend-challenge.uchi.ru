import { IEnimal } from './Enimal.interface';
import styles from './EnimalCard.module.css';

function EnimalCard ({...props}: IEnimal) {
    return (
        <>
            <img className={styles.enimal_img} src={props.url} alt="Изображение жиивотного" />
        </>
    )
}
export default EnimalCard