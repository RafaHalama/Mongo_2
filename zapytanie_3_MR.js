db.people.mapReduce(
    function(){
        emit(null,this.job)
    },

    function(key, values){
	
	function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}
    return values.filter(onlyUnique);
    },
    {
    out: "zad3"
    }
)

printjson(db.zad3.find().toArray())