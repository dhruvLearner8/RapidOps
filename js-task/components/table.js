class Table extends BaseTable{
    getRenderData() {
        return tableData
    }
    getCellData(data) {
        const deleteClick = () => {
            const index  = tableData.findIndex(tdata => data.productName === tdata.productName);
            tableData.splice(index,1);
            let obj1 = new SideBar();
            // obj1.getRenderData();
            // obj1.getCellData();
            
            this.render()
            const customEvent = new Event('delete', {
                bubbles: true,
                cancelable: true,
                composed: false
              });
            document.dispatchEvent(customEvent)
            
        }
        return [
            {text:data.productName, elementName:'td', handleClick:''},
            {text:data.category, elementName:'td', handleClick: ''},
            {text : data.price, elementName:'td',handleClick: ''},
            {text : 'Delete', elementName:'td',handleClick: deleteClick},
        ]
    }
}


