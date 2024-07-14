import { FormEvent } from 'react'
import { LuAtSign, LuPlus, LuX } from 'react-icons/lu'

type InviteGuestsModalProps = {
  closeGuestsModal: () => void
  emailsToInvite: string[]
  removeEmailFromInvite: (email: string) => void
  addNewEmailToInvite: (event: FormEvent<HTMLFormElement>) => void
}

export const InviteGuestsModal = ({
  closeGuestsModal,
  emailsToInvite,
  removeEmailFromInvite,
  addNewEmailToInvite,
}: InviteGuestsModalProps) => {
  return (
    <div className="items fixed inset-0 flex items-center justify-center bg-black/60">
      <div className="w-full max-w-[640px] space-y-5 rounded-xl bg-zinc-900 px-6 py-5 shadow-shape">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Selecionar convidados</h2>
            <button onClick={closeGuestsModal} className="text-zinc-400">
              <LuX className="size-5" />
            </button>
          </div>

          <p className="text-sm text-zinc-400">
            Os convidados irão receber e-mails para confirmar a participação na
            viagem.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {emailsToInvite.map((email) => (
            <div
              key={email}
              className="flex items-center gap-2 rounded-md bg-zinc-800 px-2.5 py-1.5"
            >
              <span className="text-zinc-300">{email}</span>
              <button
                type="button"
                onClick={() => removeEmailFromInvite(email)}
                className="text-zinc-400"
              >
                <LuX className="size-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="h-px w-full bg-zinc-800" />

        <form
          onSubmit={addNewEmailToInvite}
          className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 p-2.5"
        >
          <div className="flex flex-1 items-center gap-2 px-2">
            <LuAtSign className="size-5 text-zinc-400" />

            <input
              type="email"
              name="email"
              placeholder="Digite o email do convidado"
              className="flex-1 bg-transparent text-lg placeholder-zinc-400"
            />
          </div>

          <button
            type="submit"
            className="flex items-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 transition-colors hover:bg-lime-400"
          >
            Convidar
            <LuPlus className="size-5" />
          </button>
        </form>
      </div>
    </div>
  )
}
