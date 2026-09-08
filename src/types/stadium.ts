export type League = 'Bundesliga' | '2. Bundesliga' | '3. Liga'

export interface Stadium {
  id: string
  name: string
  club: string
  city: string
  capacity: number
  opened: number
  league: League
  latitude: number
  longitude: number
  highlight: string
}
