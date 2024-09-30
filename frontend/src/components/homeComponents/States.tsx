import React from 'react'
import StatCard from './StatCard'
import { FaBookOpen, FaChalkboardTeacher, FaUserGraduate } from 'react-icons/fa'

const States = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 py-8 relative z-10 bg-gray-800 bg-opacity-70 p-8 rounded-lg">
    <StatCard
      Icon={FaUserGraduate}
      number={"50,000+"}
      label={"Students Enrolled"}
    />
    <StatCard
      Icon={FaBookOpen}
      number={"200+"}
      label={"Courses Available"}
    />
    <StatCard
      Icon={FaChalkboardTeacher}
      number={"150+"}
      label={"Expert Instructors"}
    />
  </div>
  )
}

export default States