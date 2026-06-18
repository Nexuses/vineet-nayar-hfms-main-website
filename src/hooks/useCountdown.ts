import { useEffect, useState } from 'react'

export interface CountdownTime {
  days: number
  hours: number
  minutes: number
  seconds: number
  expired: boolean
}

function getCountdown(isoDate: string): CountdownTime {
  const target = new Date(`${isoDate}T00:00:00`).getTime()
  const diff = target - Date.now()

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true }
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)

  return { days, hours, minutes, seconds, expired: false }
}

export function useCountdown(isoDate: string): CountdownTime | null {
  const [time, setTime] = useState<CountdownTime | null>(null)

  useEffect(() => {
    const tick = () => setTime(getCountdown(isoDate))
    const immediate = window.setTimeout(tick, 0)
    const id = window.setInterval(tick, 1000)
    return () => {
      window.clearTimeout(immediate)
      window.clearInterval(id)
    }
  }, [isoDate])

  return time
}
