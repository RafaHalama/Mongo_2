printjson(db.people.aggregate([
{ "$unwind": "$credit" },
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
         }
         
      }
   }
]).toArray())