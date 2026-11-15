import { formatCurrency } from "../../../utils/formatCurrency"
import style from "./style.module.scss"

export const TotalMoney = ({ noteList }) => {
    const income = noteList.reduce((sum, note) => (note.inputNumber > 0 ? sum + note.inputNumber : sum), 0)
    const expense = noteList.reduce((sum, note) => (note.inputNumber < 0 ? sum - note.inputNumber : sum), 0)
    const balance = income - expense

    return (
        <section className={style.summary} aria-label="Resumo financeiro">
            <div className={`${style.item} ${style.balance} card`}>
                <h2 className={style.label}>Saldo</h2>
                <p className={`${style.value} ${balance < 0 ? style.negative : ""}`}>{formatCurrency(balance)}</p>
            </div>
            <div className={`${style.item} card`}>
                <h2 className={style.label}>
                    <span className={`${style.dot} ${style.dotIncome}`} aria-hidden="true" />
                    Entradas
                </h2>
                <p className={style.value}>{formatCurrency(income)}</p>
            </div>
            <div className={`${style.item} card`}>
                <h2 className={style.label}>
                    <span className={`${style.dot} ${style.dotExpense}`} aria-hidden="true" />
                    Despesas
                </h2>
                <p className={style.value}>{formatCurrency(expense)}</p>
            </div>
        </section>
    )
}
