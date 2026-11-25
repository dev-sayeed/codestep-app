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
          example: "
