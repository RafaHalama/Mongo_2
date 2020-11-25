db.people.mapReduce(
     function(){
        emit(this.nationality, {weight: this.weight, height: this.height});
    },

    function(key, values){
        reducedVal = {min: 9999,max:0, avg: 0};
        sum=0;
        count = 0;
		bmi=0
		values.forEach(function(value){
            bmi = value.weight/(Math.pow(value.height/100,2))
            sum+=bmi;
			if( bmi >reducedVal.max) {reducedVal.max =bmi;}
			if( bmi <reducedVal.min) {reducedVal.min =bmi;}
			count+=1
        })
        
		reducedVal.avg = sum/count;
        return reducedVal;
    },
    {
    out: "zad4",
    finalize: function(key, reducedVal){
          
        return {
			min:reducedVal.min,
		  max:reducedVal.max,
		  avg:reducedVal.avg
        }
    }
    }
)

printjson(db.zad4.find().toArray())