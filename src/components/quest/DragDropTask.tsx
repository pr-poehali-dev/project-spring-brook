import { useState } from "react"
import type { DragDropTask } from "@/data/quests"
import Icon from "@/components/ui/icon"

interface Props {
  task: DragDropTask
  onSubmit: (order: number[]) => void
  revealed: boolean
  correct: boolean
}

export default function DragDropTaskView({ task, onSubmit, revealed, correct }: Props) {
  const [order, setOrder] = useState<number[]>(() => task.items.map((_, i) => i))
  const [dragging, setDragging] = useState<number | null>(null)

  const moveUp = (index: number) => {
    if (index === 0) return
    const newOrder = [...order]
    ;[newOrder[index - 1], newOrder[index]] = [newOrder[index], newOrder[index - 1]]
    setOrder(newOrder)
  }

  const moveDown = (index: number) => {
    if (index === order.length - 1) return
    const newOrder = [...order]
    ;[newOrder[index], newOrder[index + 1]] = [newOrder[index + 1], newOrder[index]]
    setOrder(newOrder)
  }

  const handleDragStart = (index: number) => setDragging(index)

  const handleDrop = (index: number) => {
    if (dragging === null || dragging === index) return
    const newOrder = [...order]
    const [removed] = newOrder.splice(dragging, 1)
    newOrder.splice(index, 0, removed)
    setOrder(newOrder)
    setDragging(null)
  }

  const isOrderCorrect = () =>
    order.every((itemIndex, pos) => task.correctOrder[pos] === itemIndex)

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        {order.map((itemIndex, pos) => {
          let cardStyle =
            "flex items-center gap-3 px-4 py-3 rounded-xl border text-sm text-white transition-all duration-200 "
          if (revealed) {
            const isCorrectPos = task.correctOrder[pos] === itemIndex
            cardStyle += isCorrectPos
              ? "border-green-400 bg-green-400/10"
              : "border-red-400 bg-red-400/10"
          } else {
            cardStyle +=
              "border-white/10 bg-white/5 hover:border-amber-400/40 cursor-grab active:cursor-grabbing"
          }

          return (
            <div
              key={itemIndex}
              className={cardStyle}
              draggable={!revealed}
              onDragStart={() => handleDragStart(pos)}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => handleDrop(pos)}
            >
              <span className="text-white/30 text-xs w-5 shrink-0">{pos + 1}.</span>
              <span className="flex-1">{task.items[itemIndex]}</span>
              {!revealed && (
                <div className="flex flex-col gap-0.5">
                  <button
                    onClick={() => moveUp(pos)}
                    disabled={pos === 0}
                    className="text-white/30 hover:text-white disabled:opacity-20 cursor-pointer"
                  >
                    <Icon name="ChevronUp" size={14} />
                  </button>
                  <button
                    onClick={() => moveDown(pos)}
                    disabled={pos === order.length - 1}
                    className="text-white/30 hover:text-white disabled:opacity-20 cursor-pointer"
                  >
                    <Icon name="ChevronDown" size={14} />
                  </button>
                </div>
              )}
            </div>
          )
        })}
      </div>
      {!revealed && (
        <button
          onClick={() => onSubmit(order)}
          className="px-6 py-3 rounded-xl bg-amber-400 text-black text-sm font-medium transition-all duration-200 hover:bg-amber-300 cursor-pointer"
        >
          Проверить порядок
        </button>
      )}
      {revealed && !correct && (
        <p className="text-white/40 text-xs">Правильный порядок показан зелёным цветом.</p>
      )}
    </div>
  )
}
