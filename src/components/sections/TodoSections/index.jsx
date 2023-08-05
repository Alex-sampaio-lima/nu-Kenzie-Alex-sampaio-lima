import { useState } from "react"
import { Form } from "../../forms/Form"
import { List } from "../List"
import { TotalMoney } from "../TotalMoney"
import { v4 as uuivd4 } from "uuid"

export const TodoSections = () => {
    const [noteList, setnoteList] = useState([])

    const addNote = (formData) => {
        const newNote = { ...formData, id: uuivd4() }
        setnoteList([...noteList, newNote])
    }

    const removeNote = (removeId) => {
        const newNoteList = noteList.filter(note => note.id !== removeId)
        setnoteList(newNoteList)
    }

    // const sumMoney = (value) => {
    //     const sum = 
    // }

    return (
        <>
            <Form addNote={addNote} />
            <List noteList={noteList} removeNote={removeNote} />
            <TotalMoney />
        </>
    )
}