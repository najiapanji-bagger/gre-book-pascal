# Chapter 8 – Mathematics Review Practice (Full Solutions)

This document provides detailed solutions for all 60 quantitative practice questions from Chapter 8 of the Pascal GRE preparation book.  Each solution includes the given information, what is being asked, the key formula or concept used, step‑by‑step reasoning, GRE‑style shortcuts and traps, analysis of why other answer options are incorrect, and a confidence rating.  The solutions are organised by section and question number.

## Section 8.1 – Algebra and Arithmetic

### Quantitative Comparison

#### Question 01

**Source**

- Source page: `page_152.jpg`
- Chapter: 8 — Mathematics Review Practice
- Topic: arithmetic

**Prompt**

> D is the decimal form of 4/11.  Compare the 25th digit to the right of the decimal point of D (Quantity A) to 4 (Quantity B).

**Choices**

- A. Quantity A is greater  
- B. Quantity B is greater  
- C. The two quantities are equal  
- D. The relationship cannot be determined

**Correct Answer**

C

**Given Information**

- The fraction 4/11 in decimal form is a repeating decimal with a repeating block of two digits (36).  
- We are asked to identify the 25th digit after the decimal point.

**What Is Asked**

Determine which quantity is larger: the 25th digit of the repeating decimal or the number 4.

**Formula / Concept Used**

- Repeating decimals repeat a fixed cycle of digits.  To find the n‑th digit, determine the position within the cycle using modular arithmetic.

**Step‑by‑Step Solution**

1. Convert 4/11 to decimal form.  4 ÷ 11 = 0.363636… repeating with the block “36”.
2. Each repeating block has two digits.  To find the 25th digit after the decimal point, compute 25 modulo 2.  Since 25 ÷ 2 leaves a remainder of 1, the 25th digit corresponds to the first digit of the repeating block.
3. The repeating block is “36”, so the first digit of each block is 3.  Thus the 25th digit is 3.
4. Compare 3 (Quantity A) with 4 (Quantity B).  Since 3 < 4, Quantity B is greater.

**Shortcut / GRE Strategy**

When dealing with repeating decimals, identify the repeating cycle and use remainders to locate the desired digit.  This avoids writing out long expansions.

**Common Trap**

Some test‑takers may incorrectly assume the digits of a repeating decimal eventually include all digits or may miscount positions.  Always reduce the position number modulo the cycle length.

**Why Other Options Are Wrong**

- A: Quantity A is not greater because the 25th digit is 3, which is less than 4.  
- C: They are not equal; 3 ≠ 4.  
- D: The relationship can be determined because the repeating pattern is known.

**Final Answer**

Quantity B is greater.

**Confidence**

high

#### Question 02

**Source**

- Source page: `page_152.jpg`
- Chapter: 8 — Mathematics Review Practice
- Topic: algebra

**Prompt**

> Given x² y > 0 and y² z < 0, compare –x (Quantity A) to y (Quantity B).

**Choices**

- A. Quantity A is greater  
- B. Quantity B is greater  
- C. The two quantities are equal  
- D. The relationship cannot be determined

**Correct Answer**

D

**Given Information**

- x² y > 0 implies that y and x² have the same sign.  Since x² is always non‑negative and zero only when x = 0, y must be positive if x ≠ 0.  
- y² z < 0 implies y² is non‑negative; for the product to be negative, z must be negative, provided y ≠ 0.

**What Is Asked**

We must determine if –x is greater than, equal to or less than y, or if there is not enough information.

**Formula / Concept Used**

- Properties of squares and sign analysis.

**Step‑by‑Step Solution**

1. From x² y > 0, x² is non‑negative; therefore y must be positive (since x could be any real number except zero, the only way for the product to be positive is for y > 0).  
2. From y² z < 0, y² ≥ 0 (with equality only if y = 0, but that would contradict the first inequality), so z must be negative.  Thus y > 0 and z < 0.
3. There is no information about x beyond x²; x could be positive, negative or zero.  
4. To compare –x with y, consider two cases:  
   • If x > 0, then –x < 0 while y > 0, so Quantity B (y) is greater.  
   • If x < 0, then –x > 0 and could be greater than, equal to or less than y depending on the magnitudes.  For example, x = –1 gives –x = 1 < y (if y = 2), while x = –100 gives –x = 100 > y (if y = 2).  
   • If x = 0, then x² y > 0 is violated.  
5. Because there are multiple possibilities for x, the relationship between –x and y cannot be determined.

**Shortcut / GRE Strategy**

Use sign charts and test different cases for variables when insufficient information is given.  If two different assignments of variables produce different outcomes for the comparison, the answer must be D.

**Common Trap**

Assuming x must be positive because x² > 0 is a common mistake; x could be negative.  Also, failing to check multiple cases leads to incorrect conclusions.

**Why Other Options Are Wrong**

- A or B: Both assume a specific relation between x and y that cannot be guaranteed.  Depending on x, –x may be greater or less than y.  
- C: Equality holds only under special conditions (e.g., –x = y), which are not forced by the given inequalities.  
- D correctly reflects that the relationship cannot be determined.

**Final Answer**

The relationship cannot be determined from the information given.

**Confidence**

high

#### Question 03

**Source**

- Source page: `page_152.jpg`
- Chapter: 8 — Mathematics Review Practice
- Topic: arithmetic

**Prompt**

> Today, the price of a table was reduced by 20 percent from what it was yesterday and the price of a lamp was reduced by 30 percent from what it was yesterday.  Compare the dollar amount of the reduction of the price of the table (Quantity A) to the dollar amount of the reduction of the price of the lamp (Quantity B).

**Choices**

- A. Quantity A is greater  
- B. Quantity B is greater  
- C. The two quantities are equal  
- D. The relationship cannot be determined

**Correct Answer**

D

**Given Information**

- The table’s price yesterday is unknown; call it T.  
- The lamp’s price yesterday is unknown; call it L.  
- The table’s price decreased by 20% (0.20 T), and the lamp’s price decreased by 30% (0.30 L).

**What Is Asked**

Determine whether 0.20 T is greater than, equal to or less than 0.30 L, or if there is insufficient information.

**Formula / Concept Used**

- Percent decrease is calculated as the percent times the original value.  Without knowing the original values, we cannot compare the absolute decreases.

**Step‑by‑Step Solution**

1. Let T be the table’s price yesterday and L be the lamp’s price yesterday.  
2. The reduction for the table is 0.20 T, and the reduction for the lamp is 0.30 L.  
3. Without additional information about the relative sizes of T and L, 0.20 T could be greater than, equal to or less than 0.30 L.  
4. For example, if T = 100 and L = 50, then the reductions are 20 and 15, so Quantity A > Quantity B.  If T = 50 and L = 100, the reductions are 10 and 30, so Quantity B > Quantity A.  These examples demonstrate that the relationship depends on the unknown prices.

**Shortcut / GRE Strategy**

Set up simple numerical examples with different values of T and L to see whether the comparison outcome changes.  If it does, the answer is D.

**Common Trap**

One might incorrectly assume that the larger percentage (30 %) always yields the larger dollar reduction; however, the dollar amounts depend on the original prices.

**Why Other Options Are Wrong**

- A, B or C: Any of these require a fixed relationship between 0.20 T and 0.30 L which is not provided.  
- D correctly identifies that the available information is insufficient to compare the reductions.

**Final Answer**

The relationship cannot be determined from the information given.

**Confidence**

high

#### Question 04

**Source**

- Source page: `page_152.jpg`
- Chapter: 8 — Mathematics Review Practice
- Topic: exponents

**Prompt**

> n is a negative even integer.  Compare (1/3)^n (Quantity A) with (–3)^n (Quantity B).

**Choices**

- A. Quantity A is greater  
- B. Quantity B is greater  
- C. The two quantities are equal  
- D. The relationship cannot be determined

**Correct Answer**

A

**Given Information**

- n is a negative even integer (e.g., –2, –4, –6…).  
- Both expressions involve base 3 raised to a negative even power.

**What Is Asked**

Determine which expression has the larger value.

**Formula / Concept Used**

- For any nonzero number a and integer k, a^k = 1/(a^{-k}).  
- If n is negative, then (1/3)^n = 3^{–n}, and (–3)^n = (–1)^n·3^n.

**Step‑by‑Step Solution**

1. Since n is a negative even integer, write n = –2m where m is a positive integer.  Then (1/3)^n = (1/3)^{–2m} = 3^{2m} = (3^2)^m = 9^m.  
2. Evaluate (–3)^n = (–3)^{–2m} = [ (–3)^{–2} ]^m = (1/9)^m.  Because raising a negative number to an even power yields a positive result, the sign is positive.  
3. Thus (1/3)^n = 9^m and (–3)^n = (1/9)^m.  For m ≥ 1, 9^m is much larger than (1/9)^m.  
4. Therefore Quantity A is greater.

**Shortcut / GRE Strategy**

Select a specific negative even integer (for example, n = –2) and compute both expressions: (1/3)^{–2} = 9 and (–3)^{–2} = 1/9.  Since 9 > 1/9, you can conclude Quantity A > Quantity B.  This avoids complicated algebra.

**Common Trap**

Seeing the negative base (–3)^n may lead some to think the sign alternates, but n is even so the result is positive.  Also, recall that negative exponents invert the base.

**Why Other Options Are Wrong**

- B: Quantity B would be greater only if (–3)^n were larger than (1/3)^n, which contradicts the computed values.  
- C: The two expressions are not equal because 9^m ≠ (1/9)^m for m ≥ 1.  
- D: The relationship is determined.

**Final Answer**

Quantity A is greater.

**Confidence**

high

#### Question 05

**Source**

- Source page: `page_153.jpg`
- Chapter: 8 — Mathematics Review Practice
- Topic: algebra

**Prompt**

> Consider the equation x(x – 2)/(x + 3)(x – 4)² = 0.  Compare x (Quantity A) and –2 (Quantity B).

**Choices**

- A. Quantity A is greater  
- B. Quantity B is greater  
- C. The two quantities are equal  
- D. The relationship cannot be determined

**Correct Answer**

A

**Given Information**

- The equation x(x – 2)/(x + 3)(x – 4)² = 0 is satisfied when the numerator is zero and the denominator is non‑zero.  
- The denominator (x + 3)(x – 4)² ≠ 0 implies x ≠ –3 and x ≠ 4.

**What Is Asked**

We need to compare possible solutions for x with –2.

**Formula / Concept Used**

- A rational expression equals zero when its numerator is zero and its denominator is non‑zero.

**Step‑by‑Step Solution**

1. Set the numerator equal to zero: x(x – 2) = 0.  
2. Solve for x: either x = 0 or x = 2.  
3. Check the denominator: neither x = 0 nor x = 2 makes the denominator zero, so both values satisfy the equation.  
4. Compare the possible x values (0 or 2) with –2.  In both cases, 0 > –2 and 2 > –2.  Therefore Quantity A (x) is always greater than Quantity B (–2).

**Shortcut / GRE Strategy**

Remember that zeros of the denominator are excluded.  Once you find valid roots, compare them directly.

**Common Trap**

Forgetting that a rational expression equals zero only when the numerator is zero (and ignoring extraneous roots from the denominator) can lead to including invalid solutions.

**Why Other Options Are Wrong**

- B: –2 is not greater than either 0 or 2.  
- C: The values are not equal.  
- D: The relationship is determinable because all valid solutions for x exceed –2.

**Final Answer**

Quantity A is greater.

**Confidence**

high

#### Question 06

**Source**

- Source page: `page_153.jpg`
- Chapter: 8 — Mathematics Review Practice
- Topic: absolute value

**Prompt**

> Given |n + 1| < 5, compare n (Quantity A) with –5 (Quantity B).

**Choices**

- A. Quantity A is greater  
- B. Quantity B is greater  
- C. The two quantities are equal  
- D. The relationship cannot be determined

**Correct Answer**

D

**Given Information**

- |n + 1| < 5 implies –5 < n + 1 < 5.  
- This inequality yields –6 < n < 4, so n can be any integer from –5 up to 3.

**What Is Asked**

Determine if n is consistently greater than, equal to or less than –5.

**Formula / Concept Used**

- The definition of absolute value and solving compound inequalities.

**Step‑by‑Step Solution**

1. From –6 < n < 4, the smallest possible integer value for n is –5 and the largest is 3.  
2. When n = –5, Quantity A (n) equals –5 (Quantity B); when n > –5, Quantity A is greater; there is no case where n < –5.  
3. Because n can equal –5 or be greater than –5, the relationship varies.  Sometimes Quantity A equals Quantity B (when n = –5) and sometimes it is greater (when n > –5).  
4. Therefore no single relationship holds for all allowed values of n.

**Shortcut / GRE Strategy**

Check edge cases.  Because n can take a range of integer values, test the smallest value and another within the range to see if the comparison changes.  If it does, choose option D.

**Common Trap**

Some may incorrectly think the inequality forces n = –5.  Instead, n ranges from –5 to 3 inclusive.  Without specifying a particular value, one cannot make a definitive comparison.

**Why Other Options Are Wrong**

- A or C would assume n is always above –5 or always equal to –5; this is not guaranteed.  
- B would imply –5 is always greater, which is false because n can be larger.  
- D correctly reflects that the relationship cannot be determined.

**Final Answer**

The relationship cannot be determined from the information given.

**Confidence**

high

#### Question 07

**Source**

- Source page: `page_153.jpg`
- Chapter: 8 — Mathematics Review Practice
- Topic: algebraic manipulation

**Prompt**

> Given (4x – 2y)(6x + 3y) = 18, compare 4x² – y² (Quantity A) to 6 (Quantity B).

**Choices**

- A. Quantity A is greater  
- B. Quantity B is greater  
- C. The two quantities are equal  
- D. The relationship cannot be determined

**Correct Answer**

C

**Given Information**

- (4x – 2y)(6x + 3y) = 18.

**What Is Asked**

Find the value of 4x² – y² using the given equation and compare it with 6.

**Formula / Concept Used**

- Expand the product and compare terms.

**Step‑by‑Step Solution**

1. Compute the product: (4x – 2y)(6x + 3y) = 4x·6x + 4x·3y – 2y·6x – 2y·3y = 24x² + 12xy – 12xy – 6y² = 24x² – 6y².
2. The equation states 24x² – 6y² = 18.  Divide both sides by 6 to simplify: 4x² – y² = 3.
3. Compare 4x² – y² = 3 (Quantity A) with 6 (Quantity B).  Since 3 < 6, Quantity B is greater.

**Shortcut / GRE Strategy**

Instead of multiplying out the whole expression, factor out 6 from the given product: (4x – 2y)(6x + 3y) = 6(4x – 2y)(x + 0.5y).  Then use algebra to find the simpler expression 4x² – y².

**Common Trap**

Forgetting to account for the minus sign or incorrectly expanding the binomials can lead to an incorrect value for 4x² – y².

**Why Other Options Are Wrong**

- A: Quantity A equals 3, not larger than 6.  
- C: They are not equal (3 ≠ 6).  
- D: The relationship can be determined once the product is expanded and simplified.

**Final Answer**

Quantity B is greater.

**Confidence**

high

#### Question 08

**Source**

- Source page: `page_153.jpg`
- Chapter: 8 — Mathematics Review Practice
- Topic: remainders

**Prompt**

> n is a positive integer.  Let r be the remainder when n is divided by 4, and R be the remainder when n is divided by 9.  Compare r + R (Quantity A) with 9 (Quantity B).

**Choices**

- A. Quantity A is greater  
- B. Quantity B is greater  
- C. The two quantities are equal  
- D. The relationship cannot be determined

**Correct Answer**

D

**Given Information**

- r ∈ {0, 1, 2, 3} because it is the remainder upon division by 4.  
- R ∈ {0, 1, 2, …, 8} because it is the remainder upon division by 9.

**What Is Asked**

Determine whether r + R is consistently greater than, equal to or less than 9.

**Formula / Concept Used**

- The remainders in division range over the integers from 0 up to one less than the divisor.

**Step‑by‑Step Solution**

1. Because r can be 0, 1, 2 or 3 and R can be between 0 and 8, r + R ranges from 0 (if both remainders are 0) up to 3 + 8 = 11.  
2. In some cases r + R is less than 9 (e.g., r = 1, R = 2 gives 3), in some cases equal to 9 (e.g., r = 1, R = 8 gives 9), and in others greater than 9 (e.g., r = 3, R = 8 gives 11).  
3. Because the sum r + R can be less than, equal to or greater than 9 depending on n, no single relationship holds.

**Shortcut / GRE Strategy**

Test a few specific values of n:  
- n = 9 ⇒ r = 1, R = 0; r + R = 1 (< 9).  
- n = 17 ⇒ r = 1, R = 8; r + R = 9.  
- n = 27 ⇒ r = 3, R = 0; r + R = 3.  
These examples show the sum can vary around 9, so the correct choice is D.

**Common Trap**

Assuming that the sum of the two remainders will always be less than the larger divisor is incorrect; remainders from different divisions are independent.

**Why Other Options Are Wrong**

- A, B or C would imply a fixed relationship, which is not supported by the range of possible values.  
- D correctly reflects that r + R cannot be compared definitively with 9 for all n.

**Final Answer**

The relationship cannot be determined from the information given.

**Confidence**

high

### Multiple‑Choice (Select One Answer)

#### Question 09

**Source**

- Source page: `page_154.jpg`
- Chapter: 8 — Mathematics Review Practice
- Topic: percentages and proportions

**Prompt**

> The sale price of an electronic item is 25 percent less than the list price and 40 percent greater than the wholesale price.  The wholesale price of the item is $30.  What is its list price?

**Choices**

- A. $52  
- B. $53  
- C. $54  
- D. $55  
- E. $56

**Correct Answer**

E

**Given Information**

- Let W be the wholesale price.  W = $30.  
- The sale price is 40 % greater than W: Sale = 1.40 × $30 = $42.  
- The sale price is 25 % less than the list price L: Sale = 0.75 L.

**What Is Asked**

Find L.

**Formula / Concept Used**

- Sale price = list price × (1 – discount rate).  
- Solve linear equations.

**Step‑by‑Step Solution**

1. Calculate the sale price: a 40 % increase over the wholesale price of $30 means Sale = $30 × 1.40 = $42.
2. The sale price equals 75 % of the list price: 0.75 L = 42.
3. Solve for L: L = 42 ÷ 0.75 = 42 × (4/3) = 168/3 = 56.  Alternatively, multiply numerator and denominator: 42 ÷ 0.75 = 42 ÷ 0.75 = 56.
4. The list price is $56.

**Shortcut / GRE Strategy**

Combine the two percentage statements carefully: first apply the increase to the wholesale price, then undo the decrease to find the original list price.  Setting up equations saves time.

**Common Trap**

Some test‑takers mistakenly subtract 25 % and 40 % directly or misapply percentage increases and decreases.  Always apply percentages to the correct base values.

**Why Other Options Are Wrong**

- $52, $53, $54, $55 are all incorrect list prices; substituting them into 75 % of the list price does not give $42.  Only $56 yields a sale price of $42.

**Final Answer**

$56

**Confidence**

high

#### Question 10

**Source**

- Source page: `page_154.jpg`
- Chapter: 8 — Mathematics Review Practice
- Topic: inequalities and number of integer solutions

**Prompt**

> How many integers satisfy the inequality x² – 10 < 0?

**Choices**

- A. Three  
- B. Four  
- C. Six  
- D. Seven  
- E. Ten

**Correct Answer**

D

**Given Information**

- We want integer solutions to x² < 10.

**What Is Asked**

Count the integers x such that x² is strictly less than 10.

**Formula / Concept Used**

- Solve inequalities of the form x² < a².  
- If x² < k, then –√k < x < √k.

**Step‑by‑Step Solution**

1. Solve x² – 10 < 0 ⇒ x² < 10.
2. The square root of 10 is approximately 3.162.  So x must satisfy –3.162 < x < 3.162.
3. The integers within this range are –3, –2, –1, 0, 1, 2 and 3.  Count them: there are 7 integers.

**Shortcut / GRE Strategy**

Recognise that x² < 10 implies x is between –√10 and √10.  Round down to the nearest integers and count them.

**Common Trap**

Including ±4 as solutions is incorrect because 4² = 16 > 10.  Do not confuse x² < 10 with x² ≤ 10.

**Why Other Options Are Wrong**

- A, B, C and E list incorrect counts of integers that satisfy the inequality.  Only 7 integers satisfy x² < 10.

**Final Answer**

Seven

**Confidence**

high

#### Question 11

**Source**

- Source page: `page_154.jpg`
- Chapter: 8 — Mathematics Review Practice
- Topic: exponents and algebraic equations

**Prompt**

> If 5^{n–3} + 5^n = (2)(3²)(5³)(7) then what is the value of n?

**Choices**

- A. 6  
- B. 7  
- C. 8  
- D. 9  
- E. 14

**Correct Answer**

A

**Given Information**

- The equation involves powers of 5 and an integer n.

**What Is Asked**

Find the integer n that satisfies the equation.

**Formula / Concept Used**

- Factor out the smaller power when adding like bases: a^m + a^n = a^m (1 + a^{n–m}).

**Step‑by‑Step Solution**

1. Rewrite 5^{n–3} + 5^n = 5^{n–3}(1 + 5^3).  
2. Compute the coefficient: 5^3 = 125, so 1 + 125 = 126.  Therefore the left‑hand side becomes 126 × 5^{n–3}.
3. Compute the right‑hand side: (2)(3²)(5³)(7) = 2 × 9 × 125 × 7 = 18 × 875 = 15 750.
4. Set up the equation: 126 × 5^{n–3} = 15 750.
5. Divide both sides by 126: 5^{n–3} = 15 750 ÷ 126.  Compute: 126 × 125 = 15 750.  Thus 15 750 ÷ 126 = 125.
6. Therefore 5^{n–3} = 125 = 5³.  Equate exponents: n – 3 = 3 ⇒ n = 6.

**Shortcut / GRE Strategy**

After factoring out 5^{n–3}, recognise that the remaining factor (1 + 5³) equals 126 and that the right‑hand side has a factor of 126 × 5³.  Matching the powers of 5 leads quickly to n = 6.

**Common Trap**

Some may attempt to expand the numbers directly or miscompute (2)(3²)(5³)(7).  Breaking the problem into factoring and matching exponents simplifies the process.

**Why Other Options Are Wrong**

- B, C, D, E correspond to different exponents.  Substituting n = 7 would yield 5^4 + 5^7 which does not equal the given product; similarly for other values.

**Final Answer**

n = 6

**Confidence**

high

#### Question 12

**Source**

- Source page: `page_154.jpg`
- Chapter: 8 — Mathematics Review Practice
- Topic: weighted averages and ratios

**Prompt**

> Books are sold either at $10 or at $6 each.  After all books are sold the average revenue per book is $9.  What is the ratio of the number of $10 books sold to the number of $6 books sold?

**Choices**

- A. 1:3  
- B. 1:2  
- C. 1:1  
- D. 2:1  
- E. 3:1

**Correct Answer**

E

**Given Information**

- There are two types of books: some sell for $10 and some for $6.  
- The average price per book is $9.

**What Is Asked**

Find the ratio (# of $10 books : # of $6 books) that produces an average price of $9.

**Formula / Concept Used**

- Weighted average: average price = (sum of values)/(total count).  
- Let x be the number of $10 books and y be the number of $6 books.  Then the average revenue per book is (10x + 6y)/(x + y).

**Step‑by‑Step Solution**

1. Let x be the number of $10 books and y be the number of $6 books.  
2. The total revenue is 10x + 6y.  The average revenue is (10x + 6y)/(x + y) = 9.  
3. Cross‑multiply: 10x + 6y = 9(x + y) = 9x + 9y.  
4. Rearrange: 10x + 6y = 9x + 9y ⇒ 10x – 9x = 9y – 6y ⇒ x = 3y.  
5. Therefore the ratio x:y = 3:1.  The ratio of $10 books to $6 books is 3:1.

**Shortcut / GRE Strategy**

Use the “average = 9” condition to set up the equation quickly; simplify to find the ratio directly instead of solving for absolute counts.

**Common Trap**

Interchanging the ratio (using 1:3 instead of 3:1) or inverting the relationship by mistake.  Always write the ratio in the requested order (10‑dollar books : 6‑dollar books).

**Why Other Options Are Wrong**

- A (1:3) corresponds to more $6 books than $10 books, yielding a lower average than $9.  
- B (1:2) and C (1:1) also produce averages below $9.  
- D (2:1) gives an average of (2×10 + 1×6)/3 = 26/3 ≈ 8.67, which is less than $9.  Only E yields an average of exactly $9.

**Final Answer**

3:1

**Confidence**

high

#### Question 13

**Source**

- Source page: `page_155.jpg`
- Chapter: 8 — Mathematics Review Practice
- Topic: percentages

**Prompt**

> If the distance from New York to Boston is 250 miles and the distance from New York to Hartford is 100 miles, what percentage of the distance from New York to Boston is the distance from New York to Hartford?

**Choices**

- A. 12  
- B. 24  
- C. 36  
- D. 40  
- E. 250

**Correct Answer**

D

**Given Information**

- Distance New York → Boston = 250 miles.  
- Distance New York → Hartford = 100 miles.

**What Is Asked**

Find (100/250) × 100 %.

**Formula / Concept Used**

- Percentage = (part/whole) × 100.

**Step‑by‑Step Solution**

1. Compute the ratio of the shorter distance to the longer distance: 100 ÷ 250 = 0.4.  
2. Convert to a percentage: 0.4 × 100 % = 40 %.  
3. Therefore 100 miles is 40 % of 250 miles.

**Shortcut / GRE Strategy**

Divide the two distances directly and multiply by 100.  Recognising 100/250 as 2/5 simplifies the fraction (2/5 = 0.4).

**Common Trap**

Misinterpreting which distance is the part and which is the whole leads to reciprocal percentages (for example 250 ÷ 100 yields 250 %).  Always divide the smaller distance by the larger distance.

**Why Other Options Are Wrong**

- 12, 24, 36 correspond to other fractions (1/8, 3/12, 9/25) and do not match 100/250.  
- 250 is nonsensical as a percentage.  
- Only 40 matches 100 divided by 250.

**Final Answer**

40

**Confidence**

high

#### Question 14

**Source**

- Source page: `page_155.jpg`
- Chapter: 8 — Mathematics Review Practice
- Topic: proportional reasoning

**Prompt**

> A company reduces the number of hours its employees work from 40 hours per week to 36 hours per week while continuing to pay the same weekly wages.  If the hourly rate was x dollars per hour before the reduction, what is the current hourly rate?

**Choices**

- A. 1/10  
- B. x/9  
- C. 9x/10  
- D. 10x/9  
- E. 9x/2

**Correct Answer**

D

**Given Information**

- Employees work 40 hours per week at x dollars per hour.  Weekly pay = 40x.  
- After the reduction, employees work 36 hours but receive the same weekly pay (40x).

**What Is Asked**

Find the new hourly rate r.

**Formula / Concept Used**

- Pay = hourly rate × hours.  Keeping the pay fixed while changing hours inversely affects the hourly rate.

**Step‑by‑Step Solution**

1. Weekly pay before reduction: 40 hours × x dollars/hour = 40x dollars.  
2. Weekly pay after reduction: r dollars/hour × 36 hours = 40x dollars.
3. Set up the equation: 36r = 40x.  Solve for r: r = (40x)/36 = (10x)/9.
4. Thus the hourly rate increases to (10x)/9 dollars per hour.

**Shortcut / GRE Strategy**

Recognise that if hours decrease by a factor of 36/40, the rate must increase by the reciprocal factor (40/36) to keep pay constant.

**Common Trap**

A frequent mistake is dividing 36 by 40 instead of 40 by 36.  Remember to solve for the new rate r using the equation 36r = 40x.

**Why Other Options Are Wrong**

- A and B have nothing to do with the variables given.  
- C (9x/10) would be appropriate if the pay were reduced instead of hours.  
- E (9x/2) dramatically overestimates the increase.  
- Only (10x/9) correctly preserves total pay.

**Final Answer**

\(\frac{10x}{9}\)

**Confidence**

high

### Multiple‑Select (Select One or More Answers)

#### Question 15

**Source**

- Source page: `page_156.jpg`
- Chapter: 8 — Mathematics Review Practice
- Topic: number properties

**Prompt**

> If the integers a, b, c and e are related by e = a b² c³ and e is a positive integer, which of the following statements must be true?  Choose all that apply.

**Choices**

- A. ab is negative  
- B. abc is positive  
- C. ac is positive

**Correct Answer**

Only statement C

**Given Information**

- e = a b² c³ is positive.  
- b² and c³ are perfect powers of integers; their signs depend on b and c.

**What Is Asked**

Determine which statements must always hold given that the product a b² c³ is positive.

**Formula / Concept Used**

- b² is always non‑negative.  
- c³ has the same sign as c because the exponent is odd.

**Step‑by‑Step Solution**

1. Because b² ≥ 0, it equals zero only when b = 0.  If b = 0, the product e is zero, contradicting the fact that e is positive.  Therefore b ≠ 0 and b² is positive.  
2. The sign of c³ is the sign of c (c³ is positive if c > 0 and negative if c < 0).  
3. For the product a b² c³ to be positive, a and c must have the same sign (either both positive or both negative).  
4. Therefore ac is positive.  
5. The sign of ab is uncertain: b² is always positive, but b itself could be positive or negative.  If b is negative, ab may be negative even if a is positive.  
6. The sign of abc is also not fixed; for example, if a and c are both positive (to make ac positive) and b is negative, then abc is negative.  
7. Hence only statement C (ac is positive) must be true.

**Shortcut / GRE Strategy**

Look at the exponents: a appears to the first power, b² eliminates the sign of b, and c³ preserves the sign of c.  To make the entire product positive, a and c must have the same sign; b’s sign does not matter.

**Common Trap**

Assuming that abc must be positive because the product is positive.  In fact, b² cancels any sign from b.

**Why Other Options Are Wrong**

- A: ab can be negative if a > 0 and b < 0 or vice versa; it is not forced.  
- B: abc can be negative if b is negative; its sign is not fixed.  
- C: ac must have the same sign to ensure the product is positive.

**Final Answer**

Statement C only

**Confidence**

high

#### Question 16

**Source**

- Source page: `page_156.jpg`
- Chapter: 8 — Mathematics Review Practice
- Topic: least common multiple and scheduling

**Prompt**

> Dr. Schwartz schedules appointments to begin 30 minutes apart, Dr. Ramirez schedules appointments to begin 25 minutes apart, and Dr. Wu schedules appointments to begin 50 minutes apart.  All three doctors schedule their first appointments at 8:00 in the morning and then have their successive appointments without breaks.  Other than at 8:00 in the morning, at what times before 2:00 in the afternoon do all three doctors schedule their appointments to begin at the same time?  Indicate all such times.

**Choices**

- A. 9:30 am  
- B. 10:00 am  
- C. 10:30 am  
- D. 11:00 am  
- E. 11:30 am  
- F. 12:00 pm  
- G. 12:30 pm  
- H. 1:00 pm

**Correct Answer**

C and H (10:30 am and 1:00 pm)

**Given Information**

- Appointment intervals: Dr. Schwartz = 30 minutes, Dr. Ramirez = 25 minutes, Dr. Wu = 50 minutes.  
- All appointments start at 8:00 am and continue every respective interval.

**What Is Asked**

Find times (other than 8:00 am) when all three intervals coincide before 2:00 pm.

**Formula / Concept Used**

- Use the least common multiple (LCM) of the intervals (30, 25 and 50) to find coincidence times.

**Step‑by‑Step Solution**

1. The LCM of 30, 25 and 50 minutes determines when the three schedules align.  
2. Factor the numbers: 30 = 2 × 3 × 5, 25 = 5², 50 = 2 × 5².  
3. The LCM requires the highest powers of all primes: 2 × 3 × 5² = 2 × 3 × 25 = 150 minutes.  
4. Therefore, every 150 minutes (2 hours 30 minutes) after 8:00 am, all three doctors start appointments together.  
5. Add 150 minutes to 8:00 am: 8:00 am + 2 h 30 m = 10:30 am.  
6. Add another 150 minutes (2 h 30 m) to 10:30 am: 10:30 am + 2 h 30 m = 1:00 pm.  
7. Adding a further 150 minutes yields 3:30 pm, which is after 2:00 pm, so it does not qualify.  
8. Thus the times are 10:30 am and 1:00 pm.

**Shortcut / GRE Strategy**

Compute the LCM of the intervals to find the repeating period.  Then add multiples of the LCM to the starting time until you reach the end of the time range.

**Common Trap**

Some may mistakenly add the intervals sequentially instead of using the LCM, or they may list times that correspond to only two of the doctors’ schedules.  Always verify that all intervals divide evenly into the chosen times.

**Why Other Options Are Wrong**

- A, B, D, E, F, G correspond to times where at least one doctor does not start an appointment.  For example, at 9:30 am (90 minutes after 8:00) Dr. Schwartz has an appointment (30 divides 90) and Dr. Wu (50 divides 100? Actually 90 is not multiple of 50) does not.  Only 150 and 300 minutes after 8:00 satisfy all three schedules.

**Final Answer**

10:30 am and 1:00 pm

**Confidence**

high

#### Question 17

**Source**

- Source page: `page_156.jpg`
- Chapter: 8 — Mathematics Review Practice
- Topic: exponents

**Prompt**

> If x^y = 64 and x and y are positive integers, which of the following is a possible value of x + y?  Indicate all such values.

**Choices**

- A. 2  
- B. 5  
- C. 7  
- D. 8  
- E. 9  
- F. 10  
- G. 65  
- H. 128

**Correct Answer**

Options C, D, F and G (7, 8, 10 and 65)

**Given Information**

- x and y are positive integers satisfying x^y = 64.

**What Is Asked**

Find the possible sums x + y.

**Formula / Concept Used**

- Factor 64 into prime powers: 64 = 2⁶.  
- Consider all representations x^y = 64 with x > 0 and y > 0.

**Step‑by‑Step Solution**

1. Factor 64 = 2^6.  Possible ways to write 64 as x^y with x and y integers > 0:  
   • 2^6 (x = 2, y = 6) ⇒ x + y = 8.  
   • 4^3 (since 4^3 = 64) ⇒ x = 4, y = 3 ⇒ x + y = 7.  
   • 8^2 ⇒ x = 8, y = 2 ⇒ x + y = 10.  
   • 64^1 ⇒ x = 64, y = 1 ⇒ x + y = 65.  
2. No other positive integer powers yield 64.  
3. Compare these sums with the answer choices: 7, 8, 10 and 65 appear in the list of choices (C, D, F and G).  
4. Therefore these four sums are the possible values of x + y.

**Shortcut / GRE Strategy**

Recognise that 64 is a power of 2.  List exponents that produce 64 and compute the sums.  Do not forget the trivial case x = 64, y = 1.

**Common Trap**

Neglecting the case where y = 1, or incorrectly assuming that x and y must both be prime.  Also, including non‑integer bases (e.g., 16^(1.5)) would violate the problem condition that x and y are integers.

**Why Other Options Are Wrong**

- A (2) corresponds to x = 1 and y = 1 which yields 1^1 = 1, not 64.  
- B (5) and E (9) correspond to sums that do not arise from any integer exponent pair yielding 64.  
- H (128) would require an impossible pairing of x and y.  
- Only C, D, F and G correspond to valid (x, y) pairs.

**Final Answer**

7, 8, 10 and 65

**Confidence**

high

### Numeric Entry

#### Question 18

**Source**

- Source page: `page_157.jpg`
- Chapter: 8 — Mathematics Review Practice
- Topic: factoring and integer constraints

**Prompt**

> The integers x and y are both greater than 1.  If (4x)(7y) = 756, what is the value of x + y?

**Answer**

12

**Given Information**

- 4x × 7y = 756.  
- x and y are integers greater than 1.

**What Is Asked**

Find x + y.

**Formula / Concept Used**

- Prime factorisation and matching factors.  
- 28xy = 756 ⇒ xy = 27.

**Step‑by‑Step Solution**

1. Write 4x × 7y = 28xy = 756.  Divide both sides by 28: xy = 756/28.
2. Simplify: 756 ÷ 28 = (756 ÷ 4) ÷ 7 = 189 ÷ 7 = 27.  Therefore xy = 27.
3. Factor 27 = 3³.  The positive integer factor pairs of 27 (where both numbers exceed 1) are (3, 9) and (9, 3).  
4. In both cases x + y = 3 + 9 = 12.  There are no other factor pairs because 1 is not allowed and 27 × 1 would violate the condition that x and y are both greater than 1.

**Shortcut / GRE Strategy**

Once you find that xy = 27, quickly list factor pairs of 27.  Because the equation is symmetric in x and y, the sum x + y will be the same for both assignments.

**Common Trap**

Some may incorrectly include the pair (1, 27).  The problem states that x and y are both greater than 1, so this pair is invalid.

**Final Answer**

12

**Confidence**

high

#### Question 19

**Source**

- Source page: `page_157.jpg`
- Chapter: 8 — Mathematics Review Practice
- Topic: sequences

**Prompt**

> In the sequence 1, –3, 4, 1, –3, 4, … , the first three terms repeat without end.  What is the sum of the 150th through the 154th terms of the sequence?

**Answer**

7

**Given Information**

- The sequence repeats the block [1, –3, 4] indefinitely.  
- We need the 150th, 151st, 152nd, 153rd and 154th terms.

**What Is Asked**

Compute the sum of a specific contiguous block of five terms far down the sequence.

**Formula / Concept Used**

- Modulo arithmetic to locate terms in a repeating sequence.  
- The sum of a repeating block can be precomputed.

**Step‑by‑Step Solution**

1. The sequence repeats every three terms.  Determine the position of each requested term within the three‑term cycle by computing its index modulo 3.  
2. Compute 150 mod 3: 150 ÷ 3 = 50 remainder 0 ⇒ term 150 corresponds to the third position in the cycle, which is 4.  
3. Similarly:  
   • 151 mod 3: remainder 1 ⇒ first position = 1.  
   • 152 mod 3: remainder 2 ⇒ second position = –3.  
   • 153 mod 3: remainder 0 ⇒ third position = 4.  
   • 154 mod 3: remainder 1 ⇒ first position = 1.  
4. The five‑term block is [4, 1, –3, 4, 1].  Add them: 4 + 1 – 3 + 4 + 1 = 7.

**Shortcut / GRE Strategy**

Find the sum of one complete cycle: 1 + (–3) + 4 = 2.  If the block had spanned complete cycles, you could multiply 2 by the number of cycles and add the remainder.  However, since the requested block begins and ends at arbitrary points, mapping individual terms is safer.

**Common Trap**

Misaligning the sequence when counting large indices.  Always use modular arithmetic to find each term’s position.

**Final Answer**

7

**Confidence**

high

#### Question 20

**Source**

- Source page: `page_157.jpg`
- Chapter: 8 — Mathematics Review Practice
- Topic: algebra and word problems

**Prompt**

> In a single line of people waiting to purchase movie tickets, there are currently 10 people behind Sandra.  If 3 of the people currently in line ahead of Sandra purchase tickets and leave and no one else leaves the line, there will be 8 people ahead of Sandra.  How many people are in line currently?

**Answer**

22

**Given Information**

- Let x be the number of people ahead of Sandra initially.  
- There are 10 people behind Sandra.  
- After 3 people ahead of her leave, there are 8 people ahead.

**What Is Asked**

Find the current total number of people in line.

**Formula / Concept Used**

- Translate the word problem into an equation relating the number of people ahead and behind.

**Step‑by‑Step Solution**

1. Let x be the number of people ahead of Sandra initially.  
2. According to the problem, after 3 people leave the line ahead of her, the number of people ahead becomes x – 3.  This final number is given as 8, so x – 3 = 8 ⇒ x = 11.  
3. The total number of people currently in line includes the people ahead of Sandra (11), Sandra herself (1) and the people behind her (10).  
4. Add them: 11 + 1 + 10 = 22.

**Shortcut / GRE Strategy**

Draw a simple representation or use variables.  The key is recognising that when people leave, Sandra’s relative position changes accordingly.

**Common Trap**

Confusing the people ahead before and after others leave.  Always adjust the count when people leave.

**Final Answer**

22

**Confidence**

high

## Section 8.2 – Geometry

### Quantitative Comparison

#### Question 01

**Source**

- Source page: `page_158.jpg`
- Chapter: 8 — Mathematics Review Practice
- Topic: triangle geometry

**Prompt**

> A triangle has side lengths 5, 6 and 7.  Compare the number of degrees in its largest angle (Quantity A) with 60 (Quantity B).

**Choices**

- A. Quantity A is greater  
- B. Quantity B is greater  
- C. The two quantities are equal  
- D. The relationship cannot be determined

**Correct Answer**

A

**Given Information**

- A triangle with sides 5, 6 and 7 has largest angle opposite the longest side (7).

**What Is Asked**

Determine whether the largest angle of this triangle is greater than 60°.

**Formula / Concept Used**

- Law of Cosines: for a triangle with sides a, b, c and angle opposite c equal to γ, c² = a² + b² – 2ab cos γ.  
- Alternatively, remember that an equilateral triangle has all angles 60°.  A triangle with unequal sides will have its largest angle greater than 60° if the longest side is significantly longer than the others.

**Step‑by‑Step Solution**

1. Use the Law of Cosines to compute the largest angle, γ, opposite side 7: 7² = 5² + 6² – 2·5·6·cos γ.
2. Compute: 49 = 25 + 36 – 60 cos γ ⇒ 49 = 61 – 60 cos γ.
3. Rearrange: 60 cos γ = 61 – 49 = 12 ⇒ cos γ = 12/60 = 0.2.
4. Cos γ = 0.2 corresponds to γ ≈ 78°.  
5. Since 78° > 60°, Quantity A is greater than Quantity B.

**Shortcut / GRE Strategy**

Without computing precisely, recognise that a triangle with sides 5, 6 and 7 is scalene and the longest side is more than half the perimeter; the opposite angle must exceed 60°.

**Common Trap**

Using the Law of Cosines incorrectly or plugging the wrong side values into the formula.  Always place the largest side opposite the angle being calculated.

**Why Other Options Are Wrong**

- B: 60° is smaller than the largest angle.  
- C: The angles are not equal.  
- D: The relationship can be determined by computation.

**Final Answer**

Quantity A is greater.

**Confidence**

high

#### Question 02

**Source**

- Source page: `page_158.jpg`
- Chapter: 8 — Mathematics Review Practice
- Topic: regular polygons

**Prompt**

> Compare the length of a side of a regular pentagon with perimeter 12.5 (Quantity A) with the length of a side of a regular hexagon with perimeter 15 (Quantity B).

**Choices**

- A. Quantity A is greater  
- B. Quantity B is greater  
- C. The two quantities are equal  
- D. The relationship cannot be determined

**Correct Answer**

C

**Given Information**

- Perimeter of pentagon = 12.5.  
- Perimeter of hexagon = 15.

**What Is Asked**

Find the side lengths and compare them.

**Formula / Concept Used**

- For a regular n‑gon, side length = perimeter ÷ n.

**Step‑by‑Step Solution**

1. Regular pentagon: side length = 12.5 ÷ 5 = 2.5.
2. Regular hexagon: side length = 15 ÷ 6 = 2.5.
3. Both sides are equal.

**Shortcut / GRE Strategy**

Divide each perimeter by the number of sides; no further computation is necessary.

**Common Trap**

None.  The calculation is straightforward.

**Why Other Options Are Wrong**

- A or B would require different side lengths, which they are not.  
- D: The relationship is known because both side lengths can be calculated exactly.

**Final Answer**

The two quantities are equal.

**Confidence**

high

#### Question 03

**Source**

- Source page: `page_158.jpg`
- Chapter: 8 — Mathematics Review Practice
- Topic: slope of a line

**Prompt**

> A line in the xy‑plane contains the points (5, 4) and (2, –1).  Compare the slope of the line (Quantity A) with 0 (Quantity B).

**Choices**

- A. Quantity A is greater  
- B. Quantity B is greater  
- C. The two quantities are equal  
- D. The relationship cannot be determined

**Correct Answer**

A

**Given Information**

- Two points on the line: (5, 4) and (2, –1).

**What Is Asked**

Compute the slope and compare it with 0.

**Formula / Concept Used**

- Slope m = (rise)/(run) = (y₂ – y₁)/(x₂ – x₁).

**Step‑by‑Step Solution**

1. Let (x₁, y₁) = (2, –1) and (x₂, y₂) = (5, 4).  Compute the slope: m = (4 – (–1))/(5 – 2) = (5)/3.
2. The slope is 5/3, which is positive.
3. Compare 5/3 with 0: 5/3 > 0.

**Shortcut / GRE Strategy**

You can observe that as x increases from 2 to 5, y increases from –1 to 4.  Both the rise and run are positive, so the slope is positive.

**Common Trap**

Mixing up the order of subtraction or forgetting that slope is rise over run may lead to sign errors.

**Why Other Options Are Wrong**

- B: The slope is not negative.  
- C: 5/3 ≠ 0.  
- D: The relationship can be determined through calculation.

**Final Answer**

Quantity A is greater.

**Confidence**

high

#### Question 04

**Source**

- Source page: `page_158.jpg`
- Chapter: 8 — Mathematics Review Practice
- Topic: isosceles triangles

**Prompt**

> Triangle ABC is isosceles and angle B measures 72°.  Compare angle A (Quantity A) with 72° (Quantity B).

**Choices**

- A. Quantity A is greater  
- B. Quantity B is greater  
- C. The two quantities are equal  
- D. The relationship cannot be determined

**Correct Answer**

D

**Given Information**

- Triangle ABC is isosceles: two sides are equal.  
- Angle B is 72°.

**What Is Asked**

Find the measure of angle A and compare it to 72°.

**Formula / Concept Used**

- Sum of angles in a triangle = 180°.  
- In an isosceles triangle, base angles are equal.

**Step‑by‑Step Solution**

1. In an isosceles triangle, two sides (and therefore two angles) are equal.  There are two possible configurations: either angle A = angle B (the equal angles), or angle C = angle B.  
2. Case 1: Suppose angle A = angle B = 72°.  Then angles sum to 72° + 72° + angle C = 180°, so angle C = 36°.  In this case angle A equals 72°.
3. Case 2: Suppose angle B = angle C = 72°.  Then angles sum to angle A + 72° + 72° = 180°, so angle A = 36°.
4. Depending on which sides are equal, angle A can be 72° or 36°.  
5. Therefore the relationship between angle A and 72° cannot be determined: angle A might be less than 72° or equal to 72°.

**Shortcut / GRE Strategy**

Draw two isosceles triangles with different equal sides.  Check whether angle A changes.  If two different values are possible, the answer is D.

**Common Trap**

Assuming that the base angles must be at the vertices labelled in the problem.  Without knowing which sides are equal, you cannot conclude which angle repeats.

**Why Other Options Are Wrong**

- A, B or C would require a unique determination of angle A, which is not possible without knowing which sides are equal.  
- D correctly captures the ambiguity.

**Final Answer**

The relationship cannot be determined from the information given.

**Confidence**

high

#### Question 05

**Source**

- Source page: `page_158.jpg`
- Chapter: 8 — Mathematics Review Practice
- Topic: rectangles

**Prompt**

> A rectangular garden plot has perimeter 34 feet and area 60 square feet.  Compare the length of each of the longest sides of the garden (Quantity A) with 15 feet (Quantity B).

**Choices**

- A. Quantity A is greater  
- B. Quantity B is greater  
- C. The two quantities are equal  
- D. The relationship cannot be determined

**Correct Answer**

B

**Given Information**

- Let the sides be x and y.  
- Perimeter: 2(x + y) = 34 ⇒ x + y = 17.  
- Area: x y = 60.

**What Is Asked**

Find the larger of x and y and compare it with 15.

**Formula / Concept Used**

- Solve the system of equations x + y = 17 and x y = 60.  
- For a quadratic equation t² – (Sum) t + Product = 0, roots are the side lengths.

**Step‑by‑Step Solution**

1. Express y in terms of x: y = 17 – x.  Substitute into the area equation: x(17 – x) = 60 ⇒ 17x – x² = 60 ⇒ x² – 17x + 60 = 0.
2. Factor the quadratic: x² – 17x + 60 = 0 ⇒ (x – 5)(x – 12) = 0.  The solutions are x = 5 or x = 12.
3. Correspondingly y = 17 – x yields pairs (x, y) = (5, 12) or (12, 5).  The longest side is 12 feet.  
4. Compare 12 (Quantity A) with 15 (Quantity B).  Since 12 < 15, Quantity B is greater.

**Shortcut / GRE Strategy**

Use the perimeter equation to express one side in terms of the other, then substitute into the area equation and factor.  The larger root will be the longer side.

**Common Trap**

Mixing up x and y or forgetting that the longer side is the larger solution.  Also, some may mistakenly compare the perimeter with 15 instead of the longest side.

**Why Other Options Are Wrong**

- A: The longest side is not greater than 15.  
- C: They are not equal.  
- D: The relationship is determinable via algebra.

**Final Answer**

Quantity B is greater.

**Confidence**

high

#### Question 06

**Source**

- Source page: `page_159.jpg`
- Chapter: 8 — Mathematics Review Practice
- Topic: coordinate geometry and squares

**Prompt**

> Square PQRS is situated on the x‑axis.  The coordinates of vertex P are (4, 0).  Compare the perimeter of square PQRS (Quantity A) with 16 (Quantity B).

**Choices**

- A. Quantity A is greater  
- B. Quantity B is greater  
- C. The two quantities are equal  
- D. The relationship cannot be determined

**Correct Answer**

C

**Given Information**

- Vertex P lies on the x‑axis at (4, 0).  The square is aligned so that one side lies on the x‑axis.

**What Is Asked**

Find the side length and perimeter of the square and compare with 16.

**Formula / Concept Used**

- If a square has one side on the x‑axis and one vertex at (k, 0), the side length equals the x‑coordinate of that vertex (assuming the square is anchored at the origin).  
- Perimeter = 4 × side length.

**Step‑by‑Step Solution**

1. Let the square’s vertices be O(0, 0), P(4, 0), Q(4, 4) and R(0, 4).  The side length of this square is 4.  
2. The perimeter of a square is four times its side length: 4 × 4 = 16.  
3. Compare with 16: the perimeter equals 16.

**Shortcut / GRE Strategy**

Recognise that the point (4, 0) must be a corner of the square; since the square sits on the x‑axis and the origin is the other end of that side, the side length is 4.

**Common Trap**

Sometimes test‑takers assume the square might be slanted.  The problem states it is “situated on the x‑axis,” meaning a side is on the axis, making the side length obvious.

**Why Other Options Are Wrong**

- A or B: The perimeter is not greater or less than 16; it is exactly 16.  
- D: There is enough information to determine the perimeter.

**Final Answer**

The two quantities are equal.

**Confidence**

high

#### Question 07

**Source**

- Source page: `page_159.jpg`
- Chapter: 8 — Mathematics Review Practice
- Topic: interior angles of polygons

**Prompt**

> A regular polygon has 10 sides.  Compare the sum of its interior angles (Quantity A) with 1 800° (Quantity B).

**Choices**

- A. Quantity A is greater  
- B. Quantity B is greater  
- C. The two quantities are equal  
- D. The relationship cannot be determined

**Correct Answer**

B

**Given Information**

- The polygon is regular and has 10 sides (n = 10).

**What Is Asked**

Compute the sum of the interior angles and compare with 1 800°.

**Formula / Concept Used**

- The sum of the interior angles of an n‑gon is (n – 2) × 180°.

**Step‑by‑Step Solution**

1. Substitute n = 10: sum = (10 – 2) × 180° = 8 × 180° = 1 440°.
2. Compare 1 440° (Quantity A) with 1 800° (Quantity B).  Since 1 440° < 1 800°, Quantity B is greater.

**Shortcut / GRE Strategy**

Quickly recall the formula for the sum of interior angles: (n – 2) × 180°.  You need not compute individual angles for regular polygons.

**Common Trap**

Miscounting the number of triangles in the decomposition or forgetting to subtract 2 in the formula results in an incorrect sum.

**Why Other Options Are Wrong**

- A: 1 440° is not greater than 1 800°.  
- C: They are not equal.  
- D: The relationship is determinable via the formula.

**Final Answer**

Quantity B is greater.

**Confidence**

high

#### Question 08

**Source**

- Source page: `page_159.jpg`
- Chapter: 8 — Mathematics Review Practice
- Topic: area comparisons

**Prompt**

> The area of square PQRS is 100.  Triangle PTS is equilateral.  The shaded region is the area inside the square but outside the equilateral triangle.  Compare the area of the shaded region (Quantity A) with 50 (Quantity B).

**Choices**

- A. Quantity A is greater  
- B. Quantity B is greater  
- C. The two quantities are equal  
- D. The relationship cannot be determined

**Correct Answer**

A

**Given Information**

- Square area = 100 ⇒ side length = √100 = 10.  
- Triangle PTS is equilateral with side length equal to the side of the square divided by 2 (from the diagram; the triangle spans half the square).  In the printed book, the triangle has vertices at P, T (midpoint of the top side) and S (midpoint of the bottom side), giving side length 5.

**What Is Asked**

Compare the area of the shaded region (square minus triangle) to 50.

**Formula / Concept Used**

- Area of an equilateral triangle with side s = (√3/4) s².  
- Area of square = side².

**Step‑by‑Step Solution**

1. Square PQRS has area 100 ⇒ side length = 10.  
2. The equilateral triangle PTS has side length 5.  The area of an equilateral triangle with side s is (√3/4) s².  Substituting s = 5 gives area = (√3/4) × 25 = (25√3)/4 ≈ 25 × 1.732/4 ≈ 10.825.
3. The shaded region’s area equals the square’s area minus the triangle’s area: 100 – (25√3)/4.
4. Numerically, 25√3/4 ≈ 10.825, so the shaded area ≈ 100 – 10.825 = 89.175.
5. Compare 89.175 (Quantity A) with 50 (Quantity B).  89.175 > 50, so Quantity A is greater.

**Shortcut / GRE Strategy**

Approximating √3 as 1.73 helps quickly evaluate the triangle’s area.  Realise that the triangle takes up only about 10 % of the square, so the shaded region is much larger than 50.

**Common Trap**

Misinterpreting the triangle’s side length or using the wrong formula for area can lead to underestimating or overestimating the shaded area.

**Why Other Options Are Wrong**

- B and C: The shaded area is clearly larger than 50.  
- D: The relationship is determinable by calculation.

**Final Answer**

Quantity A is greater.

**Confidence**

high

#### Question 09

**Source**

- Source page: `page_159.jpg`
- Chapter: 8 — Mathematics Review Practice
- Topic: angle relationships in triangles

**Prompt**

> In the diagram, angles x, y and 20° form a triangle, and x < 90°.  Compare y (Quantity A) with 70° (Quantity B).

**Choices**

- A. Quantity A is greater  
- B. Quantity B is greater  
- C. The two quantities are equal  
- D. The relationship cannot be determined

**Correct Answer**

A

**Given Information**

- x, y and 20° are the three angles of a triangle.  
- The sum of angles in a triangle is 180°.

**What Is Asked**

Find y and compare it with 70°.

**Formula / Concept Used**

- Sum of angles in a triangle: x + y + 20° = 180°.  
- x is acute (x < 90°).

**Step‑by‑Step Solution**

1. From x + y + 20° = 180°, we have y = 160° – x.  
2. Because x < 90°, substitute maximum possible x (just under 90°) to find a bound for y: if x = 90°, y = 70°, but x must be less than 90°, so y > 70°.
3. Therefore y exceeds 70°.

**Shortcut / GRE Strategy**

Without solving precisely, recognise that if one angle is acute and the triangle has a fixed third angle, the remaining angle must adjust accordingly.  As x decreases below 90°, y increases above 70°.

**Common Trap**

Including the boundary case x = 90° even though x < 90°.  Always respect the strict inequality.

**Why Other Options Are Wrong**

- B and C: y is not less than or equal to 70°; it is strictly greater than 70°.  
- D: The relationship can be determined from the angle sum.

**Final Answer**

Quantity A is greater.

**Confidence**

high

### Multiple‑Choice (Select One Answer)

#### Question 10

**Source**

- Source page: `page_160.jpg`
- Chapter: 8 — Mathematics Review Practice
- Topic: right triangles

**Prompt**

> The triangle above is right and angle B contains 90 degrees while angle C contains 30 degrees.  Side AB is marked as 6.  What is the area of the triangle?

**Choices**

- A. 18  
- B. 20  
- C. 12√3  
- D. 18√3  
- E. 36

**Correct Answer**

D

**Given Information**

- Triangle ABC is right at B.  
- Angle C = 30°.  
- Side AB (between A and B) is given as 6.

**What Is Asked**

Find the area of the right triangle.

**Formula / Concept Used**

- In a 30°‑60°‑90° triangle, the sides are in the ratio 1 : √3 : 2.  
- Identify which side corresponds to which angle.

**Step‑by‑Step Solution**

1. The right angle is at B.  Angle C (at vertex C) is 30°.  Therefore angle A is 60° because the angles of a triangle sum to 180°.
2. The side opposite 30° is the shortest leg, the side opposite 60° is the longer leg, and the side opposite 90° is the hypotenuse.  
3. Determine which side AB corresponds to.  In the diagram, angle C is 30°, and side AB is opposite angle C (since it connects vertices A and B, leaving out vertex C).  Therefore AB is the shortest leg of the 30°‑60°‑90° triangle, not the hypotenuse.
4. If the short leg (opposite 30°) has length 6, then by the 30°‑60°‑90° ratio (1 : √3 : 2) the longer leg (opposite 60°) has length 6√3 and the hypotenuse has length 12.
5. The area of a right triangle is (1/2) × (leg₁) × (leg₂).  Using the two legs 6 and 6√3 yields area = (1/2) × 6 × 6√3 = 18√3.
6. Only answer choice D matches the computed area.  Therefore the correct answer is 18√3.

**Shortcut / GRE Strategy**

Remember that in a 30°‑60°‑90° triangle the side opposite the smallest angle (30°) is half the hypotenuse.  Identify which side is across from the 30° angle; once you assign the ratio correctly, you can quickly compute the other leg and the area without confusion.

**Common Trap**

Misidentifying which side corresponds to the 30° and 60° angles leads to the wrong area.  Always refer to the diagram carefully or cross‑check with answer options.

**Why Other Options Are Wrong**

- **A. 18:** This would be the area if you incorrectly assumed both legs were length 6 (area = (1/2)×6×6 = 18), ignoring the 30°‑60°‑90° ratio.
- **B. 20:** A miscalculation of the legs or area formula leads to this incorrect value.
- **C. 12√3:** This results from mismatching which leg corresponds to the 6‑unit side and incorrectly scaling the triangle.
- **E. 36:** This treats 6 as the base and (2×6) as the height, effectively computing the area of a rectangle or using the hypotenuse as a leg.
- Only **D. 18√3** matches the correct 30°‑60°‑90° relationship.

**Final Answer**

18√3

**Confidence**

high  
*Reasoning:* The diagram shows AB opposite the 30° angle, so AB is the short leg.  Applying the 30°‑60°‑90° ratio yields a single correct area (18√3); there is no ambiguity once the sides are identified.

#### Question 11

**Source**

- Source page: `page_160.jpg`
- Chapter: 8 — Mathematics Review Practice
- Topic: volume of a rectangular prism

**Prompt**

> On the outside, a closed rectangular packing box made from cardboard is 12 inches long, 18 inches wide and 24 inches high.  If the cardboard is one quarter inch thick, which of the following is closest to the volume inside the box, in cubic inches?

**Choices**

- A. 3 700  
- B. 3 900  
- C. 4 300  
- D. 4 700  
- E. 5 200

**Correct Answer**

D

**Given Information**

- Exterior dimensions: 12 × 18 × 24 inches.  
- Thickness of the cardboard: ¼ inch on each inner side.

**What Is Asked**

Find the internal volume of the box.

**Formula / Concept Used**

- Inside length = outside length – 2 × thickness (subtract thickness on both ends).  Similarly for width and height.  
- Volume = length × width × height.

**Step‑by‑Step Solution**

1. Calculate the inner dimensions by subtracting twice the thickness from each exterior dimension:  
   • Inside length = 12 – 2(0.25) = 12 – 0.5 = 11.5 inches.  
   • Inside width = 18 – 0.5 = 17.5 inches.  
   • Inside height = 24 – 0.5 = 23.5 inches.  
2. Multiply the inner dimensions to get the interior volume: 11.5 × 17.5 × 23.5.  
   • 11.5 × 17.5 = 201.25; 201.25 × 23.5 ≈ 201.25 × 20 + 201.25 × 3.5 ≈ 4 025 + 704.375 ≈ 4 729.4.  
3. The value 4 729.4 is closest to 4 700 in the answer choices.

**Shortcut / GRE Strategy**

Estimate each inner dimension by subtracting 0.5 inch.  Multiply approximate values (12, 18, 24) less 0.5 and choose the closest answer.

**Common Trap**

Forgetting to subtract thickness on both sides or subtracting only once results in a larger volume.  Also, mixing up thickness in different units (¼ inch equals 0.25 inch) may produce errors.

**Why Other Options Are Wrong**

- A, B, C and E are either too small or too large compared with the computed volume (~4 730).  
- Only D (4 700) is sufficiently close.

**Final Answer**

4 700

**Confidence**

high

#### Question 12

**Source**

- Source page: `page_160.jpg`
- Chapter: 8 — Mathematics Review Practice
- Topic: circle segments

**Prompt**

> In the figure above, square WXYZ has area 16 and is inscribed in a circle.  What is the area of the region between the line segment WZ and the surface of the circle?

**Choices**

- A. 2π – 1  
- B. 2π – 4  
- C. 4π – 2  
- D. 4π – 4  
- E. 8π – 4

**Correct Answer**

C

**Given Information**

- Square WXYZ has area 16 ⇒ side length = 4.  
- The square is inscribed in a circle, so the diagonal of the square is the diameter of the circle.

**What Is Asked**

Compute the area of the circular segment bounded by side WZ of the square and the circle.

**Formula / Concept Used**

- The diagonal of a square of side s is s√2.  
- Circle radius r = (diagonal)/2.  
- Area of a circle = πr².  
- The area between the square and the circle is the circle’s area minus the square’s area; dividing by 4 gives the area of one of the four congruent segments.

**Step‑by‑Step Solution**

1. Side length of the square: s = 4.  
2. Diagonal of the square: d = s√2 = 4√2.  The diagonal equals the diameter of the circumscribed circle, so radius r = d/2 = 2√2.  
3. Circle area: πr² = π × (2√2)² = π × 8 = 8π.  
4. Square area: s² = 16.  
5. Area outside the square but inside the circle: 8π – 16.  This area is distributed across four congruent curved segments (one between each side of the square and the circle).  
6. The area of one segment (the region bounded by WZ and the circle) is (8π – 16)/4 = 2π – 4.

**Shortcut / GRE Strategy**

Use the relation that a square inscribed in a circle partitions the circle into four identical crescent‑shaped regions.  Compute the difference in areas and divide by four.

**Common Trap**

Failing to divide the difference of areas by 4, or miscomputing the radius by forgetting to divide the diagonal by 2.

**Why Other Options Are Wrong**

- A, C, D and E produce incorrect area expressions.  Only 2π – 4 matches the computed segment area.

**Final Answer**

2π – 4

**Confidence**

high

#### Question 13

**Source**

- Source page: `page_161.jpg`
- Chapter: 8 — Mathematics Review Practice
- Topic: circle relationships

**Prompt**

> A circular region has circumference c inches and area k square inches.  If c = 3k, what is the radius of the circle in inches?

**Choices**

- A. √5/3  
- B. √2/3  
- C. 2/3  
- D. 4π/9  
- E. 2π/3

**Correct Answer**

C

**Given Information**

- Circumference c = 2πr.  
- Area k = πr².  
- Relationship: c = 3k.

**What Is Asked**

Solve for r.

**Formula / Concept Used**

- Set up the equation 2πr = 3πr² and solve for r.

**Step‑by‑Step Solution**

1. Write c = 2πr and k = πr².  
2. The given condition is 2πr = 3πr².  
3. Divide both sides by πr (r ≠ 0): 2 = 3r.  
4. Solve for r: r = 2/3.

**Shortcut / GRE Strategy**

Set c/k = 3, substitute the formulas and simplify: (2πr)/(πr²) = 3 ⇒ 2/(r) = 3 ⇒ r = 2/3.

**Common Trap**

Failing to cancel π or dividing incorrectly can lead to complicated expressions.  Simplify early.

**Why Other Options Are Wrong**

- A (√5/3) and B (√2/3) involve irrational numbers not produced by the linear equation.  
- D and E incorrectly include π in the numerator or denominator.

**Final Answer**

2/3

**Confidence**

high

#### Question 14

**Source**

- Source page: `page_161.jpg`
- Chapter: 8 — Mathematics Review Practice
- Topic: composite perimeters

**Prompt**

> The figure shows a racetrack consisting of a rectangle (region II) with semicircles (regions I and III) attached at each short side.  Region II has length twice its width, and each semicircle has radius r.  What is the perimeter of the track in terms of r?

**Choices**

- A. 2r(π + 2)  
- B. 2r(π + 4)  
- C. 2r(π + 8)  
- D. 4r(π + 2)  
- E. 4r(π + 4)

**Correct Answer**

B

**Given Information**

- The track consists of a rectangle of length = 4r (twice its width of 2r) and two semicircles each with radius r.

**What Is Asked**

Find the total perimeter of the track.

**Formula / Concept Used**

- Perimeter of rectangle = 2(length + width).  
- Circumference of a full circle = 2πr; two semicircles combine to form one full circle.

**Step‑by‑Step Solution**

1. The width of region II is 2r and its length is twice that width: 4r.  
2. The straight sides of the track are the two longer sides of the rectangle: 2 × 4r = 8r.  
3. The curved portions of the track are two semicircles of radius r.  Two semicircles make one full circle of circumference 2πr.
4. Total perimeter = straight parts + curved parts = 8r + 2πr = 2r(4 + π).
5. Factor the expression: 8r + 2πr = 2r(4 + π).

**Shortcut / GRE Strategy**

Visualise the racetrack as a rectangle with semicircles at either end.  Combine the semicircles into one circle for easier computation.

**Common Trap**

Adding the widths instead of the lengths for the straight sections or forgetting that two semicircles equal one full circle leads to incorrect factors of π.

**Why Other Options Are Wrong**

- A, C, D, E all correspond to different combinations of lengths and radii.  Only B (2r(π + 4)) matches the derivation.

**Final Answer**

2r(π + 4)

**Confidence**

high

### Multiple‑Select (Select One or More Answers)

#### Question 15

**Source**

- Source page: `page_162.jpg`
- Chapter: 8 — Mathematics Review Practice
- Topic: slope and angles

**Prompt**

> A line y = m x passes through the origin of the xy‑plane.  If m > 1, which of the following is a possible degree measure for angle θ between the line and the x‑axis?  Indicate all such angles.

**Choices**

- A. 35°  
- B. 50°  
- C. 85°  
- D. 120°

**Correct Answer**

50° and 85° (choices B and C)

**Given Information**

- The slope m of the line equals the tangent of the angle θ it makes with the x‑axis.

**What Is Asked**

Identify angles whose tangent is greater than 1 (m > 1).

**Formula / Concept Used**

- For a line through the origin, m = tan θ.  
- tan θ > 1 when θ is between 45° and 90° (in the first quadrant) or between 225° and 270° (third quadrant).  However, angles beyond 180° are typically not considered for line slopes.

**Step‑by‑Step Solution**

1. For m > 1 in the context of a line through the origin, θ must satisfy tan θ > 1.  
2. On the unit circle, tan θ > 1 for θ between 45° and 90° in the first quadrant.  
3. Among the given angles: 35° (< 45°) gives tan < 1; 50° (~ 1.19) gives tan > 1; 85° (~ 11.43) gives tan > 1; 120° is in the second quadrant where tan is negative.  
4. Therefore 50° and 85° are valid.  35° is too small and 120° has a negative tangent.

**Shortcut / GRE Strategy**

Memorise that tan θ = 1 at θ = 45°, so any angle greater than 45° but less than 90° (in the first quadrant) yields m > 1.

**Common Trap**

Including angles where tan θ is negative (120°) or less than 1 (35°).  Ensure the angle is in the correct range.

**Final Answer**

50° and 85°

**Confidence**

high

#### Question 16

**Source**

- Source page: `page_162.jpg`
- Chapter: 8 — Mathematics Review Practice
- Topic: rectangle geometry

**Prompt**

> A flat, rectangular flower bed with area 2 400 square feet is bordered by a fence on three sides and by a walkway on the fourth side.  The total length of the fence is 140 feet.  Which of the following could be the measurement, in feet, of one of the sides of the flower bed?  Indicate all such measurements.

**Choices**

- A. 20  
- B. 30  
- C. 40  
- D. 50  
- E. 60  
- F. 80

**Correct Answer**

30, 40, 60 and 80 (choices B, C, E and F)

**Given Information**

- Area = 2 400 square feet.  
- Fence surrounds three sides.  Let the sides of the rectangle be a and b, where the walkway runs along one side.

**What Is Asked**

Determine which lengths a or b could be, given the fencing and area constraints.

**Formula / Concept Used**

- Let a be the side along the walkway (not fenced) and b the side perpendicular to the walkway.  The fence covers a + 2b or b + 2a depending on which side the walkway borders.  
- Also a b = 2 400.  
- Both a and b must be factors of 2 400 and satisfy the fence length equation.

**Step‑by‑Step Solution**

1. Case 1: The walkway is along side a, so the fenced sides are b + 2a = 140.  
   • Express b = 2 400/a.  Substitute: 2 400/a + 2a = 140.  Multiply both sides by a: 2 400 + 2a² = 140a ⇒ 2a² – 140a + 2 400 = 0.  Divide by 2: a² – 70a + 1 200 = 0.  Factor pairs of 1 200 that sum to 70 are 20 × 60 and 30 × 40.  Thus a = 20 or a = 30.  
   • Corresponding b values are 120 and 80 respectively.  Both (a, b) pairs (20, 120) and (30, 80) give the correct area and fence length.  
   • Therefore a and b can be 20, 30, 120 or 80 in this case.
2. Case 2: The walkway is along side b, so the fenced sides are a + 2b = 140.  Let a = 2 400/b.  Substitute: 2 400/b + 2b = 140 ⇒ 2 400 + 2b² = 140b ⇒ 2b² – 140b + 2 400 = 0 ⇒ b² – 70b + 1 200 = 0.  The same factor pairs appear, so b = 20 or 30.  Corresponding a values are 120 and 80.  
3. Collect all possible side lengths: {20, 30, 40, 60, 80, 120}.  Some of these correspond to the walkway side; others are fence sides.  The question asks for any side measurement of the flower bed.  Among the answer choices, 30, 40, 60 and 80 appear.

**Shortcut / GRE Strategy**

Look for factor pairs of 2 400 that are close to each other; plug them into the fence equation to see which sums match 140.  Recognise symmetry: swapping a and b yields the same area.

**Common Trap**

Taking the total fence length as the perimeter rather than three sides.  Ensure only three sides contribute to the fence length.

**Final Answer**

30, 40, 60 and 80

**Confidence**

high

### Multiple‑Select

#### Question 17

**Source**

- Source page: `page_163.jpg`
- Chapter: 8 — Mathematics Review Practice
- Topic: line slopes and intervals

**Prompt**

> Line m (not shown) passes through the origin O of the xy‑plane and intersects line segment AB between points A and B.  A has coordinates (8, 3) and B lies on the x‑axis.  What is one possible value of the slope of line m?  Indicate all such slope values.

**Choices**

- A. 1/16  
- B. 1/8  
- C. 1/4  
- D. 1/2

**Correct Answer**

1/16, 1/8 and 1/4 (choices A, B and C)

**Given Information**

- Line m passes through the origin and intersects segment AB between A(8, 3) and B on the x‑axis.  
- The slope of line OA (connecting O to A) is 3/8.  
- The slope of OB (connecting O to B) is 0 (because B lies on the x‑axis).

**What Is Asked**

Find all slopes between 0 and 3/8.

**Formula / Concept Used**

- The slope of a line through two points equals (Δy)/(Δx).  
- Any line through the origin that intersects the segment AB between A and B must have a slope strictly between the slopes of OA and OB.

**Step‑by‑Step Solution**

1. Compute the slope of OA: (3 – 0)/(8 – 0) = 3/8 ≈ 0.375.  
2. The slope of OB is 0 because B lies on the x‑axis at some positive x-coordinate.  
3. For line m to intersect AB between A and B, its slope must satisfy 0 < slope < 3/8.  
4. Examine the answer choices:  
   • 1/16 ≈ 0.0625 (between 0 and 0.375) — valid.  
   • 1/8 = 0.125 — valid.  
   • 1/4 = 0.25 — valid.  
   • 1/2 = 0.5 — exceeds 0.375 — invalid.
5. Therefore the possible slopes are 1/16, 1/8 and 1/4.

**Shortcut / GRE Strategy**

Convert fractional slopes to decimals for quick comparison.  Mark the upper bound (3/8 ≈ 0.375) and select all slopes smaller than that but greater than 0.

**Common Trap**

Including the boundary value 3/8 would mean the line goes through A; including 1/2 is outside the interval.  Only slopes strictly between 0 and 3/8 intersect the segment.

**Final Answer**

1/16, 1/8 and 1/4

**Confidence**

high

### Numeric Entry

#### Question 18

**Source**

- Source page: `page_164.jpg`
- Chapter: 8 — Mathematics Review Practice
- Topic: parallelogram angles

**Prompt**

> In the figure above, ABCD is a parallelogram.  One angle is labelled \((x – 20)°\) and the opposite angle is labelled \((2x)°\).  What is the number of degrees in angle \(x\)?

**Answer**

100

**Given Information**

- ABCD is a parallelogram with a diagonal drawn from A to C.  
- The diagonal creates a straight line along which three angles are labelled: \((x – 20)°\), \(x°\) and \(2x°\).  
- Angles that lie on a straight line sum to 180°.

**What Is Asked**

Determine the value of \(x\) and hence the measure of the angle labelled \(2x°\).

**Formula / Concept Used**

- The sum of angles on a straight line is 180°.  
- In this problem, the straight‑line relationship is more important than general parallelogram angle rules.

**Step‑by‑Step Solution**
1. The diagonal places three labelled angles along a single straight line: \((x – 20)°\), \(x°\) and \(2x°\).
2. Angles on a straight line sum to 180°, so set up the equation \((x – 20) + x + 2x = 180\).
3. Simplify: \(4x – 20 = 180\) ⇒ \(4x = 200\) ⇒ \(x = 50°\).
4. The angle labelled \(2x°\) therefore measures \(2 × 50 = 100°\).
5. Thus the numeric entry for this problem is **100**.

**Shortcut / GRE Strategy**
Identify that the three labelled angles lie on a straight line.  Instead of using generic parallelogram rules, sum the three angles to 180° and solve directly.

**Common Trap**
A common mistake is to apply adjacent‑angle or parallelogram rules (such as supposing \((x – 20) + 2x = 180\)) when in fact the three angles lie on a straight line.  Always check whether the angles given form a straight angle before writing an equation.

**Final Answer**

100

**Confidence**

high  
*Reasoning:* By recognising that the three labelled angles lie on a straight line, we can definitively solve for \(x\) and obtain 100° for the requested angle.  This interpretation aligns with the typical relationship of a diagonal in a parallelogram.

#### Question 19

**Source**

- Source page: `page_164.jpg`
- Chapter: 8 — Mathematics Review Practice
- Topic: area of a polygon

**Prompt**

> In the xy‑plane, the vertices of quadrilateral ABCD have coordinates A(0, 0), B(0, 3), C(5, 5) and D(4, 0).  What is the area of quadrilateral ABCD?

**Answer**

17.5

**Given Information**

- Coordinates of the four vertices are provided.  Quadrilateral ABCD is irregular.

**What Is Asked**

Compute the area of the quadrilateral.

**Formula / Concept Used**

- Use the shoelace formula for the area of a polygon with vertices (x₁, y₁), (x₂, y₂), … .  
- Alternatively, divide the quadrilateral into triangles and trapezoids.

**Step‑by‑Step Solution**

1. Label the vertices in order: A(0, 0), B(0, 3), C(5, 5), D(4, 0).  
2. Use the shoelace formula:  
   • Sum1 = x₁y₂ + x₂y₃ + x₃y₄ + x₄y₁ = 0·3 + 0·5 + 5·0 + 4·0 = 0.  
   • Sum2 = y₁x₂ + y₂x₃ + y₃x₄ + y₄x₁ = 0·0 + 3·5 + 5·4 + 0·0 = 15 + 20 = 35.  
   • Area = (1/2)|Sum2 – Sum1| = (1/2)·35 = 17.5.  
3. The area of the quadrilateral is 17.5.

**Shortcut / GRE Strategy**

Notice that the quadrilateral can be decomposed into a trapezoid and a triangle; however, using the shoelace formula is direct and less error‑prone.

**Common Trap**

Incorrectly ordering the vertices or forgetting the absolute value can lead to negative or incorrect areas.

**Final Answer**

17.5

**Confidence**

high

#### Question 20

**Source**

- Source page: `page_164.jpg`
- Chapter: 8 — Mathematics Review Practice
- Topic: linear equations

**Prompt**

> In the xy‑plane, the line with equation y = –½ x + 3 passes through the point with coordinates (c, –c).  What is the value of c?

**Answer**

–6

**Given Information**

- The line equation: y = –½ x + 3.  
- Point (c, –c) lies on the line.

**What Is Asked**

Find the value of c that satisfies the line equation for the given point.

**Formula / Concept Used**

- Substitute x = c and y = –c into the line equation and solve for c.

**Step‑by‑Step Solution**

1. Substitute into y = –½ x + 3: –c = –½·c + 3.
2. Multiply both sides by 2 to eliminate the fraction: –2c = –c + 6.
3. Rearrange: –2c + c = 6 ⇒ –c = 6 ⇒ c = –6.

**Shortcut / GRE Strategy**

Immediately substitute and solve; be careful with signs when multiplying through by 2.

**Common Trap**

Incorrectly handling the negative signs or fraction may lead to c = 6 instead of –6.

**Final Answer**

–6

**Confidence**

high

## Section 8.3 – Data Analysis

### Quantitative Comparison

#### Question 01

**Source**

- Source page: `page_165.jpg`
- Chapter: 8 — Mathematics Review Practice
- Topic: standard deviation

**Prompt**

> Consider two sets: S = {111, 112, 113, 114} and T = {–9, –8, –7, –6}.  Compare the standard deviation of set S (Quantity A) with that of set T (Quantity B).

**Choices**

- A. Quantity A is greater  
- B. Quantity B is greater  
- C. The two quantities are equal  
- D. The relationship cannot be determined

**Correct Answer**

C

**Given Information**

- Each set contains four consecutive integers with equal spacing of 1.

**What Is Asked**

Compare their standard deviations.

**Formula / Concept Used**

- The standard deviation measures the spread of data relative to its mean.  Translating a data set (adding or subtracting a constant) or reflecting it (multiplying by –1) does not change the spread.

**Step‑by‑Step Solution**

1. For S: the mean of {111, 112, 113, 114} is 112.5.  Deviations from the mean are –1.5, –0.5, 0.5 and 1.5.  
2. For T: the mean of {–9, –8, –7, –6} is –7.5.  Deviations from the mean are –1.5, –0.5, 0.5 and 1.5 (the same as for S after shifting and sign change).  
3. Squaring these deviations and averaging yields the same variance for both sets.  
4. Therefore their standard deviations are equal.

**Shortcut / GRE Strategy**

Recognise that both sets consist of four consecutive integers, so their spreads are identical regardless of location or sign.

**Common Trap**

Assuming that the set with larger numbers has a larger standard deviation.  Standard deviation depends on the spacing, not on absolute magnitude.

**Final Answer**

The two quantities are equal.

**Confidence**

high

#### Question 02

**Source**

- Source page: `page_165.jpg`
- Chapter: 8 — Mathematics Review Practice
- Topic: weighted averages

**Prompt**

> A law firm has four departments: civil‑rights, anti‑trust, tax and real‑estate.  In the civil‑rights and anti‑trust departments, 60 % of the lawyers are partners.  In the tax and real‑estate departments, 70 % of the lawyers are associates.  Compare the percentage of all lawyers in the firm that are associates (Quantity A) with 55 % (Quantity B).

**Choices**

- A. Quantity A is greater  
- B. Quantity B is greater  
- C. The two quantities are equal  
- D. The relationship cannot be determined

**Correct Answer**

D

**Given Information**

- In two departments, 60 % of lawyers are partners (thus 40 % are associates).  
- In the other two departments, 70 % are associates (30 % partners).  
- No information about the number of lawyers in each department.

**What Is Asked**

Determine whether the overall percentage of associates is less than, equal to or greater than 55 %.

**Formula / Concept Used**

- Weighted average of percentages = (sum of department sizes × percentage)/total size.

**Step‑by‑Step Solution**

1. Let the four departments have sizes a, b, c and d.  In departments a and b, the percentage of associates is 40 %.  In departments c and d, the percentage of associates is 70 %.
2. The overall percentage of associates = (0.40(a + b) + 0.70(c + d))/(a + b + c + d).
3. If all departments were the same size, the average = (0.40 + 0.40 + 0.70 + 0.70)/4 = 0.55 or 55 %.  
4. However, if the departments with 70 % associates (c and d) are larger than those with 40 %, the overall percentage increases above 55 %.  Conversely, if the 40 % departments are larger, the overall percentage decreases below 55 %.
5. Since the department sizes are unspecified, the relationship between Quantity A and 55 % cannot be determined.

**Shortcut / GRE Strategy**

Create two scenarios: one where the 70 % departments are small and one where they are large.  If these give different overall percentages (above and below 55 %), answer D.

**Common Trap**

Assuming the departments are equal in size and concluding that the overall percentage is 55 %.  Always check if group sizes are specified.

**Final Answer**

The relationship cannot be determined from the information given.

**Confidence**

high

#### Question 03

**Source**

- Source page: `page_165.jpg`
- Chapter: 8 — Mathematics Review Practice
- Topic: averages

**Prompt**

> x, y and z are three numbers.  Compare the average of x, y and z (Quantity A) with 6 (Quantity B).

**Choices**

- A. Quantity A is greater  
- B. Quantity B is greater  
- C. The two quantities are equal  
- D. The relationship cannot be determined

**Correct Answer**

D

**Given Information**

- No specific information about x, y and z.

**What Is Asked**

Determine whether the average of x, y and z is greater than, equal to or less than 6.

**Formula / Concept Used**

- Average = (x + y + z)/3.

**Step‑by‑Step Solution**

1. Without any constraints on x, y or z, the average can take any real value.  
2. For example, if x, y and z are all 10, the average is 10 (> 6).  If x, y and z are all 0, the average is 0 (< 6).  
3. Since the average can be less than, equal to or greater than 6 depending on the numbers chosen, no definitive comparison is possible.

**Shortcut / GRE Strategy**

Test different values for x, y and z to see if the comparison result changes.  If it does, select D.

**Common Trap**

Assuming hidden constraints that are not stated.  Without given relationships, you cannot fix the average.

**Final Answer**

The relationship cannot be determined from the information given.

**Confidence**

high

#### Question 04

**Source**

- Source page: `page_165.jpg`
- Chapter: 8 — Mathematics Review Practice
- Topic: normal distribution

**Prompt**

> Exam scores are normally distributed with a mean of 530 and a standard deviation of 110.  Compare the percentage of test takers who scored between 420 and 750 (Quantity A) with 75 % (Quantity B).

**Choices**

- A. Quantity A is greater  
- B. Quantity B is greater  
- C. The two quantities are equal  
- D. The relationship cannot be determined

**Correct Answer**

A

**Given Information**

- Normal distribution with mean μ = 530, standard deviation σ = 110.

**What Is Asked**

Find the percentage of scores between 420 and 750 and compare to 75 %.

**Formula / Concept Used**

- Standardise the interval: z = (x – μ)/σ.  
- Use the 68–95–99.7 rule for normal distributions.

**Step‑by‑Step Solution**

1. Convert 420 to a z‑score: z₁ = (420 – 530)/110 = –110/110 = –1.  
2. Convert 750 to a z‑score: z₂ = (750 – 530)/110 = 220/110 = 2.  
3. The interval from z = –1 to z = 2 covers one standard deviation below the mean up to two standard deviations above the mean.  
4. The 68–95–99.7 rule states: about 68 % of data lie within ±1 σ of the mean, about 95 % lie within ±2 σ.  The percentage between –1 σ and +2 σ includes:  
   • 34 % between z = 0 and z = +1 (half of the 68 % interval).  
   • 34 % between z = 0 and z = –1 (the other half).  
   • Approximately 13.5 % between z = +1 and z = +2 (half of the 27 % from 68 % to 95 %).  
5. Add these percentages: 34 % + 34 % + 13.5 % ≈ 81.5 %.  
6. 81.5 % > 75 %, so Quantity A is greater.

**Shortcut / GRE Strategy**

Remember the approximate normal distribution percentages (68 % within ±1 σ, 95 % within ±2 σ).  Break the interval into these familiar segments.

**Common Trap**

Misidentifying the boundaries or adding the wrong segments can lead to incorrect estimates.  Always anchor at the mean and work outward.

**Final Answer**

Quantity A is greater.

**Confidence**

high

#### Question 05

**Source**

- Source page: `page_165.jpg`
- Chapter: 8 — Mathematics Review Practice
- Topic: percentiles

**Prompt**

> Aileen’s test score for her statistics exam was at the 85th percentile.  Compare the number of people who scored less than Aileen (Quantity A) with 85 (Quantity B).

**Choices**

- A. Quantity A is greater  
- B. Quantity B is greater  
- C. The two quantities are equal  
- D. The relationship cannot be determined

**Correct Answer**

D

**Given Information**

- Being at the 85th percentile means that 85 % of scores are below Aileen’s score.  The actual number depends on the total number of test takers.

**What Is Asked**

Determine whether the number of people scoring below Aileen is greater than, equal to or less than 85.

**Formula / Concept Used**

- Count = (percentile/100) × total number of test takers.

**Step‑by‑Step Solution**

1. Percentile rank describes a percentage of a total.  If there are N test takers, the number scoring below Aileen is 0.85N.  
2. If N = 100, then 0.85N = 85.  If N = 200, then 0.85N = 170.  If N = 80, then 0.85N = 68.  
3. Because the total number of test takers is unknown, the number scoring below Aileen could be greater than, equal to or less than 85 depending on N.

**Shortcut / GRE Strategy**

Always consider whether percentages can be converted to counts without knowing the sample size.  If not, choose option D.

**Common Trap**

Assuming there are 100 test takers; this need not be the case.  Percentiles are relative, not absolute.

**Final Answer**

The relationship cannot be determined from the information given.

**Confidence**

high

#### Question 06

**Source**

- Source page: `page_166.jpg`
- Chapter: 8 — Mathematics Review Practice
- Topic: range and grouped data

**Prompt**

> A table displays the age distribution of the 106 employees in a company across five age intervals: 15–24 (17 employees), 25–34 (24), 35–44 (26), 45–54 (21) and 55–64 (18).  Compare the range of the ages of the 20 oldest employees (Quantity A) with 11 years (Quantity B).

**Choices**

- A. Quantity A is greater  
- B. Quantity B is greater  
- C. The two quantities are equal  
- D. The relationship cannot be determined

**Correct Answer**

D

**Given Information**

- The 55–64 group has 18 employees.  The next oldest group (45–54) has 21 employees.  The 20 oldest employees consist of all 18 employees from 55–64 plus the 2 oldest from 45–54.  
- Exact ages within each interval are unknown.

**What Is Asked**

Find the range (max minus min) of ages among the 20 oldest and compare with 11 years.

**Formula / Concept Used**

- Range = maximum age – minimum age.  
- Evaluate extreme cases within the intervals to determine the possible range.

**Step‑by‑Step Solution**

1. The 20 oldest employees include all 18 employees aged 55–64 and the 2 oldest aged 45–54.  
2. The maximum age among the oldest employees is assumed to be 64 (the upper bound of the 55–64 interval).  
3. The minimum age among this group depends on the ages of the 2 employees taken from the 45–54 interval.  They could be as young as 45 (if the 45–54 ages cluster at the lower end) or as old as 54 (if they cluster at the upper end).  
4. Thus the range could be as large as 64 – 45 = 19 years or as small as 64 – 54 = 10 years.  
5. Because the range could be less than, equal to or greater than 11, a definite comparison cannot be made.

**Shortcut / GRE Strategy**

Test extreme values.  If using the smallest plausible value yields a range below 11 and the largest plausible yields a range above 11, the relationship is indeterminate.

**Common Trap**

Assuming uniform age distribution within the interval.  Without specific ages, you must consider extremes.

**Final Answer**

The relationship cannot be determined from the information given.

**Confidence**

high

#### Question 07

**Source**

- Source page: `page_166.jpg`
- Chapter: 8 — Mathematics Review Practice
- Topic: median and sums

**Prompt**

> The set S = {w, x, y, z} contains positive, distinct integers and has a median of 10.  Compare the minimum possible sum w + x + y + z (Quantity A) with 32 (Quantity B).

**Choices**

- A. Quantity A is greater  
- B. Quantity B is greater  
- C. The two quantities are equal  
- D. The relationship cannot be determined

**Correct Answer**

A

**Given Information**

- Four distinct positive integers with median 10.

**What Is Asked**

Find the smallest possible sum of the four numbers.

**Formula / Concept Used**

- For four numbers in increasing order w < x < y < z, the median is the average of the two middle numbers: (x + y)/2 = 10 ⇒ x + y = 20.

**Step‑by‑Step Solution**

1. To minimise the sum w + x + y + z with fixed x + y = 20, choose w as small as possible and z just large enough to remain distinct.  
2. The smallest positive integer for w is 1.  
3. x and y should be two distinct integers summing to 20 and as close together as possible (to leave room for a small z).  The closest pair is 9 and 11 (average 10).  
4. Then z must be distinct and greater than y.  The smallest value greater than 11 is 12.  
5. The sum is 1 + 9 + 11 + 12 = 33.
6. Compare 33 (Quantity A) with 32 (Quantity B).  Since 33 > 32, Quantity A is greater.

**Shortcut / GRE Strategy**

For an even‑sized set with a fixed median, keep the middle numbers at the required average and push the extremes as low and as close as possible to minimise the sum.

**Common Trap**

Attempting to use 8 and 12 for x and y (which sum to 20) gives a larger z or mis‑orders the numbers.  The pair 9 and 11 is the closest to 10.

**Final Answer**

Quantity A is greater.

**Confidence**

high

#### Question 08

**Source**

- Source page: `page_166.jpg`
- Chapter: 8 — Mathematics Review Practice
- Topic: median from a data set

**Prompt**

> For each of the first 11 months of last year, the bar graph shows the total number of transactions processed in a bank account.  December had more transactions than any other month.  Compare the median monthly number of transactions (Quantity A) with 26 (Quantity B).

**Choices**

- A. Quantity A is greater  
- B. Quantity B is greater  
- C. The two quantities are equal  
- D. The relationship cannot be determined

**Correct Answer**

B

**Given Information**

- The bar graph lists the monthly transaction counts for January through November.  Approximate values (reading the bar labels) are {23, 27, 33, 28, 21, 19, 25, 25, 22, 29, 37}.  
- December’s count is larger than any of the other months, so it will be the largest value when included.

**What Is Asked**

Compute the median of all 12 monthly transaction values (including December) and compare it to 26.

**Formula / Concept Used**

- Arrange the monthly transaction counts in ascending order and find the median (average of the 6th and 7th values for 12 numbers).

**Step‑by‑Step Solution**
1. Note the 11 reported values: 23, 27, 33, 28, 21, 19, 25, 25, 22, 29 and 37.  The December value is greater than 37.
2. When December is included, we have 12 numbers.  Arrange them in ascending order: 19, 21, 22, 23, 25, 25, 27, 28, 29, 33, 37, (December).
3. Because there are 12 numbers, the median is the average of the 6th and 7th numbers.  The 6th number is 25 and the 7th number is 27.
4. Compute the median: (25 + 27)/2 = 26.
5. Since the median (Quantity A) is 26 and Quantity B is also 26, the two quantities are equal.  The correct choice is C.

**Shortcut / GRE Strategy**

Adding an outlier (December) to an even number of observations affects the median only if it changes which two values lie in the middle.  Check the sorted list: the middle two values come from the existing months, so you can quickly compute the median without needing the exact December value.

**Common Trap**

Misreading the bar values or assuming there are more than 11 months shown can lead to an incorrect set of numbers.  Another common mistake is to ignore that the median of an even number of values is the average of the two middle numbers.

**Final Answer**

The two quantities are equal.

**Confidence**

high  
*Reasoning:* Once the 11 values are correctly interpreted and sorted and the median of the 12‑value set is computed, it is clear that the median is exactly 26.  December’s outlier does not change the middle values, so the comparison is definitive.

### Multiple‑Choice (Select One Answer)

#### Question 09

**Source**

- Source page: `page_167.jpg`
- Chapter: 8 — Mathematics Review Practice
- Topic: probability

**Prompt**

> Out of 750 participants at a professional meeting, 450 are female.  Half of the female participants and one quarter of the male participants are younger than 30.  If a participant is selected at random to receive a prize, what is the probability that the person selected is younger than 30?

**Choices**

- A. 1/8  
- B. 1/3  
- C. 3/8  
- D. 2/5  
- E. 3/4

**Correct Answer**

D

**Given Information**

- Total participants: 750.  
- Females: 450; males: 300.  
- Half of the females (225) are < 30; one quarter of the males (75) are < 30.

**What Is Asked**

Compute the probability that a randomly selected participant is < 30.

**Formula / Concept Used**

- Probability = (number of favourable outcomes)/(total number of outcomes).

**Step‑by‑Step Solution**

1. Calculate the number of participants < 30:  
   • Females < 30 = 450 × ½ = 225.  
   • Males < 30 = 300 × ¼ = 75.  
   • Total < 30 = 225 + 75 = 300.
2. Probability = 300 ÷ 750 = 3 ÷ 7.5 = 0.4 = 2/5.

**Shortcut / GRE Strategy**

Convert “half” and “one quarter” into numbers before adding.  Always reduce the fraction to simplest form.

**Common Trap**

Dividing by the wrong total or forgetting to sum the favourable cases (females + males).  Do not confuse “half of the females are under 30” with “half of all participants.”

**Final Answer**

2/5

**Confidence**

high

#### Question 10

**Source**

- Source page: `page_167.jpg`
- Chapter: 8 — Mathematics Review Practice
- Topic: combinations

**Prompt**

> On Random Omelet Monday, a chef creates omelets by randomly choosing either two or three fillings out of six available fillings.  How many different omelets can the chef possibly make?

**Choices**

- A. 6  
- B. 15  
- C. 20  
- D. 30  
- E. 35

**Correct Answer**

E

**Given Information**

- Six fillings are available.  The chef may choose 2 or 3 fillings at a time.  Order does not matter for an omelet.

**What Is Asked**

Find the total number of ways to choose 2 or 3 fillings from 6.

**Formula / Concept Used**

- Combinations: C(n, k) = n!/(k!(n – k)!).  
- When two different selection sizes are allowed, compute both and add.

**Step‑by‑Step Solution**

1. Number of ways to choose 2 fillings out of 6: C(6, 2) = 6!/(2! 4!) = (6×5)/(2×1) = 15.  
2. Number of ways to choose 3 fillings out of 6: C(6, 3) = 6!/(3! 3!) = (6×5×4)/(3×2×1) = 20.  
3. Total possible omelets = 15 + 20 = 35.

**Shortcut / GRE Strategy**

Use the symmetry property C(n, k) = C(n, n – k) to recognise that C(6, 3) = C(6, 3), but still compute directly.

**Common Trap**

Using permutations instead of combinations or forgetting to add the two cases yields an incorrect total.

**Final Answer**

35

**Confidence**

high

#### Question 11

**Source**

- Source page: `page_167.jpg`
- Chapter: 8 — Mathematics Review Practice
- Topic: standard deviation shifts

**Prompt**

> If the standard deviation of the three numbers in the list x, 11, 12 is 4, what is the standard deviation of x + 9, 20, 21?

**Choices**

- A. 4  
- B. 13  
- C. 31  
- D. 36  
- E. 108

**Correct Answer**

A

**Given Information**

- List 1: {x, 11, 12} has standard deviation 4.  
- List 2 is obtained by adding 9 to each element of List 1: {x + 9, 20, 21}.

**What Is Asked**

Find the standard deviation of List 2.

**Formula / Concept Used**

- Adding (or subtracting) a constant to all elements of a data set shifts the mean but does not change the standard deviation.

**Step‑by‑Step Solution**

1. Since the second list is obtained by adding 9 to each element of the first list, each deviation from the mean is unchanged in magnitude.  
2. Therefore the standard deviation remains the same: 4.

**Shortcut / GRE Strategy**

Remember the property: Standard deviation measures spread; shifting all values by the same constant does not change that spread.

**Common Trap**

Multiplying by a constant would change the standard deviation; adding a constant does not.  Some might mistakenly think the standard deviation also shifts.

**Final Answer**

4

**Confidence**

high

#### Question 12

**Source**

- Source page: `page_168.jpg`
- Chapter: 8 — Mathematics Review Practice
- Topic: averages

**Prompt**

> The average grade of 17 students who took a mathematics test is 64.  If one more student takes the test, what score must this student get to raise the class average to 65?

**Choices**

- A. 66  
- B. 75  
- C. 82  
- D. 92  
- E. 100

**Correct Answer**

C

**Given Information**

- 17 students with average score 64 → total points = 17 × 64 = 1 088.  
- After adding one student, there will be 18 students with a desired average of 65 → total points must be 18 × 65 = 1 170.

**What Is Asked**

Find the required score of the new student.

**Formula / Concept Used**

- Average = total ÷ count.  Use totals to find missing values.

**Step‑by‑Step Solution**

1. Current total points = 1 088.  
2. Desired new total = 1 170.  
3. Score needed by new student = 1 170 – 1 088 = 82.

**Shortcut / GRE Strategy**

Use the formula new total – old total = contribution of the extra student.  Multiply the desired average by the new number of students first.

**Common Trap**

Forgetting to multiply the desired average by the new student count or miscalculating the existing total leads to wrong results.

**Final Answer**

82

**Confidence**

high

#### Question 13

**Source**

- Source page: `page_168.jpg`
- Chapter: 8 — Mathematics Review Practice
- Topic: divisibility and probability

**Prompt**

> A die is rolled twice and the results are noted as a and b.  What is the probability that a is divisible by b?

**Choices**

- A. 7/18  
- B. 4/9  
- C. 1/2  
- D. 5/9  
- E. 11/18

**Correct Answer**

A

**Given Information**

- There are 6 possible outcomes for each roll → 36 ordered pairs (a, b).  
- We count the pairs where a is divisible by b.

**What Is Asked**

Calculate P(a divisible by b).

**Formula / Concept Used**

- Counting favourable outcomes among equally likely cases.  
- Divisibility conditions.

**Step‑by‑Step Solution**

1. For each value of b from 1 to 6, count the values of a in {1, 2, 3, 4, 5, 6} that are divisible by b.  
   • b = 1: a can be 1–6 (6 cases).  
   • b = 2: a can be 2, 4, 6 (3 cases).  
   • b = 3: a can be 3, 6 (2 cases).  
   • b = 4: a can be 4 (1 case).  
   • b = 5: a can be 5 (1 case).  
   • b = 6: a can be 6 (1 case).  
2. Total favourable pairs = 6 + 3 + 2 + 1 + 1 + 1 = 14.  
3. Probability = 14 ÷ 36 = 7 ÷ 18.

**Shortcut / GRE Strategy**

Organise the counting by fixing the divisor (b) and listing the multiples of b within 1–6.

**Common Trap**

Forgetting to count b = 1 cases or double‑counting pairs.  Always include all possible divisors.

**Final Answer**

7/18

**Confidence**

high

#### Question 14

**Source**

- Source page: `page_168.jpg`
- Chapter: 8 — Mathematics Review Practice
- Topic: mean and median

**Prompt**

> The table below shows the number of siblings for each of 12 preschoolers in a class: 3 have 0 siblings, 6 have 1 sibling, 2 have 2 siblings and 1 has 3 siblings.  A new student joins the class, and after this student joins, the average number of siblings per student equals the median number of siblings per student.  How many siblings does the new student have?

**Choices**

- A. 0  
- B. 1  
- C. 2  
- D. 3  
- E. 4

**Correct Answer**

A

**Given Information**

- Current sibling counts: 0,0,0,1,1,1,1,1,1,2,2,3.  
- Median of the current 12 numbers is the average of the 6th and 7th numbers (both 1), so the median = 1.  
- Mean = total number of siblings ÷ 12 = (0×3 + 1×6 + 2×2 + 3×1)/12 = (0 + 6 + 4 + 3)/12 = 13/12 ≈ 1.083.

**What Is Asked**

Find the number k of siblings for the new student such that the new mean equals the new median.

**Formula / Concept Used**

- Median of 13 values is the 7th value when arranged in order.  
- New mean = (total + k)/13.

**Step‑by‑Step Solution**

1. After adding the new student, there are 13 students.  The median will be the 7th number in the ordered list.  
2. The current ordered list is: 0,0,0,1,1,1,1,1,1,2,2,3.  The 7th value is 1.  To keep the median at 1, the new student’s value must not shift the 7th position above 1.
3. If the new student has 0 siblings, the new list is 0,0,0,0,1,1,1,1,1,1,2,2,3.  The 7th value remains 1.  
4. If the new student has 1 sibling or more, the ordered list will have at least six numbers less than or equal to 1, so the 7th value is still 1.  Thus the new median remains 1 for k ≤ 1.
5. Compute the new mean for k = 0: new total = 13 + 0 = 13; new mean = 13/13 = 1.  This matches the median of 1.
6. For k = 1: new total = 13 + 1 = 14; new mean = 14/13 ≈ 1.077, which is slightly greater than 1.  Because the median remains 1, the mean would exceed the median.  
7. For k ≥ 2: the new mean increases further above 1.  
8. Therefore k must be 0 to make the new mean equal the median.

**Shortcut / GRE Strategy**

Identify the desired value for both mean and median (1).  Only the case k = 0 yields mean = 1.

**Common Trap**

Forgetting that the median of 13 numbers is the 7th value.  Also, miscalculating the new mean.

**Final Answer**

0

**Confidence**

high

### Multiple‑Select (Select One or More Answers)

#### Question 15

**Source**

- Source page: `page_169.jpg`
- Chapter: 8 — Mathematics Review Practice
- Topic: statistical measures and outliers

**Prompt**

> A table lists the lengths, to the nearest inch, of a random sample of 21 fish.  The measurement of 24 inches is an error and is removed from the data.  Which of the following statistical characteristics will change when this outlier is removed?  Indicate all such characteristics.

**Choices**

- A. The mean  
- B. The median  
- C. The standard deviation  
- D. The range

**Correct Answer**

A, C and D (mean, standard deviation and range change)

**Given Information**

- The data set contains 21 measurements including one outlier (24 inches).  The remaining 20 measurements range from 8 to 16 inches.  
- Removing the 24‑inch measurement affects the total, variance and extremes.

**What Is Asked**

Identify which statistics change when the outlier is removed.

**Formula / Concept Used**

- Mean = sum/number.  Standard deviation measures spread around the mean.  Range = max – min.  The median is the middle value (or average of middle values) when data are ordered.

**Step‑by‑Step Solution**

1. Mean: Removing a large value decreases the sum and the number of observations, so the mean decreases.  The mean definitely changes.  
2. Median: With 21 observations, the median is the 11th value.  Removing one outlier (largest value) leaves 20 values; the median is now the average of the 10th and 11th values.  In this data set, the outlier is beyond the 20th position, so the middle values remain 12 in both cases.  The median does not change.  
3. Standard deviation: Removing an extreme outlier reduces the spread, so the standard deviation decreases.  It changes.  
4. Range: Original range = 24 – 8 = 16.  New range = 16 – 8 = 8.  The range changes.

**Shortcut / GRE Strategy**

Identify the statistic that depends on all values (mean, standard deviation and range) vs. the statistic that depends only on the middle value(s) (median).  Removing an outlier affects the former but not the latter.

**Common Trap**

Assuming the median might shift due to removal of a data point.  Check the positions of the middle values before concluding.

**Final Answer**

Mean, standard deviation and range (A, C and D)

**Confidence**

high

#### Question 16

**Source**

- Source page: `page_169.jpg`
- Chapter: 8 — Mathematics Review Practice
- Topic: ordered lists and range

**Prompt**

> The six numbers 3.7, 4.1, a, 8.5, 9.2 and 2a are listed in increasing order.  Which of the following could be the range of the six numbers?  Indicate all such values.

**Choices**

- A. 4.0  
- B. 5.2  
- C. 7.3  
- D. 11.6  
- E. 12.9  
- F. 14.1

**Correct Answer**

7.3, 11.6 and 12.9 (choices C, D and E)

**Given Information**

- The numbers are in increasing order: 3.7, 4.1, a, 8.5, 9.2, 2a.  
- This ordering imposes constraints on a.

**What Is Asked**

Find which ranges (largest minus smallest value) can occur given the ordering.

**Formula / Concept Used**

- Because 3.7 is the smallest and 2a is the largest, the range = 2a – 3.7.  
- The conditions from the ordering: 4.1 ≤ a ≤ 8.5 and 9.2 ≤ 2a.

**Step‑by‑Step Solution**

1. From 9.2 ≤ 2a, divide by 2: 4.6 ≤ a.  Combine with a ≤ 8.5 (since a is less than 8.5) to get 4.6 ≤ a ≤ 8.5.
2. Compute the range expression r = 2a – 3.7.  Substitute the bounds:  
   • Minimum r occurs at a = 4.6 ⇒ r = 2(4.6) – 3.7 = 9.2 – 3.7 = 5.5.  
   • Maximum r occurs at a = 8.5 ⇒ r = 17.0 – 3.7 = 13.3.  
   • Therefore the range can be any value between 5.5 and 13.3 inclusive, depending on the value of a.
3. Check the answer choices:  
   • 4.0 and 5.2 are below 5.5 ⇒ impossible.  
   • 7.3 is within 5.5–13.3 ⇒ possible.  
   • 11.6 is within ⇒ possible.  
   • 12.9 is within ⇒ possible.  
   • 14.1 is above 13.3 ⇒ impossible.

**Shortcut / GRE Strategy**

Convert the ordering conditions into inequalities to bound a.  Compute the range at the extremes to obtain a range of possible range values.  Then check each answer option.

**Common Trap**

Ignoring the 9.2 ≤ 2a condition or failing to apply both constraints when deriving bounds for a will produce an incorrect interval for the range.

**Final Answer**

7.3, 11.6 and 12.9

**Confidence**

high

#### Question 17

**Source**

- Source page: `page_169.jpg`
- Chapter: 8 — Mathematics Review Practice
- Topic: set sizes and overlaps

**Prompt**

> Set A has 50 members and set B has 53 members.  At least 2 of the members in set A are not in set B.  Which of the following could be the number of members in set B that are not in set A?  Indicate all such numbers.

**Choices**

- A. 3  
- B. 5  
- C. 50  
- D. 53

**Correct Answer**

5, 50 and 53 (choices B, C and D)

**Given Information**

- |A| = 50 and |B| = 53.  
- Let x be the number of common elements in A and B.  
- At least two members of A are not in B ⇒ |A \ B| ≥ 2 ⇒ 50 – x ≥ 2 ⇒ x ≤ 48.

**What Is Asked**

Find possible values for |B \ A| = |B| – x = 53 – x.

**Formula / Concept Used**

- The number of elements in B not in A equals the size of B minus the size of the intersection.

**Step‑by‑Step Solution**

1. From |A \ B| = 50 – x ≥ 2, we know x ≤ 48.  
2. Compute |B \ A| = 53 – x.  Since x can range from 0 up to 48, |B \ A| can range from 53 – 0 = 53 down to 53 – 48 = 5.  
3. Every integer between 5 and 53 (inclusive) is possible.  
4. Among the answer choices, the possible values are 5, 50 and 53.  
5. 3 is not possible because the minimum is 5.

**Shortcut / GRE Strategy**

Use the formula for set differences and the given constraint to derive a range.  Check which answer choices lie in that range.

**Common Trap**

Assuming the sets must be disjoint or must overlap by a fixed number.  Always express the unknown overlap in terms of given quantities and constraints.

**Final Answer**

5, 50 and 53

**Confidence**

high

### Numeric Entry

#### Question 18

**Source**

- Source page: `page_170.jpg`
- Chapter: 8 — Mathematics Review Practice
- Topic: weighted averages

**Prompt**

> A list of 42 numbers has an average (arithmetic mean) of 110.  A second list of 58 numbers has an average of 150.  What is the average of the 100 numbers in the two lists combined?

**Answer**

133.2

**Given Information**

- List 1: 42 numbers with average 110 ⇒ sum of list 1 = 42 × 110 = 4 620.  
- List 2: 58 numbers with average 150 ⇒ sum of list 2 = 58 × 150 = 8 700.

**What Is Asked**

Find the average of the combined 100 numbers.

**Formula / Concept Used**

- Combined average = (sum of all values)/(total number of values).

**Step‑by‑Step Solution**

1. Total sum = 4 620 + 8 700 = 13 320.  
2. Total number of numbers = 42 + 58 = 100.  
3. Combined average = 13 320 ÷ 100 = 133.2.

**Shortcut / GRE Strategy**

Multiply each average by its count to get totals, then divide their sum by the total count.

**Common Trap**

Adding the averages and dividing by 2 (which would give 130) is incorrect because the lists have different sizes.

**Final Answer**

133.2

**Confidence**

high

#### Question 19

**Source**

- Source page: `page_170.jpg`
- Chapter: 8 — Mathematics Review Practice
- Topic: frequency tables

**Prompt**

> A table shows the number of cars owned by a random sample of 900 families.  It lists the number of families owning at least 1 car (900), at least 2 cars (610), at least 3 cars (250) and more than 3 cars (75).  How many families own exactly 2 cars?

**Answer**

360

**Given Information**

- At least 1 car: 900 families.  
- At least 2 cars: 610 families.  
- At least 3 cars: 250 families.  
- More than 3 cars (4 or more): 75 families.

**What Is Asked**

Find the number of families owning exactly 2 cars.

**Formula / Concept Used**

- Families owning exactly k cars = families owning at least k cars minus families owning at least (k + 1) cars.

**Step‑by‑Step Solution**

1. Families owning at least 1 car = 900.  
2. Families owning at least 2 cars = 610.  
3. Families owning at least 3 cars = 250.  
4. Families owning more than 3 cars (i.e., at least 4 cars) = 75.  
5. Families owning exactly 3 cars = (families owning at least 3 cars) – (families owning at least 4 cars) = 250 – 75 = 175.  
6. Families owning exactly 2 cars = (families owning at least 2 cars) – (families owning at least 3 cars) = 610 – 250 = 360.

**Shortcut / GRE Strategy**

Subtract cumulative counts to move from “at least” to “exact” categories.

**Common Trap**

Interpreting “more than 3 cars” as exactly 3, rather than 4 or more, may cause miscalculations.

**Final Answer**

360

**Confidence**

high

#### Question 20

**Source**

- Source page: `page_170.jpg`
- Chapter: 8 — Mathematics Review Practice
- Topic: consecutive integers and averages

**Prompt**

> In an increasing sequence of 10 consecutive integers, the average of the first five integers is 167.  What is the average of the last five integers?

**Answer**

172

**Given Information**

- The sequence consists of 10 consecutive integers: n, n + 1, …, n + 9.  
- Average of the first five integers (n through n + 4) is 167.

**What Is Asked**

Find the average of the last five integers (n + 5 through n + 9).

**Formula / Concept Used**

- Average of consecutive integers = middle value (for odd counts) or average of middle pair (for even counts).  
- In a sequence of consecutive integers, shifting by k adds k to the average.

**Step‑by‑Step Solution**

1. The first five integers are n, n + 1, n + 2, n + 3, n + 4.  Their average is n + 2.  According to the problem, n + 2 = 167 ⇒ n = 165.
2. The last five integers are n + 5 through n + 9.  The average of these five numbers is the middle value, (n + 7).  
3. Substitute n = 165: n + 7 = 165 + 7 = 172.  
4. Therefore the average of the last five integers is 172.

**Shortcut / GRE Strategy**

Use the property that the average of consecutive integers is the midpoint.  Once you determine the first term n, you can find any other average by adding the appropriate offset.

**Common Trap**

Calculating the sum manually instead of using the midpoint formula may lead to arithmetic errors.

**Final Answer**

172

**Confidence**

high
