db.people.mapReduce(
    function(){
        this.credit.forEach(function(value){
            emit(value.currency, value.balance)
        })
    },

    function(key, values){
        return Array.sum(values)
    },
    {
    out: "zad2"
    }
)


printjson(db.zad2.find().toArray())