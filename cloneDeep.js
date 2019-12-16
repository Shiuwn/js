function cloneDeep(arr){ //针对对象数组

  var result = [];
  for(var i in arr){
    
    if((arr[i]).constructor==Object){
      
      result.push(cloneDeepObj(arr[i]))
    }else{
      if((arr[i]).constructor==Array){
        result.push(cloneDeep(arr[i]));
      }else{
        result.push(arr[i]);
      }
    }
  }
  return result;
}

function cloneDeepObj(obj){
  var o = new Object();
  for(var i in obj){
    if((obj[i]).constructor==Array){
      o[i] = cloneDeep(obj[i]);
    }else{
      if((obj[i]).constructor==Object){
        o[i] = cloneDeepObj(obj[i]);
      }else{
        o[i] = obj[i];
      }
    }
  }
  return o;
}

module.exports = cloneDeep

