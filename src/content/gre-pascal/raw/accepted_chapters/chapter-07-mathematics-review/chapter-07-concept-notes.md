# Chapter 7 Concept Notes

These notes consolidate the key definitions and explanations from Chapter 7.  They expand upon the raw extraction by grouping related concepts and clarifying their meaning.

## Algebra and Arithmetic

- **Number systems** – The real numbers consist of rational numbers (fractions and integers) and irrational numbers (such as √2 and π).  Whole numbers (0, 1, 2, …) and integers (…, –2, –1, 0, 1, 2, …) are subsets of the real numbers.  Natural numbers are the positive integers.  All real numbers can be located on the number line.
- **Prime numbers** – A prime is an integer greater than 1 that has exactly two positive divisors: 1 and itself.  The number 1 is **not** considered prime.  Composite numbers have additional divisors.  Every integer greater than 1 can be written uniquely (up to order) as a product of primes.
- **Divisibility rules** – An integer is divisible by:
  - **2** if its last digit is even.
  - **3** if the sum of its digits is divisible by 3.
  - **4** if its last two digits form a number divisible by 4.
  - **5** if its last digit is 0 or 5.
  - **6** if it is divisible by both 2 and 3.
  - **9** if the sum of its digits is divisible by 9.
- **Greatest common divisor (gcd)** and **least common multiple (lcm)** – The gcd of two integers is the largest positive integer that divides both numbers.  The lcm is the smallest positive integer that is a multiple of both numbers.  For two positive integers a and b, one can find the gcd by prime factorisation or by the Euclidean algorithm, and compute lcm using the relation lcm(a, b) = a·b ÷ gcd(a, b).
- **Special products** – Useful algebraic identities include:
  - Difference of squares: a² – b² = (a + b)(a – b).
  - Square of a sum: (a + b)² = a² + 2ab + b².
  - Square of a difference: (a – b)² = a² – 2ab + b².
- **Exponents** – The laws of exponents allow simplification of expressions with the same base.  For real numbers x ≠ 0 and integers a and b:
  - x^a × x^b = x^(a + b).
  - (x^a)^b = x^(a·b).
  - x^a ÷ x^b = x^(a – b).
  - x^0 = 1.
  - x^(–a) = 1 ÷ x^a.
  - x^(1/n) is the nth root of x.
- **Absolute value** – The absolute value |x| represents the distance of x from 0 on the number line.  By definition, |x| = x if x ≥ 0 and |x| = –x if x < 0.  The absolute value is always non‑negative, and |xy| = |x|·|y|.
- **Order of operations** – To evaluate numerical expressions, follow the conventional order: first perform operations inside parentheses, then exponents, followed by multiplication and division (from left to right), and finally addition and subtraction (from left to right).

## Geometry

- **Angles** – An acute angle measures less than 90 degrees; a right angle measures exactly 90 degrees; an obtuse angle is between 90 and 180 degrees; and a straight angle is 180 degrees.  Complementary angles sum to 90 degrees; supplementary angles sum to 180 degrees.
- **Triangles** – The sum of the interior angles of any triangle is 180 degrees.  An equilateral triangle has three equal sides and three 60‑degree angles.  An isosceles triangle has two equal sides and two equal base angles.  A right triangle has one 90‑degree angle.  In any triangle, an exterior angle equals the sum of the two remote interior angles.
- **Pythagorean theorem** – In a right triangle with legs of lengths a and b and hypotenuse c, we have a² + b² = c².  Certain integer triples (3, 4, 5 and 5, 12, 13) satisfy this relationship.
- **Special right triangles** – A 45‑45‑90 triangle has sides in the ratio 1 : 1 : sqrt(2).  A 30‑60‑90 triangle has sides in the ratio 1 : sqrt(3) : 2 (opposite 30°, 60° and 90° respectively).
- **Quadrilaterals** – A parallelogram has opposite sides parallel and equal in length; opposite angles are equal.  A rectangle is a parallelogram with right angles.  A rhombus is a parallelogram with all four sides equal.  A square is both a rectangle and a rhombus.  A trapezoid has exactly one pair of parallel sides.  The sum of the interior angles of any quadrilateral is 360 degrees.
- **Polygons** – A polygon with n sides has an interior angle sum of (n – 2)·180 degrees.  A regular polygon has all sides and all angles equal.
- **Circles** – The circumference of a circle is 2·π·r and its area is π·r², where r is the radius.  A diameter is twice the radius.  An arc is a portion of the circumference; the length of an arc corresponding to a central angle θ (measured in degrees) is (θ / 360) × 2·π·r, and the area of the sector is (θ / 360) × π·r².
- **Solids** – Volume formulas include: rectangular prism (length·width·height); cylinder (π·r²·h); sphere (4/3·π·r³); cone (1/3·π·r²·h); pyramid (1/3·base area·height).  The surface area of a prism is the sum of the areas of its faces; that of a cylinder is 2·π·r·h plus 2·π·r².
- **Coordinate geometry** – On the Cartesian plane, a point is represented by (x, y).  The distance between two points (x₁, y₁) and (x₂, y₂) is sqrt((x₂ – x₁)² + (y₂ – y₁)²).  The midpoint of the segment connecting these points is ((x₁ + x₂)/2, (y₁ + y₂)/2).  A line with slope m passing through (0, b) has equation y = m·x + b.  Parallel lines have equal slopes; perpendicular lines have slopes whose product is –1.

## Data Analysis

- **Mean, median and mode** – The mean (average) of n numbers is the sum of the numbers divided by n.  The median is the middle value when the numbers are ordered (or the average of the two middle values when n is even).  The mode is the number that appears most frequently; a data set may have one mode, more than one, or none at all.  The range is the difference between the largest and smallest values.
- **Standard deviation** – A measure of dispersion indicating how far numbers in a set are from the mean.  A larger standard deviation means the data are more spread out.  For a population of n numbers x₁, …, x_n with mean μ, the variance is (1/n)·Σ(x_i − μ)² and the standard deviation is the square root of the variance.
- **Normal distribution** – A symmetric bell‑shaped distribution centred at the mean.  For normally distributed data, approximately 68 % of the observations lie within one standard deviation of the mean, 95 % within two standard deviations and 99.7 % within three standard deviations.
- **Counting principles** – If one event can occur in m ways and another in n ways, the two events together can occur in m·n ways (when the events are independent).  The number of permutations of n distinct objects is n!.  The number of ways to choose k objects from n without regard to order is “n choose k”, calculated as n! ÷ (k!·(n − k)!).
- **Probability** – The probability of an event is the ratio of favourable outcomes to total equally likely outcomes.  For mutually exclusive events A and B, P(A or B) = P(A) + P(B).  The complement of an event A consists of outcomes not in A and has probability 1 − P(A).

## Measurement and Currency

- **Length and area** – One foot equals 12 inches; one yard equals 3 feet; one mile equals 5,280 feet.  One square foot equals 144 square inches; one square yard equals 9 square feet.
- **Volume** – One cubic foot equals 1,728 cubic inches.  One gallon equals 4 quarts, which equals 8 pints or 128 fluid ounces.
- **Weight** – One pound equals 16 ounces.  One ton equals 2,000 pounds.
- **Time** – One hour equals 60 minutes.  One day equals 24 hours.  One year is approximately 365 days (ignoring leap years).
- **U.S. currency** – Coins: penny (1 cent), nickel (5 cents), dime (10 cents), quarter (25 cents), half‑dollar (50 cents).  Bills: $1, $5, $10, $20, $50 and $100.  One dollar equals 100 cents.

These notes present the essential content of Chapter 7 in a structured form suitable for reference and study.