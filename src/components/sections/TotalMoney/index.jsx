export const TotalMoney = ({ noteList }) => {

    const sumMoney = noteList.reduce((prevValue, number) => prevValue + Number(number.inputNumber), 0)

    const a = 1
    a.toLocaleString("ar-EG")
    console.log(a)
    return (
        <section className="margin">
            <div>
                <h1>Valor Total</h1>
                <p>O valor se refere ao saldo</p>
                <span>{sumMoney.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
            </div>
        </section>
    )
}