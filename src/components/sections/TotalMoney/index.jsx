import style from "../TotalMoney/style.module.scss"

export const TotalMoney = ({ noteList }) => {

    const sumMoney = noteList.reduce((prevValue, number) => prevValue + number.inputNumber, 0)

    return (
        <section className="margin">
            <div className={`${style.containerMoneyPrincipal}`}>
                <div className={`${style.titleMoneyContainer}`}>
                    <h1 className="title two">Valor Total</h1>
                    <p className="headline">O valor se refere ao saldo</p>
                </div>
                <div className={`${style.totalMoneyContainer}`}>
                    <span className="numberTotalMoney">{sumMoney.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                </div>
            </div>
        </section>
    )
}