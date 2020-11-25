printjson(db.people.aggregate([
{ "$unwind": "$credit" },
{"$match": {"nationality": "Poland", "sex":"Female"}},
   {
      "$group":{
         "_id":"$credit.currency",
         "total_amount":{
            "$sum":{
               "$convert":{
                  "input":"$credit.balance",
                  "to":"double"
               }
            }
         },
		  "average":{
            "$avg":{
               "$convert":{
                  "input":"$credit.balance",
                  "to":"double"
               }
            }
         }
         
      }
   }
]).toArray())



