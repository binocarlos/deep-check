var tape = require('tape')
var deepCheck = require('./index')

var data = {
  fruit:{
    citrus:{
      lemons:10,
      oranges:12
    }
  },
  orders:{
    settings:{
      id:12
    }
  }
}

var schema = {
  fruit:{
    citrus:{
      lemons:true,
      weight:true
    }
  },
  orders:{
    settings:true,
    history:true
  }
}

tape('test missing properties', function(t){
  t.deepEquals(deepCheck(data, schema), [
    'fruit.citrus.weight',
    'orders.history'
  ], 'the missing fields are correct')
  t.end()
})