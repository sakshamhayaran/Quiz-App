import { useDispatch, useSelector } from 'react-redux'
import { selectAnswer } from '../redux/quizSlice'

function QuestionCard({ question, qIndex }) {

    const dispatch = useDispatch()
    const { answers } = useSelector(state => state.quiz)
    if (!question) return null

    const opts = [...question.incorrect_answers, question.correct_answer]
    const shuffled = opts
        .map(v => ({ v, r: Math.random() }))
        .sort((a, b) => a.r - b.r)
        .map(o => o.v)

    const userAnswer = answers[qIndex]

    function decodeHtml(html) {
        const txt = document.createElement('textarea')
        txt.innerHTML = html
        return txt.value
    }

    return (
        <div>
            <div className="mb-4 text-lg font-semibold">{decodeHtml(question.question)}</div>

            <div className="grid grid-cols-1 gap-3">
                {shuffled.map((opt, i) => {
                    const selected = userAnswer && userAnswer.selected === opt
                    const isCorrect = question.correct_answer === opt
                    const disabled = !!userAnswer


                    let bg = 'bg-white'
                    if (selected) bg = isCorrect ? 'bg-green-100' : 'bg-red-100'


                    return (
                        <button
                            key={i}
                            onClick={() => dispatch(selectAnswer(opt))}
                            disabled={disabled}
                            className={`text-left p-3 rounded-md border border-gray-200 hover:shadow ${bg} ${disabled ? 'opacity-90' : 'hover:bg-gray-50'}`}>
                            <div className={`flex items-center gap-3 ${selected ? 'font-semibold' : ''}`}>
                                <div className="w-6 text-sm">{String.fromCharCode(65 + i)}</div>
                                <div className="flex-1">{decodeHtml(opt)}</div>
                            </div>
                        </button>
                    )
                })}
            </div>

        </div>
    )
}

export default QuestionCard