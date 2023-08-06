import { useState } from "react"
import { Input } from "../Input"
import { TextArea } from "../TextArea"
import { SelectForm } from "./SelectForm"
import style from "../Form/style.module.scss"

export const Form = ({ addNote }) => {
    const [description, setDescription] = useState("")
    const [inputNumber, setinputNumber] = useState("")
    const [select, setSelect] = useState("Entrada")

    const submit = (event) => {
        event.preventDefault()
        addNote(select === "Entrada"
            ? { description, inputNumber: Number(inputNumber), select }
            : { description, inputNumber: -inputNumber, select })
        setDescription("")
        setinputNumber("")
    }

    return (
        <section className="margin">
            <form className={`${style.formContainer}`} onSubmit={submit}>
                <TextArea
                    label="Descrição"
                    placeholder="Digite aqui sua descrição"
                    id="description"
                    value={description}
                    setValue={setDescription}
                />
                <p className={`${style.pForm} headline`}>Ex: Compra de roupas</p>
                <Input
                    label="Valor (R$)"
                    placeholder="digite um novo valor "
                    type="number"
                    id="inputNumber"
                    value={inputNumber}
                    setValue={setinputNumber}
                />
                 <span className={`${style.spanForm} headline titleInputs`}>Tipo de valor</span>                   
                <SelectForm setValue={setSelect} />
                <button className="btn btnText" type="submit">Inserir Valor</button>
            </form>
        </section>
    )
}


