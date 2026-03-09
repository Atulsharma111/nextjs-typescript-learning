import React from 'react'
import Image from 'next/image'
function page() {
  return (
    <div>
      about page

     <Image src={"/react.png"} alt='vercel' width={200} height={200}/>
    </div>
  )
}

export default page
