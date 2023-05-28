//=============================================================================
const questionPrompts = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter the text for the logo (up to 3 characters):',
        validate: function (value) {
            if (value.length <= 3) {
                return true;
            }
            return 'Please enter up to 3 characters only!';
        },
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color (color keyword or hexadecimal):',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Select the shape for the logo:',
        choices: ['Circle', 'Square', 'Triangle'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color (color keyword or hexadecimal):',
    },
];

//=============================================================================
const { Shape, Circle, Square, Triangle } = require('./lib/shapes');
const fs = require('fs');

const runProgram = async () => {
    try {
        const { default: inquirer } = await import('inquirer');
        const answers = await inquirer.prompt(questionPrompts);

        let shape;
        switch (answers.shape) {
            case 'Circle':
                shape = new Circle(answers.shapeColor);
                break;
            case 'Square':
                shape = new Square(answers.shapeColor);
                break;
            case 'Triangle':
                shape = new Triangle(answers.shapeColor);
                break;
        }

        const svgContent = `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${shape.render()}
            <text x="150" y="120" text-anchor="middle" fill="${answers.textColor}" font-family="Verdana" font-size="35">${answers.text}</text>
        </svg>
        `;

        fs.writeFile('logo.svg', svgContent, (err) => {
            if (err) throw err;
            console.log('Generated logo.svg');
        });
    } catch (error) {
        console.error(error);
    }
};

runProgram();
