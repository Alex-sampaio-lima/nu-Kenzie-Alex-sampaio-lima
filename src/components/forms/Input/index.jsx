export const Input = ({ label, id, type, placeholder, value, setValue }) => {

    return (
        <div className="spaceTextInputs">
            <label className="headline spaceTextInputs titleInputs" htmlFor={id}>{label}</label>
            <input
                className="input Money headline"
                placeholder={placeholder}
                type={type}
                name={id}
                id={id}
                value={value}
                onChange={(event => setValue(event.target.value))}
            />
        </div>
    )
}