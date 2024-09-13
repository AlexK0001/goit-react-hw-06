import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css'

export default function ContactForm({ onAddContact }) {
  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, 'Name must be at least 3 characters long')
        .max(50, 'Name cannot exceed 50 characters')
        .required('Name is required'),
      number: Yup.string()
        .min(3, 'Number must be at least 3 characters long')
        .max(50, 'Number cannot exceed 50 characters')
        .required('Number is required'),
    }),
    onSubmit: (values, { resetForm }) => {
      const newContact = {
        id: nanoid(),
        name: values.name,
        number: values.number,
      };
      onAddContact(newContact);
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={css.container}>
      <div className={css.container}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div>{formik.errors.name}</div>
        ) : null}
      </div>
      <div className={css.container}>
        <label htmlFor="number">Number</label>
        <input
          id="number"
          name="number"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.number}
        />
        {formik.touched.number && formik.errors.number ? (
          <div>{formik.errors.number}</div>
        ) : null}
      </div>
      <button type="submit">Add Contact</button>
    </form>
  );
}
