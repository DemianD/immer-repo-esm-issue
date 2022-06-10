import { produce } from 'immer'

const baseState = { done: false }

const nextState = produce(baseState, draft => {
    draft.done = true
})

console.log({ nextState })
