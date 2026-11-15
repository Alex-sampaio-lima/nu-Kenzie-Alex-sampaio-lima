import { useEffect, useState } from "react"
import { Form } from "../../forms/Form"
import { List } from "../List"
import { TotalMoney } from "../TotalMoney"
import { v4 as uuidv4 } from "uuid"
import style from "./style.module.scss"

const STORAGE_KEY = "@nukenzie:notes"

const loadNotes = () => {
    try {
        const saved = JSON.parse(localStorage.getItem(STORAGE_KEY))
        return Array.isArray(saved) ? saved : []
    } catch {
        return []
    }
}

export const TodoSections = () => {
    const [noteList, setNoteList] = useState(loadNotes)

    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(noteList))
        } catch {
            // sem armazenamento disponível: a lista vale só para esta sessão
        }
    }, [noteList])

    const addNote = (formData) => {
        setNoteList((list) => [{ ...formData, id: uuidv4() }, ...list])
    }

    const removeNote = (removeId) => {
        setNoteList((list) => list.filter((note) => note.id !== removeId))
    }

    return (
        <div className={style.page}>
            <TotalMoney noteList={noteList} />
            <div className={style.columns}>
                <Form addNote={addNote} />
                <List noteList={noteList} removeNote={removeNote} />
            </div>
        </div>
    )
}
