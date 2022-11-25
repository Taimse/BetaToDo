import React from 'react'
import style from './Footer.module.css'
type FooterType = {} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const Footer: React.FC<FooterType> = () => {
  return (
    <div className={style.footer}>
      <div>Made by Timofey</div>
    </div>
  )
}
