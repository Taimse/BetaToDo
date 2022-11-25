import React, { useEffect, useState } from 'react'
import { Footer } from './components/toDoList/Footer/Footer'
import { Task } from './components/toDoList/Task/Task'
import { HeadeToDo } from './components/toDoList/HeadeToDo/headeToDo'
import { Siterbar } from './components/toDoList/siterbar/Siterbar'
import style from './ToDoList.module.css'
import { Detailes } from './components/toDoList/Task/detailePopup/Detailes'
export const ToDoList = () => {
  const data = [
    {
      id: 'sjlhasdfjlhjlasd',
      isCompleted: false,
      whatToDo: 'доделать проект',
      currentDay: 'Monday',
      priority: 'High Priority',
    },
    {
      id: 'sjlhasdfjlhj',
      isCompleted: false,
      whatToDo: 'дочитать главу книги',
      currentDay: 'Monday',
      priority: 'High Priority',
    },
    {
      id: 'dfjlhjlasd',
      isCompleted: false,
      whatToDo: 'просмотреть фильм',
      currentDay: 'Monday',
      priority: 'High Priority',
    },
  ]
  const [nowDay, setNowDay] = useState('Monday')
  const [todo, setTodo] = useState(data)
  const [isActive, setIsActive] = useState(false)
  const [priorety, SetPriorety] = useState(false)

  const changeTodo = (slectedId: string) => {
    let copyTodo = [...todo]
    const current = copyTodo.find((t) => t.id === slectedId)
    if (current != undefined) current.isCompleted = !current.isCompleted
    setTodo(copyTodo)
    console.log({ copyTodo })
  }
  const removeToDo = (slectedId: string) => {
    setTodo([...todo].filter((t) => t.id !== slectedId))
    console.log('remove')
  }

  return (
    <div className={style.container}>
      <HeadeToDo />
      <Siterbar todo={todo} setTodo={setTodo} setNowDay={setNowDay} />

      <Detailes
        todo={todo}
        setTodo={setTodo}
        setIsTodo={setIsActive}
        isActive={isActive}
        setNowDay={setNowDay}
        priorety={priorety}
        SetPriorety={SetPriorety}
      />

      <Task
        nowday={nowDay}
        todo={todo}
        removeToDo={removeToDo}
        setIsActive={setIsActive}
        priorety={priorety}
      />
      <Footer />
    </div>
  )
}
