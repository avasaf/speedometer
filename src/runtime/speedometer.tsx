import { React } from 'jimu-core'

export interface SpeedometerProps {
  value: number
  min?: number
  max?: number
  gaugeColor?: string
  needleColor?: string
  labelColor?: string
  labelFontFamily?: string
  labelFontSize?: number
  labelBold?: boolean
}

export const Speedometer = ({
  value,
  min = 0,
  max = 40,
  gaugeColor = '#000',
  needleColor = 'red',
  labelColor = '#000',
  labelFontFamily = 'Arial',
  labelFontSize = 12,
  labelBold = false
}: SpeedometerProps): React.ReactElement => {
  const ratio = Math.max(0, Math.min(1, (value - min) / (max - min)))
  const angle = ratio * 180 - 90
  return (
    <div className='speedometer' style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: 8 }}>
      <svg width='100%' height='100%' viewBox='0 0 200 140' xmlns='http://www.w3.org/2000/svg' aria-label='Gauge icon'>
        <g fill='none' strokeLinecap='round'>
          <g stroke={gaugeColor}>
            <path d='M 10 100 A 90 90 0 0 1 190 100' strokeWidth='4' />
            <g strokeWidth='4'>
              <line x1='10' y1='100' x2='24' y2='100' />
              <line x1='34.18' y1='62.00' x2='22.06' y2='55.00' />
              <line x1='62.00' y1='34.18' x2='55.00' y2='22.06' />
              <line x1='100.00' y1='24.00' x2='100.00' y2='10.00' />
              <line x1='138.00' y1='34.18' x2='145.00' y2='22.06' />
              <line x1='165.82' y1='62.00' x2='177.94' y2='55.00' />
              <line x1='176.00' y1='100.00' x2='190.00' y2='100.00' />
            </g>
            <g strokeWidth='2'>
              <line x1='100' y1='88' x2='100' y2='82' />
              <line x1='112' y1='100' x2='118' y2='100' />
              <line x1='100' y1='112' x2='100' y2='118' />
              <line x1='88' y1='100' x2='82' y2='100' />
              <line x1='108' y1='92' x2='112' y2='88' />
              <line x1='108' y1='108' x2='112' y2='112' />
              <line x1='92' y1='108' x2='88' y2='112' />
              <line x1='92' y1='92' x2='88' y2='88' />
            </g>
          </g>
          <g stroke={needleColor} strokeWidth='4'>
            <circle cx='100' cy='100' r='12' fill='none' />
            <line x1='100' y1='100' x2='100' y2='30' transform={`rotate(${angle} 100 100)`} />
          </g>
        </g>
        <text
          x='100'
          y='135'
          textAnchor='middle'
          fontSize={labelFontSize}
          fontFamily={labelFontFamily}
          fontWeight={labelBold ? 'bold' : 'normal'}
          fill={labelColor}
        >
          {value.toFixed(0)} knt
        </text>
      </svg>
    </div>
  )
}
