import DownloadIcon from './icons/DownloadIcon'
import PaymentIcon from './icons/PaymentIcon'
import RegisterIcon from './icons/RegisterIcon'

const Steps = () => {
  return (
    <div className='text-gray-700 min-h-fit p-8 mt-8 md:mt-20 lg:mt-32'>
      <header className='text-center'>
        <h2 className='text-4xl font-semibold mb-4'>Tres simples pasos</h2>
        <p className='text-base'>
          Ingresa en segundos, realiza estos sencillos pasos e inicia <br /> tu nueva experiencia junto a nosotros.
        </p>
      </header>
      <main className='flex gap-8'>
        <div className='flex flex-col md:flex-row justify-between mt-20 rounded-lg p-10 w-1/3 shadow-gray-200 shadow-xl border border-gray-100'>
          <div className='flex flex-col items-center w-full'>
            <div className='flex items-center justify-center w-16 h-16 rounded-full bg-orange-400 text-white mb-4'>
              <RegisterIcon />
            </div>
            <p className='font-semibold mt-8'>
              <span className='font-bold text-xl'>01. Registra los datos de tu vehículo</span>
            </p>
            <p className='font-norma mt-4'>Indica la información que se te solicita. Es rápido y muy fácil.</p>
          </div>
        </div>

        <div className='flex flex-col md:flex-row justify-between mt-20 rounded-lg p-10 w-1/3 shadow-gray-200 shadow-xl border border-gray-100'>
          <div className='flex flex-col items-center w-full'>
            <div className='flex items-center justify-center w-16 h-16 rounded-full bg-orange-400 text-white mb-4'>
              <PaymentIcon />
            </div>
            <p className='font-semibold mt-8'>
              <span className='font-bold text-xl'>02. Realiza el pago</span>
            </p>
            <p className='font-norma mt-4'>Paga con tarjeta de crédito o débito, o con tu cuenta de PayPal.</p>
          </div>
        </div>

        <div className='flex flex-col md:flex-row justify-between mt-20 rounded-lg p-10 w-1/3 shadow-gray-200 shadow-xl border border-gray-100'>
          <div className='flex flex-col items-center w-full'>
            <div className='flex items-center justify-center w-16 h-16 rounded-full bg-orange-400 text-white mb-4'>
              <DownloadIcon />
            </div>
            <p className='font-semibold mt-8'>
              <span className='font-bold text-xl'>03. Descarga tu certificado RCV</span>
            </p>
            <p className='font-norma mt-4'>Podrás descargar tu certificado cada vez que quieras cuando quieras.</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Steps