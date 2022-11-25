import React from 'react'
import { Day } from './Button'
import style from './Siterbar.module.css'
type SiterBarType = {
  setNowDay: (nowday: string) => void
  setTodo: (todo: any) => void
  todo: Array<any>
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>
export const Siterbar: React.FC<SiterBarType> = ({
  setNowDay,
  setTodo,
  todo,
}) => {
  return (
    <div className={style.siterbar}>
      <h2 className={style.title}>Days</h2>
      <Day
        dayName="Monday"
        setNowDay={setNowDay}
        setTodo={setTodo}
        todo={todo}
      />
      <Day
        dayName="Tuesday"
        setNowDay={setNowDay}
        setTodo={setTodo}
        todo={todo}
      />
      <Day
        dayName="Wednesday"
        setNowDay={setNowDay}
        setTodo={setTodo}
        todo={todo}
      />
      <Day
        dayName="Thirsday"
        setNowDay={setNowDay}
        setTodo={setTodo}
        todo={todo}
      />
      <Day
        dayName="Friday"
        setNowDay={setNowDay}
        setTodo={setTodo}
        todo={todo}
      />
      <Day
        dayName="Saturday"
        setNowDay={setNowDay}
        setTodo={setTodo}
        todo={todo}
      />
      <Day
        dayName="Sunday"
        setNowDay={setNowDay}
        setTodo={setTodo}
        todo={todo}
      />
    </div>
  )
}
