import { FormEvent } from 'react'
import { LuMail, LuUser, LuX } from 'react-icons/lu'

type ConfirmTripModalProps = {
  closeConfirmTripModal: () => void
  createTrip: (event: FormEvent<HTMLFormElement>) => void
}

export const ConfirmTripModal = ({
  closeConfirmTripModal,
  createTrip,
}: ConfirmTripModalProps) => {
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
            <span className="font-semibold text-zinc-100">
              Florianópolis, Brasil
            </span>{' '}
            nas datas de{' '}
            <span className="font-semibold text-zinc-100">
              16 a 27 de Agosto de 2024
            </span>{' '}
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
            />
          </div>

          <div className="flex h-14 flex-1 items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 px-5">
            <LuMail className="size-5 text-zinc-400" />

            <input
              type="email"
              name="email"
              placeholder="Seu email pessoal"
              className="flex-1 bg-transparent text-lg placeholder-zinc-400"
            />
          </div>

          <button
            type="submit"
            className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-lime-300 px-5 font-medium text-lime-950 transition-colors hover:bg-lime-400"
          >
            Confirmar criação da viagem
          </button>
        </form>
      </div>
    </div>
  )
}
