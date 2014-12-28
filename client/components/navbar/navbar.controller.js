'use strict';

angular.module('syliusApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Главная',
      'link': '/'
    },
      {
        'title': 'Документация',
        'link': 'http://doc.sylius.ru'
      }
    ];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
