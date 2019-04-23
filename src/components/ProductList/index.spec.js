import ProductList from '.'

describe('ProductList instance', () => {
    const elem = document.createElement('div')
    let productList

    beforeEach(() => {
        productList = new ProductList(elem)
      })
      
    afterEach(() => {
        productList = null
    })

    test('productList should exist', () => {
        expect(productList).toBeDefined()
    })

    test('productList must be an instance of ProductList', () => {
        expect(productList instanceof ProductList).toBeTruthy()
    })

    test('productList must have a base property', () => {
        expect(productList.base).toBeDefined()
    })

    test('productList shoud have a buildProductList method', () => {
        expect(productList.buildProductList).toBeDefined()
        expect(productList.buildProductList instanceof Function).toBeTruthy()
    })
})