export const TotalMoney = ({ noteList }) => {

    const sumMoney = noteList.reduce((prevValue, number) => prevValue + number.inputNumber, 0)


    return (
        <section className="margin">
            <div>
                <h1 className="title three">Valor Total</h1>
                <p className="headline">O valor se refere ao saldo</p>
                <span>{sumMoney.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
            </div>
        </section>
    )
}