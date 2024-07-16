import { LuCheckCircle2, LuCircleDashed, LuUserCog } from 'react-icons/lu'
import { Button } from '../../components/button'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../lib/axios'

type Participant = {
  id: string
  name: string | null
  email: string
  is_confirmed: boolean
}

export const Guests = () => {
  const { tripId } = useParams()

  const [participants, setParticipant] = useState<Participant[]>([])

  useEffect(() => {
    api.get(`/trips/${tripId}/participants`).then((response) => {
      setParticipant(response.data.participants)
    })
  }, [tripId])

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Convidados</h2>

      {/* Guest list */}
      <div className="space-y-5">
        {participants?.map((participant, index) => (
          <div
            key={participant.id}
            className="flex items-center justify-between gap-4"
          >
            <div className="space-y-1.5">
              <span className="block font-medium text-zinc-100">
                {participant.name ?? `Convidado ${index}`}
              </span>
              <span className="block truncate text-sm text-zinc-400">
                {participant.email}
              </span>
            </div>
            {participant.is_confirmed ? (
              <LuCheckCircle2 className="size-5 shrink-0 text-lime-300" />
            ) : (
              <LuCircleDashed className="size-5 shrink-0 text-zinc-400" />
            )}
          </div>
        ))}

        {/* <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">
              Dr. Rita Pacocha
            </span>
            <span className="block truncate text-sm text-zinc-400">
              dr.rita.pacocha@gmailcom
            </span>
          </div>
          <LuCircleDashed className="size-5 shrink-0 text-zinc-400" />
        </div> */}
      </div>

      <Button variant="secondary" size="full">
        <LuUserCog className="size-5" />
        Gerenciar convidados
      </Button>
    </div>
  )
}
