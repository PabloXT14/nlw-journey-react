import { FormEvent } from 'react'
import { LuMail, LuUser, LuX } from 'react-icons/lu'
import { Button } from '../../components/button'
import { useModalStore } from '../../store/modal'
import { useNavigate } from 'react-router-dom'
import { api } from '../../lib/axios'
import { useCreateTripStore } from '../../store/create-trip'
import { format } from 'date-fns'

export const ConfirmTripModal = () => {
  const navigate = useNavigate()

  const { closeConfirmTripModal } = useModalStore()
  const {
    destination,
    eventStartAndEndDates,
    emailsToInvite,
    ownerName,
    ownerEmail,
    setOwnerName,
    setOwnerEmail,
  } = useCreateTripStore()

  async function createTrip(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!destination) {
      return
    }

    if (!eventStartAndEndDates?.from || !eventStartAndEndDates?.to) {
      return
    }

    if (emailsToInvite.length === 0) {
      return
    }

    if (!ownerName || !ownerEmail) {
      return
    }

    const response = await api.post('/trips', {
      destination,
      starts_at: eventStartAndEndDates.from,
      ends_at: eventStartAndEndDates.to,
      emails_to_invite: emailsToInvite,
      owner_name: ownerName,
      owner_email: ownerEmail,
    })

    const { tripId } = response.data

    navigate(`/trips/${tripId}`)
  }

  const displayedDate =
    eventStartAndEndDates &&
    eventStartAndEndDates.from &&
    eventStartAndEndDates.to
      ? format(eventStartAndEndDates.from, "d' de 'LLL")
          .concat(' até ')
          .concat(format(eventStartAndEndDates.to, "d' de 'LLL"))
      : null

  return (
    <div className="items fixed inset-0 flex items-center justify-center bg-black/60">
      <div className="w-full max-w-[640px] space-y-5 rounded-xl bg-zinc-900 px-6 py-5 shadow-shape">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">
              Confirmar criação de viagem
            </h2>
            <button onClick={closeConfirmTripModal} className="text-zinc-400">
              <LuX className="size-5" />
            </button>
          </div>

          <p className="text-sm text-zinc-400">
            Para concluir a criação da viagem para{' '}
            <span className="font-semibold text-zinc-100">{destination}</span>{' '}
            nas datas de{' '}
            <span className="font-semibold text-zinc-100">{displayedDate}</span>{' '}
            preencha seus dados abaixo:
          </p>
        </div>

        <form onSubmit={createTrip} className="space-y-3">
          <div className="flex h-14 flex-1 items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 px-5">
            <LuUser className="size-5 text-zinc-400" />

            <input
              name="name"
              placeholder="Seu nome completo"
              className="flex-1 bg-transparent text-lg placeholder-zinc-400"
              onChange={(e) => setOwnerName(e.target.value)}
            />
          </div>

          <div className="flex h-14 flex-1 items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 px-5">
            <LuMail className="size-5 text-zinc-400" />

            <input
              type="email"
              name="email"
              placeholder="Seu email pessoal"
              className="flex-1 bg-transparent text-lg placeholder-zinc-400"
              onChange={(e) => setOwnerEmail(e.target.value)}
            />
          </div>

          <Button type="submit" size="full">
            Confirmar criação da viagem
          </Button>
        </form>
      </div>
    </div>
  )
}
