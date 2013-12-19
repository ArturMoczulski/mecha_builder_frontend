'use strict';

angular.module('mechaBuilderFrontendApp')
  .controller('BlueprintCtrl', function ($scope) {
    $scope.blueprint = new function() {
      this.parts = {
        arms: [ 
          { name: 'arm #001', sku: '001', socketPlugsCount: 1 }, 
          { name: 'arm #002', sku: '001', socketPlugsCount: 2 }
        ],
        legs: [
          { name: 'standard leg', sku: '001', socketPlugsCount: 1 },
          { name: 'standard leg', sku: '001', socketPlugsCount: 1 }
        ]
      };

      this.body = {
        name: 'body type 1',
        socketGroups: [
          {
            type: 'arms',
            sockets: [{},{},{},{}]
          },
          {
            type: 'legs',
            sockets: [{},{}]
          }
        ]
      };

      // assigning parts to subsequent sockets
      angular.forEach(this.body.socketGroups, function(group, index) {

        if( typeof this.parts[group.type] !== 'undefined' ) {

          var socketIterator = 0;
          angular.forEach(this.parts[group.type], function(part, index) {

            var socketsNeeded = part.socketPlugsCount;

            var iterStop = socketIterator + socketsNeeded;
            if( iterStop < group.sockets.length ) {

              for(; socketIterator < iterStop; socketIterator++ ) {
                group.sockets[socketIterator] = this.parts[group.type][index];
              }

            }

          }, this);

        }
      }, this);

    };
  });
