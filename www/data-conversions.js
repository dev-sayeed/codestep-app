const COURSE_CONVERSIONS = {
  title: "Conversions",
  badge: "01⇄F",
  bg: "#CCFBF1",
  color: "#0F766E",
  desc: "Master Binary, Decimal, Hexadecimal & Octal conversions in focused parts.",
  noTheme: true,
  modules: [
    {
      title: "Binary ⇄ Decimal (Base 2 & Base 10)",
      tasks: [
        {
          title: "What is a Number Base?",
          concept: "Base (Radix): The number of unique digits a system uses. Humans count in Base-10 (digits 0–9), while computers use Base-2 (only 0 and 1).",
          explain: "Every digit position in Binary doubles in value from right to left: 1, 2, 4, 8, 16, 32...",
          analogy: "Think of binary bits like light switches: 1 means ON (add that switch's value), 0 means OFF (ignore it).",
          example: "Binary:   1   0   1\nWeights:  4 + 0 + 1  =  5 (Decimal)",
          prompt: "Convert Binary 11 into Decimal.",
          clue: "Right bit = 1, left bit = 2. Both switches are ON (2 + 1).",
          match: "^3$"
        },
        {
          title: "3-Bit Binary to Decimal",
          concept: "Bit (Binary Digit): A single 0 or 1 in binary. Three bits have place weights 4, 2, and 1 from left to right.",
          explain: "Multiply each bit by its place weight (4, 2, 1) and add the ON positions together.",
          analogy: "Like having a ₹4 coin, a ₹2 coin, and a ₹1 coin—only count the coins flipped heads-up (1).",
          example: "Binary:   1   1   0\nWeights:  4 + 2 + 0  =  6 (Decimal)",
          prompt: "Convert Binary 100 into Decimal.",
          clue: "Only the 4-weight switch is ON; the 2 and 1 switches are OFF.",
          match: "^4$"
        },
        {
          title: "All-Ones Pattern",
          concept: "Max Value of Bits: When all bits are 1, add every place weight together.",
          explain: "For 3 bits (weights 4, 2, 1), 111 equals 4 + 2 + 1 = 7.",
          analogy: "Turning on every switch on a 3-switch power board.",
          example: "Binary:   1   1   1\nWeights:  4 + 2 + 1  =  7 (Decimal)",
          prompt: "Convert Binary 111 into Decimal.",
          clue: "Add 4 + 2 + 1.",
          match: "^7$"
        },
        {
          title: "4-Bit Nibble Weights",
          concept: "Nibble: A group of 4 binary bits. Its place weights from left to right are 8, 4, 2, 1.",
          explain: "Adding a fourth bit on the left introduces the 8-place weight.",
          analogy: "Adding an ₹8 note next to your ₹4, ₹2, and ₹1 coins.",
          example: "Binary:   1   0   1   0\nWeights:  8 + 0 + 2 + 0  =  10 (Decimal)",
          prompt: "Convert Binary 1001 into Decimal.",
          clue: "The 8-bit and 1-bit are ON (8 + 1).",
          match: "^9$"
        },
        {
          title: "Reading 4-Bit Binary",
          concept: "Zero Placeholders: A 0 bit holds a column's position so higher bits keep their doubled weight.",
          explain: "In 1100, the 8 and 4 positions are ON while 2 and 1 are OFF.",
          analogy: "Just like the 0 in 20 keeps the 2 in the tens place.",
          example: "Binary:   1   1   0   0\nWeights:  8 + 4 + 0 + 0  =  12 (Decimal)",
          prompt: "Convert Binary 1110 into Decimal.",
          clue: "Add the weights for 8 + 4 + 2.",
          match: "^14$"
        },
        {
          title: "Max 4-Bit Value",
          concept: "4-Bit Ceiling: Four ON bits (1111) equal 8 + 4 + 2 + 1 = 15.",
          explain: "15 is the largest number a single 4-bit nibble can store.",
          analogy: "Maxing out a 4-digit binary counter.",
          example: "Binary:   1   1   1   1\nWeights:  8 + 4 + 2 + 1  =  15 (Decimal)",
          prompt: "Convert Binary 1111 into Decimal.",
          clue: "Sum 8 + 4 + 2 + 1.",
          match: "^15$"
        },
        {
          title: "Decimal to Binary (Subtraction Method)",
          concept: "Greedy Bit Packing: Pick the largest binary weight (8, 4, 2, 1) that fits into your decimal number, mark 1, and subtract.",
          explain: "To convert Decimal 6: 4 fits (mark 1, 2 left), 2 fits (mark 1, 0 left), 1 doesn't fit (mark 0) → 110.",
          analogy: "Making exact change using the largest bills first.",
          example: "Decimal 5 = 4 + 1  →  101 (Binary)",
          prompt: "Convert Decimal 3 into Binary.",
          clue: "3 = 2 + 1 (2-bit ON, 1-bit ON).",
          match: "^0?11$"
        },
        {
          title: "Decimal 6 to Binary",
          concept: "Powers of 2: Exact powers of 2 (1, 2, 4, 8, 16) always have a single 1 followed by zeros.",
          explain: "Decimal 8 is 1000 in binary. Decimal 6 is 4 + 2, which is 110.",
          analogy: "Like 100 in decimal—one 1 and trailing zeros.",
          example: "Decimal 8 = 1000\nDecimal 6 = 4 + 2 = 110",
          prompt: "Convert Decimal 6 into Binary.",
          clue: "Which switches add up to 6 using 4, 2, and 1?",
          match: "^0?110$"
        },
        {
          title: "Decimal 10 to Binary",
          concept: "4-Bit Conversion: Break any number from 8 to 15 into 8 + remaining bits.",
          explain: "10 = 8 + 2. Turn ON the 8-bit and 2-bit: 1010.",
          analogy: "8 + 0 + 2 + 0 = 10.",
          example: "Decimal 11 = 8 + 2 + 1  →  1011",
          prompt: "Convert Decimal 10 into Binary.",
          clue: "Turn ON the 8 and 2 positions in 8-4-2-1.",
          match: "^1010$"
        },
        {
          title: "Decimal 13 to Binary",
          concept: "Odd vs Even Check: Every odd decimal number ends with 1 in binary; every even number ends with 0.",
          explain: "13 is odd, so its last bit must be 1. 13 = 8 + 4 + 1 → 1101.",
          analogy: "The 1-bit is the only odd weight in binary.",
          example: "Decimal 12 (even) = 1100\nDecimal 13 (odd)  = 1101",
          prompt: "Convert Decimal 13 into Binary.",
          clue: "13 = 8 + 4 + 1.",
          match: "^1101$"
        },
        {
          title: "5-Bit Binary (16-Weight)",
          concept: "Fifth Bit Weight: Adding a 5th bit on the left doubles 8 to 16 (16, 8, 4, 2, 1).",
          explain: "Binary 10000 equals Decimal 16.",
          analogy: "Each step left always doubles the previous column.",
          example: "Binary:   1   0   0   1   0\nWeights: 16 + 0 + 0 + 2 + 0 = 18",
          prompt: "Convert Binary 10001 into Decimal.",
          clue: "Add the 16-bit and the 1-bit.",
          match: "^17$"
        },
        {
          title: "Decimal 20 to Binary",
          concept: "5-Bit Packing: Break numbers 16–31 into 16 + remaining weights (8, 4, 2, 1).",
          explain: "20 = 16 + 4. Turn ON the 16-bit and 4-bit: 10100.",
          analogy: "16 + 0 + 4 + 0 + 0 = 20.",
          example: "Decimal 20 = 16 + 4  →  10100",
          prompt: "Convert Decimal 20 into Binary.",
          clue: "Use 5 bits (16, 8, 4, 2, 1) with 16 and 4 ON.",
          match: "^10100$"
        }
      ]
    },
    {
      title: "Decimal ⇄ Hexadecimal (Base 10 & Base 16)",
      tasks: [
        {
          title: "Why Hexadecimal Uses Letters",
          concept: "Hexadecimal (Base-16): Uses 16 symbols: 0–9 for values 0 to 9, and letters A–F for values 10 to 15.",
          explain: "Because single digits stop at 9, Hex uses A=10, B=11, C=12, D=13, E=14, F=15.",
          analogy: "Like playing cards where Jack, Queen, King represent numbers above 10.",
          example: "Decimal 10 = A\nDecimal 11 = B\nDecimal 15 = F",
          prompt: "Convert Decimal 10 into Hexadecimal.",
          clue: "What is the very first letter after 9 in Hex?",
          match: "^A$"
        },
        {
          title: "Hex Letters C, D, E, F",
          concept: "Hex Alphabet Mapping: Count forward from A=10: B=11, C=12, D=13, E=14, F=15.",
          explain: "F is the highest single digit in Hexadecimal, representing 15.",
          analogy: "A=10, C=12, F=15—memorizing these three anchors makes any letter instant.",
          example: "Decimal 12 = C\nDecimal 14 = E",
          prompt: "Convert Decimal 15 into Hexadecimal.",
          clue: "15 is the maximum single Hex digit (the 6th letter).",
          match: "^F$"
        },
        {
          title: "Hex Letter to Decimal",
          concept: "Reverse Hex Lookup: Replace A–F with its 10–15 decimal value.",
          explain: "Hex C sits two steps past A (10), so C = 12.",
          analogy: "Decoding a secret letter back into its number.",
          example: "Hex B = 11\nHex D = 13",
          prompt: "Convert Hexadecimal C into Decimal.",
          clue: "Count from A=10, B=11, C=...",
          match: "^12$"
        },
        {
          title: "Hex Place Values (16s & 1s)",
          concept: "Base-16 Place Weight: In a 2-digit Hex number, the left digit counts groups of 16, and the right digit counts 1s.",
          explain: "Hex 10 means (1 × 16) + (0 × 1) = 16 in Decimal—not ten!",
          analogy: "Like cartons holding 16 eggs each plus loose eggs.",
          example: "Hex 10  = (1 × 16) + 0 = 16\nHex 15  = (1 × 16) + 5 = 21",
          prompt: "Convert Hexadecimal 10 into Decimal.",
          clue: "1 group of 16 plus 0 ones.",
          match: "^16$"
        },
        {
          title: "Two-Digit Hex to Decimal",
          concept: "Multiply & Add: Multiply the left Hex digit by 16, then add the right digit.",
          explain: "For Hex 1A: left digit 1 × 16 = 16, right digit A = 10 → 16 + 10 = 26.",
          analogy: "1 full carton of 16 plus 10 extra items.",
          example: "Hex 1A = (1 × 16) + 10 = 26",
          prompt: "Convert Hexadecimal 1B into Decimal.",
          clue: "16 + 11 (since B = 11).",
          match: "^27$"
        },
        {
          title: "Higher Hex Tens",
          concept: "Multiples of 16: Hex 20 = 32, Hex 30 = 48.",
          explain: "In Hex 25: (2 × 16) + 5 = 32 + 5 = 37.",
          analogy: "Two cartons of 16 plus 5 loose items.",
          example: "Hex 20 = 2 × 16 = 32\nHex 21 = 32 + 1 = 33",
          prompt: "Convert Hexadecimal 20 into Decimal.",
          clue: "Multiply 2 × 16.",
          match: "^32$"
        },
        {
          title: "Decimal to Hex (Divide by 16)",
          concept: "Division Remainder Rule: Divide the decimal number by 16. The quotient is the left digit; the remainder is the right digit.",
          explain: "For Decimal 18: 18 ÷ 16 = 1 remainder 2 → Hex 12.",
          analogy: "Packing 18 items into boxes of 16 gives 1 full box and 2 left over.",
          example: "Decimal 19 → 19 ÷ 16 = 1 R 3 → Hex 13",
          prompt: "Convert Decimal 17 into Hexadecimal.",
          clue: "17 ÷ 16 gives 1 group of 16 with remainder 1.",
          match: "^11$"
        },
        {
          title: "Decimal to Hex with Letters",
          concept: "Letter Remainders: If the remainder after dividing by 16 is 10–15, write it as A–F.",
          explain: "Decimal 26 ÷ 16 = 1 remainder 10. Since 10 is A, Decimal 26 = Hex 1A.",
          analogy: "1 box of 16 plus A (10) leftover.",
          example: "Decimal 31 → 16 + 15 → Hex 1F",
          prompt: "Convert Decimal 26 into Hexadecimal.",
          clue: "26 = 16 + 10 (replace 10 with its Hex letter).",
          match: "^1A$"
        },
        {
          title: "Binary to Hex Shortcut",
          concept: "4-Bit Grouping: Every 4 binary bits equal exactly ONE Hex digit (since 2⁴ = 16).",
          explain: "Binary 1010 = 10 in decimal = A in Hex.",
          analogy: "Hex is just a compact shorthand for 4-bit binary nibbles.",
          example: "Binary 1111 = 15 = Hex F",
          prompt: "Convert Binary 1010 into Hexadecimal.",
          clue: "First find 1010 in decimal (8 + 2), then write its Hex letter.",
          match: "^A$"
        },
        {
          title: "Byte to Two Hex Digits",
          concept: "8-Bit Byte Split: Split an 8-bit byte into two 4-bit halves and convert each half to Hex.",
          explain: "1111 0000 → left 1111 is F, right 0000 is 0 → Hex F0.",
          analogy: "Two nibbles side-by-side make one CSS color byte (like #FF0000).",
          example: "1111 1111  →  FF (255 in Decimal)",
          prompt: "Convert Binary 11110000 into Hexadecimal.",
          clue: "Left 4 bits (1111) = F, right 4 bits (0000) = 0.",
          match: "^F0$"
        }
      ]
    },
    {
      title: "Decimal ⇄ Octal (Base 10 & Base 8)",
      tasks: [
        {
          title: "What is Octal?",
          concept: "Octal (Base-8): Uses only 8 digits: 0, 1, 2, 3, 4, 5, 6, and 7. There is no 8 or 9 in Octal!",
          explain: "Numbers 0 through 7 look identical in both Decimal and Octal.",
          analogy: "Counting on a cartoon hand that has 4 fingers per hand (8 total).",
          example: "Decimal 7  =  Octal 7",
          prompt: "Convert Decimal 6 into Octal.",
          clue: "Any single digit from 0 to 7 stays the exact same in Octal.",
          match: "^6$"
        },
        {
          title: "Rolling Over at 8",
          concept: "Base-8 Carry: Because Octal stops at 7, Decimal 8 rolls over to Octal 10.",
          explain: "Octal 10 means (1 × 8) + (0 × 1) = 8 in Decimal.",
          analogy: "Like an odometer that flips from 7 straight to 10.",
          example: "Decimal 8  =  Octal 10\nDecimal 9  =  Octal 11",
          prompt: "Convert Decimal 8 into Octal.",
          clue: "1 group of 8 and 0 ones.",
          match: "^10$"
        },
        {
          title: "Octal Place Weights (8s & 1s)",
          concept: "Base-8 Place Weight: In a 2-digit Octal number, the left digit counts 8s and the right digit counts 1s.",
          explain: "Octal 12 = (1 × 8) + 2 = 10 in Decimal.",
          analogy: "1 pack of 8 pencils plus 2 loose pencils = 10 pencils.",
          example: "Octal 14 = (1 × 8) + 4 = 12 (Decimal)",
          prompt: "Convert Octal 12 into Decimal.",
          clue: "Calculate (1 × 8) + 2.",
          match: "^10$"
        },
        {
          title: "Larger Octal to Decimal",
          concept: "Multiply Left Digit by 8: For any 2-digit Octal number AB, Decimal = (A × 8) + B.",
          explain: "Octal 21 = (2 × 8) + 1 = 16 + 1 = 17.",
          analogy: "2 packs of 8 plus 1 extra.",
          example: "Octal 20 = 2 × 8 = 16\nOctal 23 = 16 + 3 = 19",
          prompt: "Convert Octal 20 into Decimal.",
          clue: "Multiply 2 × 8.",
          match: "^16$"
        },
        {
          title: "Octal 25 to Decimal",
          concept: "Step-by-Step Expansion: Multiply the 8s column by 8, then add the 1s column.",
          explain: "Octal 25 = (2 × 8) + 5 = 16 + 5 = 21.",
          analogy: "Two octets (16) plus 5.",
          example: "Octal 25 = 16 + 5 = 21",
          prompt: "Convert Octal 25 into Decimal.",
          clue: "Add 16 + 5.",
          match: "^21$"
        },
        {
          title: "Decimal to Octal (Divide by 8)",
          concept: "Divide by 8 Rule: Divide the decimal number by 8. The quotient is the left digit; the remainder is the right digit.",
          explain: "Decimal 11 ÷ 8 = 1 remainder 3 → Octal 13.",
          analogy: "Grouping 11 items into sets of 8 gives 1 set and 3 left over.",
          example: "Decimal 10 → 10 ÷ 8 = 1 R 2 → Octal 12",
          prompt: "Convert Decimal 11 into Octal.",
          clue: "11 = (1 × 8) + 3.",
          match: "^13$"
        },
        {
          title: "Decimal 15 to Octal",
          concept: "Max 1-Digit Remainder: The largest remainder when dividing by 8 is 7.",
          explain: "Decimal 15 ÷ 8 = 1 remainder 7 → Octal 17.",
          analogy: "One full group of 8 plus 7 remaining.",
          example: "Decimal 15 = 8 + 7 → Octal 17",
          prompt: "Convert Decimal 15 into Octal.",
          clue: "15 = (1 × 8) + 7.",
          match: "^17$"
        },
        {
          title: "Decimal 18 to Octal",
          concept: "Two Groups of 8: Numbers from 16 to 23 start with 2 in Octal.",
          explain: "Decimal 18 ÷ 8 = 2 remainder 2 → Octal 22.",
          analogy: "Two packs of 8 (16) plus 2 left over.",
          example: "Decimal 19 → 16 + 3 → Octal 23",
          prompt: "Convert Decimal 18 into Octal.",
          clue: "18 = (2 × 8) + 2.",
          match: "^22$"
        },
        {
          title: "Binary to Octal (3-Bit Groups)",
          concept: "3-Bit Grouping: Every 3 binary bits equal ONE Octal digit (since 2³ = 8).",
          explain: "Binary 101 = 4 + 0 + 1 = 5 in Octal.",
          analogy: "Just like Hex groups 4 bits, Octal groups 3 bits.",
          example: "Binary 111 = 4 + 2 + 1 = Octal 7",
          prompt: "Convert Binary 110 into Octal.",
          clue: "Calculate 4 + 2 + 0.",
          match: "^6$"
        },
        {
          title: "6-Bit Binary to Octal",
          concept: "Two 3-Bit Triplets: Split 6 binary bits into two groups of 3 bits and convert each triplet.",
          explain: "Binary 001 010 → left triplet 001 = 1, right triplet 010 = 2 → Octal 12.",
          analogy: "Two 3-bit groups side-by-side.",
          example: "001 111  →  Octal 17",
          prompt: "Convert Binary 001011 into Octal.",
          clue: "Left 3 bits (001) = 1, right 3 bits (011) = 3.",
          match: "^13$"
        }
      ]
    }
  ]
};
