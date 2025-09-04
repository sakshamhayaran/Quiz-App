import { useSelector, useDispatch } from 'react-redux'
import { restart } from '../redux/quizSlice'
import { useNavigate } from 'react-router-dom'


export default function Result() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { questions, answers } = useSelector(state => state.quiz)

    const score = answers.filter(a => a?.correct).length

    if (!questions || questions.length === 0) return <div>No results</div>


    return (
        <div className="bg-white p-6 rounded-lg shadow-xl">
            <div className="text-center mb-4">
                <h2 className="text-2xl font-bold">Your Score</h2>
                <p className="text-lg mt-2">You scored {score} / {questions.length}</p>
            </div>


            <div className="space-y-4">
                {questions.map((q, i) => {
                    const ans = answers[i]
                    const selected = ans ? ans.selected : null
                    const correct = q.correct_answer
                    const correctFlag = ans && ans.correct


                    return (
                        <div key={i} className="p-4 border rounded-md">
                            <div className="font-medium">Q{i + 1}: {q.question}</div>
                            <div className="mt-2 text-sm">
                                <div>Correct: <span className="font-semibold">{correct}</span></div>
                                <div>Your answer: <span className={`font-semibold ${correctFlag ? 'text-green-600' : 'text-red-600'}`}>{selected ?? '—'}</span></div>
                            </div>
                        </div>
                    )
                })}
            </div>


            <div className="mt-6 flex justify-center">
                <button onClick={() => { dispatch(restart()); navigate('/') }} className="px-4 py-2 rounded-md bg-blue-600 text-white">Restart Quiz</button>
            </div>
        </div>
    )
}