'use strict';

describe('myApp.donation-widget module', function() {
    beforeEach(module('myApp.donation-widget'));

    var $controller;

    beforeEach(inject(function(_$controller_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));

    describe('tests for the donation-widget module', function() {
        it('should have a project goal of 500', function() {
          var $scope = {};
          var controller = $controller('donationWidgetController', { $scope: $scope });
          expect($scope.project.donationGoal).toEqual(500);

        });
    });
});
