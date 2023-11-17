import React, { ReactNode } from 'react'

type MainProps = {
  children: ReactNode
}

export default function TemplateAuth(props: MainProps) {
  return (<>{ props.children }</>)
}
