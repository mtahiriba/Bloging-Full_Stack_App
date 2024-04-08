import React from 'react'

const Layout = ({title, children}) => {
  return (
    <div className="w-full h-screen flex justify-center items-center ">
      <div className="w-[400px] rounded-lg bg-slate-300 px-5 py-10 flex flex-col gap-5 shadow-lg">
        <span className=" flex justify-center items-center text-2xl font-semibold">
          {title}
        </span>
        {children}
      </div>
    </div>
  )
}

export default Layout