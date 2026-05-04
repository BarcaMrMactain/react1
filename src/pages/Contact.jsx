import React, { useState } from 'react'

const Contact = () => {

  const [name, setName] = useState("Karen")
  const [lastName, setLastName] = useState("Kowalski")

  return (
    <div className="p-6">

      {/* <Title>{appConfig.compaName} | Kontakt os</Title> */}
        
      <h1 className="text-xl font-bold">Indtast et navn</h1>

      <p className="mt-2 text-gray-300">
        Navnet er: {name} og efternavnet er: {lastName}
      </p>

      <input 
        value={name}
        onChange={e => setName(e.target.value)} 
        type="text"
        className="border mt-5 p-2 rounded bg-transparent"
        placeholder="skriv et navn" 
      />

      <input 
        value={lastName}
        onChange={e => setLastName(e.target.value)}
        type="text"
        className="border mt-5 p-2 rounded bg-transparent block"
        placeholder="skriv dit efternavn" 
      />

    </div>
  )
}

export default Contact