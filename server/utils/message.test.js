const expect = require('expect');

const { generateMessage } = require('./message');
describe('generateMessage', () => {
    it('should generate correct message object', () => {
        const from = 'Mike';
        const text = 'Hi! How are you doing?';
        const res = generateMessage(from, text);

        // expect(res.from).toBe(from);
        // expect(res.text).toBe(text);

        //Another alternative:
        expect(res).toInclude({from,text});

        expect(res.createdAt).toBeA('number');

        //min 10:05
    });
});