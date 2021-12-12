import { useState, useEffect } from 'react'

const Form = () => {
    const [patient, setpatient] = useState({
        petName: '',
        ownerName: '',
        email: '',
        registerDate: '',
        symptoms: ''
    })

    const handleChange = e => {
        const { name , value } = e.target
        setpatient(prevPatient => ({
            ...prevPatient,
            [name]: value
        }))
    }


    return (
        <div className='md:w-1/2 lg:w-2/5'>
            <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>

            <p className='text-lg mt-5 text-center mb-10'>
                Añade Pacientes y {''}
                <span className='text-indigo-600 font-bold'>Administralos</span>
            </p>

            <form className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>
                <div className='mb-5'>
                    <label htmlFor="petName" className='block text-gray-700 font-bold uppercase'>Nombre Mascota</label>
                    <input 
                        id='petName'
                        type="text"
                        placeholder='Nombre de la Mascota'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        value={patient.pet}
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
                    <label htmlFor="symptoms" className='block text-gray-700 font-bold uppercase'>Fecha de Registro</label>
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
                    value="Agregar Paciente"
                />
            </form>
        </div>
    )
}

export default Form
