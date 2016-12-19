# deep-check

Check that properties of a deeply-nested object exist.

## install

```bash
$ npm install deep-check
```

## usage

```javascript
var deepCheck = require('deep-check')
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

var missing = deepCheck(data, schema)

console.log(missing)

// ['fruit.citrus.weight', 'orders.history']
```

## license

MIT