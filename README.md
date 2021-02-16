# Gilded Rose Refactoring Kata (TypeScript submission by Billy Hung)

This README.md contains the step by step of my thought process as I work through the refactoring within the 2 hours time window.

## Step 1 - Initialization

As I first open the code, I wasn't sure what Gilded Rose Refactoring Kata is, but the "refactoring" gave me a hint that I will be factoring some code. I opened gilded-rose.ts file and immediately noticed that the code can and should be refactored. My first impression is that there are tons of if else statements. Not quite sure what this project is about, I continued by reading the link: GildedRoseRequirements.txt, that is provided. Now I have a better understanding of what this project is, I started to initialize the project, run the test, and immediately see that is test has failed. A simple fixed that changes 'fixme' to 'foo' and the test is passed.

## step 2 - Add more tests

After reading thruogh GildedRoseRequirements.txt, I discovered there are some rules that needs to be followed. So I quickly wrote some more simple tests to see if the code will pass according to the rules. After adding the tests, I noticed that all the rules are being followed and executed correctly!

## Begin refactoring

1. I find the code "this.items[i].quality" to be hard to read, so I replaced it with this for loop for(const item of this.items). So I essentially replaced "this.items[i].quality" with "item.quality", which I believe increase the readability of the code.

2. I decided to use a switch statement to categories the item, so each item will perform specific actions. I think this makes sense to me because each item will have different action, and I believe it will increase the code readability over a bunch of if/else statements. I started by adding comments to each item on what actions they are suppose to have.

3. I then wanted to update my test cases. I grouped each item to their own test clauses, which makes it easier to track when things are broken.

4. I noticed there are repeated pattern, so I extracted them into a untils.ts files. When those functions are needed, we can import them and use it in different places, and if we need to change or fix the function, we only need to do it once.

5. To make the code even cleaner, I decided to extract each items function to its own files, inside items folder. So in our main gilded-rose.ts file, we can import each item and call them as we see fit.

6. Lastly, I noticed there is another item in GildedRoseRequirements.txt file, the conjured item. So I added it to the items folder and added test cases for it.
