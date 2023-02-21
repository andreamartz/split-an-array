// This component handles the form logic for the GroupByForm component, which is a child of this component.

import { useState } from 'react';
import GroupByForm from './GroupByForm';
import { splitArr } from './utils';

function GroupByFormPage() {
  const initialState = {
    groupBy: '', 
    message: '',
    success: false,
    splitArray: '',
  };
  const [form, setForm] = useState(initialState);
  const regex = /^\d*$/;

  // validate user input and update state
  const handleFormChange = async (evt) => {
    const { name, value } = evt.target;

    if (!regex.test(value)) {
      setForm({
        ...form,
        [name]: value,
        success: false,
        message: "Only digits are allowed. Please try again.",
      });
    } else if (parseInt(value) < 1) {
      setForm({
        ...form, 
        [name]: value,
        success: false, 
        message: "Please enter a positive whole number.",
      });
    } else {
      setForm({
        ...form,
        [name]: value,
        success: true,
        message: '',
      });
    }
  }

  const handleFormSubmit = async (evt) => {
    evt.preventDefault();
    const { groupBy } = form;

    if (parseInt(groupBy) >= 1) {
      const splitArray = splitArr(groupBy);
      setForm({...form,
        groupBy: '',
        success: true,
        message: `The array will be divided into subarrays of length ${groupBy}.`,
        splitArray,
      });
    }
  }

  return (
    <GroupByForm 
      handleFormChange={handleFormChange} 
      handleFormSubmit={handleFormSubmit}
      groupBy={form.groupBy}
      message={form.message}
      success={form.success}
      splitArray={form.splitArray}
    />
  );
}

export default GroupByFormPage;