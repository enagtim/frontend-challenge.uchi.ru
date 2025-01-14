import styles from './Heart.module.css';
function HeartIcon () {
    return (
        <div className={styles.heart}>
            <img src="/heart.icon.svg" alt="Иконка лайка" />
        </div>
    )
}
export default HeartIcon;