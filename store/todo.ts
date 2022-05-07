import { defineStore } from 'pinia'

export interface Todo {
    id: string
    title: string
    done: boolean
    createdAt: Date
    updatedAt: Date
}

export interface TodoState {
    items: Todo[] | undefined[]
}

const state = (): TodoState => ({
    items: []
})

const getters = {}

const actions = {}

export const useTodoStore = defineStore('todoStore', {
    state,
    getters,
    actions
})
