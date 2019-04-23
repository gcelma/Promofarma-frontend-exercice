import data from '../../data'
import basket from '../../data/basket'
import template from '../BasketTemplate'
import productTemplate from '../BasketTemplate/productTemplate'


class Basket {
    constructor(base) {
        this.base = base
    }

    buildBasket() {
        this.base.innerHTML = this.base.innerHTML + template()
    }

    static selectProduct(id) {
        data.map(product => {
            if (product.id == id) {
                basket.push(product)
                let cart = document.querySelector('.basket__products')
                cart.innerHTML = cart.innerHTML + productTemplate(product.image, product.name, product.price)

                let updateamountProducts = document.querySelector('.basket__items')
                let updateTotalAmount = document.querySelector('.basket__amount')
                let amount = 0

                basket.map(product => {
                    amount += product.price
                })

                updateamountProducts.innerText = `(${basket.length} productos)`
                updateTotalAmount.innerText = `${amount.toFixed(2)}€`
            }
        })
    }

    init() {
        this.buildBasket()
    }
}

export default Basket