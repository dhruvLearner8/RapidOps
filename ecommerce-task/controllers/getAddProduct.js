function makeAddProductAction(){
    return async function addProductAction(req,res){
        res.render('addProduct');
    }
}

module.exports = makeAddProductAction;