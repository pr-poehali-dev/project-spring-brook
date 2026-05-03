import type { ChoiceTask } from "@/data/quests"

interface Props {
  task: ChoiceTask
  selected: number | null
  onSelect: (index: number) => void
  revealed: boolean
}

export default function ChoiceTaskView({ task, selected, onSelect, revealed }: Props) {
  return (
    <div className="space-y-3">
      {task.options.map((option, i) => {
        let style =
          "w-full text-left px-5 py-3.5 rounded-xl border text-sm transition-all duration-200 cursor-pointer "
        if (!revealed) {
          style +=
            selected === i
              ? "border-amber-400 bg-amber-400/10 text-white"
              : "border-white/10 bg-white/5 text-white/70 hover:border-white/30 hover:text-white"
        } else {
          if (i === task.correct) {
            style += "border-green-400 bg-green-400/10 text-green-300"
          } else if (selected === i) {
            style += "border-red-400 bg-red-400/10 text-red-300"
          } else {
            style += "border-white/10 bg-white/5 text-white/30"
          }
        }
        return (
          <button key={i} className={style} onClick={() => !revealed && onSelect(i)} disabled={revealed}>
            <span className="inline-flex items-center gap-3">
              <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-xs shrink-0">
                {String.fromCharCode(65 + i)}
              </span>
              {option}
            </span>
          </button>
        )
      })}
    </div>
  )
}
