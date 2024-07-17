import { create } from 'zustand'

type ModalState = {
  isGuestsInputOpen: boolean
  isGuestsModalOpen: boolean
  isConfirmTripModalOpen: boolean
  openGuestsInput: () => void
  closeGuestsInput: () => void
  openGuestsModal: () => void
  closeGuestsModal: () => void
  openConfirmTripModal: () => void
  closeConfirmTripModal: () => void
}

export const useModalStore = create<ModalState>((set) => ({
  isGuestsInputOpen: false,
  isGuestsModalOpen: false,
  isConfirmTripModalOpen: false,
  openGuestsInput: () => set({ isGuestsInputOpen: true }),
  closeGuestsInput: () => set({ isGuestsInputOpen: false }),
  openGuestsModal: () => set({ isGuestsModalOpen: true }),
  closeGuestsModal: () => set({ isGuestsModalOpen: false }),
  openConfirmTripModal: () => set({ isConfirmTripModalOpen: true }),
  closeConfirmTripModal: () => set({ isConfirmTripModalOpen: false }),
}))
