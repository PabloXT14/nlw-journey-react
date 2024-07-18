import { FormEvent } from 'react'
import { LuCalendar, LuTag, LuX } from 'react-icons/lu'
import { Button } from '../../components/button'
import { api } from '../../lib/axios'
import { useParams } from 'react-router-dom'
import { useModalStore } from '../../store/modal'
import { toast } from 'sonner'
import { useQuery } from '@tanstack/react-query'
import { Trip } from '../../types/trip'

export const CreateActivityModal = () => {
  const { closeCreateActivityModal } = useModalStore()

  const { tripId } = useParams()

  const { data: trip } = useQuery<Trip>({
    queryKey: ['trip'],
  })

  async function createActivity(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const data = new FormData(event.currentTarget)

    const title = data.get('title')?.toString()
    const occurs_at = data.get('occurs_at')?.toString()

    if (!title) {
      return toast.error('Por favor, preencha o campo de título')
    }

    if (!occurs_at) {
      return toast.error('Por favor, preencha o campo de data')
    }

    if (!trip?.starts_at || !trip?.ends_at) {
      toast.error('Data da viagem não encontrada')
      return
    }

    if (
      new Date(occurs_at) < new Date(trip?.starts_at) ||
      new Date(occurs_at) > new Date(trip?.ends_at)
    ) {
      return toast.error(
        'A data da atividade deve estar entre a data inicial e a data final da viagem',
      )
    }

    await api.post(`/trips/${tripId}/activities`, {
      title,
      occurs_at,
    })

    toast.success('Atividade criada com sucesso!')

    window.location.reload()
  }

  return (
    // Overlay
    <div className="items fixed inset-0 flex items-center justify-center bg-black/60">
      {/* Modal */}
      <div className="w-full max-w-[640px] space-y-5 rounded-xl bg-zinc-900 px-6 py-5 shadow-shape">
        {/* Header */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Cadastrar a atividade</h2>
            <button
              onClick={closeCreateActivityModal}
              className="text-zinc-400"
            >
              <LuX className="size-5" />
            </button>
          </div>

          <p className="text-sm text-zinc-400">
            Todos os convidados podem visualizar as atividades
          </p>
        </div>

        <form onSubmit={createActivity} className="space-y-3">
          <div className="flex h-14 flex-1 items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 px-5">
            <LuTag className="size-5 text-zinc-400" />

            <input
              name="title"
              placeholder="Qual a atividade?"
              className="flex-1 bg-transparent text-lg placeholder-zinc-400"
            />
          </div>

          <div className="flex h-14 flex-1 items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 px-5">
            <LuCalendar className="size-5 text-zinc-400" />

            <input
              type="datetime-local"
              name="occurs_at"
              placeholder="Data e horário da atividade"
              className="flex-1 bg-transparent text-lg placeholder-zinc-400"
            />
          </div>

          <Button size="full" type="submit">
            Salvar atividade
          </Button>
        </form>
      </div>
    </div>
  )
}
