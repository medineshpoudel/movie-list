import create from "zustand";
export const useMovieStore = create((set: any) => ({
  success: false,
  isSuccess: () => set({ success: true }),
  dissolveSuccess: () => set({ success: false }),
}));
export const useMovieDetail = create((set: any) => ({
  toggle: false,
  isToggle: () => set({ toggle: !!true }),
  dissolveToggle: () => set({ toggle: false }),
}));
