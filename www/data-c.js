const COURSE_C = {
  title: "C",
  badge: "C;",
  bg: "#E0E7FF",
  color: "#4338CA",
  desc: "40 step-by-step tasks covering C types, printf/scanf, conditions, loops, arrays & pointers.",
  modules: [
    {
      title: "Program Structure & Types",
      tasks: [
        { title: "Integer Variables", explain: "int declares whole-number variables. Every C statement ends with ;", analogy: "Declaring cargo before loading a ship.", example: "int {item} = {NUM};", prompt: "Declare an int named '{item}' equal to {NUM}.", clue: "Start with int and end with a semicolon ;", match: "int\\s+{item}\\s*=\\s*{NUM}\\s*;" },
        { title: "Float Decimals", explain: "float stores numbers with decimal points.", analogy: "A precision digital scale.", example: "float rate = 4.5;", prompt: "Declare a float named 'rate' equal to 7.5.", clue: "Use float rate = 7.5;", match: "float\\s+rate\\s*=\\s*7\\.5\\s*;" },
        { title: "Single Characters", explain: "char stores one character wrapped in single quotes ' '.", analogy: "A single Scrabble letter tile.", example: "char grade = 'A';", prompt: "Declare a char named 'code' equal to 'S'.", clue: "Use single quotes around 'S' and end with ;", match: "char\\s+code\\s*=\\s*'S'\\s*;" },
        { title: "Constants", explain: "const locks a variable so its value can never change.", analogy: "Carving a number in stone.", example: "const int MAX = {NUM};", prompt: "Declare 'const int LIMIT = {NUM};'.", clue: "Put const before int and end with a semicolon.", match: "const\\s+int\\s+LIMIT\\s*=\\s*{NUM}\\s*;" }
      ]
    },
    {
      title: "Output with printf",
      tasks: [
        { title: "Printing Text", explain: "printf() prints double-quoted text to the console.", analogy: "Sending a message to the screen.", example: 'printf("{WORD}");', prompt: "Use printf to print \"{WORD}\".", clue: "Use double quotes inside printf() and end with ;", match: "printf\\s*\\(\\s*\"{WORD}\"\\s*\\)\\s*;" },
        { title: "Printing Integers", explain: "%d is the format placeholder for an int variable inside printf.", analogy: "An empty seat reserved for an integer.", example: 'printf("%d", {item});', prompt: "Print integer variable '{item}' using \"%d\" in printf.", clue: "Format: printf(\"%d\", {item});", match: "printf\\s*\\(\\s*\"%d\"\\s*,\\s*{item}\\s*\\)\\s*;" },
        { title: "Printing Floats", explain: "%f prints decimal float variables.", analogy: "A placeholder shaped for decimal numbers.", example: 'printf("%f", rate);', prompt: "Print float variable 'rate' using \"%f\" in printf.", clue: "Use \"%f\" as the first argument to printf.", match: "printf\\s*\\(\\s*\"%f\"\\s*,\\s*rate\\s*\\)\\s*;" },
        { title: "Newline Escape", explain: "\\n inside quotes moves the cursor to a fresh line.", analogy: "Pressing Enter inside a string.", example: 'printf("{WORD}\\n");', prompt: "Print \"{WORD}\\n\" using printf.", clue: "Put \\n inside the double quotes.", match: "printf\\s*\\(\\s*\"{WORD}\\\\n\"\\s*\\)\\s*;" }
      ]
    },
    {
      title: "User Input & Operators",
      tasks: [
        { title: "Reading Input with scanf", explain: "scanf(\"%d\", &x) reads an integer into variable x using & (address-of).", analogy: "& tells C the exact mailbox address to drop the number into.", example: 'scanf("%d", &{item});', prompt: "Read an integer into '{item}' using scanf.", clue: "Don't forget the & symbol before {item}.", match: "scanf\\s*\\(\\s*\"%d\"\\s*,\\s*&{item}\\s*\\)\\s*;" },
        { title: "Arithmetic Math", explain: "+, -, *, / perform standard math in C.", analogy: "Crunching numbers at hardware speed.", example: "int sum = {NUM} + 5;", prompt: "Declare 'int total = {NUM} * 2;'.", clue: "Include int, *, and trailing semicolon.", match: "int\\s+total\\s*=\\s*{NUM}\\s*\\*\\s*2\\s*;" },
        { title: "Increment Operator", explain: "++ adds 1 to an integer variable immediately.", analogy: "Clicking a tally counter once.", example: "{item}++;", prompt: "Increment '{item}' by 1 using ++.", clue: "Write {item}++;", match: "{item}\\s*\\+\\+\\s*;" },
        { title: "Modulo Remainder", explain: "% finds the remainder after integer division.", analogy: "Leftover items after grouping.", example: "int r = 10 % 3;", prompt: "Declare 'int rem = 17 % 5;'.", clue: "Use % and end with a semicolon.", match: "int\\s+rem\\s*=\\s*17\\s*%\\s*5\\s*;" }
      ]
    },
    {
      title: "Conditions (if / else)",
      tasks: [
        { title: "Parentheses Condition", explain: "C requires parentheses ( ) around every if condition.", analogy: "A test gate before entering curly braces.", example: 'if ({item} > 5) {\n  printf("Yes");\n}', prompt: "Write if ({item} > 0) { printf(\"Ok\"); }", clue: "Wrap condition in ( ) and body in { }.", match: "if\\s*\\(\\s*{item}\\s*>\\s*0\\s*\\)\\s*\\{[\\s\\S]*printf\\s*\\(\\s*\"Ok\"\\s*\\)\\s*;[\\s\\S]*\\}" },
        { title: "Equality Check", explain: "== tests equality inside if().", analogy: "Checking if two keys match.", example: 'if (x == {NUM}) { printf("Hit"); }', prompt: "Write if (x == {NUM}) { printf(\"Hit\"); }", clue: "Use == inside parentheses.", match: "if\\s*\\(\\s*x\\s*==\\s*{NUM}\\s*\\)\\s*\\{[\\s\\S]*printf\\s*\\(\\s*\"Hit\"\\s*\\)\\s*;[\\s\\S]*\\}" },
        { title: "Logical AND (&&)", explain: "C uses && for logical AND between two conditions.", analogy: "Both locks must open to pass.", example: "if (a > 0 && b > 0) { }", prompt: "Write 'if (a > 1 && b > 1) { }'.", clue: "Use && between the two comparisons.", match: "if\\s*\\(\\s*a\\s*>\\s*1\\s*&&\\s*b\\s*>\\s*1\\s*\\)\\s*\\{\\s*\\}" },
        { title: "Logical OR (||)", explain: "C uses || for logical OR (either condition true).", analogy: "Either door lets you enter.", example: "if (x == 1 || x == 2) { }", prompt: "Write 'if (x == 0 || y == 0) { }'.", clue: "Use || between conditions.", match: "if\\s*\\(\\s*x\\s*==\\s*0\\s*\\|\\|\\s*y\\s*==\\s*0\\s*\\)\\s*\\{\\s*\\}" }
      ]
    },
    {
      title: "While & For Loops",
      tasks: [
        { title: "While Loop", explain: "while(condition) repeats the block while true.", analogy: "Repeating a drill until tired.", example: "while ({item} > 0) {\n  {item}--;\n}", prompt: "Write 'while ({item} > 0) { {item}--; }'.", clue: "Remember semicolons inside braces.", match: "while\\s*\\(\\s*{item}\\s*>\\s*0\\s*\\)\\s*\\{[\\s\\S]*{item}\\s*--\\s*;[\\s\\S]*\\}" },
        { title: "For Loop Header", explain: "for(init; condition; step) packs loop control into one header.", analogy: "Setting start, finish line, and stride length.", example: "for (int i = 0; i < 5; i++) { }", prompt: "Write 'for (int i = 0; i < 3; i++) { }'.", clue: "Separate the 3 parts inside ( ) with semicolons.", match: "for\\s*\\(\\s*int\\s+i\\s*=\\s*0\\s*;\\s*i\\s*<\\s*3\\s*;\\s*i\\+\\+\\s*\\)\\s*\\{\\s*\\}" },
        { title: "Printing in a Loop", explain: "Combine for() and printf() to repeat output.", analogy: "Stamping numbers onto tickets.", example: 'for (int i = 0; i < 3; i++) {\n  printf("%d", i);\n}', prompt: "Inside 'for (int i = 0; i < 4; i++)', call printf(\"%d\", i);", clue: "Put printf(\"%d\", i); inside the curly braces.", match: "for\\s*\\(\\s*int\\s+i\\s*=\\s*0\\s*;\\s*i\\s*<\\s*4\\s*;\\s*i\\+\\+\\s*\\)\\s*\\{[\\s\\S]*printf\\s*\\(\\s*\"%d\"\\s*,\\s*i\\s*\\)\\s*;[\\s\\S]*\\}" },
        { title: "Break Statement", explain: "break exits a C loop immediately.", analogy: "Hitting the emergency stop button.", example: "if (i == 2) { break; }", prompt: "Write 'if (i == 5) { break; }'.", clue: "End break with a semicolon inside braces.", match: "if\\s*\\(\\s*i\\s*==\\s*5\\s*\\)\\s*\\{[\\s\\S]*break\\s*;[\\s\\S]*\\}" }
      ]
    },
    {
      title: "Arrays",
      tasks: [
        { title: "Declaring an Array", explain: "int arr[3] reserves 3 integer slots side-by-side in memory.", analogy: "A pillbox with 3 numbered compartments.", example: "int scores[3] = {10, 20, 30};", prompt: "Declare 'int nums[2] = {5, 10};'.", clue: "Use square brackets for size and curly braces for values.", match: "int\\s+nums\\s*\\[\\s*2\\s*\\]\\s*=\\s*\\{\\s*5\\s*,\\s*10\\s*\\}\\s*;" },
        { title: "Reading Array Index", explain: "Array indexing starts at 0 in C.", analogy: "Opening compartment #0.", example: "nums[0]", prompt: "Access the first element of 'nums' (index 0) and end with ;", clue: "Write nums[0];", match: "nums\\s*\\[\\s*0\\s*\\]\\s*;" },
        { title: "Updating Array Slot", explain: "Assign a new value to a specific index slot.", analogy: "Replacing the item in slot 1.", example: "nums[1] = {NUM};", prompt: "Set 'nums[1]' equal to {NUM};", clue: "Write nums[1] = {NUM};", match: "nums\\s*\\[\\s*1\\s*\\]\\s*=\\s*{NUM}\\s*;" },
        { title: "Character String Array", explain: "C strings are char arrays ending with a null terminator.", analogy: "Letter tiles lined up in a tray.", example: 'char word[] = "{WORD}";', prompt: "Declare 'char tag[] = \"{WORD}\";'.", clue: "Use char tag[] and double quotes.", match: "char\\s+tag\\s*\\[\\s*\\]\\s*=\\s*\"{WORD}\"\\s*;" }
      ]
    },
    {
      title: "Functions",
      tasks: [
        { title: "Void Function", explain: "void functions perform an action without returning a value.", analogy: "An announcement speaker that only talks.", example: 'void ping() {\n  printf("{WORD}");\n}', prompt: "Write 'void hello() { printf(\"{WORD}\"); }'.", clue: "Start with void and end printf with ;", match: "void\\s+hello\\s*\\(\\s*\\)\\s*\\{[\\s\\S]*printf\\s*\\(\\s*\"{WORD}\"\\s*\\)\\s*;[\\s\\S]*\\}" },
        { title: "Typed Return Function", explain: "Declare the return type (like int) before the function name.", analogy: "A machine labeled to output whole numbers.", example: "int getNum() {\n  return {NUM};\n}", prompt: "Write 'int getVal() { return {NUM}; }'.", clue: "Include int before getVal() and semicolon after return.", match: "int\\s+getVal\\s*\\(\\s*\\)\\s*\\{[\\s\\S]*return\\s+{NUM}\\s*;[\\s\\S]*\\}" },
        { title: "Function Parameters", explain: "Parameters inside ( ) must declare their C data type.", analogy: "Labeling each input slot on a machine.", example: "int addOne(int x) {\n  return x + 1;\n}", prompt: "Write 'int dbl(int n) { return n * 2; }'.", clue: "Put int n inside parentheses.", match: "int\\s+dbl\\s*\\(\\s*int\\s+n\\s*\\)\\s*\\{[\\s\\S]*return\\s+n\\s*\\*\\s*2\\s*;[\\s\\S]*\\}" },
        { title: "Calling a C Function", explain: "Call a function by name with arguments and a semicolon.", analogy: "Pressing start on a helper routine.", example: "hello();", prompt: "Call the function 'hello();'.", clue: "Include () and ;", match: "hello\\s*\\(\\s*\\)\\s*;" }
      ]
    },
    {
      title: "Pointers Basics",
      tasks: [
        { title: "Memory Address (&)", explain: "&var gets the RAM memory address where a variable lives.", analogy: "Finding the house number of a variable.", example: "&{item}", prompt: "Write the address-of expression for '{item}' ending with ;", clue: "Put & directly before {item}.", match: "&{item}\\s*;" },
        { title: "Pointer Declaration (*)", explain: "int *ptr declares a pointer that stores the memory address of an int.", analogy: "A sticky note holding someone's street address.", example: "int *ptr = &{item};", prompt: "Declare 'int *p = &{item};'.", clue: "Use * before p and & before {item}.", match: "int\\s*\\*\\s*p\\s*=\\s*&{item}\\s*;" },
        { title: "Dereferencing (*ptr)", explain: "*ptr reads or changes the value stored at that memory address.", analogy: "Visiting the house at that address to see who is inside.", example: "*p = {NUM};", prompt: "Set the value pointed to by 'p' equal to {NUM};", clue: "Write *p = {NUM};", match: "\\*\\s*p\\s*=\\s*{NUM}\\s*;" },
        { title: "Null Pointer", explain: "Initialize unused pointers to NULL for safety.", analogy: "Leaving an address field blank instead of writing a random house.", example: "int *ptr = NULL;", prompt: "Declare 'int *ptr = NULL;'.", clue: "Capitalize NULL and end with ;", match: "int\\s*\\*\\s*ptr\\s*=\\s*NULL\\s*;" }
      ]
    },
    {
      title: "Structures (struct)",
      tasks: [
        { title: "Defining a Struct", explain: "struct groups different variables under one custom record.", analogy: "An ID card holding name, age, and score together.", example: "struct Card {\n  int id;\n};", prompt: "Define 'struct Item { int count; };'.", clue: "Remember the semicolon after the closing brace };", match: "struct\\s+Item\\s*\\{[\\s\\S]*int\\s+count\\s*;[\\s\\S]*\\}\\s*;" },
        { title: "Creating Struct Variable", explain: "Declare a variable using your struct type.", analogy: "Printing a blank ID card.", example: "struct Item box;", prompt: "Declare a 'struct Item' variable named 'box;'.", clue: "Write struct Item box;", match: "struct\\s+Item\\s+box\\s*;" },
        { title: "Dot Member Access", explain: "Use a dot (.) to access fields inside a struct.", analogy: "Pointing to a specific line on an ID card.", example: "box.count = {NUM};", prompt: "Set 'box.count' equal to {NUM};", clue: "Use box.count = {NUM};", match: "box\\.count\\s*=\\s*{NUM}\\s*;" },
        { title: "Printing Struct Field", explain: "Pass a struct field into printf like any normal variable.", analogy: "Reading the score line off a card.", example: 'printf("%d", box.count);', prompt: "Print 'box.count' using \"%d\" in printf.", clue: "Format: printf(\"%d\", box.count);", match: "printf\\s*\\(\\s*\"%d\"\\s*,\\s*box\\.count\\s*\\)\\s*;" }
      ]
    },
    {
      title: "C Capstone",
      tasks: [
        { title: "Main Entry Return", explain: "main() returns 0 to tell the OS the program succeeded.", analogy: "Giving a thumbs-up at the finish line.", example: "int main() {\n  return 0;\n}", prompt: "Write 'int main() { return 0; }'.", clue: "Include int main(), braces, and return 0;", match: "int\\s+main\\s*\\(\\s*\\)\\s*\\{[\\s\\S]*return\\s+0\\s*;[\\s\\S]*\\}" },
        { title: "Swap Values Logic", explain: "Use a temp variable to swap two integers cleanly.", analogy: "Using a third empty cup to swap tea and coffee.", example: "int temp = a; a = b; b = temp;", prompt: "Declare 'int temp = a;' ending with ;", clue: "Write int temp = a;", match: "int\\s+temp\\s*=\\s*a\\s*;" },
        { title: "Sizeof Operator", explain: "sizeof() checks how many bytes a type takes in RAM.", analogy: "Weighing how heavy a data type is.", example: "sizeof(int)", prompt: "Call 'sizeof(int);' ending with a semicolon.", clue: "Write sizeof(int);", match: "sizeof\\s*\\(\\s*int\\s*\\)\\s*;" },
        { title: "Complete C Helper", explain: "Write a clean typed function that checks a threshold.", analogy: "Combining C types, conditions, and return.", example: "int pass(int s) { if (s >= 50) { return 1; } return 0; }", prompt: "Write 'int ok(int x) { return x + {NUM}; }'.", clue: "Combine typed parameter int x with return x + {NUM};", match: "int\\s+ok\\s*\\(\\s*int\\s+x\\s*\\)\\s*\\{[\\s\\S]*return\\s+x\\s*\\+\\s*{NUM}\\s*;[\\s\\S]*\\}" }
      ]
    }
  ]
};
