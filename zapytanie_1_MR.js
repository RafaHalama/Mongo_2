db.people.mapReduce(
    function(){
        emit(this.sex, {weight: this.weight, height: this.height});
    },

    function(key, values){
        reducedVal = {avgw: 0, avgh: 0};
			x=0;
			y=0;
			count=0;
        values.forEach(function(value){
            x += value.weight
            y += value.height
			count+=1
        })
		reducedVal.avgw =  x/count
		reducedVal.avgh =  y/count
        return reducedVal;
    },
    {
    out: "zad1",
    finalize: function(key, reducedVal){
        return {
            avg_weight: reducedVal.avgw,
            avg_height: reducedVal.avgh
        }
    }
    }
)

printjson(db.zad1.find().toArray())