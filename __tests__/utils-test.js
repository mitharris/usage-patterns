jest.dontMock('../metaphor/utils');


describe('Testing the queryset', function(){

    it('should get the urlObject', function(){
        var url = require('../metaphor/utils');
        var response = url.all('http://www.facebook.com');
        expect(response.host).toBe('www.facebook.com');
    });
});