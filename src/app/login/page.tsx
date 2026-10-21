"use client"

import axios from "axios"
import { useRef } from "react"

const page = () => {



    const name = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)



  async function handleclick() {

    console.log(name.current?.value)
    console.log(password)

    axios.post("/api/login",
      {
        name1: name.current?.value,
        password: password.current?.value
      }
    ).then((res) => { console.log(res.data) }).catch((err) => { console.log(err) })

  }

  return (

    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col">
        <input type="text" className="border" ref={name} />
        <input type="text" className="border" ref={password} />
        <button onClick={handleclick} className="text-black">click</button>

      </div>
    </div>

  )
}

export default page