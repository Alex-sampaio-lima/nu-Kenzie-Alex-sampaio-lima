import { ListSection } from "./ListSection"


export const List = ({ noteList, removeNote }) => {
    return (
        <section className="margin">
            <ul>
                {noteList.map((note) => (
                    <ListSection
                        key={note.id}
                        id={note.id}
                        description={note.description}
                        inputNumber={note.inputNumber}
                        select={note.select}
                        removeNote={removeNote}
                    />
                ))}
            </ul>
        </section>
    )
}