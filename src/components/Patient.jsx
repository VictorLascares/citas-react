
const Patient = ({patient}) => {
    return (
        <div className='mx-5 my-10 bg-white shadow-md px-5 py-10 rounde-xl'>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre: {''}
                <span className='font-normal normal-case'>{patient.petName}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Dueño: {''}
                <span className='font-normal normal-case'>{patient.ownerName}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Email: {''}
                <span className='font-normal normal-case'>{patient.email}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha de registro: {''}
                <span className='font-normal normal-case'>{patient.registerDate}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Sintomas: {''}
                <span className='font-normal normal-case'>{patient.symptoms}</span>
            </p>

            <div className="flex justify-end">
                <button
                    type="button"
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-400 text-white font-bold uppercase rounded-lg mr-2"
                >
                    Editar
                </button>
                <button
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-400 text-white font-bold uppercase rounded-lg"
                >
                    Eliminar
                </button>
            </div>
        </div>
    )
}

export default Patient
