import { FormDataObject } from "../interfaces/formData";
import { url } from "./url";

export const sendProject = async (formData: FormDataObject) => {
    
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    });

    if( response.status == 201 ){
        const project = await response.json();
        return project;
    } else {
        throw new Error('Failed to create project');
    }
    
};

