# Basic Concepts Part 3: Programming Logic & Problem Solving

Congratulations! You have successfully passed the previous two chapters discussing the history of computers and what algorithms are. In this final part for Meeting 1, we will enter the implementation stage, aka the practice of thinking. How do you get your brain to work as critically and systematically as a world-class professional *programmer*? The answer lies in a single *skill* called **Computational Thinking**.

## 1. *Computational Thinking*: Installing the *Programmer Mindset*

*Computational Thinking* is not the science of assembling computers, nor is it black magic. It's a way of thinking (*mindset*). Essentially, it's our brain's ability to take a huge, messy, and complex problem, and break it down into much smaller, easier-to-solve problems (*decomposition*) [1].

**Analyzing Making Coffee: Layman vs Programmer**

To understand this *mindset*, pay attention to the difference in how an ordinary person thinks compared to a *programmer* when asked to make a cup of black coffee:

- **Layman's Way of Thinking:** 
  *"I want coffee. Just grab a cup, pour hot water, add coffee powder, stir, done."* (Finished in 1 second).
- **Programmer's Way of Thinking (Computational Thinking):** 
  Must use layered logic and account for all possible *errors*.
  - *Step 1:* Check first, is the cup clean? (If dirty, wash it first. If clean, continue).
  - *Step 2:* Check kitchen stock. Is there coffee stock? (If out, go to the store. If available, continue).
  - *Step 3:* Take exactly 1.5 teaspoons of coffee and put it in the cup.
  - *Step 4:* Heat water in a kettle until exactly $100^{\circ}C$ (boiling).
  - *Step 5:* Slowly pour 150ml of hot water into the cup.
  - *Step 6:* Stir the mixture of coffee and hot water for 10 rotations to the right.
  - *Step 7:* Done. Coffee is ready to be served!

See the difference? A *programmer* thinks about all worst-case scenarios (dirty cup, out of coffee) and gives highly specific instructions (water temperature, spoon measurements). That's the essence of *Computational Thinking*!

## 2. Four Magic Steps of *Problem Solving*

When you get a major assignment or client work later, never immediately open your laptop and rush to type code! That is a bad habit often done by amateur beginner *programmers*. 

A professional *programmer* (or elite IT kid) usually spends 80% of their time thinking and designing, and only 20% typing code. Make it a habit to always use this magic cycle:

1. **Analyze:** This is the investigation stage. Understand the root of the problem first. You must be able to answer the questions: *"What data will I receive (Input)? What are the conditions? And what kind of final result does the client/user want (Output)?"*
2. **Design:** At this stage, put your laptop away. Grab a pen and paper. Design the logic (algorithm) on paper! You can scribble using a *Pseudocode* style or draw a *Flowchart*. Ensure the logic flow is perfect and free from loopholes.
3. **Implement (Coding/Implementation):** Once the draft on paper is perfect, then you open your laptop, choose the appropriate programming language (like Python or C++), and translate your draft into actual lines of code.
4. **Test & Debug:** Don't celebrate just yet when the code is typed out. Run the program repeatedly using various scenarios! Test it with weird data. If it turns out the program *crashes* or errors, it's time for you to hunt bugs (*debugging*) to find which line of code broke it, and then fix it.

Oh yeah, for those asking, *"Is it really important, Sir, to learn this algorithm theory? Why not just code and build apps directly?"* 
The answer: **ABSOLUTELY YES!** From the legendary book *Algorithms and Programming* [2], it's highly emphasized that mastering algorithms from the ground up will make your code super efficient, not sluggish, and train your analytical brain. This is the main asset that separates ordinary "code typists" from the *Top 10% Programmers* in the world who earn tens of millions!

## 3. Learning from History: The Y2K Bug Tragedy (Millennium Bug)

To prove how crucial *problem solving* and algorithm design are from the very beginning, let's look at a dark history in the IT world that panicked the entire globe in 1999, known as the **Y2K Bug** or *Millennium Bug*.

**What's the Story?**
In the 1960s to 1980s, computer memory storage (*hard disks*) was suuuuper expensive and had very small capacity (only Megabytes in size, but cost hundreds of millions). To save memory capacity, *programmers* of that era created algorithms that truncated the year storage format. 

So, instead of storing the full 4-digit year like "1998", their algorithm was designed to only store the last 2 digits, which is "98". In terms of memory efficiency, this was highly economical and brilliant at the time!

**The Tragedy Begins:**
The problem was, those *programmers* lacked long-term vision (*flawed problem solving*). They didn't think about what would happen when the calendar changed from December 31, 1999 to January 1, 2000!

Because computer algorithms only read the last 2 digits, the year "2000" was read by computers as "00". As a result, computer systems assumed that the current year actually went backward to "1900", not 2000! 

**The Domino Effect:**
This logic chaos almost caused a digital doomsday! Banks worldwide miscalculated deposit interests (because the system thought the money had been withdrawn 100 years ago). Power plant systems went dead, airline flight schedules were in shambles, and governments worldwide had to spend over **300 Billion US Dollars** just to hire *programmers* to rewrite those lines of *code*!

Valuable lesson from Y2K: If you design algorithms and problem solutions carelessly without thinking about long-term effects, the *"logic error"* that occurs can cost billions of dollars!

## 4. Mini Quiz & Discussion (Time to Sharpen Your Brain!)

Now, after learning heavy theories and listening to IT's dark history, it's time to flex our brain muscles through a very classic logic puzzle game. Get your scratch paper ready!

**Puzzle Game: Crossing the Wolf, Goat, and Cabbage** 🐺🐐🥬

**The Case:**
A farmer is confused on the bank of a large river. He has to cross the river and take all his precious belongings with him: a **Wolf**, a **Goat**, and a basket of **Cabbage**. 

The problem is, the small boat on the riverbank is very narrow. It only fits the farmer and **ONLY ONE** other item per trip. This means the farmer has to cross back and forth across the river multiple times to move all three.

**Rules and Constraints:**
1. The farmer is the only entity who can steer the boat.
2. Watch out! If the farmer is crossing and leaves the Wolf and the Goat together alone on one of the riverbanks, **the Wolf will definitely eat the Goat immediately!**
3. Watch out! If the farmer leaves the Goat and the Cabbage together alone on one of the riverbanks, **the Goat will definitely eat all the Cabbage immediately!**
4. Wolves don't like cabbage, so those two are safe if left together.

![Crossing Puzzle Illustration](../../Modul_Ajar_Python/assets/images/teka-teki-01.png)

**Your Discussion Task:** 
Use your *Computational Thinking* skills. Formulate a structured, step-by-step **"Crossing Algorithm"**. Write down the logic from step 1 until completion, so that the farmer, wolf, goat, and cabbage—all of them—can safely arrive intact on the other side of the river without anyone getting eaten! (We'll discuss the answer in class later).

---

## 5. Closing - Conclusion & Info for Next Week

Wow, that was quite a long journey for our Meeting 1! Let's take a deep breath and recall the important *highlights* of today's basic concept materials:

1. **Computers are Innocent Assistants:** They are super-fast machines but have absolutely no initiative. They need logical, certain, and super-detailed instructions (algorithms) from us as their masters.
2. **Fundamental Difference:** An algorithm is a sequence of problem-solving steps (the logical idea), while programming is the act of translating that idea using an understandable language (Python, Java, etc.). Remember the 5 mandatory properties of an algorithm: *Input, Output, Definiteness, Finiteness, Effectiveness*.
3. **Structured Problem Solving:** Don't rush into coding! Understand the problem first, write a *pseudocode* or *flowchart* draft, then touch your laptop *keyboard*. Watch out for *logic errors*!

**Teaser for Next Week (*Spoiler Alert!*):**
For next week (Meeting 2), get ready to bring neat notes! We will start getting into technical stuff: learning to design and draw logic flows using **Flowchart Diagrams**, and starting to write "draft language" aka **Pseudocode**. See you next week and keep up the enthusiasm for sharpening your logic! 🚀
