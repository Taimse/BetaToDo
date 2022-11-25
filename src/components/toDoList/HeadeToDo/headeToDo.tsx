import React from 'react'
import style from './HeadeToDo.module.css'
import Logo from '../../../assets/images/Logo.png'
type HeaderToDoType = {} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>
export const HeadeToDo: React.FC<HeaderToDoType> = (props) => {
  return (
    <div className={style.header}>
      <img src={Logo} className={style.logo} />
      <h2 className={style.title}>YourTodo</h2>
    </div>
  )
}
