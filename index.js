var objectPath = require('object-path')

function getMissing(data, obj, basepath){
  return Object.keys(obj || {}).reduce(function(missing, key){
    var value = obj[key]
    var path = basepath.concat([key])
    if(typeof(value) == 'boolean'){
      return objectPath.has(data, path) ?
        missing :
        missing.concat([path])
    }
    else{
      return missing.concat(getMissing(data, value, path))
    }
  }, [])
}

module.exports = function(data, schema){
  return getMissing(data, schema, []).map(function(path){
    return path.join('.')
  })
}