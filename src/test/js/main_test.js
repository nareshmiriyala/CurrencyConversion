describe('Controller:exchangeController', function() {
beforeEach(module('conversionApp'));
var ctrl, mockBackend;
beforeEach(inject(function($controller, $httpBackend) {
    mockBackend = $httpBackend;
mockBackend.expectPOST('getrate',{from:"AUD",to:"INR"})
.respond([{rateResp: 1}]);
ctrl = $controller('exchangeController');
// At this point, a server request will have been made
}));
it('should load rates from server', function() {
// Initially, before the server responds,
// the items should be empty
expect(ctrl.rateResp).toEqual([]);
// Simulate a server response
mockBackend.flush();
expect(ctrl.rateResp).toEqual([{rateResp: 1}]);
});
afterEach(function() {
// Ensure that all expects set on the $httpBackend
// were actually called
mockBackend.verifyNoOutstandingExpectation();
// Ensure that all requests to the server
// have actually responded (using flush())
mockBackend.verifyNoOutstandingRequest();
});
});