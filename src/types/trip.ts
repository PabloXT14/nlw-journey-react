export type Trip = {
  id: string
  destination: string
  starts_at: string
  ends_at: string
  is_confirmed: boolean
}

export type Activity = {
  date: string
  activities: {
    id: string
    title: string
    occurs_at: string
  }[]
}
