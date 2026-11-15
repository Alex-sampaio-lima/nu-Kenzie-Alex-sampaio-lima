import style from "./style.module.scss"
import logoNuKenzie from "../../assets/Nu Kenzie.svg"

export const Header = () => {
    return (
        <header className={style.header}>
            <div className={`${style.inner} container`}>
                <img src={logoNuKenzie} alt="Nu Kenzie" width="123" height="20" />
                <span className={style.tagline}>Controle financeiro</span>
            </div>
        </header>
    )
}
