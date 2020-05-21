import React, { Fragment, useContext } from 'react'
import { AuthContext } from '../contexts/auth'

export default ({ renderLogin, renderTodos }) => {
  const { currentUser } = useContext(AuthContext)

  return (
    <Fragment>
      {currentUser ? renderTodos() : renderLogin()}
    </Fragment>
  )
}