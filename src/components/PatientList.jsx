import Patient from "./Patient"

export const PatientList = ({patients, setPatient, deletePatient}) => {
    return (
        <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
            {patients && patients.length ? (
                <>
                    <h2 className='font-black text-3xl text-center'>Listado de Pacientes</h2>
                    <p className='text-xl mt-5 mb-10 text-center'>
                        Aministra tus {''}
                        <span className='text-indigo-600 font-bold'>Pacientes y Citas</span>
                    </p>
        
                    {patients.map((element) => (
                        <Patient 
                            key={element.id}
                            patient={element}
                            setPatient={setPatient}
                            deletePatient={deletePatient}
                        />
                    ))}
                </>
            ) : (
                <>
                    <h2 className='font-black text-3xl text-center'>No hay Pacientes</h2>
                    <p className='text-xl mt-5 mb-10 text-center'>
                        Comienza agregando Pacientes {''}
                        <span className='text-indigo-600 font-bold'> y aparecerán en este lugar</span>
                    </p>
                </>
            )}
        </div>
    )
}

export default PatientList
