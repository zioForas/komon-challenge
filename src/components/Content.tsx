import React from 'react'
import Image from 'next/image'
import Blob from './Blob'
// import Social from './Social'
import joined from "../../public/joined.svg"
import member from "../../public/member.svg"


function Content() {
    let today = new Date().toISOString().slice(0,10)
  return (
    <main className="content h-[100vh] py-5 min-h-screen">
        <div className="flex justify-around max-h-[400px] ">   
            <div className='pt-20 flex flex-col pl-7 md:pl-0'>  {/* col1 */}
                <h1 className='font-extrabold text-2xl   md:text-4xl mb-14'>¡Hola, <br />
                @Usuario!</h1>
                 <h3 className='font-semibold md:text-lg text-sm'> <Image className='inline' src={joined} alt="" /> Joined {today}</h3>
                <h3 className='font-semibold md:text-lg text-sm'> <Image className='inline' src={member} alt="" /> Member of 0 communities</h3>
                </div>
            
            <div>        {/* col 2 */}
                <div>
                        <Blob/>
                    <img alt='' src="https://storage.googleapis.com/komon-client-production/0wugan9yf60gmg1cv9h8qet9v40m" className='h-72 w-72 bg-cover opacity-0'/>
                </div>
            </div>
        </div>
        <div className='md:mx-36 mx-6 '>
           <h1 className='md:text-2xl text:xl font-bold'> Your Linked Accounts</h1>
        {/* <Social></Social> */}
        </div>
  </main>
  )
}

export default Content