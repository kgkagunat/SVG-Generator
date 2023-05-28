const { Circle, Square, Triangle } = require('./shapes');

//=============================================================================

describe('Circle', () => {
    it('should render the correct SVG string', () => {
        const circle = new Circle();
        circle.setColor("red");
        expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
    });
});

//=============================================================================

describe('Square', () => {
    it('Should render the correct SVG String', () => {
        const square = new Square();
        square.setColor("green");
        expect(square.render()).toEqual('<rect x="50" y="50" width="200" height="100" fill="green" />');
    });
});

//=============================================================================

describe('Triangle', () => {
    it('Should render the correct SVG string', () => {
        const triangle = new Triangle();
        triangle.setColor("blue");
        expect(triangle.render()).toEqual('<polygon points="150,18 244,182 56,182" fill="blue" />');
    });
});
