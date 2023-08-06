import style from "../TextArea/style.module.scss"

export const TextArea = ({ id, label, placeholder, value, setValue }) => {
    return (
        <div className="spaceTextInputs">
            <label className="headline titleInputs" htmlFor={id}>{label}</label>
            <textarea
                className={`${style.textArea} input Description headline`}
                placeholder={placeholder}
                name={id}
                id={id}
                value={value}
                onChange={(event) => setValue(event.target.value)}
            ></textarea>
        </div>
    );
};
