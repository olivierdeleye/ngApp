'use strict';

angular.module('ngApp',[])

    .directive('statusBar', function(){
	  return {
		
         template:'<meter min="0" max="100" value=barPercentage high="80" low="45" optimum="90"></meter>';
  	     
  	   };
     });  




