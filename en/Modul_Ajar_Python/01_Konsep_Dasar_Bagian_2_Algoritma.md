# Basic Concepts Part 2: Algorithms, The Secret Recipe of Technology

Welcome to the second part! After discussing the physical form of the machine (computer) and how it translates our code in the first part, we will now enter the "soul" or spirit of the *programming* world. That soul is called an **Algorithm**. 

Without algorithms, no matter how advanced your *gaming* laptop is, or how fast the Apple M-series processor attached to your *MacBook* is, those items will just be expensive, power-sucking pieces of metal that can't do anything.

## 1. What is an Algorithm? (Not Just *Coding*)

Many laypeople, even new IT students, often get this wrong. They think learning algorithms is the same as learning to type *code*. *Big no!* 

If an **Algorithm** is the sequence of ideas, logic, or steps of a solution (like a *cooking recipe*), then **Programming** is the process of translating those ideas/recipes into a language the computer understands like Python, Java, or C++ (like the process of cooking in the kitchen). So, an algorithm is purely about "how we think", not "how we type it".

> **Historical Fun Fact:** The word "Algorithm" is quite historical and has deep roots in civilization! It's taken from the name of a genius Persian mathematician and astronomer named **Muhammad ibn Mūsā al-Khwārizmī** (lived around 780–850 AD). From the name "al-Khwārizmī", the tongues of ancient westerners often pronounced it as *Algorismus*, and then over time, the word evolved again into *Algorithm* in English.

Formally in the academic world, an algorithm is defined as a **logical, structured, and finite sequence of steps to solve a problem or achieve a specific goal**. 

So, this isn't just about *software*. If you make a daily schedule from waking up to going to sleep in order, that's also a form of life algorithm. Or when your mom gives instructions on how to make beef rendang from preparing spices until the meat is tender, that's also an algorithm!

## 2. Absolute Requirements of a *Good Looking* (Ideal) Algorithm

Just like making a cake, not every sequence of steps can be called a "tasty" or valid algorithm in the computer world. A computer science legend named Donald Knuth once formulated that for an algorithm to be recognized as valid and executed well by a computer, it must absolutely have these 5 *properties* [3]:

1. **Input:** A good algorithm might have no *input* at all (predetermined), or have many *inputs*. This *input* is like raw material to be processed. If you want to make juice, the inputs are fruit and sugar.
2. **Output:** There must be a result! What's the use of doing long steps if there's no result? An algorithm must produce at least one *output* or final solution.
3. **Definiteness (Certain/Clear and Unambiguous):** Each step must not have multiple interpretations or cause confusion. Example of an ambiguous instruction: *"Boil the instant noodles for a bit"*. How long is a bit? One minute? Three minutes? Computers *absolutely hate* ambiguity. The correct instruction is: *"Boil the instant noodles in boiling water for exactly 180 seconds"*.
4. **Finiteness (Has a Limit/Must End):** An algorithm must be able to finish or end at one point. No matter how long it is, it cannot *loop* or go around endlessly (the cool term is an *infinite loop*). There must be a completion point.
5. **Effectiveness (Effective and Logical):** The steps must be logically executable with available resources. Don't make steps that are beyond reason or impossible for a computer to execute. For example, giving the instruction: *"Guess what's in the user's heart"*. How would the computer know? Nonsense!

## 3. Simple Analogy: Instant Noodle Cooking Tutorial for Aliens 👽

To make the concept of *Definiteness* (certainty) stick more in your head, let's play with our imagination. Imagine you're kidnapped by aliens, and to survive, you are given a mission to teach this alien how to cook fried instant noodles. 

This alien is smart, but knows nothing about human habits. If you just give the instruction, *"Hey alien bro, just cook the noodles until they're done, season them, then pour them onto a plate!"*, the alien will definitely draw a *blank* and fail. 

You have to design a step-by-step **algorithm** that is *definite* (very detailed and unmistakable):
1. Open the kitchen cabinet, take one pack of instant noodles.
2. Prepare an empty pot.
3. Pour 400 ml of clear water into the pot.
4. Place the pot on the stove burner.
5. Turn the stove knob to turn on medium heat.
6. Wait for the water to boil (indicator: air bubbles rising to the top).
7. Tear the noodle package, take out the contents (noodles and seasoning).
8. Put the dry noodle block into the boiling water.
9. Wait for exactly 3 minutes.
10. While waiting, open the seasoning sachets and pour the contents onto an empty plate.
11. After 3 minutes have passed, turn off the stove heat.
12. Drain all the water from the pot, leaving the noodles.
13. Pour the cooked noodles onto the plate containing the seasoning.
14. Mix evenly using a fork for 20 rotations.
15. The noodles are ready to be served!

Can you see the difference? A computer is exactly like the alien above. It has no intuition. It can't guess your implied intent. You have to spoon-feed it detailed instructions from A to Z.

## 4. The Danger of *Logic Errors*: When Instructions Cause Disasters

Because a computer is super obedient, the sequence of steps in an algorithm is everything. What happens if the sequence is messed up? Let's use the instant noodle example above, but we shuffle the steps:

1. Open the seasoning sachet and put it into an empty pot.
2. Boil the pot containing the seasoning for 3 minutes.
3. Turn off the stove heat and throw away the water (wait, where did the water come from?).
4. Then put the raw dry noodles into the hot, burnt pot.

Uh oh! If you told a human to do this, the human would definitely get mad and say, *"Are you crazy? The pot will burn!"* 

But remember, a computer is innocent and "dumb". If you write an application with a messed up logic sequence like above, the computer **won't refuse**. It will gladly execute this silly instruction at lightning speed! But of course, the end result is a massive disaster (program *crash* or messy *output*).

This condition is widely known in the IT world as a **Logic Error**. This is the most horrifying type of *error*. Why horrifying? Because your program successfully runs (no red *error* warnings), but the calculation result is totally wrong! That's why learning *problem solving* and algorithms is much harder and more crucial than just memorizing programming language *syntax*.

## 5. Algorithm Efficiency: Not All Shortcuts Are the Same!

Now let's get into a slightly deeper topic. Quoting from various *computer science* reference books, a computational problem can be solved using various algorithm choices. Just like wanting to go from Jakarta to Bandung; you can take a car via the toll road, take the fast train, take a plane, or even walk. All of them are "correct" because eventually you arrive in Bandung. But, the time it takes is vastly different!

In the programming world, there are algorithms whose code is short but run *super slow*. There are those with long code but run like lightning. 

**Case Study: Searching for the word "Zebra" in a 1000-Page Dictionary.**

- **Algorithm A (*Sequential Search*):** 
  You open page 1, check one by one from the beginning... page 2... page 3... up to page 1000. Is this algorithm correct? Yes, it will definitely find the solution eventually (*finiteness* condition met). But this is *super duper slow* and wastes time as well as computer CPU resources. 
- **Algorithm B (*Binary Search*):** 
  You open the dictionary exactly in the middle (page 500). You look at the first letter. Oh, it's still at the letter 'M'. Because "Z" must be located after 'M' and is in the back part of the book, you immediately throw away (ignore) the remaining 500 pages in the front. Then you split the remaining 500 pages in the back in half again (to page 750), and keep doing that until you find it. This method is *much smarter*, more elegant, and finishes in seconds!

The core of the example above is: **A good algorithm doesn't just solve a problem (can run), but must also be as efficient as possible!** Top-tier programmers always think about which algorithm saves the most time (*Time Complexity*) and memory (*Space Complexity*).

## 6. Algorithm Writing Formats

According to computer science literature, an algorithm is like a "draft" or "framework" of a building before it is typed into a real programming language (like C++, Java, or Python). So that this algorithm is easy to read, understand, and discuss with other *programmer* teammates without being constrained by a specific programming language, algorithms are usually written using two popular formats [2]:

1. **Pseudocode:** 
   This is a way of writing a draft of logical steps using a mix of everyday human language style (usually English) and basic *syntax* of a programming language. There are no standard, rigid rules, or strict punctuation here. The goal is just one: to make the structure visible.
   *Example of simple Pseudocode:*
   ```text
   Start
   Ask user to input AGE
   IF AGE > 17 THEN
       Display "Allowed to make a driver's license"
   ELSE
       Display "Not old enough, just ride a bike"
   End
   ```
2. **Flowchart:** 
   If *pseudocode* is text-based, then a *flowchart* is its opposite. A *flowchart* illustrates a logic draft using geometric visual shapes (flat shapes) connected by arrows. Oval shapes are usually used to determine *Start/End* points, box shapes (rectangles) for calculation processes, and diamonds are used for branching/decision making (*If-Else*). This format is very suitable and favored by people who are visual learners!

How is it? Starting to feel the "fun" of thinking about logic flows? In the next chapter, we will discuss how to train our brains to think as systematically as a computer, which is commonly referred to as *Computational Thinking*.
