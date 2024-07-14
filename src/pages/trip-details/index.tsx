import { FormEvent, useState } from 'react'
import { LuCalendar, LuMapPin, LuPlus, LuSettings2 } from 'react-icons/lu'
import { CreateActivityModal } from './create-activity-modal'
import { ImportanteLinks } from './important-links'
import { Guests } from './guests'
import { Activities } from './activities'

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
          <Activities />
        </div>

        {/* Right section */}
        <div className="w-80 space-y-6">
          <ImportanteLinks />

          <div className="h-px w-full bg-zinc-800" />

          <Guests />
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
