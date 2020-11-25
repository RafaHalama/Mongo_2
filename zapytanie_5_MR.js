db.people.mapReduce(
    function(){
        this.credit.forEach(value => {
        emit(value.currency,{balance: value.balance});
    });},

    function(key, values){
        reducedVal = {sum: 0, avg: 0};
        x=0;
        count = 0;
		values.forEach(function(value){
            x += value.balance
            
			count+=1
        })
        reducedVal.avg = x/count;
		reducedVal.sum = x;
        return reducedVal;
    },
    {
    out: "zad5",
    finalize: function(key, reducedVal){
        return {
            avg: reducedVal.avg,
            sum: reducedVal.sum
        }
    }
    }
)

printjson(db.zad5.find().toArray())