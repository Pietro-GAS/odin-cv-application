import { useState } from "react";
import '../styles/EditForm.css';

export default function EditForm({ sectionTitle, fieldList }) {    
    const [fields, setFields] = useState({});

    function handleSubmit(e) {
        e.preventDefault();
        const id = 'form-' + formatter(sectionTitle);
        const form = document.getElementById(id);
        const formData = new FormData(form);
        const updatedFields = {};
        for (const [key, value] of formData) {
            console.log(key + ": " + value);
            updatedFields[key] = value;
        }
        setFields(updatedFields);
    }
    
    return(
        <>
        <h3>{sectionTitle}</h3>
            <form id={'form-' + formatter(sectionTitle)} onSubmit={handleSubmit}>
                <div className="fields">
                    {fieldList.map(field => {
                        const formattedField = formatter(field);
                        return(
                            <div className={formattedField} key={formattedField}>
                                <label htmlFor={formattedField}>{field + ':'}</label>
                                <input id={formattedField} name={formattedField}></input>
                            </div>
                        )
                    })}
                </div>
                <button>Submit</button>
            </form>
        </>
    )
}

function formatter(text) {
    return text.toLowerCase().replace(" ", "-");
}