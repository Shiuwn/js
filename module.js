(function(){
  function Module(domId,fn){ // 模块对象
    this.domId = domId;
    this.data = null;
    this.status = 'beforeCreated';
    this.callbacks = [];
    var self = this;
    function render(data) {
      if(this.status =='beforeCreated'){
        setTimeout(function(){
          self.data = data;
          self.status = 'created'
          for(var i=0;i<self.callbacks;i++){
          self.callbacks[i](self.data); 
          }
        });   
      }  
    }
    function failed(e){
      setTimeout(function(){
      console.log(e); 
      });
    }
    fn(render,failed);
    Module.prototype.created = function(cb){
      this.callbacks.push(cb);
    }
    Module.prototype.before = function(fn){
      fn.call(this);
    }
    Module.prototype.plugins = function(pluginsList){
      
    }

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