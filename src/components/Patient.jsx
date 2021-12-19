
const Patient = ({patient, setPatient, deletePatient}) => {
    const {petName, ownerName, email, registerDate, symptoms, id} = patient

    const handleDelete = () => {
        const answer = confirm('¿Deseas eliminar este Paciente?')
        if (answer) {
            deletePatient(id)
        }
    }

    return (
        <div className='mx-5 my-10 bg-white shadow-md px-5 py-10 rounde-xl'>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre: {''}
                <span className='font-normal normal-case'>{petName}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Dueño: {''}
                <span className='font-normal normal-case'>{ownerName}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Email: {''}
                <span className='font-normal normal-case'>{email}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha de registro: {''}
                <span className='font-normal normal-case'>{registerDate}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Sintomas: {''}
                <span className='font-normal normal-case'>{symptoms}</span>
            </p>

            <div className="flex justify-end">
                <button
                    type="button"
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-400 text-white font-bold uppercase rounded-lg mr-2"
                    onClick={() => setPatient(patient)}
                >
                    Editar
                </button>
                <button
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-400 text-white font-bold uppercase rounded-lg"
                    onClick={handleDelete}
                >
                    Eliminar
                </button>
            </div>
        </div>
    )
}

export default Patient
