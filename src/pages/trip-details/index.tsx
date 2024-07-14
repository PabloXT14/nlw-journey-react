import { FormEvent, useState } from 'react'
import {
  LuCalendar,
  LuCheckCircle2,
  LuCircleDashed,
  LuLink2,
  LuMapPin,
  LuPlus,
  LuSettings2,
  LuUserCog,
} from 'react-icons/lu'
import { CreateActivityModal } from './create-activity-modal'

export function TripDetailsPage() {
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] =
    useState(false)

  function openCreateActivityModal() {
    setIsCreateActivityModalOpen(true)
  }

  function closeCreateActivityModal() {
    setIsCreateActivityModalOpen(false)
  }

  function createActivity(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <div className="mx-auto max-w-6xl space-y-8 px-6 py-10">
      {/* Header */}
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

          <button className="flex items-center gap-2 rounded-lg bg-zinc-800 px-5 py-2 font-medium text-zinc-200 transition-colors hover:bg-zinc-700">
            Alterar local/data
            <LuSettings2 className="size-5" />
          </button>
        </div>
      </div>

      {/* Page content */}
      <main className="flex gap-16 px-4">
        {/* Left section */}
        <div className="flex-1 space-y-6">
          {/* Activities header */}
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Atividades</h2>

            <button
              onClick={openCreateActivityModal}
              className="flex items-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 transition-colors hover:bg-lime-400"
            >
              <LuPlus className="size-5" />
              Cadastrar atividade
            </button>
          </div>

          {/* Activities list */}
          <div className="space-y-8">
            {/* Activity item */}
            <div className="space-y-2.5">
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-semibold text-zinc-300">
                  Dia 17
                </span>
                <span className="text-xs text-zinc-500">Sábado</span>
              </div>
              <p className="text-sm text-zinc-500">
                Nenhuma atividade cadastrada nessa data.
              </p>
            </div>

            {/* Activity item */}
            <div className="space-y-2.5">
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-semibold text-zinc-300">
                  Dia 18
                </span>
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
        </div>

        {/* Right section */}
        <div className="w-80 space-y-6">
          {/* Important links */}
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

          <div className="h-px w-full bg-zinc-800" />

          {/* Guests */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Convidados</h2>

            {/* Guest list */}
            <div className="space-y-5">
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <span className="block font-medium text-zinc-100">
                    Jessica White
                  </span>
                  <span className="block truncate text-sm text-zinc-400">
                    jessice.white@gmail.com
                  </span>
                </div>
                <LuCircleDashed className="size-5 shrink-0 text-zinc-400" />
              </div>

              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <span className="block font-medium text-zinc-100">
                    Dr. Rita Pacocha
                  </span>
                  <span className="block truncate text-sm text-zinc-400">
                    dr.rita.pacocha@gmailcom
                  </span>
                </div>
                <LuCircleDashed className="size-5 shrink-0 text-zinc-400" />
              </div>
            </div>

            <button className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-zinc-800 px-5 font-medium text-zinc-200 transition-colors hover:bg-zinc-700">
              <LuUserCog className="size-5" />
              Gerenciar convidados
            </button>
          </div>
        </div>
      </main>

      {/* Create activity modal */}
      {isCreateActivityModalOpen && (
        <CreateActivityModal
          closeCreateActivityModal={closeCreateActivityModal}
          createActivity={createActivity}
        />
      )}
    </div>
  )
}
