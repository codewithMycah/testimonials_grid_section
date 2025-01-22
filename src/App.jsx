import React from 'react'

const App = () => {
  return (
    <div className='font-barlow bg-light-gray-blue'>
      <div id="container" className='h-full flex items-center justify-center mx-auto py-16 px-4'>
          <div className='grid grid-cols-1 md:grid-cols-4 grid-flow-row gap-6 [&_div]:bg-violet [&_div]:rounded-lg'>
            <div className='col-span-1 md:col-span-2 h-[300px]'>
              1
            </div>
            <div className='col-span-1 md:w-[250px] h-[300px]'>
              2
            </div>
            <div className='col-span-1 h-[300px] md:row-span-2 md:h-full'>
              3
            </div>
            <div className='col-span-1 w-[250px] h-[300px] '>
              4
            </div>
            <div className='col-span-1 md:col-span-2 h-[300px]'>
              5
            </div>
          </div>
      
      </div>
    </div>
  )
}

export default App
