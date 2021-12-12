
const Patient = () => {
    return (
        <div className='mx-5 my-10 bg-white shadow-md px-5 py-10 rounde-xl'>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre: {''}
                <span className='font-normal normal-case'>Doky</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Dueño: {''}
                <span className='font-normal normal-case'>Victor</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Email: {''}
                <span className='font-normal normal-case'>victor@correo.com</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha de registro: {''}
                <span className='font-normal normal-case'>15 de Octubre del 2007</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Sintomas: {''}
                <span className='font-normal normal-case'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus nostrum delectus fugiat tempora. Neque officiis similique, molestias enim sunt explicabo eos consectetur minus doloribus quod amet distinctio vero voluptatem provident.</span>
            </p>
        </div>
    )
}

export default Patient
