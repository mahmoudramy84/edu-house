import React from 'react'
import { FaMagnifyingGlass } from 'react-icons/fa6'

const Search = () => {
  return (
    <div
    className="ring-2 ring-gray-300 rounded-full px-2 text-xs
flex items-center"
  >
    <FaMagnifyingGlass className="text-gray-400" cursor="pointer" />
    <input
      type="text"
      placeholder="Search..."
      className="outline-none w-[150px] bg-transparent p-2"
    />
  </div>  )
}

export default Search