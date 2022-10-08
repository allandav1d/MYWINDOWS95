import create from "zustand";
import { persist } from "zustand/middleware";

type TasksProps = {
  height: number;
  width: number;
};

type State = {
  Tasks: TasksProps[];
  setTasks: (Tasks: TasksProps) => void;
};

const useTaskStore = create<State>()(
  persist(
    (set, get) => ({
      Tasks: [],
      setTasks: (Tasks: TasksProps) => {
        set((state) => ({ Tasks: [...state.Tasks, Tasks] }));
      },
    }),
    {
      name: "Tasks-storage", // name of item in the storage (must be unique)
      getStorage: () => localStorage, // (optional) by default the 'localStorage' is used
    }
  )
);

export default useTaskStore;
