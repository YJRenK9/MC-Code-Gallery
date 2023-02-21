# MC-Code-Gallery

Now that you learned how to create variables and if/else statements, it's time to apply it to creating your website.  But not just any website, an ICSpark project about Minecraft.  There are many possibilities of implementing Minecraft coding references to a website, but for the sake of this project, we'll just stick with an Entity Gallery and Overworld Layers. 

![Gallery1](images/Examples/MC_DataTypes_Gallery.png)
![Gallery3](images/Examples/Overworld_Layers_Gallery.png)

I'd like to give you a **warning** that this project could be lengthy and requires some repetition of creating variables.  Not to mention, this may be a long read as this read me file has around 330 lines of text.  Hence, why this project is divided into 6 parts. 

## Objectives

Use **JavaScript** to display text and manipulate elements on webpages.  Also, use HTML and CSS to display annd format images on webpages.
  1. Create a gallery of Entity data types
  2. Create a gallery of Game Rule data types
  3. Create another webpage that lets the user click on the arrow buttons to change the vertical position along with the Minecraft environment

## Prerequisites

To complete this project, students should have the following:
  + Basic understanding of HTML structures and attributes.
    + img and div tags 
  + Basic understanding of CSS properties.
  + Basic understanding of JavaScript and DOM.
    + int, float, string, and bool variables
    + if/else statements
    + getElementById() and addEventListener()

## Concepts

| HTML | Description |
| ------------- | ------------- |
| br | The line break element |
| img | Element that embeds an image on a webpage |
| div | Division tag that's a container element |
| pre | The preformatted text element |

The `<br>` tag is pretty handy when you want to format your webpage by creating vertical line spacing between text and images.  This would make your webpage look nicer instead of having every element compacted so close to each other.  
The `<pre>` tag is similar to the `<p>` tag, however, it preserves the whitespaces (" "), line breaks ("\n"), and other escape sequence characters from JavaScript code, unlike the paragraph element.  It's what makes outputting JavaScript code onto a webpage more effective.

More information about `<pre>` can be found at [W3Schools](https://www.w3schools.com/tags/tag_pre.asp) and [Mozilla](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/pre). 

| CSS  | Description |
| ------------- | ------------- |
| @import url | imports other stylesheets, including custom fonts, into an existing CSS file |

We'll use `@import url("#");` to import a custom font into this project.  The "#" represents a website link to a custom font.  Like any programming language, `@import url("#");` must be used at the very top of your CSS file.

Side note: URL stands for uniform resource locator

| JavaScript  | Description |
| ------------- | ------------- |
| \t | escape sequence for horizontal tab |
| string concactenation (+) | joins 2 or more strings together |
| string concactenation (+=) | joins 1 or more strings together into an existing string variable |

When you find coding several whitespaces to be tiring, use `\t` as it's equivalent to about 8 whitespaces.  It is somewhat similar to the horizontal version of a line break.

### String Concactenation

String Concactenation is the process of adding two strings together to form one string.  In other words, it's like joining two words together.  For example, appending "Poly" and "gon" gives us "Polygon".  Let's see how string concactenation works in JavaScript.

```js
// the whitespace helps us read the two words easily
console.log("Removed" + " " + "Herobrine");
```
Result: Remove Herobrine
```js
// string concactenation with variables
var string1 = "Glitch Art";
var string2 = " is so cool!";

console.log(string1 + string2);
// Result: Glitch Art is so cool!
```
Notice how there's a whitespace right before "is" in the variable string2.  This is a shorter way of doing ```console.log("Glitch Art" + " " + "is so cool!")```.  It may look aesthetically weird, but it makes your code more compact by typing less code.  In other words, it's the opposite of doing more work than you should.  Without the whitespace, the result would be "Glitch Artis so cool!", which makes the reader more confused whether "Artis" is another word or "Artis" is supposed to be "Art is".
```js
var game = "Minecraft is about ";
var genre1 = "building";
var genre2 = "exploring";
var genre3 = "adventuring";
var genre4 = "mini games.";

// string concactenation by appending multiple string variables into one string variable
game += genre1 + ", " + genre2 + ", " + genre3 + ", and " + genre4;

console.log(game);
// Result: Minecraft is about building, exploring, adventuring, and mini games.
```
Notice how '+=' is used to join multiple strings together.  This is to add more information to the same string variable.  It'll come in handy when you don't want to type a long-baked horizontal line of code.  If you want to add more strings to a string variable, you can press enter and type the same thing again but with different string variables. 

## Your Challenge

### Part I: Setup

Create a folder called MC_Code_Gallery.

In this folder, create the following files:
  + index.html
  + overworld_layers.html
  + style.css
  + variables.js
  + script.js

Next, download the images zip file at https://github.com/YJRenK9/MC-Code-Gallery/blob/main/images.zip (a download button should be present).  Drag that zip file in the folder called MC_Code_Gallery and unzip it.  You should have the images folder with minecraft images present in your project folder. 

### Part 2A: 1st HTML File (index.html)

  1. create a ```<h1>``` tag that displays "Welcome to the Minecraft Code Gallery!" (do not include double quotes)
  2. create 2 ```<br>``` tags
  3. create a ```<h2>``` tag that displays "Game Rule Data Types"
  4. create a br tag
  5. create 2 ```<div>``` tags that have a class called centerElements
  6. create 2 img tags inside of the first div tag 
      + The first image should be superflat.webp
      + The second image should be SuperFLatGlitch.png
      + Both images have a class called changeImageSize
  7. Create a ```<pre>``` tag that has an id called booleans1
      + this pre tag is in the second div tag
  8. create 2 br tags
  9. create 2 more ```<div>``` tags that have a class called centerElements
  10. create 2 more img tags inside of the third div tag 
      + The third image should be keptInventory.webp
      + The fourth image should be didNotKeepInventory.webp
      + Both images have a class called changeImageSize
  11. Create a ```<pre>``` tag that has an id called booleans2
      + this pre tag is in the fourth div tag
  12. create an ```<a>``` tag that displays "Overworld Layers"
      + its href should be overworld_layers.html
      + its class should be centerElement
      
Completing Part2A means you have the images and text approximately positioned at the center of the webpage (except for the header 2)

### Part 2B: 2nd HTML File (overworld_layers.html)

  1. create a h1 tag that displays "Overworld Layers"
  2. create 2 br tags
  3. create an img tag that has plans.jpg as its source
      + type in centerElement as its class
      + type in imageLayer as its id
  4. create 2 more br tags
  5. create a ```<h3>``` tag that displays "Click on the arrow buttons to ascend or descend certain layers"  
      + the class should be centerElements to position the header 3 at the center
  6. create another br tag 
  7. create a h1 tag that displays "y = 5"
      + type in getVerticalPosition as its id
  8. create a h2 tag that displays "Layer: Plains"
      + type in layerName as its id
      + type in centerElements as its class 
  9. create a div tag that has centerElements as its class
      + 2 img tags should be inside of this tag
      + the first image should be Left_Arrow.png and descend as its id
      + the second image should be Right_Arrow.png and ascend as its id
  10. create another br tag
  11. create an ```<a>``` tag that displays "MC Data Types"
      + its href should be index.html
      + its class should be centerElement

### Part 3: CSS (style.css)

  1.  link your CSS file to both of your HTML files by doing the following in the ```<head>``` tag:
  ```css
  <link rel="stylesheet" href="style.css">
  ```
  2.  import the minecrafttia font by typing in the following:
  ```css
  @import url("https://fontlibrary.org//face/minecraftia");
  ```
This will only make the minecraftia font available to use for your webpage. So, to change the default font to the minecraftia one, you must also change the font-family attribute for certain CSS selectors.    
  3. give the following attributes to the body selector
      + backgroud image is dirt_background.jpg
      + font-family is MinecraftiaRegular
  4. give the following attributes to the h1 selector
      + color is white
      + text align is center
  5. give the following attributes to h2 and h3 selectors
      + color is white
      + **Hint:** you can either create 2 separate selectors or merge them into one selector
  
  CSS template of 2 selectors in 1:
  ```css
  selector1, selector2 {
    attribute: value;
  }
  ```
  6. give the following attributes to the pre selector
      + color is white
      + font family is MinecraftiaRegular
      + font size is larger
    
The reason why we update the font family to the pre tags is because the font from console.log() cannot be changed.  So, we must change the JavaScript text via the pre selector.
  
  7. create a class selector called changeImageSize
      + a width of 600px and a height of 300px
  8. create a class selector called centerElements, and the the following attributes should have:
      + display is flex (to create a flex box)
      + justify content is space around (whitespacing at the left and right sides of the images)
      + align items is center (center the images, text, etc.)
      + flex direction is row (display the contents in a row)
  9. create an 'a' selector and give the following attributes:
      + text align is center
      + color is rgb(0, 255, 0)
      + background color is gray
      + font size is 21px
      + text decoration is none (no underline for links)

By finishing Part 3, you have incorporated the Minecraft aesthetic to your website :)

### Part 4A: 1st JavaScript File (variables.js) 

  1. add variables.js to index.html by doing the following inside the end of the ```<body>``` tag:
  ```html
  <!--  some html code that's above enabling JS  -->
  <script src="variables.js"></script>
  ```
  2. create the following string variables
      + dataType, stores "bool "
      + variableName1, stores "activateGlitchArt"
      + variableName2, stores "keepInventory"
  3. create the following boolean variables
      + boolValue1, stores false
      + boolValue2, stores true
  4. create a variable called paragraph1, that gets the element's id "booleans1"
  5. have paragraph1's innerHTML string concactenate dataType, variableName1, " = ", and boolValue1 (**Hint:** use + in between variables)
  6. have paragraph1's innerHTML also string concactenate "\t\t\t\t", dataType, variableName1, and boolValue2 (**Hint:** use +=)
  7. create a variable called paragraph2, that gets the element's id "booleans2"
  8. have paragraph2's innerHTML string concactenate dataType, variableName2, " = ", and boolValue1 (**Hint:** use + in between variables)
  9. have paragraph1's innerHTML also string concactenate "\t\t\t\t", dataType, variableName2, and boolValue2 (**Hint:** use +=)

### Part 4B: 2nd JavaScript File (script.js)

  1. add script.js to overworld_layers.html by doing the following inside the end of the ```<body>``` tag:
  ```html
  <!--  some html code that's above enabling JS  -->
  <script src="script.js"></script>
  ```
  2. create five variables that gets the elements by ids
      + first variable is called Layer and takes the id called imageLayer
      + second variable is called descendVertically and takes the id called descend
      + third variable is called ascendVertically and takes the id called ascend
      + fourth variable is called verticalPosition and takes the id called getVerticalPosition
      + fifth variable is called location_name and takes the id called layerName
  3. create a variable called y_position that stores an int value of 5
  4. create 2 addEventListener methods for descendVertically and ascendVertically
      + make sure the first parameter is "click" (with quotation marks) and the second parameter is an unnamed function
  5. decrement the y_position by 1 inside the unnamed function of descendVertically
  6. increment the y_position by 1 inside the unnamed function of ascendVertically
  7. update the y_position on the webpage by using ```.innerHTML``` for verticalPosition, in both add event listeners
  8. create an if/else statement for each add event listeners, the if/else statement should inculde: 
      + if y_position is >= 48
        + the image source of Layer would be Space.png
        + location_name.innerHTML would be "Layer: Outer Space" 
      + else if y_position is >= 24
        + the image source of Layer would be Sky.jpg
        + location_name.innerHTML would be "Layer: Above the Clouds"
      + else if y_position is >= 12
        + the image source of Layer would be mountains.webp
        + location_name.innerHTML would be "Layer: Mountains"
      + else if y_position is >= 9
        + the image source of Layer would be Jungle.webp
        + location_name.innerHTML would be "Layer: Jungle"
      + else if y_position is >= 7
        + the image source of Layer would be Forest.webp
        + location_name.innerHTML would be "Layer: Forest"
      + else if y_position is >= 5
        + the image source of Layer would be plains.jpg
        + location_name.innerHTML would be "Layer: Plains"
      + else if y_position is >= 2
        + the image source of Layer would be Cave.webp
        + location_name.innerHTML would be "Layer: Caves"
      + else if y_position is >= 0
        + the image source of Layer would be Lava_Cave.webp
        + location_name.innerHTML would be "Layer: Lava Caves"
      + else if y_position is >= -4
        + the image source of Layer would be Deepslate_Cave.webp
        + location_name.innerHTML would be "Layer: Deepslate Caves"
      + else if y_position is >= -12
        + the image source of Layer would be DeepDark.webp
        + location_name.innerHTML would be "Layer: The Deep Dark"
      + else
        + the image source of Layer would be The_Void.webp
        + location_name.innerHTML would be "Layer: Void"     

## Stretch Goals

### Change Image Size within HTML files

You learned how to resize images in the CSS file.
```css
.changeImageSize {
    width: 255px;
    height: 255px;
}

.changeImageSize2 {
    width: 320px;
    height: 320px;
}

.changeImageSize3 {
    width: 600px;
    height: 300px;
}
```
You can also resize images in HTML, and it's "easier" as it requires less lines of code.  Just type in the width and height inside of the image tag.  Here's an example of resizing an image in HTML:
```html
<!-- image became twice as large -->
<img width="320px" height="320px" src="images/MC-DataTypes/Netherite_Axe.webp" alt="netherite axe">
```

### Add hover animation for links

You learned how to color the text of the link, give it a background color, and change its font size.  You also learned how to position the link.
```css
a {
    color: rgb(0, 255, 0);
    background-color: gray;
    font-size: 21px;
    text-align: center;
    text-decoration: none;
}
```
Now try making the link's text color white and have it change to orange if the mouse cursor is hovering over it.

### Create an input box instead of arrow "buttons"

The advantage of having arrow "buttons" is having more user interaction.  The disadvantage is it can take a lot of time to go through a large range of numbers(unless if your variable can increment/decrement by a large amount).  A way around this disadvantage is by making the y_position range smaller.  But in Minecraft, going deep underground takes more than a few blocks.  So, an input box lets you type in a number and display the result in seconds.  You could create a ```<form>``` tag but that would redirect to a webpage.  Instead of going through that hassle, you can create an input tag and a button tag.  
Although it's easy to implement an input box, you'll deal with more test cases.  Like most programming languages, input returns a string value.  Because of this, you must check if the input contains letters or other non-numeric characters.  If it is, then display an error message.  Otherwise, convert the input value into a number.  In order to compare your input value with numbers, it must be converted to a number.          

### Create another webpage of Minecraft coding references

Apply conditional operators (<, >, <=, >=, ==, !=) to ranking minecraft armor.  Apply the &&(and) and the ||(or) logical operators to when the player is able to go to sleep.  Those conditions are when it's night time or there's a thunderstorm and when there's no hostile mobs nearby.  Apply the !(not; negation) logical operator to when the mob is not hostile, the iron golem and snow golem won't attack that mob.  No if/else statements are invovled, however, try to output text to the webpage via a JavaScript file.  You can also apply int, float, and string variables to the rest of the minecraft images provided in the images zip file.   
