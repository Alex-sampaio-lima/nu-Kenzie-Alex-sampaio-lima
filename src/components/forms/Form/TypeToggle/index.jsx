import style from "./style.module.scss"

const OPTIONS = ["Entrada", "Despesa"]

export const TypeToggle = ({ value, setValue }) => {
    return (
        <fieldset className={style.fieldset}>
            <legend className={style.legend}>Tipo</legend>
            <div className={style.options}>
                {OPTIONS.map((option) => (
                    <label key={option} className={`${style.option} ${style[option.toLowerCase()]}`}>
                        <input
                            className="visuallyHidden"
                            type="radio"
                            name="type"
                            value={option}
                            checked={value === option}
                            onChange={() => setValue(option)}
                        />
                        <span>{option}</span>
                    </label>
                ))}
            </div>
        </fieldset>
    )
}
