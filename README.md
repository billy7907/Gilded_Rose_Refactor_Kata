# Gilded Rose Refactoring Kata (TypeScript submission by Billy Hung)

This README.md contains the step by step of my thought process as I work through the refactoring within the 2 hours time window.

## Step 1 - Initialization

As I first open the code, I wasn't sure what Gilded Rose Refactoring Kata is, but the "refactoring" gave me a hint that I will be factoring some code. I opened gilded-rose.ts file and immediately noticed that the code can and should be refactored. My first impression is that there are tons of if else statements. Not quite sure what this project is about, I continued by reading the link: GildedRoseRequirements.txt, that is provided. Now I have a better understanding of what this project is, I started to initialize the project, run the test, and immediately see that is test has failed. A simple fixed that changes 'fixme' to 'foo' and the test is passed.


## step 2 - Add more tests

After reading thruogh GildedRoseRequirements.txt, I discovered there are some rules that needs to be followed. So I quickly wrote some more simple tests to see if the code will pass according to the rules. After adding the tests, I noticed that all the rules are being followed and executed correctly!


## Begin refactoring 

First, I find the code "this.items[i].quality" to be hard to read, so I replaced it with this for loop for(const item of this.items). So I essentially replaced "this.items[i].quality" with "item.quality", which I believe increase the readability of the code.

