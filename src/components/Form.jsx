import { useState, useEffect } from 'react'
import Error from './Error'

const Form = ({setpatients, patients, patientEdit, setPatientEdit}) => {
    const [patient, setpatient] = useState({
        petName: '',
        ownerName: '',
        email: '',
        registerDate: '',
        symptoms: ''
    })
    const [error, seterror] = useState(false)

    useEffect(() => {
        if(Object.keys(patientEdit).length > 0){
            setpatient(patientEdit)
        }
    }, [patientEdit])

    const generateId = () => {
        const random = Math.random().toString(36).substring(2)
        const date = Date.now().toString(36)
        return random + date
    }

    const handleChange = e => {
        const { name , value } = e.target
        setpatient(prevPatient => ({
            ...prevPatient,
            [name]: value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault()

        // Validación del formulario
        if(Object.values(patient).includes('')){
            seterror(true)
            return
        }
        seterror(false)

        
        if (patient.id) {
            // Editando el Registro
            const updatedPatients = patients.map( patientState => patientState.id === patient.id ? patient : patientState)

            setpatients(updatedPatients)
            setPatientEdit({})
        } else {
            // Nuevo registro
            patient['id'] = generateId()
            setpatients([...patients, patient])
        }

        // Reiniciar el form
        setpatient({
            petName: '',
            ownerName: '',
            email: '',
            registerDate: '',
            symptoms: '',
        })
    }


    return (
        <div className='md:w-1/2 lg:w-2/5'>
            <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>

            <p className='text-lg mt-5 text-center mb-10'>
                Añade Pacientes y {''}
                <span className='text-indigo-600 font-bold'>Administralos</span>
            </p>

            <form className='bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5' onSubmit={handleSubmit}>
                {error && <Error>Todos los campos son obligatorios</Error>}
                <div className='mb-5'>
                    <label htmlFor="petName" className='block text-gray-700 font-bold uppercase'>Nombre Mascota</label>
                    <input 
                        id='petName'
                        type="text"
                        placeholder='Nombre de la Mascota'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        value={patient.petName}
                        onChange={handleChange}
                        name='petName'
                    />
                </div>
                <div className='mb-5'>
                    <label htmlFor="ownerName" className='block text-gray-700 font-bold uppercase'>Nombre Dueño</label>
                    <input 
                        id='ownerName'
                        type="text"
                        placeholder='Nombre del Dueño'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        value={patient.ownerName}
                        onChange={handleChange}
                        name='ownerName'
                    />
                </div>
                <div className='mb-5'>
                    <label htmlFor="email" className='block text-gray-700 font-bold uppercase'>Email</label>
                    <input 
                        id='email'
                        type="email"
                        placeholder='Email de contacto'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        value={patient.email}
                        onChange={handleChange}
                        name='email'
                    />
                </div>
                <div className='mb-5'>
                    <label htmlFor="registerDate" className='block text-gray-700 font-bold uppercase'>Fecha de Registro</label>
                    <input 
                        id='registerDate'
                        type="date"
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        value={patient.registerDate}
                        onChange={handleChange}
                        name='registerDate'
                    />
                </div>
                <div className='mb-5'>
                    <label htmlFor="symptoms" className='block text-gray-700 font-bold uppercase'>Sintomas</label>
                    <textarea 
                        id="symptoms"
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md resize-none'
                        placeholder='Describe los Sintomas'
                        value={patient.symptoms}
                        onChange={handleChange}
                        name='symptoms' 
                    />
                </div>
                <input 
                    type="submit"
                    className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:cursor-pointer hover:bg-indigo-400 transition-colors'
                    value={ patient.id ? 'Editar Paciente' : 'Agregar Paciente'}
                />
            </form>
        </div>
    )
}

export default Form
