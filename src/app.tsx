import { useState } from 'react'
import {
  LuArrowRight,
  LuAtSign,
  LuCalendar,
  LuMapPin,
  LuPlus,
  LuSettings2,
  LuUserPlus2,
  LuX,
} from 'react-icons/lu'

export function App() {
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false)
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false)

  function openGuestsInput() {
    setIsGuestsInputOpen(true)
  }

  function closeGuestsInput() {
    setIsGuestsInputOpen(false)
  }

  function openGuestsModal() {
    setIsGuestsModalOpen(true)
  }

  function closeGuestsModal() {
    setIsGuestsModalOpen(false)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-squares bg-center bg-no-repeat">
      <div className="w-full max-w-3xl space-y-10 px-6 text-center">
        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" alt="plann.er" />
          <p className="text-lg text-zinc-300">
            Convide seus amigos e planeja sua próxima viagem!
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex h-16 items-center gap-3 rounded-xl bg-zinc-900 px-4 shadow-shape">
            <div className="flex flex-1 items-center gap-2">
              <LuMapPin className="size-5 text-zinc-400" />
              <input
                disabled={isGuestsInputOpen}
                type="text"
                placeholder="Para onde você vai?"
                className="flex-1 bg-transparent text-lg placeholder-zinc-400"
              />
            </div>

            <div className="flex items-center gap-2">
              <LuCalendar className="size-5 text-zinc-400" />
              <input
                disabled={isGuestsInputOpen}
                type="text"
                placeholder="Quando?"
                className="w-full max-w-20 bg-transparent text-lg placeholder-zinc-400"
              />
            </div>

            <div className="h-6 w-px bg-zinc-800" />

            {isGuestsInputOpen ? (
              <button
                onClick={closeGuestsInput}
                className="flex items-center gap-2 rounded-lg bg-zinc-800 px-5 py-2 font-medium text-zinc-200 transition-colors hover:bg-zinc-700"
              >
                Alterar local/data
                <LuSettings2 className="size-5" />
              </button>
            ) : (
              <button
                onClick={openGuestsInput}
                className="flex items-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 transition-colors hover:bg-lime-400"
              >
                Continuar
                <LuArrowRight className="size-5" />
              </button>
            )}
          </div>

          {isGuestsInputOpen && (
            <div className="flex h-16 items-center gap-3 rounded-xl bg-zinc-900 px-4 shadow-shape">
              <button
                type="button"
                onClick={openGuestsModal}
                className="flex flex-1 items-center gap-2 text-left"
              >
                <LuUserPlus2 className="size-5 text-zinc-400" />
                <span className="flex-1 text-lg text-zinc-400">
                  Quem estarão na viagem?
                </span>
              </button>

              <div className="h-6 w-px bg-zinc-800" />

              <button className="flex items-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 transition-colors hover:bg-lime-400">
                Confirmar viagem
                <LuArrowRight className="size-5" />
              </button>
            </div>
          )}
        </div>

        <p className="mx-auto w-full max-w-[30rem] text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda com
          nossos{' '}
          <a className="text-zinc-300 underline" href="#">
            termos de uso
          </a>{' '}
          e{' '}
          <a className="text-zinc-300 underline" href="#">
            políticas de privacidade
          </a>
          .
        </p>
      </div>
      {isGuestsModalOpen && (
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
                Os convidados irão receber e-mails para confirmar a participação
                na viagem.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-2 rounded-md bg-zinc-800 px-2.5 py-1.5">
                <span className="text-zinc-300">jhondoe@example.com</span>
                <button type="button" className="text-zinc-400">
                  <LuX className="size-4" />
                </button>
              </div>
              <div className="flex items-center gap-2 rounded-md bg-zinc-800 px-2.5 py-1.5">
                <span className="text-zinc-300">jhondoe@example.com</span>
                <button type="button" className="text-zinc-400">
                  <LuX className="size-4" />
                </button>
              </div>
            </div>

            <div className="h-px w-full bg-zinc-800" />

            <form className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 p-2.5">
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
      )}
    </div>
  )
}
