import { Form } from "../../forms/Form"
import { SelectForm } from "../../forms/Form/SelectForm"

export const TotalMoney = ({ noteList }) => {

    const sumMoney = noteList.reduce((prevValue, number) => { select === "Entrada" ? prevValue + Number(number.inputNumber) : prevValue - Number(number.inputNumber) }, 0)

    console.log(noteList)

    return (
        <section className="margin">
            <div>
                <h1>Valor Total</h1>
                <p>O valor se refere ao saldo</p>
                <span>R$ {sumMoney}</span>
                <p>Valor selecionado no select:</p>
            </div>
        </section>
    )
}