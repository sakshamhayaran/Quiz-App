import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { nextQuestion, skipQuestion, finishQuiz } from '../redux/quizSlice'
import QuestionCard from '../components/QuestionCard'
import { useNavigate } from 'react-router-dom'

export default function Quiz() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { questions, index, answers, finished } = useSelector(state => state.quiz)

    if (!questions || questions.length === 0) return <div>Loading...</div>
    
    useEffect(()=>{ if (finished) navigate('/result') },[finished])

    const current = questions[index]
    const total = questions.length

    return (
        <div className="bg-white p-6 rounded-lg shadow-xl">
            <div className="flex items-center justify-between mb-4">
                <div className="text-sm text-gray-500">Question {index + 1} of {total}</div>
                <div className="text-sm font-medium">Score: {answers.filter(a => a?.correct).length}</div>
            </div>
            <QuestionCard question={current} qIndex={index} />
            <div className="mt-6 flex gap-3">
                <button onClick={() => dispatch(skipQuestion())} className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-50">Skip</button>
                <button onClick={() => dispatch(nextQuestion())} className="px-4 py-2 rounded-md bg-blue-600 text-white hover:opacity-90">Next</button>
                <button onClick={() => { dispatch(finishQuiz()); navigate('/result') }} className="ml-auto px-4 py-2 rounded-md bg-green-600 text-white hover:opacity-90">Finish</button>
            </div>
        </div>
    )
}
