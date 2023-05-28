# SVG-Generator

DESCRIPTION

For my project we needed to dynamically create a SVG generator from a user's input using the Inquirer package. 
We were given an 'acceptance criteria' to fullfill for this project. Below is my guidelines for the 'acceptance criteria'.

----------------------------------------------------------------------------------------------------------------

CHALLENGES

For this project, I did encounter some challenges. Creating my "shapes.js" and "shapes.test.js" was simple and easy to understand. 
For those I mainly used my class activities as a reference or base for creating my shapes and shapes test files. As for the setting up the test, I thought it was very simple to achieve.
I pretty much used the same format and syntax as my class activities to create my shapes test code.
One of the hardest things was creating a triangle, just because I assumed that a triangle element would exist since both the circle and rect element exist. Had to do a bit of research in order to achieve the triangle shape.
My biggest challenge was the 'inquirer' packaget to import. In my previous project I used this line of `const inquirer = require('inquirer');` and it worked. 
But for some reason, this line of code did not work at all for this project and I would constantly get a `ERR_REQUIRE_ESM`. 
Both my previous project and this project has the same node and inquirer version, but this project gave me errors. 
Therefore, I had to learn the `import()` function and make sure my line of code would work.
Currently, still don't know why this line of code `const inquirer = require('inquirer');` works for my previous project and not my SVG generator.

----------------------------------------------------------------------------------------------------------------

INSTALLATION

To install the SVG generator, follow these steps:

1) Clone this repository to your local machine using git clone.
  
2) Navigate to the directory of the cloned repository in your terminal.
  
3) Install the necessary dependencies by running `npm install`.



USAGE

1) Navigate to the directory of the cloned repository in your terminal.

2) Run the application using the command `node index.js`.


TESTING

1) Navigate to the directory of the cloned repository in your terminal.

2) Run the application using the command `npm run test`.


----------------------------------------------------------------------------------------------------------------

REPOSITORY INFO

In this repository I have a total of 2 folders:

1) "Examples" folder -- this contains a "logo.svg" and "logo example.png". Used for examples of the svg image and output.

2) "lib" folder -- contains my "shapes.js" and "shapes.test.js" files.

----------------------------------------------------------------------------------------------------------------

ACCEPTANCE CRITERIA

GIVEN a command-line application that accepts user input

WHEN I am prompted for text

THEN I can enter up to three characters

WHEN I am prompted for the text color

THEN I can enter a color keyword (OR a hexadecimal number)

WHEN I am prompted for a shape

THEN I am presented with a list of shapes to choose from: circle, triangle, and square

WHEN I am prompted for the shape's color

THEN I can enter a color keyword (OR a hexadecimal number)

WHEN I have entered input for all the prompts

THEN an SVG file is created named `logo.svg`

AND the output text "Generated logo.svg" is printed in the command line

WHEN I open the `logo.svg` file in a browser

THEN I am shown a 300x200 pixel image that matches the criteria I entered


----------------------------------------------------------------------------------------------------------------

# Sample Screenshot

![logo example](https://github.com/kgkagunat/SVG-Generator/assets/127634764/68947125-88a3-4373-abe3-6f0a49018516)

