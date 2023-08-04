import { ListSection } from "./ListSection"


export const List = ({ noteList }) => {
    return (
        <section className="margin">
            <ul>
                {noteList.map((note) => (
                    <ListSection
                        key={note.id}
                        description={note.description}
                        inputNumber={note.inputNumber}
                        select={note.select} />
                ))}
            </ul>
        </section>
    )
}