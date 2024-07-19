import * as Dialog from '@radix-ui/react-dialog'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { FormEvent } from 'react'
import { LuCalendar, LuTag, LuX } from 'react-icons/lu'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner'
import { Button } from '../../components/button'
import { api } from '../../lib/axios'
import { useModalStore } from '../../store/modal'
import { Trip } from '../../types/trip'

export const CreateActivityModal = () => {
  const queryClient = useQueryClient()
  const { isCreateActivityModalOpen, closeCreateActivityModal } =
    useModalStore()

  const { tripId } = useParams()

  const { data: trip } = useQuery<Trip>({
    queryKey: ['trip', tripId],
  })

  const { mutateAsync: createActivityMutation } = useMutation({
    mutationFn: async ({
      title,
      occurs_at,
    }: {
      title: string
      occurs_at: string
    }) => {
      await api.post(`/trips/${tripId}/activities`, {
        title,
        occurs_at,
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['activities', tripId] })

      toast.success('Atividade criada com sucesso!')

      closeCreateActivityModal()
    },
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

    await createActivityMutation({ title, occurs_at })
  }

  return (
    <Dialog.Root
      open={isCreateActivityModalOpen}
      onOpenChange={closeCreateActivityModal}
    >
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60" />
        <Dialog.Content className="fixed left-1/2 top-1/2 w-full max-w-[640px] -translate-x-1/2 -translate-y-1/2 space-y-5 rounded-xl bg-zinc-900 px-6 py-5 shadow-shape">
          {/* Header */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Dialog.Title className="text-lg font-semibold">
                Cadastrar a atividade
              </Dialog.Title>
              <Dialog.Close className="text-zinc-400">
                <LuX className="size-5" />
              </Dialog.Close>
            </div>

            <Dialog.Description className="text-sm text-zinc-400">
              Todos os convidados podem visualizar as atividades
            </Dialog.Description>
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
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
