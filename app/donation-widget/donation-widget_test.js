'use strict';


describe('donationWidgetController', function() {
beforeEach(module('myApp.donation-widget'));

var $controller;

beforeEach(inject(function(_$controller_) {
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;

}));

describe('$scope.project', function() {
    it('updates goal rechaed status when donation goal is reached', function() {
        var $scope = {};
        var controller = $controller('donationWidgetController', {
            $scope: $scope
        });
        
        controller.donation = 501;
        controller.giveNow();
        expect(controller.project.donationGoal).toEqual(500);
        expect(controller.project.isGoalReached).toEqual(true);

    });
});
});
