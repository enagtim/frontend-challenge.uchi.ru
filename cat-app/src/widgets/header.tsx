import { Outlet } from "react-router"
import Tab from "../shared/ui/Tab/Tab"
import styles from './header.module.css';

function Header () {
    return (
        <>
            <header className={styles.header}>
                <nav className={styles.navigation}>
                    <Tab url="/" name="Все котики" />
                    <Tab url="/favorite-cats" name="Любимые котики"/>
                </nav>
            </header>
            <Outlet/>
        </>
    )
}
export default Header