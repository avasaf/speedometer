import { React } from 'jimu-core'

export interface SpeedometerProps {
  value: number
  min?: number
  max?: number
  gaugeColor?: string
  needleColor?: string
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
  labelFontFamily = 'Arial',
  labelFontSize = 12,
  labelBold = false
}: SpeedometerProps): React.ReactElement => {
  const ratio = Math.max(0, Math.min(1, (value - min) / (max - min)))
  const angle = ratio * 180 - 90
  const tickCount = 8
  const outerR = 40
  const innerR = 35
  const ticks = Array.from({ length: tickCount }).map((_, i) => {
    const t = -90 + ((i + 1) / (tickCount + 1)) * 180
    const rad = (t * Math.PI) / 180
    const x1 = 50 + outerR * Math.cos(rad)
    const y1 = 50 + outerR * Math.sin(rad)
    const x2 = 50 + innerR * Math.cos(rad)
    const y2 = 50 + innerR * Math.sin(rad)
    return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={gaugeColor} strokeWidth={2} />
  })
  return (
    <div className='speedometer' style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: 8 }}>
      <svg viewBox='0 0 100 70' style={{ width: '100%', maxWidth: 200 }}>
        <path d='M10 50 A40 40 0 0 1 90 50' fill='none' stroke={gaugeColor} strokeWidth={4} />
        {ticks}
        <line x1={50} y1={50} x2={50} y2={20} stroke={needleColor} strokeWidth={2} transform={`rotate(${angle} 50 50)`} />
        <circle cx={50} cy={50} r={3} fill={needleColor} />
        <text
          x={50}
          y={66}
          textAnchor='middle'
          fontSize={labelFontSize}
          fontFamily={labelFontFamily}
          fontWeight={labelBold ? 'bold' : 'normal'}
          fill='currentColor'
        >
          {value.toFixed(0)} knt
        </text>
      </svg>
    </div>
  )
}
