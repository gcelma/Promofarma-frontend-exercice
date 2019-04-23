import data from '../../data'
import template from '../ProductTemplate'
import basket from '../Basket/index'
import './index.scss'

class ProductList {
    constructor (base) {
        this.base = base
    }

    buildProductList() {
        data.map(({ id, name, price }) => this.addNewProduct(id, name, price))
    }

    addNewProduct(id, name, price) {
        this.base.innerHTML = this.base.innerHTML + template(id, name, price)
    }

    addEventListeners() {
        let buttons = document.getElementsByTagName('button')
        Array.prototype.forEach.call(buttons, (button) => {
            let id = button.getAttribute('data-id')
            button.addEventListener("click", () => this.addToBasket(id, button))
        })
    }

    addToBasket(id, button) {
        button.classList.add('product__button--inactive')
        basket.selectProduct(id)
    }

    init() {
        this.buildProductList()
        this.addEventListeners()
    }
}

export default ProductList