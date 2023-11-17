import React, { ReactNode } from 'react'

type MainProps = {
  children: ReactNode
}

export default function TemplateMain(props: MainProps) {
  return (<>{ props.children }</>)
}
