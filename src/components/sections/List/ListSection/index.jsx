import { formatCurrency } from "../../../../utils/formatCurrency"
import style from "./style.module.scss"

export const ListSection = ({ note, removeNote }) => {
    const { id, description, inputNumber, select } = note
    const isIncome = inputNumber >= 0

    return (
        <li className={style.item}>
            <span className={`${style.icon} ${isIncome ? style.income : style.expense}`} aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {isIncome ? <path d="M12 19V5M5 12l7-7 7 7" /> : <path d="M12 5v14M5 12l7 7 7-7" />}
                </svg>
            </span>
            <div className={style.info}>
                <h3 className={style.description}>{description}</h3>
                <p className={style.type}>{select}</p>
            </div>
            <span className={`${style.amount} ${isIncome ? style.amountIncome : ""}`}>
                {isIncome ? "+ " : "− "}
                {formatCurrency(Math.abs(inputNumber))}
            </span>
            <button
                className={style.remove}
                type="button"
                aria-label={`Excluir ${description}`}
                title="Excluir"
                onClick={() => removeNote(id)}
            >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 7h16M10 11v6M14 11v6M6 7l1 12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-12M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                </svg>
            </button>
        </li>
    )
}
