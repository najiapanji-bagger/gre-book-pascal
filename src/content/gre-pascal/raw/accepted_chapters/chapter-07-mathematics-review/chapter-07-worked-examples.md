# Chapter 7 Worked Examples

The following examples illustrate how to apply the formulas from Chapter 7.  **These problems are not drawn from the textbook; they have been added by the curator as illustrative examples.**  Each problem is accompanied by a step‑by‑step solution and a brief commentary on the reasoning process.  When preparing materials for publication or study, users should clearly distinguish these **added examples** from examples that appear in the original book.

## Example 1 – Greatest common divisor and least common multiple

**Problem:** Find the greatest common divisor (gcd) and least common multiple (lcm) of 24 and 60.

**Solution:**

1. Factor each number into primes: \(24 = 2^3 \cdot 3\) and \(60 = 2^2 \cdot 3 \cdot 5\).
2. For the gcd, take the lowest power of each prime that appears in both numbers: \(2^2 \cdot 3 = 12\).  Thus \(\gcd(24,60) = 12\).
3. For the lcm, take the highest power of each prime: \(2^3 \cdot 3 \cdot 5 = 120\).  Hence \(\operatorname{lcm}(24,60) = 120\).
4. As a check, note that \(\gcd \times \operatorname{lcm} = 12 \times 120 = 1440 = 24 \times 60\), confirming the result.

**Commentary:** Prime factorisation provides a systematic way to compute gcd and lcm.  On the GRE, recognising that common prime factors determine the gcd can save time when comparing numerical expressions.

## Example 2 – Simplifying exponents

**Problem:** Simplify the expression
\[
\frac{3^4 \cdot 3^{-2}}{3^3}.
\]

**Solution:**

1. Use the law \(x^a \cdot x^b = x^{a+b}\) to combine the numerator: \(3^4 \cdot 3^{-2} = 3^{4+(-2)} = 3^2\).
2. Apply \(\dfrac{x^a}{x^b} = x^{a-b}\) to divide by \(3^3\): \(\dfrac{3^2}{3^3} = 3^{2-3} = 3^{-1}\).
3. A negative exponent means a reciprocal, so \(3^{-1} = 1/3\).

**Answer:** \(\tfrac{1}{3}\).

**Commentary:** Combining exponents first reduces the expression to a single term before applying the quotient rule.  Remember that a negative exponent represents the reciprocal of the base raised to the corresponding positive power.

## Example 3 – Geometry: areas and lengths

**Problem (a):** A triangle has a base of 6 units and a height of 4 units.  What is its area?

**Solution (a):** The area of a triangle is given by \(A = \tfrac{1}{2}\times\text{base}\times\text{height}\).  Substituting the values gives \(A = \tfrac{1}{2} \times 6 \times 4 = 12\) square units.

**Problem (b):** A right triangle has legs of lengths 9 and 12 units.  Find the length of the hypotenuse.

**Solution (b):** Apply the Pythagorean theorem: \(c^2 = 9^2 + 12^2 = 81 + 144 = 225\).  Taking the square root gives \(c = 15\).  Thus the hypotenuse is 15 units long.

**Commentary:** For area calculations, substitute directly into the formula.  For lengths in right triangles, recognise common Pythagorean triples (3–4–5, 5–12–13, 8–15–17, etc.) to expedite solutions.

## Example 4 – Counting permutations and combinations

**Problem:** From a set of 5 distinct books, how many ways can you arrange 3 books on a shelf?  How many ways can you choose 3 books to take on a trip if order does not matter?

**Solution:**

1. **Permutations:** To arrange 3 books out of 5, use \(P(5,3) = \dfrac{5!}{(5-3)!} = \dfrac{5\cdot4\cdot3\cdot2\cdot1}{2!} = 60\).  Thus there are 60 different ordered arrangements.
2. **Combinations:** To choose 3 books without regard to order, use \(C(5,3) = \dfrac{5!}{3!\cdot2!} = 10\).  There are 10 ways to choose the books when order does not matter.

**Commentary:** Recognising whether order matters is crucial.  Permutations count distinct arrangements, while combinations count selections.  On the GRE, these formulas often appear in probability and counting questions.

## Example 5 – Probability with mutually exclusive events

**Problem:** A fair six‑sided die is rolled.  What is the probability of rolling an odd number or a 4?

**Solution:**

1. The odd numbers on a die are 1, 3 and 5—three outcomes.  Rolling a 4 is one outcome.  The events “roll an odd number” and “roll a 4” are mutually exclusive (they cannot both occur on the same roll).
2. The probability of rolling an odd number is \(3/6 = 1/2\).  The probability of rolling a 4 is \(1/6\).
3. Since the events are mutually exclusive, add their probabilities: \(P(\text{odd or 4}) = 1/2 + 1/6 = 2/3\).

**Answer:** \(\tfrac{2}{3}\).

**Commentary:** Whenever events cannot occur together, use the addition rule \(P(A\cup B) = P(A) + P(B)\).  Checking whether events overlap prevents double‑counting outcomes.

## Example 6 – Unit conversions

**Problem (a):** Convert 2.5 miles to feet.

**Solution (a):** There are 5,280 feet in a mile.  Therefore 2.5 miles × 5,280 ft/mile = 13,200 feet.

**Problem (b):** Convert 48 ounces to pounds.

**Solution (b):** There are 16 ounces in a pound.  Dividing yields 48 oz ÷ 16 oz/lb = 3 pounds.

**Commentary:** Set up conversion factors so units cancel.  Multiplying or dividing by the appropriate ratio produces the desired units.

These examples demonstrate typical applications of Chapter 7 formulas.  They emphasise step‑by‑step reasoning and highlight where to watch for common GRE tricks, such as recognising when order matters or recalling key numeric relationships.
