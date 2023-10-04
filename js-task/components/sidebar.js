class SideBar extends BaseTable {
    getRenderData() {


        const categories = [];
        // write code here
        var set = new Set();
        for(let value of tableData){
            set.add(value.category);
        }

        for(let category of set){
            let price = 0;
            let occurance = 0;
            for(let value of tableData){
                if(category === value.category){
                    price = price + value.price;
                    occurance = occurance+1;
                }
            }
            const obj = {
                category: category,
                price: price,
                occurance: occurance,
            };
            categories.push(obj);
        }

        return categories;
    }
    getCellData(data) {

        return [
            {text:data.category , elementName:'td', handleClick:''},
            {text:data.price , elementName:'td', handleClick:''},
            {text:data.occurance, elementName:'td', handleClick: ''},
        ]
    }
    listenEvent() {
        document.addEventListener('delete', () => {
            
            
            this.render()})
    }

}


