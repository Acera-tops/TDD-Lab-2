describe('translate', function () {
    //At least one test checking for lower case conversion.
    it("uppercase to lowercase", function() {
        expect(lowerCase('APRIL')).toEqual('april')
    });

//Multiple tests for words starting with different vowels.
    it("word starting with a", function() {
        expect(translate('apple')).toEqual('appleway')
    });
    it("word starting with e", function() {
        expect(translate('elephant')).toEqual('elephantway')
    });
    it("word starting with i", function() {
        expect(translate('inspect')).toEqual('inspectway')
    });
    it("word starting with o", function() {
        expect(translate('orange')).toEqual('orangeway')
    });
    it("word starting with u", function() {
        expect(translate('unicorn')).toEqual('unicornway')
    });

//At least one test for words starting with one consonant.
    it("word starts with one consonant", function() {
        expect(translate('box')).toEqual('oxbay')
    });

//At least one test for words starting with two consonants.
    it("word starts with two consonants", function() {
        expect(translate('plant')).toEqual('antplay')
    });

//At least one test for words starting with three consonants.
    it("word starts with three consonants", function() {
        expect(translate('christmas')).toEqual('istmaschray')
    });

});