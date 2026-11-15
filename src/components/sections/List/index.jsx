import { ListSection } from "./ListSection"
import style from "./style.module.scss"

export const List = ({ noteList, removeNote }) => {
    return (
        <section className={`${style.listCard} card`} aria-labelledby="list-title">
            <div className={style.heading}>
                <h2 className={style.title} id="list-title">Lançamentos</h2>
                {noteList.length > 0 ? <span className={style.count}>{noteList.length}</span> : null}
            </div>

            {noteList.length === 0 ? (
                <div className={style.empty}>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="3" y="5" width="18" height="14" rx="3" />
                        <path d="M3 10h18M7 15h4" />
                    </svg>
                    <p className={style.emptyTitle}>Nenhum lançamento ainda</p>
                    <p className={style.emptyText}>Adicione uma entrada ou despesa para começar.</p>
                </div>
            ) : (
                <ul className={style.list}>
                    {noteList.map((note) => (
                        <ListSection key={note.id} note={note} removeNote={removeNote} />
                    ))}
                </ul>
            )}
        </section>
    )
}
