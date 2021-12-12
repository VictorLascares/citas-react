import Header from "./Header"
import Form from "./Form"
import PatientList from "./PatientList"

function App() {

  return (
    <div className="container mx-auto mt-20">
      <Header/>
      <div className="mt-12 md:flex">
        <Form/>
        <PatientList/>
      </div>
    </div>
  )
}

export default App
