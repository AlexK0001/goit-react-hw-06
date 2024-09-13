import React from "react";
import css from './Contact.module.css'

export default function Contact( {contact, onDelete}) {
  const { id, name, number } = contact;

    return (
    <div className={css.container} key={contact.id}>
      <div className={css.text}>
        <p>{contact.name}</p>
        <p>{contact.number}</p>
      </div>
        <button className={css.btn} onClick={() => onDelete(id)}>Delete</button>
    </div>
    )
}