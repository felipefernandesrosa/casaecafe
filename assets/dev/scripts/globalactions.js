$(document).ready(function(){
    
    var obj = function() {
        return {
            init : function() {
               this.getSize( $(window).width(), $(window).height() );
            },
            
            getSize : function( width, height) {
              var totalSize = width * height;
              
              console.log(totalSize + ' m2');
            },
            
        };
    }; 
  
    obj().init($(window));
  
});