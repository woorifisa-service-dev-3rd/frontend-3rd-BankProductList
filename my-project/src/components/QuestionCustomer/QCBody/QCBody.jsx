import React from 'react'
import QCBodyList from './QCBodyList';


const QCBody = ({ lists, onUpdate, ondelete }) => {



  return (
    <ul>
      {lists.map(list => <QCBodyList list={list} key={list.id} onUpdate={onUpdate} onDelete={ondelete}/>)}
    </ul>

  )
}

export default QCBody