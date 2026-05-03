import { useState } from "react"
import { quests } from "@/data/quests"
import type { Quest } from "@/data/quests"
import ChoiceTaskView from "./ChoiceTask"
import TextInputTaskView from "./TextInputTask"
import DragDropTaskView from "./DragDropTask"
import FindWordTaskView from "./FindWordTask"
import Icon from "@/components/ui/icon"

export default function QuestSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [revealed, setRevealed] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [choiceSelected, setChoiceSelected] = useState<number | null>(null)
  const [completed, setCompleted] = useState(false)
  const [score, setScore] = useState(0)

  const quest = quests[currentIndex]
  const progress = ((currentIndex) / quests.length) * 100

  const handleChoiceSelect = (index: number) => {
    setChoiceSelected(index)
  }

  const handleChoiceSubmit = () => {
    if (choiceSelected === null) return
    const task = quest.task as { type: "choice"; correct: number }
    const ok = choiceSelected === task.correct
    setIsCorrect(ok)
    if (ok) setScore((s) => s + 1)
    setRevealed(true)
  }

  const handleTextSubmit = (value: string) => {
    const task = quest.task as { type: "text-input"; correct: string[] }
    const ok = task.correct.some((c) => c.toLowerCase() === value.toLowerCase())
    setIsCorrect(ok)
    if (ok) setScore((s) => s + 1)
    setRevealed(true)
  }

  const handleDragSubmit = (order: number[]) => {
    const task = quest.task as { type: "drag-drop"; correctOrder: number[] }
    const ok = order.every((v, i) => v === task.correctOrder[i])
    setIsCorrect(ok)
    if (ok) setScore((s) => s + 1)
    setRevealed(true)
  }

  const handleFindSubmit = (selected: string[]) => {
    const task = quest.task as { type: "find-word"; correct: string[] }
    const ok =
      selected.length === task.correct.length &&
      task.correct.every((c) => selected.includes(c))
    setIsCorrect(ok)
    if (ok) setScore((s) => s + 1)
    setRevealed(true)
  }

  const handleNext = () => {
    if (currentIndex + 1 >= quests.length) {
      setCompleted(true)
      return
    }
    setCurrentIndex((i) => i + 1)
    setRevealed(false)
    setIsCorrect(false)
    setChoiceSelected(null)
  }

  if (completed) {
    return <CompletedScreen score={score} total={quests.length} onRestart={() => {
      setCurrentIndex(0)
      setRevealed(false)
      setIsCorrect(false)
      setChoiceSelected(null)
      setCompleted(false)
      setScore(0)
    }} />
  }

  return (
    <section id="quest" className="relative bg-[#020d1a] px-6 py-16 md:py-24">
      <div className="max-w-2xl mx-auto">

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-white/40 text-xs uppercase tracking-widest">
              Задание {currentIndex + 1} из {quests.length}
            </span>
            <span className="text-amber-400 text-xs font-light">
              {score} / {currentIndex + (revealed ? 1 : 0)} верно
            </span>
          </div>
          <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-amber-600 to-amber-300 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Card */}
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden">
          {/* Illustration */}
          {quest.image && (
            <div className="w-full">
              <img
                src={quest.image}
                alt={quest.title}
                className="w-full h-auto object-contain"
              />
            </div>
          )}

          <div className="p-6 md:p-8">
          {/* Chapter */}
          <div className="flex items-center gap-2 mb-5">
            <span className="text-amber-400/60 text-xs uppercase tracking-widest">{quest.chapter}</span>
          </div>

          {/* Title */}
          <h3 className="text-white text-xl font-light mb-3">{quest.title}</h3>

          {/* Instruction */}
          <div className="flex gap-3 bg-amber-400/5 border border-amber-400/20 rounded-xl px-4 py-3 mb-6">
            <Icon name="BookOpen" size={16} className="text-amber-400 shrink-0 mt-0.5" />
            <p className="text-amber-200/80 text-xs leading-relaxed">{quest.instruction}</p>
          </div>

          {/* Question */}
          <p className="text-white/90 text-sm font-light mb-5 leading-relaxed">{quest.task.question}</p>

          {/* Task */}
          {quest.task.type === "choice" && (
            <>
              <ChoiceTaskView
                task={quest.task}
                selected={choiceSelected}
                onSelect={handleChoiceSelect}
                revealed={revealed}
              />
              {!revealed && (
                <button
                  onClick={handleChoiceSubmit}
                  disabled={choiceSelected === null}
                  className="mt-4 px-6 py-3 rounded-xl bg-amber-400 text-black text-sm font-medium transition-all duration-200 hover:bg-amber-300 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                >
                  Проверить
                </button>
              )}
            </>
          )}
          {quest.task.type === "text-input" && (
            <TextInputTaskView
              task={quest.task}
              onSubmit={handleTextSubmit}
              revealed={revealed}
              correct={isCorrect}
            />
          )}
          {quest.task.type === "drag-drop" && (
            <DragDropTaskView
              task={quest.task}
              onSubmit={handleDragSubmit}
              revealed={revealed}
              correct={isCorrect}
            />
          )}
          {quest.task.type === "find-word" && (
            <FindWordTaskView
              task={quest.task}
              onSubmit={handleFindSubmit}
              revealed={revealed}
              correct={isCorrect}
            />
          )}

          {/* Feedback */}
          {revealed && (
            <div
              className={`mt-6 flex items-start gap-3 rounded-xl px-4 py-3 border ${
                isCorrect
                  ? "bg-green-400/5 border-green-400/30 text-green-300"
                  : "bg-red-400/5 border-red-400/30 text-red-300"
              }`}
            >
              <Icon name={isCorrect ? "CheckCircle" : "XCircle"} size={16} className="shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium mb-0.5">{isCorrect ? "Правильно!" : "Не совсем верно"}</p>
                <p className="text-xs opacity-80">{quest.successMessage}</p>
              </div>
            </div>
          )}
          </div>
        </div>

        {/* Next button */}
        {revealed && (
          <div className="mt-6 flex justify-end">
            <button
              onClick={handleNext}
              className="flex items-center gap-2 px-7 py-3 rounded-full bg-white text-black text-sm font-medium transition-all duration-200 hover:bg-white/90 cursor-pointer"
            >
              {currentIndex + 1 >= quests.length ? "Завершить квест" : "Следующее задание"}
              <Icon name="ArrowRight" size={16} />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

function CompletedScreen({ score, total, onRestart }: { score: number; total: number; onRestart: () => void }) {
  const percent = Math.round((score / total) * 100)
  const medal = percent === 100 ? "🏆" : percent >= 70 ? "⭐" : "📖"
  const message =
    percent === 100
      ? "Ты настоящий знаток сказок Пушкина!"
      : percent >= 70
      ? "Отличный результат! Сказка тебе хорошо знакома."
      : "Прочитай сказку ещё раз и попробуй снова!"

  return (
    <section className="relative bg-[#020d1a] px-6 py-24 text-center">
      <div className="max-w-lg mx-auto">
        <div className="text-6xl mb-6">{medal}</div>
        <h3 className="text-white text-3xl font-light mb-3">Квест завершён!</h3>
        <p className="text-amber-200 text-4xl font-light mb-2">{score} / {total}</p>
        <p className="text-white/50 text-sm mb-8 leading-relaxed">{message}</p>

        <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden mb-8">
          <div
            className="h-full bg-gradient-to-r from-amber-600 to-amber-300 rounded-full transition-all duration-1000"
            style={{ width: `${percent}%` }}
          />
        </div>

        <button
          onClick={onRestart}
          className="px-10 py-3.5 rounded-full bg-amber-400 text-black text-sm font-medium hover:bg-amber-300 transition-all duration-200 cursor-pointer"
        >
          Пройти ещё раз
        </button>
      </div>
    </section>
  )
}