import { useCountdown } from '../../hooks/useCountdown'

function pad(value: number): string {
  return String(value).padStart(2, '0')
}

function CountdownDisplay({
  days,
  hours,
  minutes,
  seconds,
}: {
  days: number
  hours: number
  minutes: number
  seconds: number
}) {
  return (
    <>
      <span className="city-card-countdown-unit">
        <strong>{days}</strong>
        <small>days</small>
      </span>
      <span className="city-card-countdown-sep" aria-hidden="true">
        :
      </span>
      <span className="city-card-countdown-unit">
        <strong>{pad(hours)}</strong>
        <small>hrs</small>
      </span>
      <span className="city-card-countdown-sep" aria-hidden="true">
        :
      </span>
      <span className="city-card-countdown-unit">
        <strong>{pad(minutes)}</strong>
        <small>min</small>
      </span>
      <span className="city-card-countdown-sep" aria-hidden="true">
        :
      </span>
      <span className="city-card-countdown-unit">
        <strong>{pad(seconds)}</strong>
        <small>sec</small>
      </span>
    </>
  )
}

export function CityCardCountdown({ isoDate }: { isoDate: string }) {
  const time = useCountdown(isoDate)

  if (time === null) {
    return (
      <p className="city-card-countdown city-card-countdown--pending" aria-hidden="true">
        <CountdownDisplay days={0} hours={0} minutes={0} seconds={0} />
      </p>
    )
  }

  const { days, hours, minutes, seconds, expired } = time

  if (expired) {
    return (
      <p className="city-card-countdown is-expired" aria-live="polite">
        Event has started
      </p>
    )
  }

  return (
    <p className="city-card-countdown" aria-live="polite">
      <CountdownDisplay days={days} hours={hours} minutes={minutes} seconds={seconds} />
    </p>
  )
}
