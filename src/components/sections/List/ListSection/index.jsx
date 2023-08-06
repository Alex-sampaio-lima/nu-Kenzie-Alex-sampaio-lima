import style from "../ListSection/style.module.scss"

export const ListSection = ({ description, id, inputNumber, select, removeNote }) => {
    return (
        <li className={`${style.liListSection}`}>
            <div className={`${style.listTitleContainer}`}>
                <h2 className="title two">{description}</h2>
                <p className="headline">{select}</p>
            </div>
            <div className={`${style.inputsListContainer}`}>
                <span className="headline">{inputNumber}</span>
                <button className="headline btn delete" type="button" onClick={() => removeNote(id)}>Excluir</button>
            </div>
        </li>
    )
}

