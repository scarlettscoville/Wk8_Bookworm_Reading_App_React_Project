const listActions = {
    addToList: 'addToList',
    removeFromList: 'removeFromList',
    removeAllFromList: 'removeAllFromList'
}

function listReducers(list = [], {type, book}) {
    switch(type) {
        case listActions.addToList:
            return [...list, book];
        case listActions.removeFromList:
            let newList = list.slice()
            for (let listBook of newList) {
                if (listBook.id === book.id) {
                    newList.splice(newList.indexOf(listBook), 1)
                    return newList
                }
            }
            return newList
        case listActions.removeAllFromList:
            return list.filter((listBook) => book.id === listBook.id)
    }
};

export {
    listReducers,
    listActions
}