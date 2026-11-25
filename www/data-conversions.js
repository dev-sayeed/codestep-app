const COURSE_CONVERSIONS = {
  title: "Conversions",
  badge: "01⇄F",
  bg: "#CCFBF1",
  color: "#0F766E",
  desc: "Step-by-step visual guide to Binary, Decimal, Hexadecimal & Octal conversions.",
  noTheme: true,
  modules: [
    {
      title: "Binary ⇄ Decimal (Base 2 & Base 10)",
      tasks: [
        {
          title: "How Computers Count with 0 and 1",
          slides: [
            {
              title: "Slide 1: Why Computers Use Binary",
              concept: "Binary (Base-2): A number system that uses ONLY two digits: 0 and 1. Regular human numbers (0 to 9) are called Decimal (Base-10).",
              explain: "Inside a phone or computer, millions of tiny switches can only be OFF (0) or ON (1). To represent bigger numbers, computers line switches up side-by-side.",
              analogy: "Think of 0 as a turned-off bulb and 1 as a glowing bulb.",
              example: "Decimal 0  =  0 (Switch OFF)\nDecimal 1  =  1 (Switch ON)"
            },
            {
              title: "Slide 2: The Doubling Box Rule (2 and 1)",
              concept: "Place Weight: Each switch box has a fixed point value. Starting from the right, the first box is worth 1, and the second box is worth 2.",
              explain: "To convert Binary to Decimal: look at which boxes have a '1' (ON) and add their values together. Ignore any box with a '0' (OFF).",
              analogy: "Like having a ₹2 coin on the left and a ₹1 coin on the right. Only count the coins flipped heads-up (1)!",
              example: "Box Values:   [ 2 ]   [ 1 ]\nBinary 10:      1       0    →  2 + 0 = 2\nBinary 11:      1       1    →  2 + 1 = 3"
            }
          ],
          prompt: "Convert Binary 10 into Decimal.",
          clue: "The left box (worth 2) is 1 (ON), and the right box (worth 1) is 0 (OFF). Add 2 + 0.",
          match: "^2$"
        },
        {
          title: "Adding a 3rd Box (Worth 4)",
          slides: [
            {
              title: "Slide 1: Every Step Left Doubles!",
              concept: "Doubling Pattern: As you add more boxes to the left, each box's value doubles: 1 → 2 → 4.",
              explain: "So for any 3-digit binary number, write 4, 2, 1 directly above the three digits.",
              analogy: "Imagine 3 buckets labeled 4, 2, and 1 from left to right.",
              example: "Box Values:   [ 4 ]   [ 2 ]   [ 1 ]\nBinary 100:     1       0       0   →  4 + 0 + 0 = 4"
            },
            {
              title: "Slide 2: Adding Multiple ON Boxes",
              concept: "Sum the ON Weights: Wherever you see a 1, circle the number above it and add those circled numbers.",
              explain: "Let's convert Binary 101: the '4' box has 1, the '2' box has 0 (skip), and the '1' box has 1. So 4 + 1 = 5!",
              analogy: "4 + 0 + 1 = 5.",
              example: "Box Values:   [ 4 ]   [ 2 ]   [ 1 ]\nBinary 101:     1       0       1   →  4 + 1 = 5\nBinary 110:     1       1       0   →  4 + 2 = 6"
            }
          ],
          prompt: "Convert Binary 111 into Decimal.",
          clue: "All three boxes [4], [2], and [1] have a 1. Add 4 + 2 + 1.",
          match: "^7$"
        },
        {
          title: "4-Bit Binary (The 8-4-2-1 Cheat Code)",
          slides: [
            {
              title: "Slide 1: Meet the 4-Box Nibble (8 - 4 - 2 - 1)",
              concept: "8-4-2-1 Rule: Four binary digits together are called a Nibble. Double 4 to get the 4th box: 8, 4, 2, 1.",
              explain: "Write 8, 4, 2, 1 above any 4-digit binary number. Add up the numbers above the 1s.",
              analogy: "Four prize cards worth 8, 4, 2, and 1 points.",
              example: "Box Values:   [ 8 ]  [ 4 ]  [ 2 ]  [ 1 ]\nBinary 1000:    1      0      0      0   →  8\nBinary 1010:    1      0      1      0   →  8 + 2 = 10"
            },
            {
              title: "Slide 2: Worked Example (Binary 1101)",
              concept: "Step-by-Step Addition: Check each of the four columns from left to right.",
              explain: "In 1101: 8 is ON (1), 4 is ON (1), 2 is OFF (0), 1 is ON (1). Add the ON boxes: 8 + 4 + 1 = 13.",
              analogy: "8 + 4 + 0 + 1 = 13.",
              example: "Box Values:   [ 8 ]  [ 4 ]  [ 2 ]  [ 1 ]\nBinary 1101:    1      1      0      1   →  8 + 4 + 1 = 13"
            }
          ],
          prompt: "Convert Binary 1001 into Decimal.",
          clue: "In [8] [4] [2] [1], only the 8 box and 1 box are ON (1). Add 8 + 1.",
          match: "^9$"
        },
        {
          title: "Practice 4-Bit Reading",
          concept: "Zero Placeholders: A 0 simply means 'do not add this column's weight', while keeping the other columns in their spots.",
          explain: "Using [8] [4] [2] [1], Binary 1100 turns on 8 and 4 (8 + 4 = 12).",
          analogy: "Two switches ON on the left, two switches OFF on the right.",
          example: "Box Values:   [ 8 ]  [ 4 ]  [ 2 ]  [ 1 ]\nBinary 1100:    1      1      0      0   →  8 + 4 = 12"
        ,
          prompt: "Convert Binary 1110 into Decimal.",
          clue: "In [8] [4] [2] [1], the 8, 4, and 2 boxes are ON. Add 8 + 4 + 2.",
          match: "^14$"
        },
        {
          title: "Decimal to Binary: The Coin-Making Method",
          slides: [
            {
              title: "Slide 1: How to Build Binary from Decimal",
              concept: "Reverse 8-4-2-1 Method: To turn a Decimal number into Binary, start with empty boxes [8] [4] [2] [1] and fill them with 1s until they add up to your number.",
              explain: "Always start from the BIGGEST box on the left (8). Ask: 'Does 8 fit inside my number?' If yes, put 1 and subtract 8. If no, put 0.",
              analogy: "Making exact change using ₹8, ₹4, ₹2, and ₹1 coins.",
              example: "Target = Decimal 5:\n• Does 8 fit in 5? No  → 0\n• Does 4 fit in 5? Yes → 1 (1 left)\n• Does 2 fit in 1? No  → 0\n• Does 1 fit in 1? Yes → 1\nResult: 0101 (or 101)"
            },
            {
              title: "Slide 2: Another Worked Example (Decimal 6)",
              concept: "Pick What Adds Up: Which boxes from [4] [2] [1] add up to 6?",
              explain: "4 + 2 = 6! So put 1 under 4, 1 under 2, and 0 under 1. That gives 110.",
              analogy: "4 + 2 + 0 = 6.",
              example: "Boxes:      [ 4 ]  [ 2 ]  [ 1 ]\nDecimal 6:    1      1      0   (because 4 + 2 = 6)"
            }
          ],
          prompt: "Convert Decimal 3 into Binary.",
          clue: "Using [2] and [1], both boxes must be 1 so 2 + 1 = 3.",
          match: "^0?11$"
        },
        {
          title: "Decimal to Binary (4-Bit Numbers)",
          slides: [
            {
              title: "Slide 1: Building Numbers 8 to 15",
              concept: "Subtract 8 First: For any decimal number between 8 and 15, the [8] box is ALWAYS 1.",
              explain: "Example for Decimal 11: Put 1 in the [8] box. Now you still need 3 more (11 - 8 = 3). To make 3, put 0 in [4], 1 in [2], and 1 in [1]. Result: 1011.",
              analogy: "8 + 0 + 2 + 1 = 11.",
              example: "Boxes:       [ 8 ]  [ 4 ]  [ 2 ]  [ 1 ]\nDecimal 11:    1      0      1      1   (8 + 2 + 1 = 11)"
            }
          ],
          prompt: "Convert Decimal 10 into Binary.",
          clue: "Which boxes in [8] [4] [2] [1] add up to 10? Turn on 8 and 2!",
          match: "^1010$"
        },
        {
          title: "Odd vs Even Binary Trick",
          concept: "Instant Last-Digit Check: Every ODD decimal number ends with 1 in binary. Every EVEN decimal number ends with 0.",
          explain: "Why? Because 8, 4, and 2 are all even numbers—the [1] box on the far right is the only way to add +1 and make a number odd!",
          analogy: "Think of the last bit as an 'Odd/Even indicator light'.",
          example: "Decimal 12 = 8 + 4      = 1100 (Even → ends in 0)\nDecimal 13 = 8 + 4 + 1  = 1101 (Odd  → ends in 1)",
          prompt: "Convert Decimal 15 into Binary.",
          clue: "15 = 8 + 4 + 2 + 1 (every box in [8] [4] [2] [1] is ON).",
          match: "^1111$"
        },
        {
          title: "5-Bit Binary (Adding the 16 Box)",
          slides: [
            {
              title: "Slide 1: Extending to 5 Boxes (16-8-4-2-1)",
              concept: "Fifth Box = 16: Double 8 to get the 5th box on the left: 16, 8, 4, 2, 1.",
              explain: "Nothing changes—just add the numbers above whichever boxes have a 1!",
              analogy: "Adding a ₹16 note to your [8] [4] [2] [1] wallet.",
              example: "Boxes:         [16] [8] [4] [2] [1]\nBinary 10010:   1    0   0   1   0  →  16 + 2 = 18"
            }
          ],
          prompt: "Convert Binary 10001 into Decimal.",
          clue: "In [16] [8] [4] [2] [1], the 16 box and 1 box are ON. Add 16 + 1.",
          match: "^17$"
        }
      ]
    },
    {
      title: "Decimal ⇄ Hexadecimal (Base 10 & Base 16)",
      tasks: [
        {
          title: "Why Hexadecimal Uses Letters A–F",
          slides: [
            {
              title: "Slide 1: Counting Past 9 with One Symbol",
              concept: "Hexadecimal (Base-16): Uses 16 single-character symbols. From 0 to 9 it uses normal digits, and for 10 to 15 it uses letters A, B, C, D, E, F.",
              explain: "Why letters? Because in Base-16, the number 10 must fit into ONE single column slot, not two!",
              analogy: "Like playing cards where 11, 12, 13 become J, Q, K so each card shows one symbol.",
              example: "0 to 9  =  Same in Decimal & Hex\n10 = A   |   11 = B   |   12 = C\n13 = D   |   14 = E   |   15 = F"
            },
            {
              title: "Slide 2: Quick Finger Trick for A–F",
              concept: "Anchor at A = 10: Hold up fingers starting at A=10 → B=11, C=12, D=13, E=14, F=15.",
              explain: "Memorize just two anchors: A is 10, and F is 15. Every letter in between is easy to count!",
              analogy: "A is the start (10), F is the finish (15).",
              example: "Decimal 10 → Hex A\nDecimal 12 → Hex C\nDecimal 15 → Hex F"
            }
          ],
          prompt: "Convert Decimal 10 into Hexadecimal.",
          clue: "Look at the table: 10 is the very first Hex letter.",
          match: "^A$"
        },
        {
          title: "Reading Hex Letters Back to Decimal",
          concept: "Letter-to-Number Lookup: A=10, B=11, C=12, D=13, E=14, F=15.",
          explain: "Whenever you see a Hex letter A–F, swap it directly for its value between 10 and 15.",
          analogy: "C is the 3rd letter of the alphabet, so 10 + 2 = 12.",
          example: "Hex B  =  11\nHex D  =  13\nHex F  =  15",
          prompt: "Convert Hexadecimal C into Decimal.",
          clue: "Count up from A=10: A is 10, B is 11, so C is...",
          match: "^12$"
        },
        {
          title: "2-Digit Hexadecimal (The 16s Box)",
          slides: [
            {
              title: "Slide 1: Why Hex 10 Equals 16 (Not Ten!)",
              concept: "Base-16 Place Value: In a 2-digit Hex number, the left box is worth 16, and the right box is worth 1.",
              explain: "In normal Decimal, '10' means one 10 and zero 1s. In Hexadecimal, '10' means ONE 16 and zero 1s = 16!",
              analogy: "Think of the left digit as full egg cartons holding 16 eggs each, and the right digit as loose eggs.",
              example: "Boxes:     [ 16s ]  [ 1s ]\nHex 10:      1        0    →  (1 × 16) + 0 = 16\nHex 12:      1        2    →  (1 × 16) + 2 = 18"
            },
            {
              title: "Slide 2: Mixing Digits and Letters (Hex 1A)",
              concept: "Multiply Left by 16, Add Right: Convert any letter on the right to 10–15 before adding.",
              explain: "For Hex 1A: Left box is 1 (worth 16). Right box is A (worth 10). Add them: 16 + 10 = 26!",
              analogy: "1 carton of 16 eggs + 10 loose eggs = 26 eggs.",
              example: "Hex 1A  =  (1 × 16) + 10  =  26\nHex 1F  =  (1 × 16) + 15  =  31"
            }
          ],
          prompt: "Convert Hexadecimal 10 into Decimal.",
          clue: "1 group of 16 plus 0 ones = 16.",
          match: "^16$"
        },
        {
          title: "Practice 2-Digit Hex to Decimal",
          concept: "Step-by-Step Formula: (Left Digit × 16) + Right Digit.",
          explain: "Let's solve Hex 1B: Left digit is 1 → 1 × 16 = 16. Right digit is B → B = 11. Add 16 + 11 = 27.",
          analogy: "16 + 11 = 27.",
          example: "Hex 15 = 16 + 5 = 21\nHex 20 = (2 × 16) + 0 = 32",
          prompt: "Convert Hexadecimal 1B into Decimal.",
          clue: "Remember B = 11. Add 16 + 11.",
          match: "^27$"
        },
        {
          title: "Decimal to Hexadecimal (Boxes of 16)",
          slides: [
            {
              title: "Slide 1: How Many 16s Fit Inside?",
              concept: "Divide by 16 Method: See how many full 16s fit into your decimal number (that's the left digit), and whatever is left over is the right digit.",
              explain: "Example for Decimal 19: One 16 fits inside 19 (left digit = 1). Subtract 19 - 16 = 3 left over (right digit = 3). Answer: Hex 13!",
              analogy: "Packing 19 apples into 16-apple crates gives 1 full crate and 3 apples left over.",
              example: "Decimal 19 = 16 + 3  →  Hex 13\nDecimal 21 = 16 + 5  →  Hex 15"
            },
            {
              title: "Slide 2: When the Leftover is 10 to 15",
              concept: "Swap Leftover for A–F: If the remainder after subtracting 16 is between 10 and 15, write its Hex letter (A–F)!",
              explain: "Example for Decimal 26: 26 = 16 + 10. Left digit is 1, and leftover 10 becomes A → Hex 1A.",
              analogy: "16 + 10 → 1 and A → 1A.",
              example: "Decimal 26 = 16 + 10  →  Hex 1A"
            }
          ],
          prompt: "Convert Decimal 18 into Hexadecimal.",
          clue: "18 = 16 + 2. That gives 1 group of 16 and 2 left over.",
          match: "^12$"
        },
        {
          title: "Binary to Hex (The 4-Bit Shortcut)",
          slides: [
            {
              title: "Slide 1: Why Programmers Love Hex",
              concept: "4 Binary Bits = 1 Hex Digit: Because 4 binary boxes [8][4][2][1] go from 0 to 15, any 4-bit binary nibble converts into ONE single Hex character!",
              explain: "Step 1: Find the decimal value using [8][4][2][1]. Step 2: If it's 10–15, turn it into A–F.",
              analogy: "Hex shrinks 4 long binary switches into 1 tidy character.",
              example: "Binary 1010 → 8 + 2 = 10 → Hex A\nBinary 1111 → 8 + 4 + 2 + 1 = 15 → Hex F"
            }
          ],
          prompt: "Convert Binary 1111 into Hexadecimal.",
          clue: "1111 in binary is 8 + 4 + 2 + 1 = 15. What letter is 15 in Hex?",
          match: "^F$"
        }
      ]
    },
    {
      title: "Decimal ⇄ Octal (Base 10 & Base 8)",
      tasks: [
        {
          title: "Meet Octal (Digits 0 to 7 Only)",
          slides: [
            {
              title: "Slide 1: A World Without 8 or 9",
              concept: "Octal (Base-8): A number system that uses ONLY 8 digits: 0, 1, 2, 3, 4, 5, 6, and 7. The digits 8 and 9 do not exist in Octal!",
              explain: "For any single number from 0 to 7, Decimal and Octal are 100% identical.",
              analogy: "Imagine counting on two hands that only have 4 fingers each (8 fingers total).",
              example: "Decimal 5  =  Octal 5\nDecimal 7  =  Octal 7"
            },
            {
              title: "Slide 2: What Happens at Number 8?",
              concept: "Rolling Over at 8: Since there is no single symbol for 8, Octal rolls over to '10' (meaning 1 group of 8 and 0 ones).",
              explain: "So Decimal 8 = Octal 10, and Decimal 9 = Octal 11.",
              analogy: "Just like Decimal rolls from 9 to 10, Octal rolls from 7 to 10!",
              example: "Decimal 7  =  Octal 7\nDecimal 8  =  Octal 10\nDecimal 9  =  Octal 11"
            }
          ],
          prompt: "Convert Decimal 8 into Octal.",
          clue: "7 is the highest single Octal digit, so 8 rolls over to 10.",
          match: "^10$"
        },
        {
          title: "Octal to Decimal (The 8s Box)",
          slides: [
            {
              title: "Slide 1: Multiply the Left Digit by 8",
              concept: "Base-8 Place Weight: In a 2-digit Octal number, the left box is worth 8, and the right box is worth 1.",
              explain: "To convert Octal to Decimal: multiply the left digit by 8, then add the right digit.",
              analogy: "Left digit = full packs of 8 crayons; right digit = loose crayons.",
              example: "Boxes:      [ 8s ]  [ 1s ]\nOctal 12:     1       2   →  (1 × 8) + 2 = 10\nOctal 20:     2       0   →  (2 × 8) + 0 = 16"
            }
          ],
          prompt: "Convert Octal 14 into Decimal.",
          clue: "1 group of 8 plus 4 ones: calculate (1 × 8) + 4.",
          match: "^12$"
        },
        {
          title: "Practice Larger Octal Numbers",
          concept: "2-Digit Expansion: (Left Digit × 8) + Right Digit works for every 2-digit Octal number.",
          explain: "Let's convert Octal 23: Left digit is 2 → 2 × 8 = 16. Right digit is 3 → 16 + 3 = 19.",
          analogy: "2 packs of 8 (16) plus 3 loose items = 19.",
          example: "Octal 21 = (2 × 8) + 1 = 17\nOctal 25 = (2 × 8) + 5 = 21",
          prompt: "Convert Octal 20 into Decimal.",
          clue: "Multiply 2 × 8 and add 0.",
          match: "^16$"
        },
        {
          title: "Decimal to Octal (Groups of 8)",
          slides: [
            {
              title: "Slide 1: Packing into Groups of 8",
              concept: "Divide by 8 Method: Find how many 8s fit into your decimal number (left digit) and how many are left over (right digit).",
              explain: "Example for Decimal 11: One 8 fits inside 11 (left digit = 1). Subtract 11 - 8 = 3 left over (right digit = 3). Answer: Octal 13!",
              analogy: "11 players split into a team of 8 leaves 3 substitutes → 1 and 3 → 13.",
              example: "Decimal 10 = 8 + 2  →  Octal 12\nDecimal 11 = 8 + 3  →  Octal 13"
            }
          ],
          prompt: "Convert Decimal 12 into Octal.",
          clue: "12 = 8 + 4. That gives 1 group of 8 and 4 left over.",
          match: "^14$"
        },
        {
          title: "Binary to Octal (The 3-Bit Shortcut)",
          slides: [
            {
              title: "Slide 1: 3 Binary Bits = 1 Octal Digit",
              concept: "4-2-1 Octal Grouping: Three binary boxes [4][2][1] add up to a maximum of 7 (4+2+1)—which matches Octal's 0–7 digits!",
              explain: "To convert 3 binary bits into Octal, just use [4] [2] [1] and add the ON switches.",
              analogy: "Three switches give numbers 0 to 7, which is one complete Octal digit.",
              example: "Binary 101 → 4 + 0 + 1 = Octal 5\nBinary 111 → 4 + 2 + 1 = Octal 7"
            }
          ],
          prompt: "Convert Binary 110 into Octal.",
          clue: "Using [4] [2] [1], the 4 and 2 boxes are ON. Add 4 + 2.",
          match: "^6$"
        },
        {
          title: "6-Bit Binary to 2-Digit Octal",
          slides: [
            {
              title: "Slide 1: Split Into Two 3-Bit Groups",
              concept: "Triplet Splitting: Split a 6-digit binary number down the middle into two 3-digit groups, then convert each group using [4][2][1].",
              explain: "Example: 001 010 → Left group (001) = 1. Right group (010) = 2. Put them side-by-side: Octal 12!",
              analogy: "Solve the left half, solve the right half, write both digits together.",
              example: "Binary:   001  |  111\nWeights:   1   |   7   →  Octal 17"
            }
          ],
          prompt: "Convert Binary 001011 into Octal.",
          clue: "Split into 001 (which equals 1) and 011 (which equals 2 + 1 = 3). Put the two digits together.",
          match: "^13$"
        }
      ]
    }
  ]
};
