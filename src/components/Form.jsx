import { useState } from "react";
import '../styles/Form.css';

export default function Form({ sectionTitle, fieldList }) {    
    const [fields, setFields] = useState({});
    const [activeIndex, setActiveIndex] = useState(0);

    function handleSubmit(e) {
        e.preventDefault();
        const id = 'edit-form-' + formatter(sectionTitle);
        const form = document.getElementById(id);
        const formData = new FormData(form);
        const updatedFields = {};
        for (const [key, value] of formData) {
            console.log(key + ": " + value);
            updatedFields[key] = value;
        }

        for (const formElement of formData) {
            console.log(formElement);
        }

        setFields(updatedFields);
        setActiveIndex(1);
    }

    function EditForm({ isActive, onHide, onSave, content }) {
        if (isActive) {
            return(
                <form className="edit-form" id={'edit-form-' + formatter(sectionTitle)}>
                    <div className="fields">
                        {fieldList.map(field => {
                            const formattedField = formatter(field);
                            return(
                                <div className={formattedField} key={formattedField}>
                                    <label htmlFor={formattedField}>{field + ':'}</label>
                                    {
                                        isMultiLine(formattedField) ?
                                        <textarea id={formattedField} name={formattedField} form={'edit-form-' + formatter(sectionTitle)} value={content[formattedField]}></textarea> :
                                        <input id={formattedField} name={formattedField} value={content[formattedField]} type={inputType(formattedField)}></input>
                                    }
                                </div>
                            )
                        })}
                    </div>
                    <button onClick={onSave}>Submit</button>
                </form>
            )
        }
    }

    function ViewForm({ isActive, onHide, content }) {
        if (isActive) {
            return(
                <form className="view-form" id={'view-form-' + formatter(sectionTitle)}>
                    <div className="fields">
                        {fieldList.map(field => {
                            const formattedField = formatter(field);
                            return(
                                <div className={formattedField} key={formattedField}>
                                    <label htmlFor={formattedField}>{field + ':'}</label>
                                    {
                                        isMultiLine(formattedField) ?
                                        <textarea id={formattedField} name={formattedField} form={'view-form-' + formatter(sectionTitle)} value={content[formattedField]} disabled></textarea> :
                                        <input id={formattedField} name={formattedField} value={content[formattedField]} type={inputType(formattedField)} disabled></input>
                                    }
                                </div>
                            )
                        })}
                    </div>
                    <button onClick={onHide}>Edit</button>
                </form>
            )
        }
    }
    
    return(
        <>
            <h3>{sectionTitle}</h3>
            <EditForm isActive={activeIndex === 0} onSave={handleSubmit} content={fields}/>
            <ViewForm isActive={activeIndex === 1} onHide={() => setActiveIndex(0)} content={fields}/>
        </>
    )
}

function formatter(text) {
    return text.toLowerCase().replaceAll(" ", "-");
}

function inputType(text) {
    if(text.includes("date")) {
        return "date";
    } else if (text.includes("email")) {
        return "email";
    } else if (text.includes("phone")) {
        return "tel";
    } else {
        return "text";
    }
}

function isMultiLine(text) {
    return text.includes("responsibilities");
}