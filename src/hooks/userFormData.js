import { useRef, useState } from "react";

export const useFromData = () => {
    const [inputs, setInputs] = useState({
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
        address: ""
    });

    const handleChange = (event) => {
        const { id, value } = event.target;

        setInputs((prevInputs) => ({
            ...prevInputs,
            [id]: value,
        }));
    };

    return { inputs, handleChange }
}