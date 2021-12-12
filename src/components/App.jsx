import { useState } from 'react';
import Header from "./Header"
import Form from "./Form"
import PatientList from "./PatientList"

function App() {
  const [patients, setpatients] = useState([])

  return (
    <div className="container mx-auto mt-20">
      <Header/>
      <div className="mt-12 md:flex">
        <Form
          setpatients = {setpatients}
          patients = {patients}
        />
        <PatientList/>
      </div>
    </div>
  )
}

export default App
