import create from "zustand";
import { persist } from "zustand/middleware";

type MonitorProps = {
  height: number;
  width: number;
};

type State = {
  monitor: MonitorProps;
  setMonitor: (monitor: MonitorProps) => void;
};

const useWindowStore = create<State>()(
  persist(
    (set, get) => ({
      monitor: { height: 0, width: 0 },
      setMonitor: (monitor: MonitorProps) => {
        set((state) => ({ monitor: { ...state.monitor, ...monitor } }));
      },
    }),
    {
      name: "Window-storage", // name of item in the storage (must be unique)
      getStorage: () => localStorage, // (optional) by default the 'localStorage' is used
    }
  )
);

export default useWindowStore;
