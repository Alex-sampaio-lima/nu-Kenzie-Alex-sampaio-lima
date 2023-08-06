import style from "../SelectForm/style.module.scss"

export const SelectForm = ({ setValue }) => {

    return (
        <>
            <select className={`${style.selectForm} select`} onChange={(event) => setValue(event.target.value)}>
                <option value="Entrada">Entrada</option>
                <option value="Despesa">Despesa</option>
            </select>
        </>
    )

}

