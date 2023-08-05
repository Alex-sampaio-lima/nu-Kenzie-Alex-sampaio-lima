import { useState } from "react"
import { Form } from "../../forms/Form"
import { List } from "../List"
import { TotalMoney } from "../TotalMoney"
import { v4 as uuivd4 } from "uuid"

export const TodoSections = () => {
    const [noteList, setnoteList] = useState([])

    console.log(noteList)
    const addNote = (formData) => {
        const newNote = { ...formData, id: uuivd4() }
        setnoteList([...noteList, newNote])
    }

    const removeNote = (removeId) => {
        const newNoteList = noteList.filter(note => note.id !== removeId)
        setnoteList(newNoteList)
    }

    return (
        <>
            <div>
                <Form addNote={addNote} />
                <List noteList={noteList} removeNote={removeNote} />
            </div>
            <TotalMoney noteList={noteList} />
            {/* <section className="margin">
                <div>
                    <h1>Valor Total</h1>
                    <p>O valor se refere ao saldo</p>
                    <span>R$ {sumMoney}</span>
                </div>
            </section> */}
        </>
    )
}