const expect = require('expect');

const { generateMessage, generateLocationMessage } = require('./message');
describe('generateMessage', () => {
    it('should generate correct message object', () => {
        const from = 'Mike';
        const text = 'Hi! How are you doing?';
        const res = generateMessage(from, text);

        // expect(res.from).toBe(from);
        // expect(res.text).toBe(text);

        //Another alternative:
        expect(res).toInclude({ from, text });

        expect(res.createdAt).toBeA('number');

        //min 10:05
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        const from = 'Deb';
        const latitude = 15;
        const longitude = 19;
        const url = 'https://www.google.com/maps?q=15,19';
        const message = generateLocationMessage(from, latitude, longitude);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({ from, url });
    });
});