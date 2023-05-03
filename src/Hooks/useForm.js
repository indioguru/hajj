import { useState } from "react";

export const useForm = (initialForm) => {
  const [formState, setFormState] = useState(initialForm);

  const onChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const onResetForm = () =>{
    setFormState(initialForm)
  }

  return {
    ...formState,
    formState,
    onChange,
    onResetForm
  };
};
