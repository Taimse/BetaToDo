import React from 'react'
import style from './NewItem.module.css'

export const NewItem = ({ setIsActive }) => {
  return (
    <div onClick={() => setIsActive(true)} className={style.NewItem}>
      New Item
    </div>
  )
}
