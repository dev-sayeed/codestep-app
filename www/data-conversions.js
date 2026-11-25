const COURSE_CONVERSIONS = {
  title: "Conversions",
  badge: "01⇄F",
  bg: "#CCFBF1",
  color: "#0F766E",
  desc: "150 step-by-step tasks covering all 6 number system conversions from absolute zero.",
  noTheme: true,
  modules: [
    /* =========================================================================
       PART 1: BINARY <-> DECIMAL (25 TASKS)
       ========================================================================= */
    {
      title: "Binary ⇄ Decimal (25 Tasks)",
      tasks: [
        {
          title: "What is a Number System?",
          slides: [
            {
              title: "Slide 1: How Humans Count (Decimal)",
              concept: "Decimal (Base-10): Our everyday counting system. It has 10 digits: 0, 1, 2, 3, 4, 5, 6, 7, 8, and 9.",
              explain: "Why do humans use 10 digits? Simply because we have 10 fingers! Once we count past 9, we reuse digits to make 10, 11, 12, and so on.",
              analogy: "Think of Decimal as '10-Finger Math'.",
              example: "Human Digits: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9"
            },
            {
              title: "Slide 2: How Computers Count (Binary)",
              concept: "Binary (Base-2): The computer's counting system. It ONLY has 2 digits: 0 and 1.",
              explain: "Inside a phone or laptop, there are no fingers—only tiny electrical switches. A switch can only be OFF (0) or ON (1). Every photo, video, and number is stored using just 0s and 1s.",
              analogy: "0 = Light Bulb OFF  |  1 = Light Bulb ON",
              example: "0 in Binary = 0 in Decimal\n1 in Binary = 1 in Decimal"
            }
          ],
          prompt: "In Binary, what digit represents a switch that is turned ON?",
          clue: "Binary only has two digits: 0 is OFF, so ON is...",
          match: "^1$"
        },
        {
          title: "Two Switches Side-by-Side",
          slides: [
            {
              title: "Slide 1: Giving Each Switch a Point Value",
              concept: "Place Value (Weight): When we line up binary switches from right to left, each switch is worth double the one on its right.",
              explain: "The switch on the far right is worth 1 point. Double 1 to get the second switch on the left: it is worth 2 points.",
              analogy: "Imagine two boxes: the left box holds a ₹2 coin, and the right box holds a ₹1 coin.",
              example: "Box Values:   [ 2 ]   [ 1 ]"
            },
            {
              title: "Slide 2: Adding the ON Switches",
              concept: "Conversion Rule: Look at the 0s and 1s below the boxes. Wherever you see a '1', add that box's value. Wherever you see a '0', ignore that box.",
              explain: "Let's convert Binary 10: The [2] box has a 1 (count it!). The [1] box has a 0 (skip it!). Total = 2.",
              analogy: "1 means 'Take this coin', 0 means 'Leave this coin'.",
              example: "Box Values:   [ 2 ]   [ 1 ]\nBinary 10:      1       0   →  2 + 0 = 2\nBinary 11:      1       1   →  2 + 1 = 3"
            }
          ],
          prompt: "Convert Binary 10 into Decimal.",
          clue: "In [2] [1], the 2-box has 1 and the 1-box has 0. Add 2 + 0.",
          match: "^2$"
        },
        {
          title: "Practice: Binary 11 to Decimal",
          concept: "Both Switches ON: When both boxes [2] and [1] have a 1 underneath, add both values together.",
          explain: "Binary 11 has a 1 under [2] and a 1 under [1]. So 2 + 1 = 3.",
          analogy: "Taking both the ₹2 coin and the ₹1 coin gives ₹3.",
          example: "Box Values:   [ 2 ]   [ 1 ]\nBinary 11:      1       1   →  2 + 1 = 3",
          prompt: "Convert Binary 11 into Decimal.",
          clue: "Add 2 + 1.",
          match: "^3$"
        },
        {
          title: "Adding a 3rd Switch (The 4-Point Box)",
          slides: [
            {
              title: "Slide 1: Double Again to Get 4",
              concept: "4-2-1 Boxes: Adding a third switch on the left doubles 2 to 4. From left to right, the boxes are worth: 4, 2, 1.",
              explain: "Whenever you see a 3-digit binary number, write 4, 2, 1 right above its three digits.",
              analogy: "Three prize buckets worth 4 points, 2 points, and 1 point.",
              example: "Box Values:   [ 4 ]   [ 2 ]   [ 1 ]\nBinary 100:     1       0       0   →  4 + 0 + 0 = 4"
            },
            {
              title: "Slide 2: Worked Example (Binary 101)",
              concept: "Skip the Zeros: Only add the boxes that have a 1 underneath.",
              explain: "For Binary 101: [4] has 1 (add 4), [2] has 0 (skip), [1] has 1 (add 1). Total = 4 + 1 = 5.",
              analogy: "4 + 0 + 1 = 5.",
              example: "Box Values:   [ 4 ]   [ 2 ]   [ 1 ]\nBinary 101:     1       0       1   →  4 + 1 = 5"
            }
          ],
          prompt: "Convert Binary 100 into Decimal.",
          clue: "Only the [4] box has a 1 underneath. The [2] and [1] boxes are 0.",
          match: "^4$"
        },
        {
          title: "Practice: Binary 101 to Decimal",
          concept: "4-2-1 Addition: Add the numbers above every 1.",
          explain: "In 101, the 4-box and 1-box are ON. 4 + 1 = 5.",
          analogy: "₹4 + ₹1 = ₹5.",
          example: "Box Values:   [ 4 ]   [ 2 ]   [ 1 ]\nBinary 101:     1       0       1   →  5",
          prompt: "Convert Binary 101 into Decimal.",
          clue: "Add 4 + 1.",
          match: "^5$"
        },
        {
          title: "Practice: Binary 110 to Decimal",
          concept: "Left Two Boxes ON: In 110, the [4] and [2] boxes are 1, and [1] is 0.",
          explain: "Add 4 + 2 = 6.",
          analogy: "₹4 + ₹2 = ₹6.",
          example: "Box Values:   [ 4 ]   [ 2 ]   [ 1 ]\nBinary 110:     1       1       0   →  4 + 2 = 6",
          prompt: "Convert Binary 110 into Decimal.",
          clue: "Add 4 + 2 + 0.",
          match: "^6$"
        },
        {
          title: "Practice: Binary 111 to Decimal",
          concept: "All Three Boxes ON: When every switch is 1, add every box value.",
          explain: "4 + 2 + 1 = 7.",
          analogy: "Collecting all three coins: 4 + 2 + 1 = 7.",
          example: "Box Values:   [ 4 ]   [ 2 ]   [ 1 ]\nBinary 111:     1       1       1   →  4 + 2 + 1 = 7",
          prompt: "Convert Binary 111 into Decimal.",
          clue: "Add 4 + 2 + 1.",
          match: "^7$"
        },
        {
          title: "4-Bit Binary (The 8-4-2-1 Ruler)",
          slides: [
            {
              title: "Slide 1: Double 4 to Get 8",
              concept: "8-4-2-1 Ruler: Four binary digits are called a Nibble. Double 4 to get the 4th box on the left: 8, 4, 2, 1.",
              explain: "Memorize these four numbers: 8 - 4 - 2 - 1. Almost all computer conversions use these exact four boxes!",
              analogy: "Four boxes labeled 8, 4, 2, 1 from left to right.",
              example: "Box Values:   [ 8 ]  [ 4 ]  [ 2 ]  [ 1 ]\nBinary 1000:    1      0      0      0   →  8"
            },
            {
              title: "Slide 2: Adding in 8-4-2-1",
              concept: "Add Only the 1s: Write 1010 under [8][4][2][1]. The 8-box and 2-box have 1s, so 8 + 2 = 10.",
              explain: "Take your time and add only the columns with a 1.",
              analogy: "8 + 0 + 2 + 0 = 10.",
              example: "Box Values:   [ 8 ]  [ 4 ]  [ 2 ]  [ 1 ]\nBinary 1010:    1      0      1      0   →  8 + 2 = 10"
            }
          ],
          prompt: "Convert Binary 1000 into Decimal.",
          clue: "Only the [8] box is ON (1); all other boxes are 0.",
          match: "^8$"
        },
        {
          title: "Practice: Binary 1001 to Decimal",
          concept: "Outer Switches ON: In 1001, the [8] box and [1] box have 1s.",
          explain: "8 + 0 + 0 + 1 = 9.",
          analogy: "₹8 + ₹1 = ₹9.",
          example: "Box Values:   [ 8 ]  [ 4 ]  [ 2 ]  [ 1 ]\nBinary 1001:    1      0      0      1   →  9",
          prompt: "Convert Binary 1001 into Decimal.",
          clue: "Add 8 + 1.",
          match: "^9$"
        },
        {
          title: "Practice: Binary 1011 to Decimal",
          concept: "Three Switches ON: In 1011, [8], [2], and [1] are ON.",
          explain: "8 + 2 + 1 = 11.",
          analogy: "8 + 0 + 2 + 1 = 11.",
          example: "Box Values:   [ 8 ]  [ 4 ]  [ 2 ]  [ 1 ]\nBinary 1011:    1      0      1      1   →  11",
          prompt: "Convert Binary 1011 into Decimal.",
          clue: "Add 8 + 2 + 1.",
          match: "^11$"
        },
        {
          title: "Practice: Binary 1100 to Decimal",
          concept: "Left Two Switches ON: In 1100, [8] and [4] are ON.",
          explain: "8 + 4 + 0 + 0 = 12.",
          analogy: "8 + 4 = 12.",
          example: "Box Values:   [ 8 ]  [ 4 ]  [ 2 ]  [ 1 ]\nBinary 1100:    1      1      0      0   →  12",
          prompt: "Convert Binary 1100 into Decimal.",
          clue: "Add 8 + 4.",
          match: "^12$"
        },
        {
          title: "Practice: Binary 1101 to Decimal",
          concept: "8, 4, and 1 ON: In 1101, only the [2] box is OFF.",
          explain: "8 + 4 + 1 = 13.",
          analogy: "8 + 4 + 0 + 1 = 13.",
          example: "Box Values:   [ 8 ]  [ 4 ]  [ 2 ]  [ 1 ]\nBinary 1101:    1      1      0      1   →  13",
          prompt: "Convert Binary 1101 into Decimal.",
          clue: "Add 8 + 4 + 1.",
          match: "^13$"
        },
        {
          title: "Practice: Binary 1110 to Decimal",
          concept: "8, 4, and 2 ON: In 1110, only the [1] box is OFF.",
          explain: "8 + 4 + 2 = 14.",
          analogy: "8 + 4 + 2 + 0 = 14.",
          example: "Box Values:   [ 8 ]  [ 4 ]  [ 2 ]  [ 1 ]\nBinary 1110:    1      1      1      0   →  14",
          prompt: "Convert Binary 1110 into Decimal.",
          clue: "Add 8 + 4 + 2.",
          match: "^14$"
        },
        {
          title: "Practice: Binary 1111 to Decimal",
          concept: "All Four Boxes ON: 1111 is the largest 4-bit binary number.",
          explain: "8 + 4 + 2 + 1 = 15.",
          analogy: "Every single coin in [8][4][2][1] added together = 15.",
          example: "Box Values:   [ 8 ]  [ 4 ]  [ 2 ]  [ 1 ]\nBinary 1111:    1      1      1      1   →  15",
          prompt: "Convert Binary 1111 into Decimal.",
          clue: "Add 8 + 4 + 2 + 1.",
          match: "^15$"
        },
        {
          title: "Decimal to Binary: Making Change",
          slides: [
            {
              title: "Slide 1: Going Backwards (Decimal → Binary)",
              concept: "Coin-Making Method: Start with empty boxes [8] [4] [2] [1]. Pick which boxes add up to your Decimal number, and put a '1' in those boxes (and '0' in the rest).",
              explain: "Always start from the LEFT (biggest box first). Ask: 'Does this box fit inside my remaining number?'",
              analogy: "Paying ₹5 using ₹8, ₹4, ₹2, and ₹1 coins: ₹8 is too big (0), ₹4 fits (1, ₹1 left), ₹2 is too big (0), ₹1 fits (1) → 0101 (or 101).",
              example: "Make Decimal 5:\n[8] too big → 0\n[4] fits!   → 1  (5 - 4 = 1 left)\n[2] too big → 0\n[1] fits!   → 1  (1 - 1 = 0 left)\nAnswer: 101"
            },
            {
              title: "Slide 2: Another Example (Decimal 6)",
              concept: "Find the Combination: Which boxes from [4] [2] [1] add up to 6?",
              explain: "4 + 2 = 6! Put 1 in [4], 1 in [2], and 0 in [1]. Result: 110.",
              analogy: "4 + 2 + 0 = 6.",
              example: "Boxes:      [ 4 ]  [ 2 ]  [ 1 ]\nDecimal 6:    1      1      0"
            }
          ],
          prompt: "Convert Decimal 3 into Binary.",
          clue: "Using [2] and [1], which boxes add up to 3? Put 1 in both.",
          match: "^0?11$"
        },
        {
          title: "Practice: Decimal 5 to Binary",
          concept: "4 + 1 = 5: Turn ON the [4] box and the [1] box, and keep [2] OFF.",
          explain: "Write 1, 0, 1 for [4] [2] [1].",
          analogy: "4 + 0 + 1 = 5.",
          example: "Boxes:      [ 4 ]  [ 2 ]  [ 1 ]\nDecimal 5:    1      0      1",
          prompt: "Convert Decimal 5 into Binary.",
          clue: "Put 1 under 4, 0 under 2, and 1 under 1.",
          match: "^0?101$"
        },
        {
          title: "Practice: Decimal 7 to Binary",
          concept: "4 + 2 + 1 = 7: All three boxes in [4] [2] [1] are needed.",
          explain: "Turn ON 4, 2, and 1 → 111.",
          analogy: "Three 1s in a row.",
          example: "Boxes:      [ 4 ]  [ 2 ]  [ 1 ]\nDecimal 7:    1      1      1",
          prompt: "Convert Decimal 7 into Binary.",
          clue: "All three switches [4][2][1] are ON (1).",
          match: "^0?111$"
        },
        {
          title: "Practice: Decimal 9 to Binary",
          concept: "Use the [8] Box: 9 = 8 + 1.",
          explain: "In [8] [4] [2] [1], turn ON 8 and 1, and turn OFF 4 and 2 → 1001.",
          analogy: "8 + 0 + 0 + 1 = 9.",
          example: "Boxes:      [ 8 ]  [ 4 ]  [ 2 ]  [ 1 ]\nDecimal 9:    1      0      0      1",
          prompt: "Convert Decimal 9 into Binary.",
          clue: "1 under 8, 0 under 4, 0 under 2, 1 under 1.",
          match: "^1001$"
        },
        {
          title: "Practice: Decimal 10 to Binary",
          concept: "8 + 2 = 10: Turn ON the [8] box and [2] box.",
          explain: "In [8] [4] [2] [1], put 1 under 8 and 1 under 2 → 1010.",
          analogy: "8 + 0 + 2 + 0 = 10.",
          example: "Boxes:       [ 8 ]  [ 4 ]  [ 2 ]  [ 1 ]\nDecimal 10:    1      0      1      0",
          prompt: "Convert Decimal 10 into Binary.",
          clue: "Write 1010.",
          match: "^1010$"
        },
        {
          title: "Practice: Decimal 12 to Binary",
          concept: "8 + 4 = 12: Turn ON the [8] box and [4] box.",
          explain: "In [8] [4] [2] [1], 8 and 4 are ON, while 2 and 1 are OFF → 1100.",
          analogy: "8 + 4 + 0 + 0 = 12.",
          example: "Boxes:       [ 8 ]  [ 4 ]  [ 2 ]  [ 1 ]\nDecimal 12:    1      1      0      0",
          prompt: "Convert Decimal 12 into Binary.",
          clue: "1 under 8, 1 under 4, and 0s for 2 and 1.",
          match: "^1100$"
        },
        {
          title: "Practice: Decimal 14 to Binary",
          concept: "8 + 4 + 2 = 14: Turn ON 8, 4, and 2.",
          explain: "In [8] [4] [2] [1], only the [1] box stays OFF → 1110.",
          analogy: "15 minus 1 = 14.",
          example: "Boxes:       [ 8 ]  [ 4 ]  [ 2 ]  [ 1 ]\nDecimal 14:    1      1      1      0",
          prompt: "Convert Decimal 14 into Binary.",
          clue: "1110.",
          match: "^1110$"
        },
        {
          title: "5-Bit Binary (Adding the 16 Box)",
          slides: [
            {
              title: "Slide 1: Double 8 to Get 16",
              concept: "5-Bit Ruler (16-8-4-2-1): Need numbers bigger than 15? Add a 5th box on the left worth 16!",
              explain: "The exact same rule applies: add the values of whichever boxes have a 1.",
              analogy: "16, 8, 4, 2, 1—every step left doubles.",
              example: "Boxes:         [16] [8] [4] [2] [1]\nBinary 10000:   1    0   0   0   0  →  16\nBinary 10010:   1    0   0   1   0  →  16 + 2 = 18"
            }
          ],
          prompt: "Convert Binary 10001 into Decimal.",
          clue: "In [16] [8] [4] [2] [1], the 16 box and 1 box are ON. Add 16 + 1.",
          match: "^17$"
        },
        {
          title: "Practice: Binary 10100 to Decimal",
          concept: "16 + 4 = 20: In 10100, the [16] box and [4] box have 1s.",
          explain: "16 + 0 + 4 + 0 + 0 = 20.",
          analogy: "₹16 + ₹4 = ₹20.",
          example: "Boxes:         [16] [8] [4] [2] [1]\nBinary 10100:   1    0   1   0   0  →  20",
          prompt: "Convert Binary 10100 into Decimal.",
          clue: "Add 16 + 4.",
          match: "^20$"
        },
        {
          title: "Practice: Decimal 19 to Binary",
          concept: "16 + 2 + 1 = 19: Turn ON 16, 2, and 1.",
          explain: "In [16] [8] [4] [2] [1], put 1 under 16, 0 under 8, 0 under 4, 1 under 2, 1 under 1 → 10011.",
          analogy: "16 + 3 = 19.",
          example: "Boxes:       [16] [8] [4] [2] [1]\nDecimal 19:   1    0   0   1   1",
          prompt: "Convert Decimal 19 into Binary.",
          clue: "19 = 16 + 2 + 1 → 10011.",
          match: "^10011$"
        },
        {
          title: "Practice: Decimal 24 to Binary",
          concept: "16 + 8 = 24: Turn ON the first two boxes [16] and [8].",
          explain: "In [16] [8] [4] [2] [1], 16 and 8 are ON, and 4, 2, 1 are OFF → 11000.",
          analogy: "16 + 8 = 24.",
          example: "Boxes:       [16] [8] [4] [2] [1]\nDecimal 24:   1    1   0   0   0",
          prompt: "Convert Decimal 24 into Binary.",
          clue: "1 under 16, 1 under 8, and three 0s → 11000.",
          match: "^11000$"
        }
      ]
    },

    /* =========================================================================
       PART 2: DECIMAL <-> HEXADECIMAL (25 TASKS)
       ========================================================================= */
    {
      title: "Decimal ⇄ Hexadecimal (25 Tasks)",
      tasks: [
        {
          title: "What is Hexadecimal?",
          slides: [
            {
              title: "Slide 1: A System with 16 Symbols",
              concept: "Hexadecimal (Base-16): Uses 16 single-character digits. For 0 to 9, it uses normal numbers. For 10 to 15, it uses letters A, B, C, D, E, F!",
              explain: "Why letters? Because in Base-16, numbers up to 15 must fit inside ONE single digit spot.",
              analogy: "Just like playing cards use J, Q, K instead of 11, 12, 13.",
              example: "0 to 9  =  Same in Decimal & Hex\n10 = A  |  11 = B  |  12 = C\n13 = D  |  14 = E  |  15 = F"
            },
            {
              title: "Slide 2: Finger Counting from A = 10",
              concept: "Quick Lookup: Start at A = 10 and count on your fingers: A(10), B(11), C(12), D(13), E(14), F(15).",
              explain: "Memorize the start and end: A is 10, and F is 15.",
              analogy: "A = 10, F = 15.",
              example: "Decimal 10 → Hex A\nDecimal 15 → Hex F"
            }
          ],
          prompt: "Convert Decimal 10 into Hexadecimal.",
          clue: "10 is the very first Hex letter.",
          match: "^A$"
        },
        {
          title: "Practice: Decimal 11 to Hex",
          concept: "One Step Past A: Since A = 10, 11 is the next letter.",
          explain: "Decimal 11 = Hex B.",
          analogy: "A=10, B=11.",
          example: "10 = A\n11 = B",
          prompt: "Convert Decimal 11 into Hexadecimal.",
          clue: "The letter right after A.",
          match: "^B$"
        },
        {
          title: "Practice: Decimal 12 to Hex",
          concept: "Count from A=10: A(10), B(11), C(12).",
          explain: "Decimal 12 = Hex C.",
          analogy: "C is the 3rd letter → 10 + 2 = 12.",
          example: "10 = A, 11 = B, 12 = C",
          prompt: "Convert Decimal 12 into Hexadecimal.",
          clue: "The 3rd letter of the alphabet.",
          match: "^C$"
        },
        {
          title: "Practice: Decimal 13 to Hex",
          concept: "Count from A=10: A(10), B(11), C(12), D(13).",
          explain: "Decimal 13 = Hex D.",
          analogy: "D = 13.",
          example: "12 = C\n13 = D",
          prompt: "Convert Decimal 13 into Hexadecimal.",
          clue: "The letter after C.",
          match: "^D$"
        },
        {
          title: "Practice: Decimal 14 to Hex",
          concept: "One Before F(15): E is 14.",
          explain: "Decimal 14 = Hex E.",
          analogy: "E = 14, F = 15.",
          example: "14 = E\n15 = F",
          prompt: "Convert Decimal 14 into Hexadecimal.",
          clue: "The letter before F.",
          match: "^E$"
        },
        {
          title: "Practice: Decimal 15 to Hex",
          concept: "Highest Single Hex Digit: F is 15.",
          explain: "Decimal 15 = Hex F.",
          analogy: "F stands for Fifteen!",
          example: "15 = F",
          prompt: "Convert Decimal 15 into Hexadecimal.",
          clue: "F for Fifteen.",
          match: "^F$"
        },
        {
          title: "Hex Letter B to Decimal",
          concept: "Reverse Lookup: B sits right after A (10).",
          explain: "Hex B = 11 in Decimal.",
          analogy: "A=10 → B=11.",
          example: "Hex A = 10\nHex B = 11",
          prompt: "Convert Hexadecimal B into Decimal.",
          clue: "10 + 1 = 11.",
          match: "^11$"
        },
        {
          title: "Hex Letter D to Decimal",
          concept: "Reverse Lookup: Count A(10), B(11), C(12), D(13).",
          explain: "Hex D = 13 in Decimal.",
          analogy: "D = 13.",
          example: "Hex C = 12\nHex D = 13",
          prompt: "Convert Hexadecimal D into Decimal.",
          clue: "One more than C (12).",
          match: "^13$"
        },
        {
          title: "Hex Letter E to Decimal",
          concept: "Reverse Lookup: One less than F (15).",
          explain: "Hex E = 14 in Decimal.",
          analogy: "F=15 → E=14.",
          example: "Hex E = 14\nHex F = 15",
          prompt: "Convert Hexadecimal E into Decimal.",
          clue: "15 minus 1 = 14.",
          match: "^14$"
        },
        {
          title: "2-Digit Hex: Why Hex 10 Equals 16",
          slides: [
            {
              title: "Slide 1: The 16-Egg Carton Rule",
              concept: "Base-16 Place Values: In a 2-digit Hex number, the LEFT box counts groups of 16, and the RIGHT box counts single 1s.",
              explain: "In normal Decimal, '10' means one 10 and zero 1s. In Hexadecimal, '10' means ONE 16 and zero 1s = 16!",
              analogy: "Think of the left digit as full egg cartons holding 16 eggs each, and the right digit as loose eggs.",
              example: "Boxes:     [ 16s ]  [ 1s ]\nHex 10:      1        0    →  (1 × 16) + 0 = 16\nHex 11:      1        1    →  (1 × 16) + 1 = 17"
            },
            {
              title: "Slide 2: Formula for Any 2-Digit Hex",
              concept: "Multiply Left by 16, Add Right: Decimal = (Left Digit × 16) + Right Digit.",
              explain: "For Hex 14: Left box has 1 (worth 16). Right box has 4 (worth 4). Add them: 16 + 4 = 20!",
              analogy: "1 carton of 16 + 4 loose eggs = 20 eggs.",
              example: "Hex 14  =  16 + 4  =  20\nHex 19  =  16 + 9  =  25"
            }
          ],
          prompt: "Convert Hexadecimal 10 into Decimal.",
          clue: "1 group of 16 plus 0 ones = 16.",
          match: "^16$"
        },
        {
          title: "Practice: Hex 12 to Decimal",
          concept: "16 + Right Digit: Hex 12 means one 16 plus 2.",
          explain: "16 + 2 = 18.",
          analogy: "1 carton of 16 + 2 = 18.",
          example: "Hex 11 = 16 + 1 = 17\nHex 12 = 16 + 2 = 18",
          prompt: "Convert Hexadecimal 12 into Decimal.",
          clue: "Add 16 + 2.",
          match: "^18$"
        },
        {
          title: "Practice: Hex 15 to Decimal",
          concept: "16 + 5 = 21: Left digit 1 means 16; right digit is 5.",
          explain: "16 + 5 = 21.",
          analogy: "16 + 5 = 21.",
          example: "Hex 15 = (1 × 16) + 5 = 21",
          prompt: "Convert Hexadecimal 15 into Decimal.",
          clue: "Add 16 + 5.",
          match: "^21$"
        },
        {
          title: "Mixing Digits & Letters (Hex 1A)",
          slides: [
            {
              title: "Slide 1: Convert the Letter First, Then Add!",
              concept: "2-Step Rule: When the right digit is a letter (A–F), replace it with 10–15 first, then add it to 16.",
              explain: "Let's solve Hex 1A: Left digit 1 = 16. Right digit A = 10. Add 16 + 10 = 26!",
              analogy: "1 carton of 16 + A (10) loose eggs = 26.",
              example: "Hex 1A = 16 + 10 = 26\nHex 1C = 16 + 12 = 28"
            }
          ],
          prompt: "Convert Hexadecimal 1A into Decimal.",
          clue: "16 + 10 (since A = 10).",
          match: "^26$"
        },
        {
          title: "Practice: Hex 1C to Decimal",
          concept: "16 + C(12): Replace C with 12, then add to 16.",
          explain: "16 + 12 = 28.",
          analogy: "16 + 12 = 28.",
          example: "Hex 1C = 16 + 12 = 28",
          prompt: "Convert Hexadecimal 1C into Decimal.",
          clue: "Add 16 + 12.",
          match: "^28$"
        },
        {
          title: "Practice: Hex 1F to Decimal",
          concept: "16 + F(15): Replace F with 15, then add to 16.",
          explain: "16 + 15 = 31.",
          analogy: "31 is the highest number before rolling over to Hex 20 (32)!",
          example: "Hex 1F = 16 + 15 = 31",
          prompt: "Convert Hexadecimal 1F into Decimal.",
          clue: "Add 16 + 15.",
          match: "^31$"
        },
        {
          title: "Two Cartons of 16 (Hex 20 & Up)",
          slides: [
            {
              title: "Slide 1: Multiplying the Left Digit by 16",
              concept: "Multiples of 16: When the left digit is 2, it means TWO 16s: 2 × 16 = 32!",
              explain: "So Hex 20 = 32, Hex 21 = 32 + 1 = 33, and Hex 25 = 32 + 5 = 37.",
              analogy: "2 cartons of 16 eggs = 32 eggs.",
              example: "Hex 20 = (2 × 16) + 0 = 32\nHex 24 = (2 × 16) + 4 = 36"
            }
          ],
          prompt: "Convert Hexadecimal 20 into Decimal.",
          clue: "Multiply 2 × 16.",
          match: "^32$"
        },
        {
          title: "Practice: Hex 23 to Decimal",
          concept: "32 + 3 = 35: Left digit 2 = 32; right digit = 3.",
          explain: "(2 × 16) + 3 = 32 + 3 = 35.",
          analogy: "32 + 3 = 35.",
          example: "Hex 23 = 32 + 3 = 35",
          prompt: "Convert Hexadecimal 23 into Decimal.",
          clue: "Add 32 + 3.",
          match: "^35$"
        },
        {
          title: "Decimal to Hexadecimal (Packing 16s)",
          slides: [
            {
              title: "Slide 1: How Many 16s Fit Inside?",
              concept: "Subtract 16 Method: For numbers 16 to 31, one 16 fits inside (so the left digit is 1). Subtract 16 from your number to find the right digit!",
              explain: "Example for Decimal 19: 19 - 16 = 3 left over. Put 1 on the left and 3 on the right → Hex 13!",
              analogy: "19 apples = 1 box of 16 + 3 loose apples → 13.",
              example: "Decimal 17 = 16 + 1  →  Hex 11\nDecimal 19 = 16 + 3  →  Hex 13"
            },
            {
              title: "Slide 2: When Leftover is 10 to 15",
              concept: "Use A–F for Leftovers 10–15: If subtracting 16 leaves 10 to 15, write its Hex letter (A–F) on the right!",
              explain: "Example for Decimal 27: 27 - 16 = 11 left over. Since 11 is B, Decimal 27 = Hex 1B!",
              analogy: "16 + 11 → 1 and B → 1B.",
              example: "Decimal 26 = 16 + 10 → Hex 1A\nDecimal 27 = 16 + 11 → Hex 1B"
            }
          ],
          prompt: "Convert Decimal 17 into Hexadecimal.",
          clue: "17 = 16 + 1 → 1 group of 16 and 1 left over.",
          match: "^11$"
        },
        {
          title: "Practice: Decimal 20 to Hex",
          concept: "20 = 16 + 4: One 16 plus 4 left over.",
          explain: "Left digit = 1, right digit = 4 → Hex 14.",
          analogy: "16 + 4 = 20.",
          example: "Decimal 20 = 16 + 4 → Hex 14",
          prompt: "Convert Decimal 20 into Hexadecimal.",
          clue: "16 + 4 → 14 in Hex.",
          match: "^14$"
        },
        {
          title: "Practice: Decimal 24 to Hex",
          concept: "24 = 16 + 8: One 16 plus 8 left over.",
          explain: "Left digit = 1, right digit = 8 → Hex 18.",
          analogy: "16 + 8 = 24.",
          example: "Decimal 24 = 16 + 8 → Hex 18",
          prompt: "Convert Decimal 24 into Hexadecimal.",
          clue: "Subtract 24 - 16 = 8, so write 18.",
          match: "^18$"
        },
        {
          title: "Practice: Decimal 26 to Hex",
          concept: "26 = 16 + 10: Leftover 10 becomes letter A.",
          explain: "1 group of 16 and A (10) left over → Hex 1A.",
          analogy: "16 + A = 1A.",
          example: "Decimal 26 = 16 + 10 → Hex 1A",
          prompt: "Convert Decimal 26 into Hexadecimal.",
          clue: "1 followed by the letter for 10.",
          match: "^1A$"
        },
        {
          title: "Practice: Decimal 29 to Hex",
          concept: "29 = 16 + 13: Leftover 13 becomes letter D.",
          explain: "29 - 16 = 13 (D) → Hex 1D.",
          analogy: "16 + 13(D) = 1D.",
          example: "Decimal 29 = 16 + 13 → Hex 1D",
          prompt: "Convert Decimal 29 into Hexadecimal.",
          clue: "1 followed by the letter for 13 (D).",
          match: "^1D$"
        },
        {
          title: "Practice: Decimal 31 to Hex",
          concept: "31 = 16 + 15: Leftover 15 becomes letter F.",
          explain: "31 - 16 = 15 (F) → Hex 1F.",
          analogy: "16 + 15(F) = 1F.",
          example: "Decimal 31 = 16 + 15 → Hex 1F",
          prompt: "Convert Decimal 31 into Hexadecimal.",
          clue: "1 followed by F.",
          match: "^1F$"
        },
        {
          title: "Practice: Decimal 32 to Hex",
          concept: "32 = 2 × 16: Two full groups of 16 and 0 left over.",
          explain: "Left digit = 2, right digit = 0 → Hex 20.",
          analogy: "2 cartons of 16 = 32.",
          example: "Decimal 32 = 2 × 16 + 0 → Hex 20",
          prompt: "Convert Decimal 32 into Hexadecimal.",
          clue: "2 groups of 16 and 0 ones → 20.",
          match: "^20$"
        },
        {
          title: "Practice: Decimal 34 to Hex",
          concept: "34 = 32 + 2: Two groups of 16 (32) plus 2 left over.",
          explain: "Left digit = 2, right digit = 2 → Hex 22.",
          analogy: "32 + 2 = 34.",
          example: "Decimal 34 = 32 + 2 → Hex 22",
          prompt: "Convert Decimal 34 into Hexadecimal.",
          clue: "2 groups of 16 plus 2 → 22.",
          match: "^22$"
        }
      ]
    },

    /* =========================================================================
       PART 3: DECIMAL <-> OCTAL (25 TASKS)
       ========================================================================= */
    {
      title: "Decimal ⇄ Octal (25 Tasks)",
      tasks: [
        {
          title: "What is Octal?",
          slides: [
            {
              title: "Slide 1: A World with Only 8 Digits (0 to 7)",
              concept: "Octal (Base-8): A counting system that ONLY has 8 digits: 0, 1, 2, 3, 4, 5, 6, and 7. The digits 8 and 9 DO NOT EXIST in Octal!",
              explain: "For any single number from 0 to 7, Decimal and Octal are completely identical.",
              analogy: "Imagine counting on two cartoon hands that have 4 fingers each (8 fingers total).",
              example: "Decimal 4  =  Octal 4\nDecimal 7  =  Octal 7"
            },
            {
              title: "Slide 2: What Happens at Number 8?",
              concept: "Rolling Over at 8: Since there is no single symbol for 8, Octal rolls over to '10' (meaning 1 group of 8 and 0 ones).",
              explain: "So Decimal 8 = Octal 10, and Decimal 9 = Octal 11.",
              analogy: "Just like Decimal flips from 9 to 10, Octal flips from 7 to 10!",
              example: "Decimal 7  =  Octal 7\nDecimal 8  =  Octal 10\nDecimal 9  =  Octal 11"
            }
          ],
          prompt: "Convert Decimal 7 into Octal.",
          clue: "Numbers 0 through 7 are identical in Decimal and Octal.",
          match: "^7$"
        },
        {
          title: "Practice: Decimal 8 to Octal",
          concept: "First Roll-Over: Decimal 8 is 1 group of 8 and 0 ones.",
          explain: "Decimal 8 = Octal 10.",
          analogy: "7 rolls over to 10 in Octal.",
          example: "Decimal 8 = Octal 10",
          prompt: "Convert Decimal 8 into Octal.",
          clue: "Write 10.",
          match: "^10$"
        },
        {
          title: "Practice: Decimal 9 to Octal",
          concept: "8 + 1 = 9: One group of 8 plus 1 extra.",
          explain: "Decimal 9 = Octal 11.",
          analogy: "1 pack of 8 + 1 = 11.",
          example: "Decimal 9 = 8 + 1 → Octal 11",
          prompt: "Convert Decimal 9 into Octal.",
          clue: "1 group of 8 and 1 one → 11.",
          match: "^11$"
        },
        {
          title: "Octal to Decimal (The 8-Pack Rule)",
          slides: [
            {
              title: "Slide 1: Left Digit Counts Groups of 8",
              concept: "Base-8 Place Values: In a 2-digit Octal number, the LEFT box counts groups of 8, and the RIGHT box counts single 1s.",
              explain: "To convert Octal to Decimal: multiply the left digit by 8, then add the right digit!",
              analogy: "Think of the left digit as 8-packs of crayons, and the right digit as loose crayons.",
              example: "Boxes:      [ 8s ]  [ 1s ]\nOctal 10:     1       0   →  (1 × 8) + 0 = 8\nOctal 12:     1       2   →  (1 × 8) + 2 = 10"
            }
          ],
          prompt: "Convert Octal 12 into Decimal.",
          clue: "1 group of 8 plus 2 ones: add 8 + 2.",
          match: "^10$"
        },
        {
          title: "Practice: Octal 13 to Decimal",
          concept: "8 + 3 = 11: Left digit 1 means 8; right digit is 3.",
          explain: "(1 × 8) + 3 = 11.",
          analogy: "1 pack of 8 + 3 = 11.",
          example: "Octal 13 = 8 + 3 = 11",
          prompt: "Convert Octal 13 into Decimal.",
          clue: "Add 8 + 3.",
          match: "^11$"
        },
        {
          title: "Practice: Octal 15 to Decimal",
          concept: "8 + 5 = 13: Left digit 1 means 8; right digit is 5.",
          explain: "(1 × 8) + 5 = 13.",
          analogy: "8 + 5 = 13.",
          example: "Octal 15 = 8 + 5 = 13",
          prompt: "Convert Octal 15 into Decimal.",
          clue: "Add 8 + 5.",
          match: "^13$"
        },
        {
          title: "Practice: Octal 17 to Decimal",
          concept: "8 + 7 = 15: Octal 17 is the highest number before rolling over to Octal 20.",
          explain: "(1 × 8) + 7 = 15.",
          analogy: "8 + 7 = 15.",
          example: "Octal 17 = 8 + 7 = 15",
          prompt: "Convert Octal 17 into Decimal.",
          clue: "Add 8 + 7.",
          match: "^15$"
        },
        {
          title: "Two Packs of 8 (Octal 20 & Up)",
          slides: [
            {
              title: "Slide 1: Multiply Left Digit by 8",
              concept: "Multiples of 8: When the left Octal digit is 2, it means TWO 8s: 2 × 8 = 16!",
              explain: "So Octal 20 = 16, Octal 21 = 16 + 1 = 17, and Octal 24 = 16 + 4 = 20.",
              analogy: "2 packs of 8 crayons = 16 crayons.",
              example: "Octal 20 = (2 × 8) + 0 = 16\nOctal 24 = (2 × 8) + 4 = 20"
            }
          ],
          prompt: "Convert Octal 20 into Decimal.",
          clue: "Multiply 2 × 8.",
          match: "^16$"
        },
        {
          title: "Practice: Octal 21 to Decimal",
          concept: "16 + 1 = 17: Left digit 2 = 16; right digit = 1.",
          explain: "(2 × 8) + 1 = 17.",
          analogy: "16 + 1 = 17.",
          example: "Octal 21 = 16 + 1 = 17",
          prompt: "Convert Octal 21 into Decimal.",
          clue: "Add 16 + 1.",
          match: "^17$"
        },
        {
          title: "Practice: Octal 25 to Decimal",
          concept: "16 + 5 = 21: Left digit 2 = 16; right digit = 5.",
          explain: "(2 × 8) + 5 = 21.",
          analogy: "16 + 5 = 21.",
          example: "Octal 25 = 16 + 5 = 21",
          prompt: "Convert Octal 25 into Decimal.",
          clue: "Add 16 + 5.",
          match: "^21$"
        },
        {
          title: "Practice: Octal 30 to Decimal",
          concept: "3 × 8 = 24: Three packs of 8 and 0 ones.",
          explain: "(3 × 8) + 0 = 24.",
          analogy: "3 packs of 8 = 24.",
          example: "Octal 30 = 3 × 8 = 24",
          prompt: "Convert Octal 30 into Decimal.",
          clue: "Multiply 3 × 8.",
          match: "^24$"
        },
        {
          title: "Practice: Octal 32 to Decimal",
          concept: "24 + 2 = 26: Three packs of 8 (24) plus 2 ones.",
          explain: "(3 × 8) + 2 = 26.",
          analogy: "24 + 2 = 26.",
          example: "Octal 32 = 24 + 2 = 26",
          prompt: "Convert Octal 32 into Decimal.",
          clue: "Add 24 + 2.",
          match: "^26$"
        },
        {
          title: "Practice: Octal 40 to Decimal",
          concept: "4 × 8 = 32: Four packs of 8 and 0 ones.",
          explain: "(4 × 8) + 0 = 32.",
          analogy: "4 × 8 = 32.",
          example: "Octal 40 = 4 × 8 = 32",
          prompt: "Convert Octal 40 into Decimal.",
          clue: "Multiply 4 × 8.",
          match: "^32$"
        },
        {
          title: "Decimal to Octal (Packing Groups of 8)",
          slides: [
            {
              title: "Slide 1: How Many 8s Fit Inside?",
              concept: "Subtract 8 Method: See how many full 8s fit into your Decimal number (that's the left digit), and whatever is left over is the right digit!",
              explain: "Example for Decimal 12: One 8 fits inside 12 (left digit = 1). Subtract 12 - 8 = 4 left over (right digit = 4). Answer: Octal 14!",
              analogy: "12 pencils = 1 pack of 8 + 4 loose pencils → 14.",
              example: "Decimal 10 = 8 + 2  →  Octal 12\nDecimal 12 = 8 + 4  →  Octal 14"
            }
          ],
          prompt: "Convert Decimal 10 into Octal.",
          clue: "10 = 8 + 2 → 1 group of 8 and 2 left over.",
          match: "^12$"
        },
        {
          title: "Practice: Decimal 11 to Octal",
          concept: "11 = 8 + 3: One group of 8 and 3 left over.",
          explain: "Left digit = 1, right digit = 3 → Octal 13.",
          analogy: "8 + 3 = 11.",
          example: "Decimal 11 = 8 + 3 → Octal 13",
          prompt: "Convert Decimal 11 into Octal.",
          clue: "Write 13.",
          match: "^13$"
        },
        {
          title: "Practice: Decimal 14 to Octal",
          concept: "14 = 8 + 6: One group of 8 and 6 left over.",
          explain: "Left digit = 1, right digit = 6 → Octal 16.",
          analogy: "8 + 6 = 14.",
          example: "Decimal 14 = 8 + 6 → Octal 16",
          prompt: "Convert Decimal 14 into Octal.",
          clue: "14 - 8 = 6, so write 16.",
          match: "^16$"
        },
        {
          title: "Practice: Decimal 15 to Octal",
          concept: "15 = 8 + 7: One group of 8 and 7 left over.",
          explain: "Left digit = 1, right digit = 7 → Octal 17.",
          analogy: "8 + 7 = 15.",
          example: "Decimal 15 = 8 + 7 → Octal 17",
          prompt: "Convert Decimal 15 into Octal.",
          clue: "Write 17.",
          match: "^17$"
        },
        {
          title: "Practice: Decimal 16 to Octal",
          concept: "16 = 2 × 8: Two full groups of 8 and 0 left over.",
          explain: "Left digit = 2, right digit = 0 → Octal 20.",
          analogy: "17 in Octal rolls over to 20 at Decimal 16!",
          example: "Decimal 16 = 2 × 8 + 0 → Octal 20",
          prompt: "Convert Decimal 16 into Octal.",
          clue: "2 groups of 8 and 0 ones → 20.",
          match: "^20$"
        },
        {
          title: "Practice: Decimal 18 to Octal",
          concept: "18 = 16 + 2: Two groups of 8 (16) plus 2 left over.",
          explain: "Left digit = 2, right digit = 2 → Octal 22.",
          analogy: "16 + 2 = 18.",
          example: "Decimal 18 = 16 + 2 → Octal 22",
          prompt: "Convert Decimal 18 into Octal.",
          clue: "Write 22.",
          match: "^22$"
        },
        {
          title: "Practice: Decimal 20 to Octal",
          concept: "20 = 16 + 4: Two groups of 8 (16) plus 4 left over.",
          explain: "Left digit = 2, right digit = 4 → Octal 24.",
          analogy: "16 + 4 = 20.",
          example: "Decimal 20 = 16 + 4 → Octal 24",
          prompt: "Convert Decimal 20 into Octal.",
          clue: "2 groups of 8 plus 4 → 24.",
          match: "^24$"
        },
        {
          title: "Practice: Decimal 23 to Octal",
          concept: "23 = 16 + 7: Two groups of 8 (16) plus 7 left over.",
          explain: "Left digit = 2, right digit = 7 → Octal 27.",
          analogy: "16 + 7 = 23.",
          example: "Decimal 23 = 16 + 7 → Octal 27",
          prompt: "Convert Decimal 23 into Octal.",
          clue: "Write 27.",
          match: "^27$"
        },
        {
          title: "Practice: Decimal 24 to Octal",
          concept: "24 = 3 × 8: Three full groups of 8 and 0 left over.",
          explain: "Left digit = 3, right digit = 0 → Octal 30.",
          analogy: "3 packs of 8 = 24.",
          example: "Decimal 24 = 3 × 8 + 0 → Octal 30",
          prompt: "Convert Decimal 24 into Octal.",
          clue: "Write 30.",
          match: "^30$"
        },
        {
          title: "Practice: Decimal 25 to Octal",
          concept: "25 = 24 + 1: Three groups of 8 (24) plus 1 left over.",
          explain: "Left digit = 3, right digit = 1 → Octal 31.",
          analogy: "24 + 1 = 25.",
          example: "Decimal 25 = 24 + 1 → Octal 31",
          prompt: "Convert Decimal 25 into Octal.",
          clue: "Write 31.",
          match: "^31$"
        },
        {
          title: "Practice: Decimal 28 to Octal",
          concept: "28 = 24 + 4: Three groups of 8 (24) plus 4 left over.",
          explain: "Left digit = 3, right digit = 4 → Octal 34.",
          analogy: "24 + 4 = 28.",
          example: "Decimal 28 = 24 + 4 → Octal 34",
          prompt: "Convert Decimal 28 into Octal.",
          clue: "Write 34.",
          match: "^34$"
        },
        {
          title: "Practice: Decimal 31 to Octal",
          concept: "31 = 24 + 7: Three groups of 8 (24) plus 7 left over.",
          explain: "Left digit = 3, right digit = 7 → Octal 37.",
          analogy: "24 + 7 = 31.",
          example: "Decimal 31 = 24 + 7 → Octal 37",
          prompt: "Convert Decimal 31 into Octal.",
          clue: "Write 37.",
          match: "^37$"
        }
      ]
    },

    /* =========================================================================
       PART 4: BINARY <-> HEXADECIMAL (25 TASKS)
       ========================================================================= */
    {
      title: "Binary ⇄ Hexadecimal (25 Tasks)",
      tasks: [
        {
          title: "The 4-Bit Magic Shortcut",
          slides: [
            {
              title: "Slide 1: Why 4 Binary Bits = 1 Hex Digit",
              concept: "4-Bit Nibble Match: Four binary boxes [8][4][2][1] can make any number from 0 (0000) to 15 (1111). Hexadecimal has 16 symbols (0–9 and A–F) for those exact same 0 to 15 values!",
              explain: "That means EVERY 4 binary digits turn into ONE single Hex character! No giant math needed.",
              analogy: "Hex is like a zip file that shrinks 4 binary switches into 1 character.",
              example: "Binary 0000 = 0  → Hex 0\nBinary 1001 = 9  → Hex 9\nBinary 1010 = 10 → Hex A\nBinary 1111 = 15 → Hex F"
            },
            {
              title: "Slide 2: 2-Step Method (Binary → Hex)",
              concept: "Step 1: Add using [8][4][2][1]. Step 2: If the sum is 10–15, swap it for A–F!",
              explain: "Example: Binary 1100 → 8 + 4 = 12. Look up 12 in A–F: A=10, B=11, C=12 → Hex C!",
              analogy: "Calculate [8][4][2][1], then convert 10–15 to A–F.",
              example: "Binary 1100 → 8 + 4 = 12 → Hex C"
            }
          ],
          prompt: "Convert Binary 1010 into Hexadecimal.",
          clue: "In [8][4][2][1], 8 + 2 = 10. What letter is 10 in Hex?",
          match: "^A$"
        },
        {
          title: "Practice: Binary 1011 to Hex",
          concept: "8 + 2 + 1 = 11: 11 in Hex is B.",
          explain: "Use [8][4][2][1] on 1011 → 11 → Hex B.",
          analogy: "11 = B.",
          example: "Binary 1011 → 11 → Hex B",
          prompt: "Convert Binary 1011 into Hexadecimal.",
          clue: "8 + 2 + 1 = 11, which is letter B.",
          match: "^B$"
        },
        {
          title: "Practice: Binary 1100 to Hex",
          concept: "8 + 4 = 12: 12 in Hex is C.",
          explain: "Use [8][4][2][1] on 1100 → 12 → Hex C.",
          analogy: "12 = C.",
          example: "Binary 1100 → 12 → Hex C",
          prompt: "Convert Binary 1100 into Hexadecimal.",
          clue: "8 + 4 = 12, which is letter C.",
          match: "^C$"
        },
        {
          title: "Practice: Binary 1101 to Hex",
          concept: "8 + 4 + 1 = 13: 13 in Hex is D.",
          explain: "Use [8][4][2][1] on 1101 → 13 → Hex D.",
          analogy: "13 = D.",
          example: "Binary 1101 → 13 → Hex D",
          prompt: "Convert Binary 1101 into Hexadecimal.",
          clue: "8 + 4 + 1 = 13 → D.",
          match: "^D$"
        },
        {
          title: "Practice: Binary 1110 to Hex",
          concept: "8 + 4 + 2 = 14: 14 in Hex is E.",
          explain: "Use [8][4][2][1] on 1110 → 14 → Hex E.",
          analogy: "14 = E.",
          example: "Binary 1110 → 14 → Hex E",
          prompt: "Convert Binary 1110 into Hexadecimal.",
          clue: "8 + 4 + 2 = 14 → E.",
          match: "^E$"
        },
        {
          title: "Practice: Binary 1111 to Hex",
          concept: "8 + 4 + 2 + 1 = 15: 15 in Hex is F.",
          explain: "All four bits ON = 15 = Hex F.",
          analogy: "15 = F.",
          example: "Binary 1111 → 15 → Hex F",
          prompt: "Convert Binary 1111 into Hexadecimal.",
          clue: "15 is F.",
          match: "^F$"
        },
        {
          title: "Practice: Binary 0111 to Hex",
          concept: "4 + 2 + 1 = 7: Numbers 0–9 stay normal digits in Hex.",
          explain: "In [8][4][2][1], 0111 = 7 → Hex 7.",
          analogy: "7 = 7.",
          example: "Binary 0111 → 7 → Hex 7",
          prompt: "Convert Binary 0111 into Hexadecimal.",
          clue: "4 + 2 + 1 = 7.",
          match: "^7$"
        },
        {
          title: "8-Bit Binary to 2-Digit Hex",
          slides: [
            {
              title: "Slide 1: Split 8 Bits Down the Middle!",
              concept: "Split into 4 + 4: To convert an 8-bit binary byte into Hex, split it into TWO 4-bit groups (left 4 bits and right 4 bits).",
              explain: "Convert the left 4 bits using [8][4][2][1], then convert the right 4 bits using [8][4][2][1], and write both Hex characters side-by-side!",
              analogy: "Solve two mini 4-bit puzzles instead of one big 8-bit puzzle!",
              example: "Binary:   0001  |  1010\n[8421]:    1    |   10 (A)  →  Hex 1A"
            }
          ],
          prompt: "Convert Binary 00011010 into Hexadecimal.",
          clue: "Left 4 bits (0001) = 1. Right 4 bits (1010) = 10 = A. Put them together: 1A.",
          match: "^1A$"
        },
        {
          title: "Practice: Binary 00101111 to Hex",
          concept: "Split 0010 | 1111: Left = 2, Right = 15 (F).",
          explain: "0010 is 2; 1111 is F → Hex 2F.",
          analogy: "2 and F → 2F.",
          example: "0010 | 1111 → 2F",
          prompt: "Convert Binary 00101111 into Hexadecimal.",
          clue: "Left 0010 = 2, right 1111 = F.",
          match: "^2F$"
        },
        {
          title: "Practice: Binary 10100101 to Hex",
          concept: "Split 1010 | 0101: Left = 10 (A), Right = 5.",
          explain: "1010 is A; 0101 is 5 → Hex A5.",
          analogy: "A and 5 → A5.",
          example: "1010 | 0101 → A5",
          prompt: "Convert Binary 10100101 into Hexadecimal.",
          clue: "Left 1010 = A, right 0101 = 5.",
          match: "^A5$"
        },
        {
          title: "Practice: Binary 11000011 to Hex",
          concept: "Split 1100 | 0011: Left = 12 (C), Right = 3.",
          explain: "1100 is C; 0011 is 3 → Hex C3.",
          analogy: "C and 3 → C3.",
          example: "1100 | 0011 → C3",
          prompt: "Convert Binary 11000011 into Hexadecimal.",
          clue: "Left 1100 = C (12), right 0011 = 3.",
          match: "^C3$"
        },
        {
          title: "Practice: Binary 11110000 to Hex",
          concept: "Split 1111 | 0000: Left = F, Right = 0.",
          explain: "1111 is F; 0000 is 0 → Hex F0.",
          analogy: "F and 0 → F0.",
          example: "1111 | 0000 → F0",
          prompt: "Convert Binary 11110000 into Hexadecimal.",
          clue: "Left 1111 = F, right 0000 = 0.",
          match: "^F0$"
        },
        {
          title: "Practice: Binary 11111111 to Hex",
          concept: "Split 1111 | 1111: Both halves equal F.",
          explain: "1111 is F, 1111 is F → Hex FF (255 in Decimal, used for pure white in CSS!).",
          analogy: "FF is max byte value.",
          example: "1111 | 1111 → FF",
          prompt: "Convert Binary 11111111 into Hexadecimal.",
          clue: "Both 4-bit groups are 1111 (F).",
          match: "^FF$"
        },
        {
          title: "Hexadecimal to Binary (Expand to 4 Bits)",
          slides: [
            {
              title: "Slide 1: Turn Every Hex Character into 4 Bits",
              concept: "4-Bit Expansion: Each Hex digit ALWAYS expands into 4 binary boxes [8][4][2][1] (include leading zeros!).",
              explain: "Example: Hex A = 10. Using [8][4][2][1], 10 = 8 + 2 → 1010. Example: Hex 3 = 0 + 0 + 2 + 1 → 0011.",
              analogy: "Unzipping 1 Hex character back into 4 binary switches.",
              example: "Hex 5  →  0101  (4 + 1)\nHex C  →  1100  (12 = 8 + 4)"
            }
          ],
          prompt: "Convert Hexadecimal A into 4-bit Binary.",
          clue: "A = 10. Which boxes in [8][4][2][1] add up to 10? (8 + 2).",
          match: "^1010$"
        },
        {
          title: "Practice: Hex B to 4-bit Binary",
          concept: "B = 11 = 8 + 2 + 1.",
          explain: "In [8][4][2][1], turn ON 8, 2, and 1 → 1011.",
          analogy: "8 + 0 + 2 + 1 = 11.",
          example: "Hex B (11) → 1011",
          prompt: "Convert Hexadecimal B into 4-bit Binary.",
          clue: "1011.",
          match: "^1011$"
        },
        {
          title: "Practice: Hex C to 4-bit Binary",
          concept: "C = 12 = 8 + 4.",
          explain: "In [8][4][2][1], turn ON 8 and 4 → 1100.",
          analogy: "8 + 4 + 0 + 0 = 12.",
          example: "Hex C (12) → 1100",
          prompt: "Convert Hexadecimal C into 4-bit Binary.",
          clue: "1100.",
          match: "^1100$"
        },
        {
          title: "Practice: Hex D to 4-bit Binary",
          concept: "D = 13 = 8 + 4 + 1.",
          explain: "In [8][4][2][1], turn ON 8, 4, and 1 → 1101.",
          analogy: "8 + 4 + 0 + 1 = 13.",
          example: "Hex D (13) → 1101",
          prompt: "Convert Hexadecimal D into 4-bit Binary.",
          clue: "1101.",
          match: "^1101$"
        },
        {
          title: "Practice: Hex E to 4-bit Binary",
          concept: "E = 14 = 8 + 4 + 2.",
          explain: "In [8][4][2][1], turn ON 8, 4, and 2 → 1110.",
          analogy: "8 + 4 + 2 + 0 = 14.",
          example: "Hex E (14) → 1110",
          prompt: "Convert Hexadecimal E into 4-bit Binary.",
          clue: "1110.",
          match: "^1110$"
        },
        {
          title: "Practice: Hex F to 4-bit Binary",
          concept: "F = 15 = 8 + 4 + 2 + 1.",
          explain: "All four bits ON → 1111.",
          analogy: "8 + 4 + 2 + 1 = 15.",
          example: "Hex F (15) → 1111",
          prompt: "Convert Hexadecimal F into 4-bit Binary.",
          clue: "1111.",
          match: "^1111$"
        },
        {
          title: "Practice: Hex 6 to 4-bit Binary",
          concept: "Include Leading Zero: 6 = 4 + 2, so in 4 bits [8][4][2][1] write 0110.",
          explain: "Keep the leading 0 in [8] so the group stays 4 bits wide.",
          analogy: "0 + 4 + 2 + 0 = 6.",
          example: "Hex 6 → 0110",
          prompt: "Convert Hexadecimal 6 into 4-bit Binary.",
          clue: "Write 0110.",
          match: "^0110$"
        },
        {
          title: "2-Digit Hex to 8-Bit Binary",
          slides: [
            {
              title: "Slide 1: Expand Each Digit to 4 Bits and Join",
              concept: "Side-by-Side 4-Bit Blocks: Convert the first Hex digit into 4 bits, convert the second Hex digit into 4 bits, and write all 8 bits together.",
              explain: "Example: Hex 1F → 1 becomes 0001, F becomes 1111 → 00011111.",
              analogy: "Two 4-bit blocks joined into one 8-bit byte.",
              example: "Hex 1F  →  0001 | 1111  →  00011111"
            }
          ],
          prompt: "Convert Hexadecimal 1A into 8-bit Binary.",
          clue: "1 = 0001, A (10) = 1010. Join them: 00011010.",
          match: "^00011010$"
        },
        {
          title: "Practice: Hex 2B to 8-bit Binary",
          concept: "2 = 0010, B (11) = 1011.",
          explain: "Join 0010 and 1011 → 00101011.",
          analogy: "0010 | 1011.",
          example: "Hex 2B → 00101011",
          prompt: "Convert Hexadecimal 2B into 8-bit Binary.",
          clue: "Write 0010 followed by 1011.",
          match: "^00101011$"
        },
        {
          title: "Practice: Hex A0 to 8-bit Binary",
          concept: "A (10) = 1010, 0 = 0000.",
          explain: "Join 1010 and 0000 → 10100000.",
          analogy: "1010 | 0000.",
          example: "Hex A0 → 10100000",
          prompt: "Convert Hexadecimal A0 into 8-bit Binary.",
          clue: "Write 1010 followed by 0000.",
          match: "^10100000$"
        },
        {
          title: "Practice: Hex C5 to 8-bit Binary",
          concept: "C (12) = 1100, 5 = 0101.",
          explain: "Join 1100 and 0101 → 11000101.",
          analogy: "1100 | 0101.",
          example: "Hex C5 → 11000101",
          prompt: "Convert Hexadecimal C5 into 8-bit Binary.",
          clue: "Write 1100 followed by 0101.",
          match: "^11000101$"
        },
        {
          title: "Practice: Hex F9 to 8-bit Binary",
          concept: "F (15) = 1111, 9 = 1001.",
          explain: "Join 1111 and 1001 → 11111001.",
          analogy: "1111 | 1001.",
          example: "Hex F9 → 11111001",
          prompt: "Convert Hexadecimal F9 into 8-bit Binary.",
          clue: "Write 1111 followed by 1001.",
          match: "^11111001$"
        }
      ]
    },

    /* =========================================================================
       PART 5: BINARY <-> OCTAL (25 TASKS)
       ========================================================================= */
    {
      title: "Binary ⇄ Octal (25 Tasks)",
      tasks: [
        {
          title: "The 3-Bit Octal Shortcut",
          slides: [
            {
              title: "Slide 1: Why 3 Binary Bits = 1 Octal Digit",
              concept: "4-2-1 Triplet Match: Three binary boxes [4][2][1] make numbers from 0 (000) to 7 (111). Octal has 8 digits (0 to 7) for those exact same values!",
              explain: "That means EVERY 3 binary digits turn into ONE single Octal digit using the [4][2][1] boxes!",
              analogy: "Hex uses groups of 4 bits; Octal uses groups of 3 bits.",
              example: "Binary 000 = 0  → Octal 0\nBinary 101 = 5  → Octal 5\nBinary 111 = 7  → Octal 7"
            }
          ],
          prompt: "Convert Binary 101 into Octal.",
          clue: "Using [4][2][1], add 4 + 0 + 1.",
          match: "^5$"
        },
        {
          title: "Practice: Binary 010 to Octal",
          concept: "0 + 2 + 0 = 2.",
          explain: "In [4][2][1], only the middle [2] box is ON → Octal 2.",
          analogy: "010 = 2.",
          example: "Binary 010 → Octal 2",
          prompt: "Convert Binary 010 into Octal.",
          clue: "Only the 2-box is ON.",
          match: "^2$"
        },
        {
          title: "Practice: Binary 011 to Octal",
          concept: "0 + 2 + 1 = 3.",
          explain: "In [4][2][1], 2 and 1 are ON → Octal 3.",
          analogy: "2 + 1 = 3.",
          example: "Binary 011 → Octal 3",
          prompt: "Convert Binary 011 into Octal.",
          clue: "Add 2 + 1.",
          match: "^3$"
        },
        {
          title: "Practice: Binary 100 to Octal",
          concept: "4 + 0 + 0 = 4.",
          explain: "In [4][2][1], only the [4] box is ON → Octal 4.",
          analogy: "100 = 4.",
          example: "Binary 100 → Octal 4",
          prompt: "Convert Binary 100 into Octal.",
          clue: "4.",
          match: "^4$"
        },
        {
          title: "Practice: Binary 110 to Octal",
          concept: "4 + 2 + 0 = 6.",
          explain: "In [4][2][1], 4 and 2 are ON → Octal 6.",
          analogy: "4 + 2 = 6.",
          example: "Binary 110 → Octal 6",
          prompt: "Convert Binary 110 into Octal.",
          clue: "Add 4 + 2.",
          match: "^6$"
        },
        {
          title: "Practice: Binary 111 to Octal",
          concept: "4 + 2 + 1 = 7.",
          explain: "All three bits ON = Octal 7.",
          analogy: "4 + 2 + 1 = 7.",
          example: "Binary 111 → Octal 7",
          prompt: "Convert Binary 111 into Octal.",
          clue: "Add 4 + 2 + 1.",
          match: "^7$"
        },
        {
          title: "6-Bit Binary to 2-Digit Octal",
          slides: [
            {
              title: "Slide 1: Split 6 Bits into Two 3-Bit Triplets",
              concept: "Split into 3 + 3: Cut a 6-digit binary number into two groups of 3 bits. Convert each triplet using [4][2][1], then put both digits together.",
              explain: "Example: 001 010 → Left triplet (001) = 1. Right triplet (010) = 2. Answer: Octal 12!",
              analogy: "Solve left triplet [4][2][1], solve right triplet [4][2][1].",
              example: "Binary:   001  |  010\n[421]:     1   |   2   →  Octal 12"
            }
          ],
          prompt: "Convert Binary 001010 into Octal.",
          clue: "Left 3 bits (001) = 1, right 3 bits (010) = 2 → 12.",
          match: "^12$"
        },
        {
          title: "Practice: Binary 001101 to Octal",
          concept: "Split 001 | 101: Left = 1, Right = 5.",
          explain: "001 is 1; 101 is 5 → Octal 15.",
          analogy: "1 and 5 → 15.",
          example: "001 | 101 → 15",
          prompt: "Convert Binary 001101 into Octal.",
          clue: "Left 001 = 1, right 101 = 5.",
          match: "^15$"
        },
        {
          title: "Practice: Binary 010111 to Octal",
          concept: "Split 010 | 111: Left = 2, Right = 7.",
          explain: "010 is 2; 111 is 7 → Octal 27.",
          analogy: "2 and 7 → 27.",
          example: "010 | 111 → 27",
          prompt: "Convert Binary 010111 into Octal.",
          clue: "Left 010 = 2, right 111 = 7.",
          match: "^27$"
        },
        {
          title: "Practice: Binary 011100 to Octal",
          concept: "Split 011 | 100: Left = 3, Right = 4.",
          explain: "011 is 3; 100 is 4 → Octal 34.",
          analogy: "3 and 4 → 34.",
          example: "011 | 100 → 34",
          prompt: "Convert Binary 011100 into Octal.",
          clue: "Left 011 = 3, right 100 = 4.",
          match: "^34$"
        },
        {
          title: "Practice: Binary 101010 to Octal",
          concept: "Split 101 | 010: Left = 5, Right = 2.",
          explain: "101 is 5; 010 is 2 → Octal 52.",
          analogy: "5 and 2 → 52.",
          example: "101 | 010 → 52",
          prompt: "Convert Binary 101010 into Octal.",
          clue: "Left 101 = 5, right 010 = 2.",
          match: "^52$"
        },
        {
          title: "Practice: Binary 110001 to Octal",
          concept: "Split 110 | 001: Left = 6, Right = 1.",
          explain: "110 is 6; 001 is 1 → Octal 61.",
          analogy: "6 and 1 → 61.",
          example: "110 | 001 → 61",
          prompt: "Convert Binary 110001 into Octal.",
          clue: "Left 110 = 6, right 001 = 1.",
          match: "^61$"
        },
        {
          title: "Practice: Binary 111111 to Octal",
          concept: "Split 111 | 111: Both triplets equal 7.",
          explain: "111 is 7, 111 is 7 → Octal 77.",
          analogy: "7 and 7 → 77.",
          example: "111 | 111 → 77",
          prompt: "Convert Binary 111111 into Octal.",
          clue: "Both 3-bit groups are 111 (7).",
          match: "^77$"
        },
        {
          title: "Octal to Binary (Expand to 3 Bits)",
          slides: [
            {
              title: "Slide 1: Turn Each Octal Digit into 3 Bits",
              concept: "3-Bit Expansion: Each Octal digit (0–7) expands into 3 binary boxes [4][2][1] (include leading zeros!).",
              explain: "Example: Octal 5 = 4 + 1 → 101. Example: Octal 2 = 0 + 2 + 0 → 010.",
              analogy: "Each Octal digit becomes a 3-bit triplet.",
              example: "Octal 3  →  011  (2 + 1)\nOctal 6  →  110  (4 + 2)"
            }
          ],
          prompt: "Convert Octal 4 into 3-bit Binary.",
          clue: "In [4][2][1], turn ON 4 and keep 2 and 1 OFF → 100.",
          match: "^100$"
        },
        {
          title: "Practice: Octal 1 to 3-bit Binary",
          concept: "Include Leading Zeros: 1 in 3 bits [4][2][1] is 001.",
          explain: "0 + 0 + 1 = 1 → 001.",
          analogy: "001.",
          example: "Octal 1 → 001",
          prompt: "Convert Octal 1 into 3-bit Binary.",
          clue: "Write 001.",
          match: "^001$"
        },
        {
          title: "Practice: Octal 2 to 3-bit Binary",
          concept: "2 in [4][2][1] is 010.",
          explain: "0 + 2 + 0 = 2 → 010.",
          analogy: "010.",
          example: "Octal 2 → 010",
          prompt: "Convert Octal 2 into 3-bit Binary.",
          clue: "Write 010.",
          match: "^010$"
        },
        {
          title: "Practice: Octal 3 to 3-bit Binary",
          concept: "3 = 2 + 1 → 011.",
          explain: "In [4][2][1], 0 + 2 + 1 = 3 → 011.",
          analogy: "011.",
          example: "Octal 3 → 011",
          prompt: "Convert Octal 3 into 3-bit Binary.",
          clue: "Write 011.",
          match: "^011$"
        },
        {
          title: "Practice: Octal 5 to 3-bit Binary",
          concept: "5 = 4 + 1 → 101.",
          explain: "In [4][2][1], 4 + 0 + 1 = 5 → 101.",
          analogy: "101.",
          example: "Octal 5 → 101",
          prompt: "Convert Octal 5 into 3-bit Binary.",
          clue: "Write 101.",
          match: "^101$"
        },
        {
          title: "Practice: Octal 6 to 3-bit Binary",
          concept: "6 = 4 + 2 → 110.",
          explain: "In [4][2][1], 4 + 2 + 0 = 6 → 110.",
          analogy: "110.",
          example: "Octal 6 → 110",
          prompt: "Convert Octal 6 into 3-bit Binary.",
          clue: "Write 110.",
          match: "^110$"
        },
        {
          title: "Practice: Octal 7 to 3-bit Binary",
          concept: "7 = 4 + 2 + 1 → 111.",
          explain: "All three boxes ON → 111.",
          analogy: "111.",
          example: "Octal 7 → 111",
          prompt: "Convert Octal 7 into 3-bit Binary.",
          clue: "Write 111.",
          match: "^111$"
        },
        {
          title: "2-Digit Octal to 6-Bit Binary",
          slides: [
            {
              title: "Slide 1: Expand Each Octal Digit to 3 Bits",
              concept: "Side-by-Side Triplets: Turn the left digit into 3 bits, turn the right digit into 3 bits, and join all 6 bits together.",
              explain: "Example: Octal 15 → 1 becomes 001, 5 becomes 101 → 001101.",
              analogy: "Two 3-bit triplets side-by-side.",
              example: "Octal 15  →  001 | 101  →  001101"
            }
          ],
          prompt: "Convert Octal 12 into 6-bit Binary.",
          clue: "1 = 001, 2 = 010. Join them: 001010.",
          match: "^001010$"
        },
        {
          title: "Practice: Octal 24 to 6-bit Binary",
          concept: "2 = 010, 4 = 100.",
          explain: "Join 010 and 100 → 010100.",
          analogy: "010 | 100.",
          example: "Octal 24 → 010100",
          prompt: "Convert Octal 24 into 6-bit Binary.",
          clue: "Write 010 followed by 100.",
          match: "^010100$"
        },
        {
          title: "Practice: Octal 37 to 6-bit Binary",
          concept: "3 = 011, 7 = 111.",
          explain: "Join 011 and 111 → 011111.",
          analogy: "011 | 111.",
          example: "Octal 37 → 011111",
          prompt: "Convert Octal 37 into 6-bit Binary.",
          clue: "Write 011 followed by 111.",
          match: "^011111$"
        },
        {
          title: "Practice: Octal 53 to 6-bit Binary",
          concept: "5 = 101, 3 = 011.",
          explain: "Join 101 and 011 → 101011.",
          analogy: "101 | 011.",
          example: "Octal 53 → 101011",
          prompt: "Convert Octal 53 into 6-bit Binary.",
          clue: "Write 101 followed by 011.",
          match: "^101011$"
        },
        {
          title: "Practice: Octal 70 to 6-bit Binary",
          concept: "7 = 111, 0 = 000.",
          explain: "Join 111 and 000 → 111000.",
          analogy: "111 | 000.",
          example: "Octal 70 → 111000",
          prompt: "Convert Octal 70 into 6-bit Binary.",
          clue: "Write 111 followed by 000.",
          match: "^111000$"
        }
      ]
    },

    /* =========================================================================
       PART 6: OCTAL <-> HEXADECIMAL (25 TASKS)
       ========================================================================= */
    {
      title: "Octal ⇄ Hexadecimal (25 Tasks)",
      tasks: [
        {
          title: "The Binary Bridge Method",
          slides: [
            {
              title: "Slide 1: Never Convert Octal ↔ Hex Directly!",
              concept: "The Binary Bridge: Octal (groups of 3) and Hex (groups of 4) don't divide evenly into each other. Instead, use Binary as a bridge in the middle!",
              explain: "To go from Octal → Hex:\nStep 1: Expand each Octal digit into 3 binary bits.\nStep 2: Regroup those bits into 4s (from right to left) and convert to Hex!",
              analogy: "Like taking a ferry across a river instead of trying to jump it in one leap.",
              example: "Octal 12:\nStep 1 (3-bit): 001  010  →  001010\nStep 2 (4-bit): 00 | 1010  →  1010 = Hex A"
            },
            {
              title: "Slide 2: Another Worked Example (Octal 17 → Hex)",
              concept: "Follow the Two Steps: Expand to 3-bit triplets, then read the right 4 bits.",
              explain: "Octal 17:\n• 1 = 001, 7 = 111 → Binary 001111.\n• Take the right 4 bits: 1111 = 15 = Hex F! (Left 00 is just 0).",
              analogy: "Octal 17 = Decimal 15 = Hex F.",
              example: "Octal 17 → 001 111 → 1111 → Hex F"
            }
          ],
          prompt: "Convert Octal 12 into Hexadecimal.",
          clue: "Octal 12 = 001 010 in binary. Take the last 4 bits (1010 = 10), which is Hex A.",
          match: "^A$"
        },
        {
          title: "Practice: Octal 13 to Hex",
          concept: "Octal 13 = 001 011 → Binary 1011 (11) = Hex B.",
          explain: "1 is 001, 3 is 011 → 1011 = 11 = B.",
          analogy: "Octal 13 = 11 = Hex B.",
          example: "Octal 13 → 001 011 → 1011 → Hex B",
          prompt: "Convert Octal 13 into Hexadecimal.",
          clue: "11 in Hex is B.",
          match: "^B$"
        },
        {
          title: "Practice: Octal 14 to Hex",
          concept: "Octal 14 = 001 100 → Binary 1100 (12) = Hex C.",
          explain: "1 is 001, 4 is 100 → 1100 = 12 = C.",
          analogy: "Octal 14 = 12 = Hex C.",
          example: "Octal 14 → 001 100 → 1100 → Hex C",
          prompt: "Convert Octal 14 into Hexadecimal.",
          clue: "12 in Hex is C.",
          match: "^C$"
        },
        {
          title: "Practice: Octal 15 to Hex",
          concept: "Octal 15 = 001 101 → Binary 1101 (13) = Hex D.",
          explain: "1 is 001, 5 is 101 → 1101 = 13 = D.",
          analogy: "Octal 15 = 13 = Hex D.",
          example: "Octal 15 → 001 101 → 1101 → Hex D",
          prompt: "Convert Octal 15 into Hexadecimal.",
          clue: "13 in Hex is D.",
          match: "^D$"
        },
        {
          title: "Practice: Octal 16 to Hex",
          concept: "Octal 16 = 001 110 → Binary 1110 (14) = Hex E.",
          explain: "1 is 001, 6 is 110 → 1110 = 14 = E.",
          analogy: "Octal 16 = 14 = Hex E.",
          example: "Octal 16 → 001 110 → 1110 → Hex E",
          prompt: "Convert Octal 16 into Hexadecimal.",
          clue: "14 in Hex is E.",
          match: "^E$"
        },
        {
          title: "Practice: Octal 17 to Hex",
          concept: "Octal 17 = 001 111 → Binary 1111 (15) = Hex F.",
          explain: "1 is 001, 7 is 111 → 1111 = 15 = F.",
          analogy: "Octal 17 = 15 = Hex F.",
          example: "Octal 17 → 001 111 → 1111 → Hex F",
          prompt: "Convert Octal 17 into Hexadecimal.",
          clue: "15 in Hex is F.",
          match: "^F$"
        },
        {
          title: "2-Digit Hex Results from Octal",
          slides: [
            {
              title: "Slide 1: Regrouping 6 Bits into 2 + 4 Bits",
              concept: "2-Digit Hex Output: When the left two bits aren't zero, they form the first Hex digit!",
              explain: "Example: Octal 20:\n• 2 = 010, 0 = 000 → Binary 010000.\n• Split from right into 4s: 01 | 0000.\n• Left (01) = 1, Right (0000) = 0 → Hex 10!",
              analogy: "Always group 4 bits starting from the RIGHT.",
              example: "Octal 20 → 010 000 → 01 | 0000 → Hex 10"
            }
          ],
          prompt: "Convert Octal 20 into Hexadecimal.",
          clue: "Octal 20 is 16 in decimal, which is 10 in Hex.",
          match: "^10$"
        },
        {
          title: "Practice: Octal 22 to Hex",
          concept: "Octal 22 → 010 010 → 01 | 0010 → Hex 12.",
          explain: "Left is 1, right 0010 is 2 → Hex 12.",
          analogy: "Octal 22 = 18 = Hex 12.",
          example: "Octal 22 → 010 010 → 01 | 0010 → Hex 12",
          prompt: "Convert Octal 22 into Hexadecimal.",
          clue: "12.",
          match: "^12$"
        },
        {
          title: "Practice: Octal 32 to Hex",
          concept: "Octal 32 → 011 010 → 01 | 1010 → Hex 1A.",
          explain: "Left (01) = 1, right (1010) = 10 (A) → Hex 1A.",
          analogy: "Octal 32 = 26 = Hex 1A.",
          example: "Octal 32 → 011 010 → 01 | 1010 → Hex 1A",
          prompt: "Convert Octal 32 into Hexadecimal.",
          clue: "Left is 1, right 1010 is A → 1A.",
          match: "^1A$"
        },
        {
          title: "Practice: Octal 37 to Hex",
          concept: "Octal 37 → 011 111 → 01 | 1111 → Hex 1F.",
          explain: "Left (01) = 1, right (1111) = 15 (F) → Hex 1F.",
          analogy: "Octal 37 = 31 = Hex 1F.",
          example: "Octal 37 → 011 111 → 01 | 1111 → Hex 1F",
          prompt: "Convert Octal 37 into Hexadecimal.",
          clue: "Left is 1, right 1111 is F → 1F.",
          match: "^1F$"
        },
        {
          title: "Practice: Octal 40 to Hex",
          concept: "Octal 40 → 100 000 → 10 | 0000 → Hex 20.",
          explain: "Left (10) = 2, right (0000) = 0 → Hex 20.",
          analogy: "Octal 40 = 32 = Hex 20.",
          example: "Octal 40 → 100 000 → 10 | 0000 → Hex 20",
          prompt: "Convert Octal 40 into Hexadecimal.",
          clue: "20.",
          match: "^20$"
        },
        {
          title: "Practice: Octal 77 to Hex",
          concept: "Octal 77 → 111 111 → 11 | 1111 → Hex 3F.",
          explain: "Left (11) = 3, right (1111) = 15 (F) → Hex 3F.",
          analogy: "Octal 77 = 63 = Hex 3F.",
          example: "Octal 77 → 111 111 → 11 | 1111 → Hex 3F",
          prompt: "Convert Octal 77 into Hexadecimal.",
          clue: "Left 11 = 3, right 1111 = F → 3F.",
          match: "^3F$"
        },
        {
          title: "Hexadecimal to Octal (Reverse Bridge)",
          slides: [
            {
              title: "Slide 1: Hex → 4-Bit Binary → 3-Bit Octal",
              concept: "Reverse Binary Bridge:\nStep 1: Expand each Hex digit into 4 binary bits.\nStep 2: Regroup into 3-bit triplets (from right to left) and convert to Octal!",
              explain: "Example: Hex A:\n• Hex A = 1010 (4 bits).\n• Group into 3s from right: 001 | 010.\n• 001 = 1, 010 = 2 → Octal 12!",
              analogy: "4-bit blocks split into 3-bit triplets.",
              example: "Hex A → 1010 → 001 | 010 → Octal 12"
            }
          ],
          prompt: "Convert Hexadecimal A into Octal.",
          clue: "Hex A = 1010 → 001 010 → 1 and 2 → 12.",
          match: "^12$"
        },
        {
          title: "Practice: Hex B to Octal",
          concept: "Hex B = 1011 → 001 | 011 → Octal 13.",
          explain: "001 = 1, 011 = 3 → Octal 13.",
          analogy: "Hex B = 11 = Octal 13.",
          example: "Hex B → 1011 → 001 | 011 → Octal 13",
          prompt: "Convert Hexadecimal B into Octal.",
          clue: "13.",
          match: "^13$"
        },
        {
          title: "Practice: Hex C to Octal",
          concept: "Hex C = 1100 → 001 | 100 → Octal 14.",
          explain: "001 = 1, 100 = 4 → Octal 14.",
          analogy: "Hex C = 12 = Octal 14.",
          example: "Hex C → 1100 → 001 | 100 → Octal 14",
          prompt: "Convert Hexadecimal C into Octal.",
          clue: "14.",
          match: "^14$"
        },
        {
          title: "Practice: Hex D to Octal",
          concept: "Hex D = 1101 → 001 | 101 → Octal 15.",
          explain: "001 = 1, 101 = 5 → Octal 15.",
          analogy: "Hex D = 13 = Octal 15.",
          example: "Hex D → 1101 → 001 | 101 → Octal 15",
          prompt: "Convert Hexadecimal D into Octal.",
          clue: "15.",
          match: "^15$"
        },
        {
          title: "Practice: Hex E to Octal",
          concept: "Hex E = 1110 → 001 | 110 → Octal 16.",
          explain: "001 = 1, 110 = 6 → Octal 16.",
          analogy: "Hex E = 14 = Octal 16.",
          example: "Hex E → 1110 → 001 | 110 → Octal 16",
          prompt: "Convert Hexadecimal E into Octal.",
          clue: "16.",
          match: "^16$"
        },
        {
          title: "Practice: Hex F to Octal",
          concept: "Hex F = 1111 → 001 | 111 → Octal 17.",
          explain: "001 = 1, 111 = 7 → Octal 17.",
          analogy: "Hex F = 15 = Octal 17.",
          example: "Hex F → 1111 → 001 | 111 → Octal 17",
          prompt: "Convert Hexadecimal F into Octal.",
          clue: "17.",
          match: "^17$"
        },
        {
          title: "Practice: Hex 10 to Octal",
          concept: "Hex 10 = 0001 0000 → 010 | 000 → Octal 20.",
          explain: "010 = 2, 000 = 0 → Octal 20.",
          analogy: "Hex 10 = 16 = Octal 20.",
          example: "Hex 10 → 0001 0000 → 010 | 000 → Octal 20",
          prompt: "Convert Hexadecimal 10 into Octal.",
          clue: "20.",
          match: "^20$"
        },
        {
          title: "Practice: Hex 12 to Octal",
          concept: "Hex 12 = 0001 0010 → 010 | 010 → Octal 22.",
          explain: "010 = 2, 010 = 2 → Octal 22.",
          analogy: "Hex 12 = 18 = Octal 22.",
          example: "Hex 12 → 0001 0010 → 010 | 010 → Octal 22",
          prompt: "Convert Hexadecimal 12 into Octal.",
          clue: "22.",
          match: "^22$"
        },
        {
          title: "Practice: Hex 18 to Octal",
          concept: "Hex 18 = 0001 1000 → 011 | 000 → Octal 30.",
          explain: "011 = 3, 000 = 0 → Octal 30.",
          analogy: "Hex 18 = 24 = Octal 30.",
          example: "Hex 18 → 0001 1000 → 011 | 000 → Octal 30",
          prompt: "Convert Hexadecimal 18 into Octal.",
          clue: "30.",
          match: "^30$"
        },
        {
          title: "Practice: Hex 1A to Octal",
          concept: "Hex 1A = 0001 1010 → 011 | 010 → Octal 32.",
          explain: "011 = 3, 010 = 2 → Octal 32.",
          analogy: "Hex 1A = 26 = Octal 32.",
          example: "Hex 1A → 0001 1010 → 011 | 010 → Octal 32",
          prompt: "Convert Hexadecimal 1A into Octal.",
          clue: "32.",
          match: "^32$"
        },
        {
          title: "Practice: Hex 1F to Octal",
          concept: "Hex 1F = 0001 1111 → 011 | 111 → Octal 37.",
          explain: "011 = 3, 111 = 7 → Octal 37.",
          analogy: "Hex 1F = 31 = Octal 37.",
          example: "Hex 1F → 0001 1111 → 011 | 111 → Octal 37",
          prompt: "Convert Hexadecimal 1F into Octal.",
          clue: "37.",
          match: "^37$"
        },
        {
          title: "Practice: Hex 20 to Octal",
          concept: "Hex 20 = 0010 0000 → 100 | 000 → Octal 40.",
          explain: "100 = 4, 000 = 0 → Octal 40.",
          analogy: "Hex 20 = 32 = Octal 40.",
          example: "Hex 20 → 0010 0000 → 100 | 000 → Octal 40",
          prompt: "Convert Hexadecimal 20 into Octal.",
          clue: "40.",
          match: "^40$"
        },
        {
          title: "Practice: Hex 3F to Octal",
          concept: "Hex 3F = 0011 1111 → 111 | 111 → Octal 77.",
          explain: "111 = 7, 111 = 7 → Octal 77.",
          analogy: "Hex 3F = 63 = Octal 77.",
          example: "Hex 3F → 0011 1111 → 111 | 111 → Octal 77",
          prompt: "Convert Hexadecimal 3F into Octal.",
          clue: "77.",
          match: "^77$"
        }
      ]
    }
  ]
};
