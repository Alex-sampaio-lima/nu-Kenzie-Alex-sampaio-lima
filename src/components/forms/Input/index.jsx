import style from "./style.module.scss"

export const Input = ({ label, id, prefix, value, setValue, inputRef, ...rest }) => {
    return (
        <div className={style.field}>
            <label className={style.label} htmlFor={id}>{label}</label>
            <div className={style.control}>
                {prefix ? <span className={style.prefix} aria-hidden="true">{prefix}</span> : null}
                <input
                    className={style.input}
                    name={id}
                    id={id}
                    ref={inputRef}
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                    {...rest}
                />
            </div>
        </div>
    )
}
