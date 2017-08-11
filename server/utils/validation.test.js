const expect = require('expect');

const { isRealString } = require('./validation');

describe('isRealString', () => {
    it('should reject non-string values', () => {
        const testString = 123;
        const res = isRealString(testString);
        expect(res).toBe(false);
    });

    it('should reject string with only spaces', () => {
        const testString = '    ';
        const res = isRealString(testString);
        expect(res).toBe(false);
    });

    it('should allow string with non-space characters', () => {
        const testString = '  The Lord of the rings  ';
        const res = isRealString(testString);
        expect(res).toBe(true);
    });
});


