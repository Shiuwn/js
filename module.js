(function(){
  function Module(){ // 模块对象
    
  }
  // 继承实现
  function Extends(newObj,interfaceObj){
    if(typeof newObj !='object'){
      return 
    }
    var args = Array.prototype.slice.call(arguments);
    args = args.slice(1);
    if(args.length>0){
      function F(){
        var self = this;
        args.forEach(function(v){
          if(typeof v=='object'){
            v.call(self);
          }
        });
      }
      newObj.prototype = new F();
      newObj.prototype.constructor = newObj;
    }
    
    function FSM(){
      this.initState = function(state){
        this.state = state;
      }
      
    }
  }
})()