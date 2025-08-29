import { React } from 'jimu-core'

export interface SpeedometerProps {
  value: number
  min?: number
  max?: number
}

export const Speedometer = ({ value, min = 0, max = 40 }: SpeedometerProps): React.ReactElement => {
  const ratio = Math.max(0, Math.min(1, (value - min) / (max - min)))
  const angle = ratio * 180
  return (
    <div className='speedometer' style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: 8 }}>
      <svg viewBox='0 0 100 60' style={{ width: '100%', maxWidth: 200 }}>
        <path d='M10 50 A40 40 0 0 1 90 50' fill='none' stroke='#ccc' strokeWidth={5} />
        <line x1={50} y1={50} x2={50} y2={15} stroke='red' strokeWidth={2} transform={`rotate(${angle} 50 50)`} />
        <text x={50} y={58} textAnchor='middle' fontSize={10}>{value.toFixed(0)} knt</text>
      </svg>
    </div>
  )
}
