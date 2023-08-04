export const ListSection = ({ description, inputNumber, select }) => {
    return (
        <li>
            <h2 className="title three">{description}</h2>
            <p className="headline">{select}</p>
            <span className="headline">{inputNumber}</span>
            <button className="headline btn delete" type="button">Excluir</button>
        </li>
    )
}