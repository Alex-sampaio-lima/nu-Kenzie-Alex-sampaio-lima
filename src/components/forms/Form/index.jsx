import { useRef, useState } from "react"
import { Input } from "../Input"
import { TypeToggle } from "./TypeToggle"
import style from "./style.module.scss"

export const Form = ({ addNote }) => {
    const [description, setDescription] = useState("")
    const [inputNumber, setInputNumber] = useState("")
    const [select, setSelect] = useState("Entrada")
    const descriptionRef = useRef(null)

    const submit = (event) => {
        event.preventDefault()
        const amount = Math.abs(Number(inputNumber))
        const text = description.trim()
        if (!text || !amount) return

        addNote({
            description: text,
            inputNumber: select === "Entrada" ? amount : -amount,
            select,
        })
        setDescription("")
        setInputNumber("")
        descriptionRef.current?.focus()
    }

    return (
        <section className={`${style.formCard} card`} aria-labelledby="form-title">
            <h2 className={style.title} id="form-title">Novo lançamento</h2>
            <form className={style.form} onSubmit={submit}>
                <Input
                    label="Descrição"
                    placeholder="Ex.: Compra de roupas"
                    type="text"
                    id="description"
                    maxLength={60}
                    required
                    autoComplete="off"
                    inputRef={descriptionRef}
                    value={description}
                    setValue={setDescription}
                />
                <Input
                    label="Valor"
                    prefix="R$"
                    placeholder="0,00"
                    type="number"
                    inputMode="decimal"
                    min="0.01"
                    step="0.01"
                    required
                    id="inputNumber"
                    value={inputNumber}
                    setValue={setInputNumber}
                />
                <TypeToggle value={select} setValue={setSelect} />
                <button className={style.submit} type="submit">Adicionar lançamento</button>
            </form>
        </section>
    )
}
