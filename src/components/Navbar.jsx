import React from 'react'
import { useState } from 'react'

export default function Navbar({ currentState }) {
  const [open, setOpen] = useState(currentState)
  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <div className="flex items-center justify-between h-20 px-5 mx-auto">
      <div>
        <i
          className="p-3 bg-gray-800 rounded-full cursor-pointer fa-solid fa-bars lg:hidden text-gray-50"
          onClick={handleOpen}
        ></i>
      </div>
      {/* aqui va el dropdown de usuario */}
      <div>dropdown</div>
    </div>
  )
}
