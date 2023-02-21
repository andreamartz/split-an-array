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
    if (parseInt(groupBy) >= 1) {
      const splitArray = splitArr(groupBy);
      setForm({...form,
        groupBy,
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