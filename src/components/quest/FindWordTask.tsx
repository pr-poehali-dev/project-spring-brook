import { useState } from "react"
import type { FindWordTask } from "@/data/quests"

interface Props {
  task: FindWordTask
  onSubmit: (selected: string[]) => void
  revealed: boolean
  correct: boolean
}

export default function FindWordTaskView({ task, onSubmit, revealed, correct }: Props) {
  const [selected, setSelected] = useState<string[]>([])

  const toggle = (word: string) => {
    if (revealed) return
    setSelected((prev) => (prev.includes(word) ? prev.filter((w) => w !== word) : [...prev, word]))
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {task.words.map((word) => {
          const isSelected = selected.includes(word)
          const isCorrect = task.correct.includes(word)

          let style =
            "px-4 py-2 rounded-full border text-sm transition-all duration-200 cursor-pointer "
          if (!revealed) {
            style += isSelected
              ? "border-amber-400 bg-amber-400/15 text-amber-200"
              : "border-white/10 bg-white/5 text-white/60 hover:border-white/30 hover:text-white"
          } else {
            if (isCorrect && isSelected) {
              style += "border-green-400 bg-green-400/15 text-green-300"
            } else if (isCorrect && !isSelected) {
              style += "border-amber-400 bg-amber-400/10 text-amber-300 animate-pulse"
            } else if (!isCorrect && isSelected) {
              style += "border-red-400 bg-red-400/10 text-red-300"
            } else {
              style += "border-white/10 bg-white/5 text-white/30"
            }
          }

          return (
            <button key={word} className={style} onClick={() => toggle(word)} disabled={revealed}>
              {word}
            </button>
          )
        })}
      </div>
      {!revealed && (
        <button
          onClick={() => onSubmit(selected)}
          disabled={selected.length === 0}
          className="px-6 py-3 rounded-xl bg-amber-400 text-black text-sm font-medium transition-all duration-200 hover:bg-amber-300 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
        >
          Проверить выбор
        </button>
      )}
      {revealed && !correct && (
        <p className="text-white/40 text-xs">Правильные варианты подсвечены золотым.</p>
      )}
    </div>
  )
}
