'use strict';

angular.module('ngApp')
  .controller('MainCtrl', function($scope) 
	  {
	   
	  $scope.showInfo = function(field){
		  alert("Geslacht: "+field.geslacht+" Lengte: "+field.lengte+" Haarkleur: "+field.haarkleur);
	
	  };
	  
	  $scope.test = {tekst:"OK"};
	 
	   $scope.mijnData=[
	               {naam: "olivier", leeftijd: 41, info:{geslacht:'MAN', lengte:'1m72', haarkleur:'donkerblond'},percentage:40},
	               {naam: "pascaline", leeftijd: 40, info:{geslacht:'VROUW', lengte:'1m65', haarkleur:'donkerblond'},percentage:87},
		           {naam: "mattis", leeftijd: 10, info:{geslacht:'MAN', lengte:'1m40', haarkleur:'hoogblond'},percentage:79},
			       {naam: "michelle", leeftijd: 8, info:{geslacht:'VROUW', lengte:'1m35', haarkleur:'blond'},percentage:80}
		           ];
	
         $scope.gridOptions = {
            data: 'mijnData',
            rowHeight: 70,
            multiSelect: false,
            columnDefs: [
             { displayName: 'Naam',
               field: 'naam'
             },
             { displayName: 'Leeftijd',
               field: 'leeftijd'
             },
             {
               displayName: 'Kracht',
               field: 'percentage',
               rowHeight: 60,
               cellTemplate:'<status-bar></status-bar>'
            	   //'<div class="center tiny"><div  ng-bind={{row.getProperty(col.field)}}+"&#37;"></div>'+
            	 //'<meter min="0" max="100" value={{row.getProperty(col.field)}} high="80" low="45" optimum="90"></meter>'
             },
             { displayName: 'Info',
               field:'info',
               cellTemplate: '<div class="center" ng-click="showInfo(row.getProperty(col.field))"><img src="images/helpIcon.jpg"/></div>' ,
               width: 60
             },
             {
               displayName: 'Lijst eigenschappen',
               field:'info',
               cellTemplate: '<div class="tiny" ng-repeat="item in row.getProperty(col.field)">{{item}}</div>'
             }
               
               
             ]
         };
   });
