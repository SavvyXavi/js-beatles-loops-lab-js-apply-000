// add solution here

  function theBeatlesPlay(musicians, instruments) {
    var emptyArr = [];

    for (var i=0; i < musicians.length; i++){
      emptyArr.push(musicians[i]+ ' plays ' + instruments[i]);
      }
      return emptyArr;
    }

    function johnLennonFacts(facts) {
      var i = 0;
      var emptyArr = [];
      while (facts.length < 5){
        emptyArr.push(facts[i] + '!!!');
        facts++;
      }
        return emptyArr;
    }
