printjson(db.people.aggregate([
       {"$group": {_id: null, items: {$addToSet: "$job"}}}        
]).toArray())