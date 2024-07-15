import { LuMapPin, LuCalendar, LuSettings2 } from 'react-icons/lu'
import { Button } from '../../components/button'

export const DestinationAndDateHeader = () => {
  return (
    <div className="flex h-16 items-center justify-between rounded-xl bg-zinc-900 px-4 shadow-shape">
      {/* Left content */}
      <div className="flex items-center gap-2">
        <LuMapPin className="size-5 text-zinc-400" />
        <span className="text-zinc-100">Florianópolis, Brasil</span>
      </div>

      {/* Right content */}
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <LuCalendar className="size-5 text-zinc-400" />
          <span className="text-zinc-100">17 a 23 de Agosto</span>
        </div>

        <div className="h-6 w-px bg-zinc-800" />

        <Button variant="secondary">
          Alterar local/data
          <LuSettings2 className="size-5" />
        </Button>
      </div>
    </div>
  )
}
