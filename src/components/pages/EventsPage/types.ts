export interface EventLocation {
  name: string
  city: string
  lat: number
  lng: number
  link?: string
}

export interface EventDetails {
  title?: string
  description?: string
  howToReach?: string
}

export interface Event {
  id: string
  title: string
  date: Date
  endDate?: Date
  location: EventLocation
  details?: EventDetails
  image?: string
  link?: string
}
