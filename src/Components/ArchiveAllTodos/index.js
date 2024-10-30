import React, { useState } from 'react'
import './index.css';
import { FaTrash, FaArchive } from 'react-icons/fa'

const ArchiveAllTodos = () => {


  return (
    <div className="container-archive-all-todos">
      <div className="children-container-archive-all-todos">
        <input className="input-archive-all-todos" type="checkbox" />
        <FaArchive className="archive-all-todos-icon"/>
      </div>
    </div>
  );
}

export default ArchiveAllTodos;