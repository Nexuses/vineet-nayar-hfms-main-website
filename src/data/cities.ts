export interface City {
  city: string
  date: string
  theme: string
  video: string
  image: string
}

export const CITIES: City[] = [
  {
    city: 'Delhi',
    date: '25 July 2026',
    theme: 'Will average people still matter?',
    video: '/assets/figma/vid1.mp4',
    image: '/assets/figma/placeholder-delhi.png',
  },
  {
    city: 'Mumbai',
    date: '1 August 2026',
    theme: 'The Human Advantage',
    video: '/assets/figma/vid2.mp4',
    image: '/assets/figma/placeholder-mumbai.png',
  },
  {
    city: 'Bengaluru',
    date: '8 August 2026',
    theme: 'What AI Cannot Replace',
    video: '/assets/figma/vid3.mp4',
    image: '/assets/figma/placeholder-bengaluru.png',
  },
  {
    city: 'Hyderabad',
    date: '15 August 2026',
    theme: 'Why Human Potential Still Wins',
    video: '/assets/figma/vid4.mp4',
    image: '/assets/figma/placeholder-hyderabad.png',
  },
  {
    city: 'Chennai',
    date: '22 August 2026',
    theme: 'Stay Curious. Stay Inspired.',
    video: '/assets/figma/vid5.mp4',
    image: '/assets/figma/placeholder-chennai.png',
  },
  {
    city: 'Jaipur / Ahmedabad',
    date: '29 August 2026',
    theme: 'What part of being human will you never give up?',
    video: '/assets/figma/vid6.mp4',
    image: '/assets/figma/placeholder-jaipur-ahmedabad.png',
  },
]
