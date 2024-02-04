import React from 'react';
import Style from "./Dropdown.module.scss"

const Dropdown = () => {
  return (
    <select className={Style.Dropdown} title='SELECT SIZE'>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
    </select>
  )
}

export default Dropdown;