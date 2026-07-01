import { useState } from "react";
import '../styles/EditForm.css';

export default function EditForm({ sectionTitle, fieldList }) {    
    const [fields, setFields] = useState({});

    //function handleSubmit(e) {
    //    setFields[{...fields, fields.: e.target.value}]
    //}
    
    return(
        <>
            <h3>{sectionTitle}</h3>
            <form className={formatter(sectionTitle)}>
                <div className="fields">
                    {fieldList.map(field => {
                        const formattedField = formatter(field);
                        return(
                            <div className={formattedField} key={formattedField}>
                                <label>{field + ':'}</label>
                                <input></input>
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