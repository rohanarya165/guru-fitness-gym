import React from 'react'
import UserTable from '../userTable/UserTable'

const CustomerData = () => {
  return (
    <div>
              <div className=" drop-shadow-2xl bg-white  p-8 rounded-lg col-span-2">
          <div className="flex justify-between">
            <p className="text-[#ff0000] text-[30px]">Customer Data</p>
          </div>
          <div>
            <UserTable/>
          </div>
        </div>
    </div>
  )
}

export default CustomerData
