import { ListSection } from "./ListSection"
import style from "../List/style.module.scss"

export const List = ({ noteList, removeNote }) => {

    return (
        <section className="margin">
            <h1 className={`${style.titleContainer} title two`}>{noteList === "" ? "Resumo Financeiro": "Você ainda não possui nenhum lançamento"}</h1>
            <ul className={`${style.ulListSection}`}>
                {noteList.map((note) => (
                    <ListSection
                        key={note.id}
                        id={note.id}
                        description={note.description}
                        inputNumber={note.inputNumber.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                        select={note.select}
                        removeNote={removeNote}
                    />
                ))}
            </ul>
        </section>
    )
}