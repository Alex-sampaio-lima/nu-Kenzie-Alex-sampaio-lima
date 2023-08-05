export const SelectForm = ({ setValue }) => {

    return (
        <>
            <select onChange={(event) => setValue(event.target.value)}>
                <option value="Entrada">Entrada</option>
                <option value="Despesa">Despesa</option>
            </select>
        </>
    )

}

