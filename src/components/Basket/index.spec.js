import Basket from '.'

describe('Basket instance', () => {
    const elem = document.createElement('div')
    let basket

    beforeEach(() => {
        basket = new Basket(elem)
      })
      
    afterEach(() => {
        basket = null
    })

    test('basket should exist', () => {
        expect(basket).toBeDefined()
    })

    test('basket must be an instance of Basket', () => {
        expect(basket instanceof Basket).toBeTruthy()
    })

    test('basket must have a base property', () => {
        expect(basket.base).toBeDefined()
    })

    test('basket shoud have a buildBasket method', () => {
        expect(basket.buildBasket).toBeDefined()
        expect(basket.buildBasket instanceof Function).toBeTruthy()
    })
})