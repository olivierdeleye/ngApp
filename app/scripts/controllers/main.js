'use strict';

angular.module('ngApp')
  .controller('MainCtrl', function($scope) 
	  {
	   
	  $scope.showInfo = function(field){
		  alert("Geslacht: "+field.geslacht+" Lengte: "+field.lengte);
	
	  }
	 
	   $scope.mijnData=[
	               {naam: "olivier", leeftijd: 41, info:{geslacht:'MAN', lengte:'1m72'},percentage:40},
	               {naam: "pascaline", leeftijd: 40, info:{geslacht:'VROUW', lengte:'1m65'},percentage:87},
		           {naam: "mattis", leeftijd: 10, info:{geslacht:'MAN', lengte:'1m40'},percentage:79},
			       {naam: "michelle", leeftijd: 8, info:{geslacht:'VROUW', lengte:'1m35'},percentage:80}
		           ];
	
         $scope.gridOptions = {
            data: 'mijnData',
            multiSelect: false,
            columnDefs: [
             { displayName: 'NAAM',
               field: 'naam'
             },
             { displayName: 'LEEFTIJD',
               field: 'leeftijd'
             },
             {
               displayName: 'POWER',
               field: 'percentage',
               rowHeight: 60,
               cellTemplate: '<div class="center tiny"><div  ng-bind={{row.getProperty(col.field)}}+"&#37;"></div>'+
            	   '<meter min="0" max="100" value={{row.getProperty(col.field)}} high="80" low="45" optimum="90"></meter>'
             },
             { displayName: 'INFO',
               field:'info',
               cellTemplate: '<div class="center" ng-click="showInfo(row.getProperty(col.field))"><img src="images/helpIcon.jpg"/></div>' ,
               width: 60
             },
               
               
             ]
         };
   });
