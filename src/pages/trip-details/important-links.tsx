import { LuLink2, LuPlus } from 'react-icons/lu'

export const ImportanteLinks = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Links importantes</h2>

      {/* Links list */}
      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">
              Reserva do AirBnB
            </span>
            <a
              href="#"
              className="block truncate text-xs text-zinc-400 transition-colors hover:text-zinc-200"
            >
              https://www.airbnb.com.br/rooms/1234567891234454565867565678756856785454754
            </a>
          </div>
          <LuLink2 className="size-5 shrink-0 text-zinc-400" />
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">
              Reserva do AirBnB
            </span>
            <a
              href="#"
              className="block truncate text-xs text-zinc-400 transition-colors hover:text-zinc-200"
            >
              https://www.airbnb.com.br/rooms/1234567891234454565867565678756856785454754
            </a>
          </div>
          <LuLink2 className="size-5 shrink-0 text-zinc-400" />
        </div>
      </div>

      <button className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-zinc-800 px-5 font-medium text-zinc-200 transition-colors hover:bg-zinc-700">
        <LuPlus className="size-5" />
        Cadastrar novo link
      </button>
    </div>
  )
}
