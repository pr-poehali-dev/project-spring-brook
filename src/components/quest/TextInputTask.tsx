import { useState } from "react"
import type { TextInputTask } from "@/data/quests"

interface Props {
  task: TextInputTask
  onSubmit: (value: string) => void
  revealed: boolean
  correct: boolean
}

export default function TextInputTaskView({ task, onSubmit, revealed, correct }: Props) {
  const [value, setValue] = useState("")

  const handleSubmit = () => {
    if (value.trim()) onSubmit(value.trim())
  }

  return (
    <div className="space-y-4">
      <p className="text-white/50 text-xs italic">{task.hint}</p>
      <div className="flex gap-3">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && !revealed && handleSubmit()}
          disabled={revealed}
          placeholder="Введи ответ..."
          className={`flex-1 bg-white/5 border rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-all duration-200 ${
            revealed
              ? correct
                ? "border-green-400 bg-green-400/10"
                : "border-red-400 bg-red-400/10"
              : "border-white/10 focus:border-amber-400"
          }`}
        />
        {!revealed && (
          <button
            onClick={handleSubmit}
            disabled={!value.trim()}
            className="px-6 py-3 rounded-xl bg-amber-400 text-black text-sm font-medium transition-all duration-200 hover:bg-amber-300 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
          >
            Ответить
          </button>
        )}
      </div>
      {revealed && !correct && (
        <p className="text-white/50 text-xs">
          Правильный ответ: <span className="text-amber-300">{task.correct[0]}</span>
        </p>
      )}
    </div>
  )
}
