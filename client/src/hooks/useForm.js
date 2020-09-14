import { useState } from "react";

const useForm = (initialValue) => {

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [values, setValues] = useState(initialValue);

    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
        console.log(values);
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        setShowSuccessMessage(true);
        console.log(showSuccessMessage);
      };

      return[showSuccessMessage, values, handleChanges, handleSubmit]

}

export default useForm;