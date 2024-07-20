import { create } from "zustand";

const useStore = create((set) => ({
  isChecked: false, // For theme toggling
  isMuted: false, // For sound mute state
  toggleTheme: () => set((state) => ({ isChecked: !state.isChecked })),
  toggleMute: () => set((state) => ({ isMuted: !state.isMuted })),
}));

export default useStore;
