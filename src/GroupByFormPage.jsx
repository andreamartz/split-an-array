import { useState } from 'react';
import GroupByForm from './GroupByForm';
// import { validateGroupBy, splitArr } from './utils';

function GroupByFormPage() {
  const initialState = {
    groupBy: '', 
    message: '',
    success: false,
  };
  const [form, setForm] = useState(initialState);
  const regex = /^\d*$/;

  const handleFormChange = async (evt) => {
    const { name, value } = evt.target;

    if (!regex.test(value)) {
      setForm({
        ...form,
        success: false,
        message: "Only digits are allowed. Please try again.",
      });
    } else {
      setForm({
        ...form,
        [name]: value,
        success: true,
        message: '',
      });
    }
    console.log("FORM: ", form);
  }

  const handleFormSubmit = async (evt) => {
    evt.preventDefault();
    const {value} = evt.target;

    if (!regex.test(value)) {
      setForm({
        ...form,
        success: false,
        message: "Only digits are allowed. Please try again."
      })
    }
    const { groupBy } = form;
    if (groupBy < 1) {
      setForm({...form, 
        groupBy: '',
        success: false, 
        message: "Please enter a positive whole number.",
      });
    }
    if (parseInt(groupBy) > 0){
      setForm({...form,
        groupBy,
        success: true,
        message: "Success",
      });
    }

    console.log(form.groupBy, form.message);
  }

  return (
    <GroupByForm form={form} 
      setForm={setForm} 
      handleFormChange={handleFormChange} 
      handleFormSubmit={handleFormSubmit}
      message={form.message}
      success={form.success}
    />
  )
}

export default GroupByFormPage;