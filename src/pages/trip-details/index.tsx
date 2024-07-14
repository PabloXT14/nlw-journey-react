import { FormEvent, useState } from 'react'
import { LuPlus } from 'react-icons/lu'
import { CreateActivityModal } from './create-activity-modal'
import { ImportanteLinks } from './important-links'
import { Guests } from './guests'
import { Activities } from './activities'
import { DestinationAndDateHeader } from './destinatination-and-date-header'

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
      <DestinationAndDateHeader />

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
