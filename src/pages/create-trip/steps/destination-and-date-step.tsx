import { LuArrowRight, LuCalendar, LuMapPin, LuSettings2 } from 'react-icons/lu'

type InviteGuestsModalProps = {
  isGuestsInputOpen: boolean
  closeGuestsInput: () => void
  openGuestsInput: () => void
}

export const DestinationAndDateStep = ({
  isGuestsInputOpen,
  closeGuestsInput,
  openGuestsInput,
}: InviteGuestsModalProps) => {
  return (
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
  )
}
