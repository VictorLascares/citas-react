import { useState, useEffect } from 'react';
import Header from "./Header"
import Form from "./Form"
import PatientList from "./PatientList"

function App() {
  const [patients, setpatients] = useState([])
  const [patient, setpatient] = useState({})

  useEffect(() => {
    const getLocalStorage = () => {
      const patientsLS = JSON.parse(localStorage.getItem('patients')) ?? []
      setpatients(patientsLS);
    }
    getLocalStorage();
  }, [])

  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(patients))
  }, [patients])

  const deletePatient = id => {
    const updatedPatients = patients.filter(element => element.id !== id)
    setpatients(updatedPatients)
  }

  return (
    <div className="container mx-auto mt-20">
      <Header/>
      <div className="mt-12 md:flex">
        <Form
          setpatients = {setpatients}
          patients = {patients}
          patientEdit = {patient}
          setPatientEdit = {setpatient}
        />
        <PatientList
          patients={patients}
          setPatient={setpatient}
          deletePatient={deletePatient}
        />
      </div>
    </div>
  )
}

export default App
