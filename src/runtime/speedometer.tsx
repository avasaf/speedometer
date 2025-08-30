import { React } from 'jimu-core'

export interface SpeedometerProps {
  value: number
  min?: number
  max?: number
  gaugeColor?: string
  needleColor?: string
}

export const Speedometer = ({ value, min = 0, max = 40, gaugeColor = '#ccc', needleColor = 'red' }: SpeedometerProps): React.ReactElement => {
  const ratio = Math.max(0, Math.min(1, (value - min) / (max - min)))
  const angle = ratio * 180 - 90
  const ticks = Array.from({ length: 5 }).map((_, i) => {
    const tickAngle = i * 45 - 90
    return (
      <line
        key={i}
        x1={50}
        y1={50}
        x2={50}
        y2={40}
        stroke={gaugeColor}
        strokeWidth={1}
        transform={`rotate(${tickAngle} 50 50)`}
      />
    )
  })
  return (
    <div className='speedometer' style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: 8 }}>
      <svg viewBox='0 0 100 60' style={{ width: '100%', maxWidth: 200 }}>
        <path d='M10 50 A40 40 0 0 1 90 50' fill='none' stroke={gaugeColor} strokeWidth={8} strokeLinecap='round' />
        {ticks}
        <line x1={50} y1={50} x2={50} y2={20} stroke={needleColor} strokeWidth={2} transform={`rotate(${angle} 50 50)`} />
        <circle cx={50} cy={50} r={3} fill={needleColor} />
        <text x={50} y={55} textAnchor='middle' fontSize={10} fill='currentColor'>{value.toFixed(0)} knt</text>
      </svg>
    </div>
  )
}
