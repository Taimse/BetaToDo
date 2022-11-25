import React, { useEffect, useState } from 'react'
import style from './Task.module.css'
import { BsTrash } from 'react-icons/bs'
import cn from 'classnames'

export const Tasks = ({ whatToDo, todo, removeToDo, nowday, priorety }) => {
  return (
    <div className={style.task}>
      <div className={style.taskWTD}>
        <div className={style.title}>{nowday}</div>

        <div className={style.tasksContainer}>
          <div className={style.detailse}>
            {whatToDo}
            <span> {priorety && <span>High Priorety</span>}</span>
          </div>

          <BsTrash
            size={22}
            className={style.trah}
            onClick={() => removeToDo(todo.id)}
          />
        </div>
      </div>
    </div>
  )
}
