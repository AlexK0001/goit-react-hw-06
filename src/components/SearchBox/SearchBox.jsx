import React from "react";
import css from './SeachBox.module.css'

export default function SearchBox({ value, onChange }) {
    return (
        <div className={css.container}>
        <label htmlFor="seach">Find contacts by name</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search..."
      />
      </div>
    );
  }