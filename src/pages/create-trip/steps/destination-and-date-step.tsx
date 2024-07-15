import {
  LuArrowRight,
  LuCalendar,
  LuMapPin,
  LuSettings2,
  LuX,
} from 'react-icons/lu'
import { Button } from '../../../components/button'
import { useState } from 'react'
import 'react-day-picker/dist/style.css'
import { DateRange, DayPicker } from 'react-day-picker'
import { format } from 'date-fns'

type InviteGuestsModalProps = {
  isGuestsInputOpen: boolean
  eventStartAndEndDates: DateRange | undefined
  closeGuestsInput: () => void
  openGuestsInput: () => void
  setDestination: (destination: string) => void
  setEventStartAndEndDates: (dates: DateRange | undefined) => void
}

export const DestinationAndDateStep = ({
  isGuestsInputOpen,
  eventStartAndEndDates,
  closeGuestsInput,
  openGuestsInput,
  setDestination,
  setEventStartAndEndDates,
}: InviteGuestsModalProps) => {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)

  function openDatePicker() {
    setIsDatePickerOpen(true)
  }

  function closeDatePicker() {
    setIsDatePickerOpen(false)
  }

  const displayedDate =
    eventStartAndEndDates &&
    eventStartAndEndDates.from &&
    eventStartAndEndDates.to
      ? format(eventStartAndEndDates.from, "d' de 'LLL")
          .concat(' até ')
          .concat(format(eventStartAndEndDates.to, "d' de 'LLL"))
      : null

  return (
    <div className="flex h-16 items-center gap-3 rounded-xl bg-zinc-900 px-4 shadow-shape">
      <div className="flex flex-1 items-center gap-2">
        <LuMapPin className="size-5 text-zinc-400" />
        <input
          onChange={(e) => setDestination(e.target.value)}
          disabled={isGuestsInputOpen}
          type="text"
          placeholder="Para onde você vai?"
          className="flex-1 bg-transparent text-lg placeholder-zinc-400"
        />
      </div>

      <button
        disabled={isGuestsInputOpen}
        onClick={openDatePicker}
        className="flex w-full max-w-[240px] items-center gap-2 text-left"
      >
        <LuCalendar className="size-5 text-zinc-400" />
        <span className="w-40 flex-1 text-lg text-zinc-400">
          {displayedDate || 'Quando?'}
        </span>
      </button>

      <div className="h-6 w-px bg-zinc-800" />

      {isGuestsInputOpen ? (
        <Button onClick={closeGuestsInput} variant="secondary">
          Alterar local/data
          <LuSettings2 className="size-5" />
        </Button>
      ) : (
        <Button onClick={openGuestsInput}>
          Continuar
          <LuArrowRight className="size-5" />
        </Button>
      )}

      {/* DatePicker modal */}
      {isDatePickerOpen && (
        <div className="items fixed inset-0 flex items-center justify-center bg-black/60">
          <div className="space-y-5 rounded-xl bg-zinc-900 px-6 py-5 shadow-shape">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Selecione a data</h2>
                <button onClick={closeDatePicker} className="text-zinc-400">
                  <LuX className="size-5" />
                </button>
              </div>
            </div>

            <DayPicker
              mode="range"
              selected={eventStartAndEndDates}
              onSelect={setEventStartAndEndDates}
            />
          </div>
        </div>
      )}
    </div>
  )
}
