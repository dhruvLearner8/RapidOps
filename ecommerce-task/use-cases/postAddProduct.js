function makePostAddProduct({productQuery}){
    return async function postAddProduct({productName,productPrice,productQuantity,productCompany}){
        const result = await productQuery.addProduct({productName,productPrice,productQuantity,productCompany})
        return result;
    }
}

module.exports = makePostAddProduct;