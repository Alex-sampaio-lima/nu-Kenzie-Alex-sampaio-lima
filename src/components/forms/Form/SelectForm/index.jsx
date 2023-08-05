export const SelectForm = ({ value, setValue }) => {

    return (
        <>
            <select value={value} onChange={(event) => setValue(event.target.value)}>
                <option value="Entrada">Entrada</option>
                <option value="Despesa">Despesa</option>
            </select>
        </>
    )

}

