export const TextArea = ({ id, label, placeholder, value, setValue }) => {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <textarea 
                className="input Description"
                placeholder={placeholder}
                name={id}
                id={id}
                value={value}
                onChange={(event) => setValue(event.target.value)}
            ></textarea>
        </div>
    );
};
