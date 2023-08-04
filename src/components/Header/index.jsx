import style from "./style.module.scss"
import logoNuKenzie from "../../assets/Nu Kenzie.svg"

export const Header = () => {

    return (
        <>
            <header className={`${style.header} margin`}>
                <img src={logoNuKenzie} alt="Logo da Nu Kenzie" />
            </header>
        </>
    )
}
