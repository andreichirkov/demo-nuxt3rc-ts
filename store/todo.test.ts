import {describe, test, expect, beforeAll, afterAll, beforeEach, afterEach} from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useTodoStore } from "./todo";

beforeAll(() => {
    setActivePinia(createPinia())
})

describe('useTodoStore', () => {
    let store: ReturnType<typeof useTodoStore>

    beforeEach(() => {
        store = useTodoStore()
    })

    afterEach(() => {
        //reset to initial state
        store.$reset()
    })

    test('create a store', () => {
        const store = useTodoStore()
        expect(store).toBeDefined()
    })

    test('begin with empty items', () => {
        expect(store.items).toStrictEqual([])
    })

    test('creates a todo', () => {
        store.add({title: 'test todos'})
        expect(store.items[0]).toBeDefined()
        expect(store.items[0].title).toBe('test todos')
    })

    test('gets by id', () => {
        store.add({title: 'test1'})
        const item = store.items[0]
        const todo = store.getById(item.id)

        expect(todo).toStrictEqual(item)
    })
})

// afterAll()


