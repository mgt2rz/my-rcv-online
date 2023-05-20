import * as React from 'react'
import { SVGProps } from 'react'
const SvgLayerOne = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='-120 0 225 100' {...props}>
    <defs>
      <linearGradient id='a' x1={0} x2={1} y1={1} y2={0}>
        <stop offset='0%' stopColor='rgba(248, 117, 55, 1)' />
        <stop offset='100%' stopColor='rgba(251, 168, 31, 1)' />
      </linearGradient>
    </defs>
    <path
      fill='url(#a)'
      d='M19.7-33.2c6 2.5 10.9 7.6 15.4 13.5 4.5 6 8.6 12.9 7.5 19.1-1.1 6.2-7.4 11.7-12.2 17.2-4.8 5.5-8.1 10.9-12.9 15.1C12.6 36 6.3 39-.8 40.4c-7.1 1.4-15 1-19.8-3.2-4.8-4.3-6.4-12.5-9.2-19.3-2.7-6.9-6.6-12.4-8.5-19-1.8-6.6-1.7-14.3 1.2-20.8s8.7-11.9 15.4-13.9c6.6-2.1 14.2-.9 21.4-.3 7.2.5 14.1.4 20 2.9Z'
      style={{
        transition: 'all .3s ease 0s'
      }}
      transform='translate(50 50)'
    />
  </svg>
)
export default SvgLayerOne
