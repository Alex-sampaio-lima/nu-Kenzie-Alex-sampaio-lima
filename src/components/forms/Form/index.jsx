import { useState } from "react"
import { Input } from "../Input"
import { TextArea } from "../TextArea"
import { SelectForm } from "./SelectForm"
import { TotalMoney } from "../../sections/TotalMoney"

export const Form = ({ addNote }) => {
    const [description, setDescription] = useState("")
    const [inputNumber, setinputNumber] = useState("")
    const [select, setSelect] = useState("Entrada")

    const submit = (event) => {
        event.preventDefault()
        console.log({ description, inputNumber, select })
        addNote(select === "Entrada"
            ? { description, inputNumber, select }
            : { description, inputNumber: -inputNumber, select })
        setDescription("")
        setinputNumber("")
        setSelect("")
    }

    return (
        <section className="margin">
            <form onSubmit={submit}>
                <TextArea
                    label="Descrição"
                    placeholder="Digite aqui sua descrição"
                    id="description"
                    value={description}
                    setValue={setDescription}
                />
                <Input
                    label="Valor (R$)"
                    placeholder="digite um novo valor "
                    type="number"
                    id="inputNumber"
                    value={inputNumber}
                    setValue={setinputNumber}
                />
                {/* <SelectForm setValue={setSelect} value={select} /> */}
                <select onChange={(event) => setSelect(event.target.value)}>
                    <option value="Entrada">Entrada</option>
                    <option value="Despesa">Despesa</option>
                </select>
                <button className="btn btnText" type="submit">Inserir Valor</button>
            </form>
        </section>
    )
}


