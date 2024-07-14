import { LuCheckCircle2 } from 'react-icons/lu'

export const Activities = () => {
  return (
    <div className="space-y-8">
      {/* Activity item */}
      <div className="space-y-2.5">
        <div className="flex items-baseline gap-2">
          <span className="text-xl font-semibold text-zinc-300">Dia 17</span>
          <span className="text-xs text-zinc-500">Sábado</span>
        </div>
        <p className="text-sm text-zinc-500">
          Nenhuma atividade cadastrada nessa data.
        </p>
      </div>

      {/* Activity item */}
      <div className="space-y-2.5">
        <div className="flex items-baseline gap-2">
          <span className="text-xl font-semibold text-zinc-300">Dia 18</span>
          <span className="text-xs text-zinc-500">Domingo</span>
        </div>
        {/* TODO list */}
        <div className="space-y-2.5">
          {/* TODO */}
          <div className="flex items-center gap-3 rounded-xl bg-zinc-900 px-4 py-2.5 shadow-shape">
            <LuCheckCircle2 className="size-5 text-lime-300" />
            <span className="text-zinc-100">Acadêmia em grupo</span>
            <span className="ml-auto text-sm text-zinc-400">08:00h</span>
          </div>

          {/* TODO */}
          <div className="flex items-center gap-3 rounded-xl bg-zinc-900 px-4 py-2.5 shadow-shape">
            <LuCheckCircle2 className="size-5 text-lime-300" />
            <span className="text-zinc-100">Acadêmia em grupo</span>
            <span className="ml-auto text-sm text-zinc-400">08:00h</span>
          </div>
        </div>
      </div>
    </div>
  )
}
