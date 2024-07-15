import { FormEvent } from 'react'
import { LuCalendar, LuTag, LuX } from 'react-icons/lu'
import { Button } from '../../components/button'

type CreateActivityModalProps = {
  closeCreateActivityModal: () => void
  createActivity: (event: FormEvent<HTMLFormElement>) => void
}

export const CreateActivityModal = ({
  closeCreateActivityModal,
  createActivity,
}: CreateActivityModalProps) => {
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
