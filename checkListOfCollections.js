//collections list
var collectionToCheck =
    ["test.Pets", "test.Animals"];

var check = () => {
    var dbToCheck =
        collectionToCheck.map((item) => {
            let db = item.split('.')[0];
            return db;
        });
    dbToCheckUnique = dbToCheck.filter((item, index) => {
        return dbToCheck.indexOf(item) !== index
    });

    var dbCollectionDict = {}
    for (i = 0; i < dbToCheckUnique.length; i++) {
        var dbName = dbToCheckUnique[i];
        db = db.getSiblingDB(dbName);
        let collections = db.getCollectionNames();
        dbCollectionDict[dbName] = collections
    }
    
    collectionToCheck.forEach((value) => {
        let [db, collection] = value.split('.');
        if (dbCollectionDict[db])
        {
            if(!dbCollectionDict[db].includes(collection))
            {
                print(value);
            }
        }
    });
}

check()