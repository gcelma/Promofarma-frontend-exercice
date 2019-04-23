const productTemplate = (image, name, price) => {
    return `<div><p><img src=${image}/></p><p>${name}</p><p>${price}€</p></div><hr>`
}

export default productTemplate