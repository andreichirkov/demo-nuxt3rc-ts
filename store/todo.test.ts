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

    test('gets ordered todos', () => {
        const items = [
            {
                createdAt: new Date(2021, 2, 14)
            },
            {
                createdAt: new Date(2020, 2, 14)
            },
            {
                createdAt: new Date(2019, 2, 14)
            }
        ]

        // @ts-ignore
        store.items = items

        const orderedTodos = store.getOrderedTodos

        expect(orderedTodos[0].createdAt.getFullYear()).toBe(2019)
        expect(orderedTodos[1].createdAt.getFullYear()).toBe(2020)
        expect(orderedTodos[2].createdAt.getFullYear()).toBe(2021)
        expect(store.items[0].createdAt.getFullYear()).toBe(2021)
    })
})

// afterAll()


