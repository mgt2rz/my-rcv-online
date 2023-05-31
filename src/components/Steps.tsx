import { steps } from '@/data/steps'

const Steps = () => {
  return (
    <div className='text-gray-700 min-h-fit p-8 mt-8 md:mt-20 lg:mt-32'>
      <header className='text-center'>
        <h2 className='text-4xl font-semibold mb-4'>Tres simples pasos</h2>
        <p className='text-base'>
          Ingresa en segundos, realiza estos sencillos pasos e inicia <br className="hidden md:flex" /> tu nueva experiencia junto a nosotros.
        </p>
      </header>
      <main className='flex gap-8 flex-col md:flex-row'>
        {steps &&
          steps.map((step, index) => (
            <div
              key={step.id}
              className='flex flex-col md:flex-row justify-between mt-4 md:mt-20 rounded-lg p-10 w-full md:w-1/3 shadow-gray-200 shadow-xl border border-gray-100'>
              <div className='flex flex-col items-center w-full text-center md:text-left'>
                <div className='flex items-center justify-center w-16 h-16 rounded-full bg-orange-400 text-white mb-4'>
                  {step.icon}
                </div>
                <p className='font-semibold mt-8'>
                  <span className='font-bold text-xl'>
                    {step.id}. {step.title}
                  </span>
                </p>
                <p className='font-normal mt-4'>{step.description}</p>
              </div>
            </div>
          ))}
      </main>
    </div>
  )
}

export default Steps
