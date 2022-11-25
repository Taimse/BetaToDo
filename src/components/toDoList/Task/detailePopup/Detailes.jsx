import React, { useState } from 'react'
import style from './Detailes.module.css'
import save from '../../../../assets/images/save.png'
import { SlClose } from 'react-icons/sl'
import classNames from 'classnames'
import { Formik, Form, Field } from 'formik'
import { Priority } from './Priorety/Priorety'
function makeId(length) {
  var result = ''
  var characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  var charactersLength = characters.length
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}
export const Detailes = ({
  todo,
  setTodo,
  setIsTodo,
  isActive,
  setNowDay,
  priorety,
  SetPriorety,
}) => {
  const [task, setTask] = useState('')
  {
    if (isActive) {
      return (
        <div className={style.detailesOpen}>
          <div className={style.ditalesC}>
            <SlClose
              className={style.close}
              onClick={() => {
                setIsTodo(false)
              }}
            />
            <h2 className={style.title}>Detailes</h2>

            <Priority />

            {/*   todo: выбор даты 
                      выбор приоритета */}
            <div>
              <Formik
                initialValues={{
                  nowDay: 'Not for one day)',
                  todo: '',
                  priority: false,
                }}
                onSubmit={(values, actions) => {
                  const addNewTask = (whatToDo) => {
                    setTodo([
                      {
                        id: makeId(10),
                        isCompleted: false,
                        whatToDo,
                        currentDay: values.nowDay,
                        priority: values.priority,
                      },
                      ...todo,
                    ])
                  }
                  setNowDay(values.nowDay)
                  setTask(values.todo)
                  addNewTask(values.todo)
                  SetPriorety(values.priority)
                }}
              >
                {(props) => (
                  <Form>
                    <div className={style.containerInput}>
                      <Field
                        type="textarea"
                        name="todo"
                        placeholder="What to do"
                        className={style.whatTask}
                      />
                      <div className={style.selectTask}>
                        <button className={style.button} type="submit">
                          <img className={style.img} src={save} alt="" />
                          <span className={style.text}>Save</span>
                        </button>
                        <Field
                          as="select"
                          name="nowDay"
                          className={style.select}
                        >
                          <option value={'Monday'}>Понедельник</option>
                          <option value={'Tuesday'}>Вторник</option>
                          <option value={'Wednesday'}>Среда</option>
                          <option value={'Thirsday'}>Четверг</option>
                          <option value={'Friday'}>Пятница</option>
                          <option value={'Saturday'}>Суббота</option>
                          <option value={'Sunday'}>Воскресенье</option>
                        </Field>
                        <Field type="checkbox" name="priority" />
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      )
    }
  }
  return <div className={style.detailes}></div>
}
