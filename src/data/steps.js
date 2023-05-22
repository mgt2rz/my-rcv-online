import RegisterIcon from '@/components/icons/RegisterIcon'
import PaymentIcon from '@/components/icons/PaymentIcon'
import DownloadIcon from '@/components/icons/DownloadIcon'

export const steps = [
    {
      id: '01',
      title: 'Registra los datos de tu vehículo',
      description: 'Indica la información que se te solicita. Es rápido y muy fácil.',
      icon: <RegisterIcon />
    },
    {
      id: '02',
      title: 'Realiza el pago',
      description: 'Paga con tarjeta de crédito o débito, o con tu cuenta de PayPal.',
      icon: <PaymentIcon />
    },
    {
      id: '03',
      title: 'Descarga tu póliza',
      description: 'Recibe tu póliza en tu correo electrónico y descárgala en tu celular.',
      icon: <DownloadIcon />
    }
  ]
