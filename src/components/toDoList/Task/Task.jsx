import React, { ReactElement, useEffect, useState } from 'react'
import style from './Task.module.css'
import { BsTrash } from 'react-icons/bs'
import { Tasks } from './Tasks'
import { NewItem } from './detailePopup/addNewTask/NewItem'

export let Task = ({ nowday, todo, removeToDo, setIsActive, priorety }) => {
  return (
    <div className={style.Task}>
      <>
        <h2 className={style.title}>What your plans ? ) </h2>
        <div className={style.todoContainer}>
          <NewItem setIsActive={setIsActive} />
          {todo.map((todo) => {
            return (
              <div>
                <Tasks
                  nowday={todo.currentDay}
                  key={todo.id}
                  whatToDo={todo.whatToDo}
                  isCompleted={todo.isCompleted}
                  todo={todo}
                  removeToDo={removeToDo}
                  priorety={priorety}
                />
              </div>
            )
          })}
        </div>
      </>
    </div>
  )
}
