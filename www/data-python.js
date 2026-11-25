const COURSE_PYTHON = {
  title: "Python",
  badge: "py",
  bg: "#FEF9C3",
  color: "#A16207",
  desc: "40 step-by-step tasks covering variables, strings, conditions, loops, lists, dicts & functions.",
  modules: [
    {
      title: "Variables & Output",
      tasks: [
        { title: "Printing Text", explain: "print() displays text or values on screen. Text must sit inside quotes.", analogy: "Like speaking into a megaphone.", example: 'print("{WORD}")', prompt: "Print the text '{WORD}'.", clue: "Wrap the word in double or single quotes inside print().", match: "print\\s*\\(\\s*[\"']{WORD}[\"']\\s*\\)" },
        { title: "Number Variables", explain: "Assign a number to a variable name using = without quotes.", analogy: "Putting a value into a labeled box.", example: "{item} = {NUM}", prompt: "Create a variable named '{item}' equal to {NUM}.", clue: "Write name = value without quotes around the number.", match: "{item}\\s*=\\s*{NUM}" },
        { title: "String Variables", explain: "Store text inside a variable by wrapping the value in quotes.", analogy: "Writing a name on a sticky note.", example: 'topic = "{WORD}"', prompt: "Create a variable named 'topic' set to \"{WORD}\".", clue: "Quotes go around the text value, not the variable name.", match: "topic\\s*=\\s*[\"']{WORD}[\"']" },
        { title: "Printing Variables", explain: "Pass a variable name without quotes into print() to display its value.", analogy: "Opening the labeled box to show what's inside.", example: "print({item})", prompt: "Print the variable '{item}' (no quotes).", clue: "Write print({item}) with no quotes.", match: "print\\s*\\(\\s*{item}\\s*\\)" }
      ]
    },
    {
      title: "Math & Operators",
      tasks: [
        { title: "Addition", explain: "+ adds numbers together.", analogy: "Simple calculator addition.", example: "total = {NUM} + 5", prompt: "Store {NUM} + 10 in a variable named 'total'.", clue: "Use total = {NUM} + 10.", match: "total\\s*=\\s*{NUM}\\s*\\+\\s*10" },
        { title: "Multiplication", explain: "Python uses * (asterisk) to multiply numbers.", analogy: "Scaling up a recipe.", example: "points = {NUM} * 2", prompt: "Store {NUM} * 3 in a variable named 'points'.", clue: "Use * for multiplication.", match: "points\\s*=\\s*{NUM}\\s*\\*\\s*3" },
        { title: "Remainder (Modulo)", explain: "% returns the remainder after division.", analogy: "Leftover slices after sharing a pizza equally.", example: "rem = 10 % 3", prompt: "Store 15 % 4 in a variable named 'rem'.", clue: "Use the % operator.", match: "rem\\s*=\\s*15\\s*%\\s*4" },
        { title: "Update Variable", explain: "+= adds to a variable's current value.", analogy: "Adding new runs to an existing scoreboard.", example: "score += 6", prompt: "Increase 'score' by 5 using +=.", clue: "Write score += 5.", match: "score\\s*\\+=\\s*5" }
      ]
    },
    {
      title: "Strings & f-Strings",
      tasks: [
        { title: "String Length", explain: "len() counts how many characters are inside a string.", analogy: "Counting letters in a word.", example: 'len("{WORD}")', prompt: "Print the length of '{WORD}' using len().", clue: "Nest len(\"{WORD}\") inside print().", match: "print\\s*\\(\\s*len\\s*\\(\\s*[\"']{WORD}[\"']\\s*\\)\\s*\\)" },
        { title: "Uppercase Method", explain: ".upper() converts a string to ALL CAPS.", analogy: "Shouting text in capital letters.", example: '"{word}".upper()', prompt: "Call .upper() on the variable '{word}'.", clue: "Attach .upper() directly to {word}.", match: "{word}\\.upper\\s*\\(\\s*\\)" },
        { title: "String Joining", explain: "+ joins two strings together end-to-end.", analogy: "Taping two paper strips together.", example: '"{WORD}" + "!"', prompt: "Join '{WORD}' and '!' using + inside print().", clue: "Use + between two quoted strings.", match: "print\\s*\\(\\s*[\"']{WORD}[\"']\\s*\\+\\s*[\"']![\"']\\s*\\)" },
        { title: "f-String Formatting", explain: 'f"..." lets you embed variables directly inside { }.', analogy: "Fill-in-the-blank templates.", example: 'f"Count: {{{item}}}"', prompt: "Write an f-string embedding '{item}' inside curly braces.", clue: "Start with f\" before the opening quote.", match: "f[\"'].*\\{{item}\\}.*[\"']" }
      ]
    },
    {
      title: "Booleans & Comparisons",
      tasks: [
        { title: "Boolean True", explain: "Booleans are True or False (always capitalized in Python).", analogy: "A light switch: either on or off.", example: "active = True", prompt: "Set variable 'ready' to True.", clue: "Capitalize the T in True with no quotes.", match: "ready\\s*=\\s*True" },
        { title: "Equality Check", explain: "== checks if two values are equal (single = assigns).", analogy: "Weighing two items on a balance scale.", example: "{item} == {NUM}", prompt: "Check if '{item}' equals {NUM} using ==.", clue: "Use double equals ==.", match: "{item}\\s*==\\s*{NUM}" },
        { title: "Greater Than", explain: "> checks if the left value is bigger than the right.", analogy: "Checking if a score beats the high score.", example: "score > {NUM}", prompt: "Write an expression checking if 'score' is greater than {NUM}.", clue: "Use the > symbol.", match: "score\\s*>\\s*{NUM}" },
        { title: "Logical and", explain: "and combines two conditions—both must be True.", analogy: "Needing both a ticket AND an ID to enter.", example: "a > 5 and b > 5", prompt: "Check if 'x > 0 and y > 0'.", clue: "Use the lowercase word and.", match: "x\\s*>\\s*0\\s+and\\s+y\\s*>\\s*0" }
      ]
    },
    {
      title: "if / elif / else",
      tasks: [
        { title: "Basic if Block", explain: "End an if line with : and indent the code underneath.", analogy: "Indentation shows what belongs inside the if rule.", example: 'if x > 10:\n    print("{WORD}")', prompt: "If '{item} > 5', indented print(\"{WORD}\").", clue: "End line 1 with : and indent line 2.", match: "if\\s+{item}\\s*>\\s*5\\s*:\\s*\\n\\s+print\\s*\\(\\s*[\"']{WORD}[\"']\\s*\\)" },
        { title: "else Fallback", explain: "else runs when the if condition is False.", analogy: "Plan B when Plan A doesn't happen.", example: 'else:\n    print("No")', prompt: "Write an else: block that indents and prints 'Done'.", clue: "Put a colon right after else and indent print().", match: "else\\s*:\\s*\\n\\s+print\\s*\\(\\s*[\"']Done[\"']\\s*\\)" },
        { title: "elif Branch", explain: "elif checks another condition if the first if was False.", analogy: "Checking a second choice on a menu.", example: 'elif x == 0:\n    print("Zero")', prompt: "Write an elif checking '{item} == 0' and indented print('Zero').", clue: "Use elif condition: followed by indented print.", match: "elif\\s+{item}\\s*==\\s*0\\s*:\\s*\\n\\s+print\\s*\\(\\s*[\"']Zero[\"']\\s*\\)" },
        { title: "In Membership", explain: "in checks if an item exists inside a list or string.", analogy: "Checking if a name is on a guest list.", example: '"a" in "{word}"', prompt: "Check if '\"o\" in \"{word}\"' inside an if statement ending with :", clue: "Format: if \"o\" in \"{word}\":", match: "if\\s+[\"']o[\"']\\s+in\\s+[\"']{word}[\"']\\s*:" }
      ]
    },
    {
      title: "Lists",
      tasks: [
        { title: "Creating a List", explain: "Square brackets [ ] store an ordered collection of items.", analogy: "A numbered train of cargo cars.", example: 'items = ["{WORD}", "{ITEM}"]', prompt: "Create a list named 'data' containing \"{WORD}\" and \"{ITEM}\".", clue: "Separate items with a comma inside [ ].", match: "data\\s*=\\s*\\[\\s*[\"']{WORD}[\"']\\s*,\\s*[\"']{ITEM}[\"']\\s*\\]" },
        { title: "Indexing from Zero", explain: "Python starts counting list positions at 0.", analogy: "Ground floor is 0, first floor is 1.", example: "data[0]", prompt: "Access the first element of 'data' using index 0.", clue: "Use square brackets: data[0]", match: "data\\s*\\[\\s*0\\s*\\]" },
        { title: "Append Item", explain: ".append() adds a new item to the end of a list.", analogy: "Adding another coach to the back of a train.", example: 'data.append("{WORD}")', prompt: "Append \"{WORD}\" to the list 'data'.", clue: "Call data.append(\"{WORD}\").", match: "data\\.append\\s*\\(\\s*[\"']{WORD}[\"']\\s*\\)" },
        { title: "List Length", explain: "len(list) returns how many items are inside.", analogy: "Counting passengers on a bus.", example: "len(data)", prompt: "Print the length of list 'data'.", clue: "Use print(len(data)).", match: "print\\s*\\(\\s*len\\s*\\(\\s*data\\s*\\)\\s*\\)" }
      ]
    },
    {
      title: "For & While Loops",
      tasks: [
        { title: "Range Loop", explain: "range(n) generates numbers from 0 up to n-1.", analogy: "Counting laps around a track.", example: "for i in range(3):\n    print(i)", prompt: "Loop 'for i in range(4):' and indented print(i).", clue: "End the for line with : and indent print(i).", match: "for\\s+i\\s+in\\s+range\\s*\\(\\s*4\\s*\\)\\s*:\\s*\\n\\s+print\\s*\\(\\s*i\\s*\\)" },
        { title: "Looping a List", explain: "for x in list visits every item directly.", analogy: "Handing a flyer to every person in line.", example: "for x in data:\n    print(x)", prompt: "Loop 'for x in data:' and indented print(x).", clue: "No range() needed when looping directly over a list.", match: "for\\s+x\\s+in\\s+data\\s*:\\s*\\n\\s+print\\s*\\(\\s*x\\s*\\)" },
        { title: "While Loop", explain: "while repeats as long as a condition stays True.", analogy: "Keep running until the timer hits zero.", example: "while n > 0:\n    n -= 1", prompt: "Write 'while {item} > 0:' with indented '{item} -= 1'.", clue: "End while line with : and indent the update.", match: "while\\s+{item}\\s*>\\s*0\\s*:\\s*\\n\\s+{item}\\s*-=\\s*1" },
        { title: "Break Early", explain: "break immediately exits a loop.", analogy: "Pulling the emergency stop cord.", example: "if x == 5:\n    break", prompt: "Write an if checking 'x == 3:' with indented 'break'.", clue: "Indent break beneath the if colon.", match: "if\\s+x\\s*==\\s*3\\s*:\\s*\\n\\s+break" }
      ]
    },
    {
      title: "Dictionaries",
      tasks: [
        { title: "Key-Value Pairs", explain: "Dictionaries { } map keys to values like a real dictionary.", analogy: "Looking up a word (key) to find its meaning (value).", example: 'info = {"name": "{WORD}"}', prompt: "Create dict 'info' with key \"topic\" mapped to \"{WORD}\".", clue: "Use curly braces { \"key\": \"value\" }.", match: "info\\s*=\\s*\\{\\s*[\"']topic[\"']\\s*:\\s*[\"']{WORD}[\"']\\s*\\}" },
        { title: "Reading a Key", explain: "Use dict['key'] to look up a stored value.", analogy: "Opening a locker with its key.", example: 'info["name"]', prompt: "Access the \"topic\" key from 'info'.", clue: "Use square brackets: info[\"topic\"].", match: "info\\s*\\[\\s*[\"']topic[\"']\\s*\\]" },
        { title: "Adding a Key", explain: "Assigning to a new key adds it to the dictionary.", analogy: "Adding a new contact to your phonebook.", example: "info['score'] = {NUM}", prompt: "Set key 'count' in 'info' to {NUM}.", clue: "Write info['count'] = {NUM}.", match: "info\\s*\\[\\s*[\"']count[\"']\\s*\\]\\s*=\\s*{NUM}" },
        { title: "Dictionary Keys", explain: ".keys() lists all keys inside a dictionary.", analogy: "Reading the table of contents.", example: "info.keys()", prompt: "Call .keys() on 'info'.", clue: "Write info.keys().", match: "info\\.keys\\s*\\(\\s*\\)" }
      ]
    },
    {
      title: "Functions",
      tasks: [
        { title: "Defining a Function", explain: "def creates a reusable function block.", analogy: "Saving a custom recipe card.", example: "def show():\n    print('{WORD}')", prompt: "Define 'show()' that indents and prints \"{WORD}\".", clue: "Remember def, parentheses (), colon :, and indentation.", match: "def\\s+show\\s*\\(\\s*\\)\\s*:\\s*\\n\\s+print\\s*\\(\\s*[\"']{WORD}[\"']\\s*\\)" },
        { title: "Function Parameters", explain: "Put parameter names inside ( ) to pass data into a function.", analogy: "Ingredients handed to a chef.", example: "def greet(name):\n    print(name)", prompt: "Define 'calc(x)' that indents and prints x.", clue: "Put x inside the parentheses of def calc(x):.", match: "def\\s+calc\\s*\\(\\s*x\\s*\\)\\s*:\\s*\\n\\s+print\\s*\\(\\s*x\\s*\\)" },
        { title: "Return Value", explain: "return sends a computed result back to the caller.", analogy: "A vending machine dispensing your item.", example: "def ten():\n    return 10", prompt: "Define 'get_num()' that returns {NUM}.", clue: "Use indented return {NUM} inside def get_num():.", match: "def\\s+get_num\\s*\\(\\s*\\)\\s*:\\s*\\n\\s+return\\s+{NUM}" },
        { title: "Calling a Function", explain: "Write the function name with () to run it.", analogy: "Pressing Play on a saved playlist.", example: "show()", prompt: "Call the function named 'show'.", clue: "Include empty parentheses: show().", match: "show\\s*\\(\\s*\\)" }
      ]
    },
    {
      title: "Python Capstone",
      tasks: [
        { title: "Double Helper", explain: "Combine parameters and return to transform numbers.", analogy: "A 2x score multiplier.", example: "def dbl(n):\n    return n * 2", prompt: "Define 'double(n)' that returns n * 2.", clue: "Use def double(n): and indented return n * 2.", match: "def\\s+double\\s*\\(\\s*n\\s*\\)\\s*:\\s*\\n\\s+return\\s+n\\s*\\*\\s*2" },
        { title: "Safe Error Handling", explain: "try / except catches errors without crashing your app.", analogy: "A safety net under a tightrope.", example: "try:\n    print(x)\nexcept:\n    print('Err')", prompt: "Write 'try:' with indented 'print({item})'.", clue: "Start with try: and indent the print line.", match: "try\\s*:\\s*\\n\\s+print\\s*\\(\\s*{item}\\s*\\)" },
        { title: "List Comprehension", explain: "[x*2 for x in nums] builds a new list in one clean line.", analogy: "An assembly line transforming every item at once.", example: "[x * 2 for x in nums]", prompt: "Write a list comprehension '[x + 1 for x in nums]'.", clue: "Wrap the expression and for-loop inside [ ].", match: "\\[\\s*x\\s*\\+\\s*1\\s+for\\s+x\\s+in\\s+nums\\s*\\]" },
        { title: "Mini Score Checker", explain: "Combine a function, condition, and return for real logic.", analogy: "Building a smart referee.", example: "def check(s):\n    if s > 50:\n        return True", prompt: "Define 'win(s)' that returns True if s > {NUM} (using if s > {NUM}: return True).", clue: "Indent if inside def, and double-indent return inside if.", match: "def\\s+win\\s*\\(\\s*s\\s*\\)\\s*:\\s*\\n\\s+if\\s+s\\s*>\\s*{NUM}\\s*:\\s*\\n\\s+return\\s+True" }
      ]
    }
  ]
};
