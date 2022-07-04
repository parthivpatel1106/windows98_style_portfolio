import React from 'react'

export const MenuList = (props) => {
    let dropdown=(!props.dropdown)?"":"dropdown-content"
    return (
    <ul className={`mb-item-list ${dropdown}`}>
        {props.children}
    </ul>
  )
}
