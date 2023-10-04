function makeCartQuery({mongoose,Cart,Product}){
    return ({
        addToCart,
        getCartItemsByUserId,
        checkForProduct,
        increaseCartQuantity,
        deleteCartItems
    });
    async function addToCart(userId,productId){
        try{
            await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
            const cartObject = new Cart({
                user:userId,
                product:productId,
                quantity:1
            });
            await cartObject.save();
            mongoose.connection.close();
            return cartObject;
        }catch(e){
            console.log(e);
            throw e;
        }
    }
    async function getCartItemsByUserId(userId){
        try{
            await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
           
            const cartItems = await Cart.find({ user: userId })
            .populate({
                path: 'product',
                select: 'name price company',
            }).exec();

            return cartItems;
        }
        catch(e){
            console.log(e);
            throw e;
        }
    }

    async function checkForProduct(userId,productId){
        try{
            await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
            const product = await Cart.find({user:userId,product:productId});
            
            return product;
        }catch(e){
            console.log(e);
            throw e;
        }
    }

    async function increaseCartQuantity(userId,productId){
        try{
            await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
            const cart = await Cart.find({user:userId,product:productId});
            const tempQuantity = cart[0].quantity;
            const cartId = cart[0]._id;
            await Cart.updateOne({_id:cartId},{
                $set: {quantity:tempQuantity+1}
            });
            return;

        }catch(e){
            console.log(e);
            throw e;
        }
    }
    async function deleteCartItems(productId){
        try{
            await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
            await Cart.deleteMany({product:productId});
            return;
        }catch(e){

        }
    }
}

module.exports = makeCartQuery;