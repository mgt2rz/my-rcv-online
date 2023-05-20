import * as React from 'react'
import { SVGProps } from 'react'
const SvgLayerTwo = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 30 80 100'>
    <defs>
      <linearGradient id='sw-gradient' x1='0' x2='1' y1='1' y2='0'>
        <stop offset='0%' stopColor='rgba(255, 234.613, 210.281, 0.45)' />
        <stop offset='100%' stopColor='rgba(255, 225.636, 177.168, 0.29)' />
      </linearGradient>
    </defs>
    <path
      fill='url(#sw-gradient)'
      stroke='url(#sw-gradient)'
      strokeWidth='0'
      d='M20-35.3c5.1 3.7 7.8 10.7 11.2 17.1 3.3 6.4 7.2 12.3 6.8 18-.3 5.7-5 11.1-8.8 16.8-3.8 5.6-6.7 11.4-11.5 14.7-4.7 3.3-11.2 4.1-17 2.8-5.7-1.3-10.7-4.7-17.4-6.9-6.6-2.2-14.8-3.2-20.4-7.5-5.6-4.4-8.5-12-7.2-19C-43-6.2-37.6-12.4-32.8-18c4.9-5.6 9.1-10.6 14.5-14.1 5.4-3.6 11.8-5.6 18.8-6.5 6.9-.8 14.4-.4 19.5 3.3z'
      transform='translate(50 50)'
      style={{
        WebkitTransition: 'all 0.3s ease 0s',
        transition: 'all 0.3s ease 0s'
      }}
    />
  </svg>
)
export default SvgLayerTwo
