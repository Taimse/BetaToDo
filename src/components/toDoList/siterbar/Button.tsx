import React from 'react'
import style from './Siterbar.module.css'
type DayPropsType = {
  dayName: string
  setNowDay: (nowday: string) => void
  setTodo: (todo: any) => void
  todo: Array<any>
}
export const Day: React.FC<DayPropsType> = ({
  dayName,
  setNowDay,
  setTodo,
  todo,
}) => {
  const changeCurrentDay = (select: string) => {
    setTodo([...todo].filter((CD) => CD.currentDay === select))
  }

  return (
    <div>
      <button
        className={style.button}
        onClick={() => {
          setNowDay(dayName)
          changeCurrentDay(dayName)
        }}
      >
        {dayName}
      </button>
    </div>
  )
}
