export const ListSection = ({ description, id, inputNumber, select, removeNote }) => {
    return (
        <li>
            <h2 className="title three">{description}</h2>
            <p className="headline">{select}</p>
            <span className="headline">{inputNumber}</span>
            <button className="headline btn delete" type="button" onClick={() => removeNote(id)}>Excluir</button>
        </li>
    )
}