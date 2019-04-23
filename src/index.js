import ProductList from './components/ProductList/'
import Basket from './components/Basket'
import "./main.scss"

window.addEventListener('DOMContentLoaded', () => {
    const products = document.querySelector('#products')
    new ProductList(products).init()

    const basket = document.querySelector('#basket')
    new Basket(basket).init()
})