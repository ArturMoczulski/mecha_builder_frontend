'use strict';

angular.module('mechaBuilderFrontendApp')
  .controller('BlueprintCtrl', function ($scope) {
    this.blueprint = {
      body: {
        name: 'body type 1',
        socket_groups: [
          {
            name: 'arms',
            sockets_count: 2
          },
          {
            name: 'legs',
            sockets_count: 4
          }
        ]
      },
      parts: {
        arms: [ { name: 'standard arm', blueprint: { sku: '001', socket_plus_count: 1 } } ],
        legs: [ 
          { name: 'standard leg', blueprint: { sku: '001', socket_plus_count: 1 }}, 
          { name: 'standard leg', blueprint: { sku: '001', socket_plus_count: 1 }}, 
          { name: 'standard leg', blueprint: { sku: '001', socket_plus_count: 1 }}, 
          { name: 'standard leg', blueprint: { sku: '001', socket_plus_count: 1 }}
        ]
      }
    };
  });
