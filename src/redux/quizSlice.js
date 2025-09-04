import { createSlice } from '@reduxjs/toolkit'
import questionsData from '../questions.json'

const initialState = {
    loading: false,
    error: null,
    questions: questionsData,
    index: 0,
    answers: [],
    finished: false
}

const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers:
    {
        selectAnswer: (state, action) => {
            if (state.finished) return;
            const option = action.payload
            const q = state.questions[state.index]
            const correct = option === q.correct_answer
            state.answers[state.index] = { qIndex: state.index, selected: option, correct }
        },
        nextQuestion: (state) => {
            if (state.index < state.questions.length - 1) state.index++
            else state.finished = true
        },
        skipQuestion: (state) => {
            if (state.index < state.questions.length - 1) state.index++
            else state.finished = true
        },
        finishQuiz: (state) => {
            state.finished = true
        },
        restart: (state) => {
            state.index = 0
            state.answers = []
            state.finished = false
        }
    }
})

export const { selectAnswer, nextQuestion, skipQuestion, finishQuiz, restart } = quizSlice.actions
export default quizSlice.reducer