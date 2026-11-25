const CATEGORIES = {
  sports: { label: "⚽ Sports Mode", emoji: "🏆" },
  nature: { label: "🌿 Nature Mode", emoji: "🌲" },
  food:   { label: "🍕 Food Mode",   emoji: "👨‍🍳" },
  space:  { label: "🚀 Space Mode",  emoji: "🪐" }
};

const COURSES = {
  html: {
    title: "HTML",
    badge: "<h1>",
    bg: "#FFEDD5",
    color: "#C2410C",
    desc: "Complete webpage structure: tags, media, lists, forms & semantic layout.",
    modules: [
      {
        title: "Module 1: Headings & Text",
        summary: "Tags, headings (h1–h6), and paragraphs",
        lessons: [
          {
            title: "Opening & Closing Tags",
            explanation: "HTML elements wrap content inside <tag> and </tag>. The browser reads tags to decide text size and importance.",
            analogy: "Tags work like bookends on a shelf—one marks where a section starts, and the slash tag marks where it ends.",
            examples: {
              sports: "<h1>Championship Final</h1>\n<p>Kickoff begins at 8:00 PM.</p>",
              nature: "<h1>Himalayan Trails</h1>\n<p>Snow leopards live above 3,000 meters.</p>",
              food:   "<h1>Street Food Guide</h1>\n<p>Freshly steamed dumplings served hot.</p>",
              space:  "<h1>Artemis Mission</h1>\n<p>Crew capsule enters lunar orbit.</p>"
            },
            question: "What makes a closing HTML tag different from an opening tag?",
            options: ["It uses capital letters", "It includes a forward slash /", "It ends with a semicolon"],
            answer: 1
          },
          {
            title: "Subheadings & Emphasis",
            explanation: "Use <h2> for section subheadings and <strong> to make important words bold.",
            analogy: "<h1> is the newspaper front-page headline; <h2> is the smaller column title below it.",
            examples: {
              sports: "<h2>Match Summary</h2>\n<p>Winner: <strong>Team Blue</strong></p>",
              nature: "<h2>Forest Alert</h2>\n<p>Status: <strong>Protected Zone</strong></p>",
              food:   "<h2>Chef Special</h2>\n<p>Spice level: <strong>Extra Hot</strong></p>",
              space:  "<h2>Launch Status</h2>\n<p>Thrusters: <strong>All Green</strong></p>"
            },
            question: "Which tag makes text bold with strong importance?",
            options: ["<bold>", "<strong>", "<big>"],
            answer: 1
          }
        ],
        tasks: {
          sports: {
            prompt: "Build a mini scoreboard header: write a main heading with the word 'Scoreboard' and a paragraph underneath with the word 'Live'.",
            clue: "Combine two separate HTML elements: a top-level heading element followed by a paragraph element.",
            validate: (c) => /<h1>.*scoreboard.*<\/h1>/i.test(c) && /<p>.*live.*<\/p>/i.test(c)
          },
          nature: {
            prompt: "Create a wildlife card: write a main heading containing 'Wildlife' and a paragraph underneath containing 'Forest'.",
            clue: "Use a level-1 heading tag for the title and a standard text paragraph tag below it.",
            validate: (c) => /<h1>.*wildlife.*<\/h1>/i.test(c) && /<p>.*forest.*<\/p>/i.test(c)
          },
          food: {
            prompt: "Create a cafe sign: write a main heading containing 'Menu' and a paragraph underneath containing 'Fresh'.",
            clue: "Pair a primary heading element with a paragraph element on the next line.",
            validate: (c) => /<h1>.*menu.*<\/h1>/i.test(c) && /<p>.*fresh.*<\/p>/i.test(c)
          },
          space: {
            prompt: "Create a mission banner: write a main heading containing 'Galaxy' and a paragraph underneath containing 'Orbit'.",
            clue: "Use the largest heading tag first, then close it before opening a paragraph tag.",
            validate: (c) => /<h1>.*galaxy.*<\/h1>/i.test(c) && /<p>.*orbit.*<\/p>/i.test(c)
          }
        }
      },
      {
        title: "Module 2: Links & Images",
        summary: "Attributes, href links, and self-closing img tags",
        lessons: [
          {
            title: "Attributes & Anchor Links",
            explanation: "Attributes sit inside the opening tag to give extra info. The <a> tag uses href to set a destination URL.",
            analogy: "If <a> is an envelope, href is the street address written on the front.",
            examples: {
              sports: '<a href="https://fifa.com">Match Fixtures</a>',
              nature: '<a href="https://wwf.org">Save Wildlife</a>',
              food:   '<a href="https://recipes.com">View Dish</a>',
              space:  '<a href="https://nasa.gov">Rocket Feed</a>'
            },
            question: "Where do HTML attributes always go?",
            options: ["Inside the closing tag", "Inside the opening tag", "Outside the angle brackets"],
            answer: 1
          },
          {
            title: "Displaying Images",
            explanation: "The <img> tag needs no closing tag. It uses src for the image file and alt for a text description.",
            analogy: "alt text is a backup label that describes the photo if the image fails to load.",
            examples: {
              sports: '<img src="ball.png" alt="Football">',
              nature: '<img src="tree.png" alt="Oak Tree">',
              food:   '<img src="cake.png" alt="Chocolate Cake">',
              space:  '<img src="mars.png" alt="Red Planet">'
            },
            question: "Which attribute tells <img> which image file to load?",
            options: ["href", "alt", "src"],
            answer: 2
          }
        ],
        tasks: {
          sports: {
            prompt: "Write a clickable link pointing to 'scores.html' with the visible link text 'Results'.",
            clue: "Use an anchor element with the destination attribute set to the filename, and place the visible text between the opening and closing tags.",
            validate: (c) => /<a\s+href=["']scores\.html["']\s*>.*results.*<\/a>/i.test(c)
          },
          nature: {
            prompt: "Write a clickable link pointing to 'parks.html' with the visible link text 'Explore'.",
            clue: "An anchor element needs the hypertext reference attribute inside the opening tag and closing tag after the text.",
            validate: (c) => /<a\s+href=["']parks\.html["']\s*>.*explore.*<\/a>/i.test(c)
          },
          food: {
            prompt: "Write a clickable link pointing to 'order.html' with the visible link text 'Order Now'.",
            clue: "Wrap the clickable label inside anchor tags and specify the target page using href.",
            validate: (c) => /<a\s+href=["']order\.html["']\s*>.*order now.*<\/a>/i.test(c)
          },
          space: {
            prompt: "Write a clickable link pointing to 'launch.html' with the visible link text 'Liftoff'.",
            clue: "Remember: attributes use name=\"value\" syntax inside the opening anchor tag.",
            validate: (c) => /<a\s+href=["']launch\.html["']\s*>.*liftoff.*<\/a>/i.test(c)
          }
        }
      },
      {
        title: "Module 3: Lists & Containers",
        summary: "Unordered lists (ul/li) and div grouping",
        lessons: [
          {
            title: "Bullet Lists with <ul> and <li>",
            explanation: "Wrap a bullet list in <ul> (unordered list), and put each individual item inside its own <li> tag.",
            analogy: "<ul> is the shopping bag; each <li> is one item placed inside the bag.",
            examples: {
              sports: "<ul>\n  <li>Batsman</li>\n  <li>Bowler</li>\n</ul>",
              nature: "<ul>\n  <li>Pine</li>\n  <li>Bamboo</li>\n</ul>",
              food:   "<ul>\n  <li>Salt</li>\n  <li>Pepper</li>\n</ul>",
              space:  "<ul>\n  <li>Earth</li>\n  <li>Saturn</li>\n</ul>"
            },
            question: "Which tag wraps each single item inside a list?",
            options: ["<ul>", "<li>", "<item>"],
            answer: 1
          }
        ],
        tasks: {
          sports: {
            prompt: "Create an unordered list containing two list items: 'Cricket' and 'Football'.",
            clue: "Open and close the outer unordered list wrapper, with two separate list-item elements nested inside.",
            validate: (c) => /<ul>[\s\S]*<li>.*cricket.*<\/li>[\s\S]*<li>.*football.*<\/li>[\s\S]*<\/ul>/i.test(c)
          },
          nature: {
            prompt: "Create an unordered list containing two list items: 'River' and 'Mountain'.",
            clue: "Nest two individual list-item tags inside a single unordered list container.",
            validate: (c) => /<ul>[\s\S]*<li>.*river.*<\/li>[\s\S]*<li>.*mountain.*<\/li>[\s\S]*<\/ul>/i.test(c)
          },
          food: {
            prompt: "Create an unordered list containing two list items: 'Tea' and 'Coffee'.",
            clue: "Every bullet point needs its own opening and closing item tag inside the parent list tag.",
            validate: (c) => /<ul>[\s\S]*<li>.*tea.*<\/li>[\s\S]*<li>.*coffee.*<\/li>[\s\S]*<\/ul>/i.test(c)
          },
          space: {
            prompt: "Create an unordered list containing two list items: 'Moon' and 'Sun'.",
            clue: "Start with the parent list container, add two child item elements, then close the parent container.",
            validate: (c) => /<ul>[\s\S]*<li>.*moon.*<\/li>[\s\S]*<li>.*sun.*<\/li>[\s\S]*<\/ul>/i.test(c)
          }
        }
      },
      {
        title: "Module 4: Interactive Forms",
        summary: "User inputs and submit buttons",
        lessons: [
          {
            title: "Inputs & Buttons",
            explanation: "Forms collect user data using <input> fields (with a type attribute) and <button> elements.",
            analogy: "<input> is a blank line on a paper form; <button> is handing the form to the clerk.",
            examples: {
              sports: '<input type="text" placeholder="Player name">\n<button>Join</button>',
              nature: '<input type="text" placeholder="Bird species">\n<button>Log</button>',
              food:   '<input type="text" placeholder="Table number">\n<button>Book</button>',
              space:  '<input type="text" placeholder="Astronaut ID">\n<button>Launch</button>'
            },
            question: "Which attribute shows grey helper text inside an empty <input>?",
            options: ["alt", "placeholder", "hint"],
            answer: 1
          }
        ],
        tasks: {
          sports: {
            prompt: "Create a text input field followed by a button labeled 'Score'.",
            clue: "Combine a self-closing input tag (with type=\"text\") and a button element containing the label.",
            validate: (c) => /<input[^>]*type=["']text["'][^>]*>/i.test(c) && /<button>.*score.*<\/button>/i.test(c)
          },
          nature: {
            prompt: "Create a text input field followed by a button labeled 'Plant'.",
            clue: "Use an input element with the text type attribute, then a separate button tag.",
            validate: (c) => /<input[^>]*type=["']text["'][^>]*>/i.test(c) && /<button>.*plant.*<\/button>/i.test(c)
          },
          food: {
            prompt: "Create a text input field followed by a button labeled 'Cook'.",
            clue: "Remember that input tags do not need a closing slash tag, whereas button tags do.",
            validate: (c) => /<input[^>]*type=["']text["'][^>]*>/i.test(c) && /<button>.*cook.*<\/button>/i.test(c)
          },
          space: {
            prompt: "Create a text input field followed by a button labeled 'Orbit'.",
            clue: "Specify the input type attribute as text, and put the word inside opening and closing button tags.",
            validate: (c) => /<input[^>]*type=["']text["'][^>]*>/i.test(c) && /<button>.*orbit.*<\/button>/i.test(c)
          }
        }
      }
    ]
  },

  css: {
    title: "CSS",
    badge: "{ }",
    bg: "#DBEAFE",
    color: "#1D4ED8",
    desc: "Complete styling: colors, box model, classes & flexbox layouts.",
    modules: [
      {
        title: "Module 1: Colors & Text",
        summary: "Selectors, properties, color & font-size",
        lessons: [
          {
            title: "CSS Rule Anatomy",
            explanation: "A CSS rule picks an HTML tag (selector) and lists property: value; pairs inside curly braces.",
            analogy: "The selector points at what to paint; the curly braces hold the paint instructions.",
            examples: {
              sports: "h1 {\n  color: navy;\n  font-size: 32px;\n}",
              nature: "h1 {\n  color: green;\n  font-size: 32px;\n}",
              food:   "h1 {\n  color: crimson;\n  font-size: 32px;\n}",
              space:  "h1 {\n  color: indigo;\n  font-size: 32px;\n}"
            },
            question: "Which symbol separates a CSS property from its value?",
            options: ["=", ":", ";"],
            answer: 1
          }
        ],
        tasks: {
          sports: {
            prompt: "Style all <h2> headings so their text color is blue and font-size is 24px.",
            clue: "Target the h2 selector, open curly braces, and separate the two property-value declarations with semicolons.",
            validate: (c) => /h2\s*\{[\s\S]*color\s*:\s*blue\s*;[\s\S]*font-size\s*:\s*24px\s*;?[\s\S]*\}/i.test(c)
          },
          nature: {
            prompt: "Style all <h2> headings so their text color is green and font-size is 24px.",
            clue: "Each declaration inside curly braces needs a colon between property and value, and a semicolon at the end.",
            validate: (c) => /h2\s*\{[\s\S]*color\s*:\s*green\s*;[\s\S]*font-size\s*:\s*24px\s*;?[\s\S]*\}/i.test(c)
          },
          food: {
            prompt: "Style all <h2> headings so their text color is orange and font-size is 24px.",
            clue: "Write the element name followed by braces containing both the color and font-size rules.",
            validate: (c) => /h2\s*\{[\s\S]*color\s*:\s*orange\s*;[\s\S]*font-size\s*:\s*24px\s*;?[\s\S]*\}/i.test(c)
          },
          space: {
            prompt: "Style all <h2> headings so their text color is purple and font-size is 24px.",
            clue: "Remember: CSS uses color (not font-color) and px units for pixel sizes.",
            validate: (c) => /h2\s*\{[\s\S]*color\s*:\s*purple\s*;[\s\S]*font-size\s*:\s*24px\s*;?[\s\S]*\}/i.test(c)
          }
        }
      },
      {
        title: "Module 2: Classes & Backgrounds",
        summary: "Reusable .class selectors and background-color",
        lessons: [
          {
            title: "Targeting Classes with a Dot",
            explanation: "To style specific elements with a class name, put a period (.) before the class name in CSS.",
            analogy: "A class is like a team jersey—everyone wearing .card gets the exact same look.",
            examples: {
              sports: ".jersey {\n  background-color: gold;\n}",
              nature: ".leaf {\n  background-color: lightgreen;\n}",
              food:   ".badge {\n  background-color: tomato;\n}",
              space:  ".planet {\n  background-color: black;\n}"
            },
            question: "How do you select class='box' inside CSS?",
            options: ["#box", ".box", "box"],
            answer: 1
          }
        ],
        tasks: {
          sports: {
            prompt: "Create a CSS class named 'team' that sets background-color to yellow.",
            clue: "Prefix the selector name with a dot, then set the background-color property inside braces.",
            validate: (c) => /\.team\s*\{[\s\S]*background-color\s*:\s*yellow\s*;?[\s\S]*\}/i.test(c)
          },
          nature: {
            prompt: "Create a CSS class named 'forest' that sets background-color to teal.",
            clue: "Class selectors always begin with a period character before the name.",
            validate: (c) => /\.forest\s*\{[\s\S]*background-color\s*:\s*teal\s*;?[\s\S]*\}/i.test(c)
          },
          food: {
            prompt: "Create a CSS class named 'dish' that sets background-color to coral.",
            clue: "Use a leading dot for the class selector and the hyphenated background-color property.",
            validate: (c) => /\.dish\s*\{[\s\S]*background-color\s*:\s*coral\s*;?[\s\S]*\}/i.test(c)
          },
          space: {
            prompt: "Create a CSS class named 'rocket' that sets background-color to navy.",
            clue: "Start with .rocket, open curly braces, and assign navy to background-color.",
            validate: (c) => /\.rocket\s*\{[\s\S]*background-color\s*:\s*navy\s*;?[\s\S]*\}/i.test(c)
          }
        }
      },
      {
        title: "Module 3: The Box Model",
        summary: "Spacing with padding, margin, and border-radius",
        lessons: [
          {
            title: "Padding vs Margin",
            explanation: "padding adds breathing room INSIDE a box's border. margin adds empty space OUTSIDE the border.",
            analogy: "Padding is the cushion inside a helmet; margin is the social distance between two people.",
            examples: {
              sports: ".card {\n  padding: 16px;\n  margin: 10px;\n}",
              nature: ".card {\n  padding: 16px;\n  margin: 10px;\n}",
              food:   ".card {\n  padding: 16px;\n  margin: 10px;\n}",
              space:  ".card {\n  padding: 16px;\n  margin: 10px;\n}"
            },
            question: "Which property pushes other elements away from the outside of a box?",
            options: ["padding", "margin", "border"],
            answer: 1
          }
        ],
        tasks: {
          sports: {
            prompt: "Style the .box class with 20px of inner spacing and 12px of rounded corners.",
            clue: "Inner spacing is controlled by padding, and rounded corners use border-radius.",
            validate: (c) => /\.box\s*\{[\s\S]*padding\s*:\s*20px\s*;[\s\S]*border-radius\s*:\s*12px\s*;?[\s\S]*\}/i.test(c)
          },
          nature: {
            prompt: "Style the .box class with 20px of inner spacing and 12px of rounded corners.",
            clue: "Combine padding for internal space and border-radius for curved corners inside .box.",
            validate: (c) => /\.box\s*\{[\s\S]*padding\s*:\s*20px\s*;[\s\S]*border-radius\s*:\s*12px\s*;?[\s\S]*\}/i.test(c)
          },
          food: {
            prompt: "Style the .box class with 20px of inner spacing and 12px of rounded corners.",
            clue: "Remember both properties take pixel values and end with semicolons.",
            validate: (c) => /\.box\s*\{[\s\S]*padding\s*:\s*20px\s*;[\s\S]*border-radius\s*:\s*12px\s*;?[\s\S]*\}/i.test(c)
          },
          space: {
            prompt: "Style the .box class with 20px of inner spacing and 12px of rounded corners.",
            clue: "Use padding for the inside cushion and border-radius for the corner curve.",
            validate: (c) => /\.box\s*\{[\s\S]*padding\s*:\s*20px\s*;[\s\S]*border-radius\s*:\s*12px\s*;?[\s\S]*\}/i.test(c)
          }
        }
      },
      {
        title: "Module 4: Flexbox Layouts",
        summary: "Aligning items side-by-side with display: flex",
        lessons: [
          {
            title: "Modern Row Layouts",
            explanation: "Setting display: flex on a container lines its child items up in a clean row. gap adds space between them.",
            analogy: "Flexbox turns stacked bricks into a neat horizontal shelf.",
            examples: {
              sports: ".row {\n  display: flex;\n  gap: 12px;\n}",
              nature: ".row {\n  display: flex;\n  gap: 12px;\n}",
              food:   ".row {\n  display: flex;\n  gap: 12px;\n}",
              space:  ".row {\n  display: flex;\n  gap: 12px;\n}"
            },
            question: "Which property activates Flexbox on a container?",
            options: ["layout: flex", "display: flex", "flex: on"],
            answer: 1
          }
        ],
        tasks: {
          sports: {
            prompt: "Make the .nav class a flex container with a 15px gap between items.",
            clue: "Set display to flex and use the gap property with pixel units inside .nav.",
            validate: (c) => /\.nav\s*\{[\s\S]*display\s*:\s*flex\s*;[\s\S]*gap\s*:\s*15px\s*;?[\s\S]*\}/i.test(c)
          },
          nature: {
            prompt: "Make the .nav class a flex container with a 15px gap between items.",
            clue: "Combine display: flex with gap: 15px inside the .nav class selector.",
            validate: (c) => /\.nav\s*\{[\s\S]*display\s*:\s*flex\s*;[\s\S]*gap\s*:\s*15px\s*;?[\s\S]*\}/i.test(c)
          },
          food: {
            prompt: "Make the .nav class a flex container with a 15px gap between items.",
            clue: "Activate flexbox via the display property, then control spacing with gap.",
            validate: (c) => /\.nav\s*\{[\s\S]*display\s*:\s*flex\s*;[\s\S]*gap\s*:\s*15px\s*;?[\s\S]*\}/i.test(c)
          },
          space: {
            prompt: "Make the .nav class a flex container with a 15px gap between items.",
            clue: "Target .nav with a leading dot and define display and gap rules.",
            validate: (c) => /\.nav\s*\{[\s\S]*display\s*:\s*flex\s*;[\s\S]*gap\s*:\s*15px\s*;?[\s\S]*\}/i.test(c)
          }
        }
      }
    ]
  },

  python: {
    title: "Python",
    badge: "py",
    bg: "#FEF9C3",
    color: "#A16207",
    desc: "Complete Python: variables, conditions, loops, lists & functions.",
    modules: [
      {
        title: "Module 1: Variables & Math",
        summary: "Storing text/numbers and printing output",
        lessons: [
          {
            title: "Variables & Data Types",
            explanation: "Python needs no special keyword to make a variable. Wrap text in quotes (strings), leave numbers bare.",
            analogy: "A variable is a sticky note with a name attached to a value in memory.",
            examples: {
              sports: 'team = "India"\nwickets = 4\nprint(team, wickets)',
              nature: 'park = "Manas"\nrhinos = 40\nprint(park, rhinos)',
              food:   'dish = "Dosa"\ncost = 80\nprint(dish, cost)',
              space:  'ship = "Orion"\ncrew = 4\nprint(ship, crew)'
            },
            question: "Which value is a Python string?",
            options: ["42", '"42"', "True"],
            answer: 1
          }
        ],
        tasks: {
          sports: {
            prompt: "Store 6 in a variable named 'runs', multiply runs by 2 inside print().",
            clue: "First assign the number using =, then pass the multiplication expression (using *) inside print().",
            validate: (c) => /runs\s*=\s*6/.test(c) && /print\s*\(\s*runs\s*\*\s*2\s*\)/.test(c)
          },
          nature: {
            prompt: "Store 10 in a variable named 'trees', multiply trees by 3 inside print().",
            clue: "Python uses the asterisk (*) symbol for multiplication.",
            validate: (c) => /trees\s*=\s*10/.test(c) && /print\s*\(\s*trees\s*\*\s*3\s*\)/.test(c)
          },
          food: {
            prompt: "Store 25 in a variable named 'price', multiply price by 4 inside print().",
            clue: "Define the variable on line 1, then output the product on line 2 using print().",
            validate: (c) => /price\s*=\s*25/.test(c) && /print\s*\(\s*price\s*\*\s*4\s*\)/.test(c)
          },
          space: {
            prompt: "Store 50 in a variable named 'speed', multiply speed by 2 inside print().",
            clue: "Assign the integer without quotes, then print the variable multiplied by 2.",
            validate: (c) => /speed\s*=\s*50/.test(c) && /print\s*\(\s*speed\s*\*\s*2\s*\)/.test(c)
          }
        }
      },
      {
        title: "Module 2: Decisions (if / else)",
        summary: "Making smart choices with comparisons & indentation",
        lessons: [
          {
            title: "The if Statement & Indentation",
            explanation: "Python uses a colon (:) and 4 spaces of indentation to group code inside an if block.",
            analogy: "Indentation is like bullet sub-points—it shows which lines belong under the if condition.",
            examples: {
              sports: 'if goals > 2:\n    print("Win!")',
              nature: 'if rain > 50:\n    print("Flood alert")',
              food:   'if temp > 100:\n    print("Boiling!")',
              space:  'if fuel < 10:\n    print("Low fuel")'
            },
            question: "What symbol must end an if condition line in Python?",
            options: [";", "{", ":"],
            answer: 2
          }
        ],
        tasks: {
          sports: {
            prompt: "Write an if statement checking if 'points > 50', and indented underneath, print(\"MVP\").",
            clue: "End the if condition with a colon, then indent the print call on the next line.",
            validate: (c) => /if\s+points\s*>\s*50\s*:\s*\n\s+print\s*\(\s*["']MVP["']\s*\)/.test(c)
          },
          nature: {
            prompt: "Write an if statement checking if 'temp > 35', and indented underneath, print(\"Hot\").",
            clue: "Remember: strings inside print() need quotes, and the line after : must be indented.",
            validate: (c) => /if\s+temp\s*>\s*35\s*:\s*\n\s+print\s*\(\s*["']Hot["']\s*\)/.test(c)
          },
          food: {
            prompt: "Write an if statement checking if 'bill > 500', and indented underneath, print(\"Free Tea\").",
            clue: "Use the > comparison operator, a colon at the end of line 1, and spaces before print().",
            validate: (c) => /if\s+bill\s*>\s*500\s*:\s*\n\s+print\s*\(\s*["']Free Tea["']\s*\)/.test(c)
          },
          space: {
            prompt: "Write an if statement checking if 'altitude > 100', and indented underneath, print(\"Space\").",
            clue: "Python groups blocks using a colon + indentation rather than curly braces.",
            validate: (c) => /if\s+altitude\s*>\s*100\s*:\s*\n\s+print\s*\(\s*["']Space["']\s*\)/.test(c)
          }
        }
      },
      {
        title: "Module 3: Loops & Lists",
        summary: "Storing collections and repeating tasks with for loops",
        lessons: [
          {
            title: "Looping Through a List",
            explanation: "Square brackets [ ] create a list. A for loop visits every item in that list automatically.",
            analogy: "A for loop is like a teacher calling attendance down a class roster one name at a time.",
            examples: {
              sports: 'games = ["Cricket", "Tennis"]\nfor g in games:\n    print(g)',
              nature: 'birds = ["Eagle", "Owl"]\nfor b in birds:\n    print(b)',
              food:   'items = ["Rice", "Dal"]\nfor i in items:\n    print(i)',
              space:  'moons = ["Io", "Europa"]\nfor m in moons:\n    print(m)'
            },
            question: "Which brackets create a list in Python?",
            options: ["( )", "{ }", "[ ]"],
            answer: 2
          }
        ],
        tasks: {
          sports: {
            prompt: "Write a for loop that iterates 'for x in range(3):' and prints x on each turn.",
            clue: "Use the range(3) helper after 'in', end the header with a colon, and indent print(x).",
            validate: (c) => /for\s+x\s+in\s+range\s*\(\s*3\s*\)\s*:\s*\n\s+print\s*\(\s*x\s*\)/.test(c)
          },
          nature: {
            prompt: "Write a for loop that iterates 'for x in range(4):' and prints x on each turn.",
            clue: "Syntax pattern: for variable in sequence: followed by an indented body.",
            validate: (c) => /for\s+x\s+in\s+range\s*\(\s*4\s*\)\s*:\s*\n\s+print\s*\(\s*x\s*\)/.test(c)
          },
          food: {
            prompt: "Write a for loop that iterates 'for x in range(5):' and prints x on each turn.",
            clue: "Do not put quotes around x inside print(x), otherwise it prints the letter instead of the number.",
            validate: (c) => /for\s+x\s+in\s+range\s*\(\s*5\s*\)\s*:\s*\n\s+print\s*\(\s*x\s*\)/.test(c)
          },
          space: {
            prompt: "Write a for loop that iterates 'for x in range(3):' and prints x on each turn.",
            clue: "End the for statement with a colon and indent the print statement underneath.",
            validate: (c) => /for\s+x\s+in\s+range\s*\(\s*3\s*\)\s*:\s*\n\s+print\s*\(\s*x\s*\)/.test(c)
          }
        }
      },
      {
        title: "Module 4: Reusable Functions",
        summary: "Defining custom commands with def and return",
        lessons: [
          {
            title: "Creating Functions with def",
            explanation: "Use def to package code into a reusable command. Use return to send an answer back.",
            analogy: "A function is like a blender: put ingredients in the top, get a smoothie returned at the bottom.",
            examples: {
              sports: "def double_score(s):\n    return s * 2",
              nature: "def add_trees(t):\n    return t + 10",
              food:   "def tax(price):\n    return price + 5",
              space:  "def boost(thrust):\n    return thrust * 3"
            },
            question: "Which keyword defines a new function in Python?",
            options: ["func", "def", "create"],
            answer: 1
          }
        ],
        tasks: {
          sports: {
            prompt: "Define a function named 'goal' that takes no parameters and returns 1.",
            clue: "Start with def, the function name followed by empty parentheses and a colon, then an indented return statement.",
            validate: (c) => /def\s+goal\s*\(\s*\)\s*:\s*\n\s+return\s+1/.test(c)
          },
          nature: {
            prompt: "Define a function named 'rain' that takes no parameters and returns 10.",
            clue: "Remember both parentheses () and the colon : after the function name, plus indentation for return.",
            validate: (c) => /def\s+rain\s*\(\s*\)\s*:\s*\n\s+return\s+10/.test(c)
          },
          food: {
            prompt: "Define a function named 'tip' that takes no parameters and returns 20.",
            clue: "Use the def keyword on line 1 and return on the indented line 2.",
            validate: (c) => /def\s+tip\s*\(\s*\)\s*:\s*\n\s+return\s+20/.test(c)
          },
          space: {
            prompt: "Define a function named 'orbit' that takes no parameters and returns 99.",
            clue: "Function headers always need parentheses even when they take zero inputs.",
            validate: (c) => /def\s+orbit\s*\(\s*\)\s*:\s*\n\s+return\s+99/.test(c)
          }
        }
      }
    ]
  },

  c: {
    title: "C",
    badge: "C;",
    bg: "#E0E7FF",
    color: "#4338CA",
    desc: "Complete C: types, printf/scanf, conditions, loops & functions.",
    modules: [
      {
        title: "Module 1: Types & Semicolons",
        summary: "int, float, char and strict statement endings",
        lessons: [
          {
            title: "Strict Data Types",
            explanation: "C requires you to declare the exact type of every variable: int for whole numbers, float for decimals.",
            analogy: "C is like a strict customs officer—every suitcase must declare what is inside before entering.",
            examples: {
              sports: 'int overs = 20;\nfloat runRate = 7.5;',
              nature: 'int species = 120;\nfloat rainfall = 45.2;',
              food:   'int plates = 3;\nfloat bill = 149.5;',
              space:  'int stages = 2;\nfloat gravity = 9.8;'
            },
            question: "Which type stores decimal numbers like 9.8 in C?",
            options: ["int", "float", "char"],
            answer: 1
          }
        ],
        tasks: {
          sports: {
            prompt: "Declare an integer 'goals' set to 3, and a float 'rating' set to 8.5.",
            clue: "Declare each variable with its C type keyword first, and end both statements with a semicolon.",
            validate: (c) => /int\s+goals\s*=\s*3\s*;/.test(c) && /float\s+rating\s*=\s*8\.5\s*;/.test(c)
          },
          nature: {
            prompt: "Declare an integer 'trees' set to 50, and a float 'temp' set to 24.5.",
            clue: "Whole numbers use int; decimals use float. Never forget trailing semicolons in C.",
            validate: (c) => /int\s+trees\s*=\s*50\s*;/.test(c) && /float\s+temp\s*=\s*24\.5\s*;/.test(c)
          },
          food: {
            prompt: "Declare an integer 'items' set to 4, and a float 'tax' set to 2.5.",
            clue: "Write two separate declaration lines, each starting with its data type and ending with ;",
            validate: (c) => /int\s+items\s*=\s*4\s*;/.test(c) && /float\s+tax\s*=\s*2\.5\s*;/.test(c)
          },
          space: {
            prompt: "Declare an integer 'crew' set to 6, and a float 'mach' set to 3.2.",
            clue: "Syntax: type name = value; for both variables.",
            validate: (c) => /int\s+crew\s*=\s*6\s*;/.test(c) && /float\s+mach\s*=\s*3\.2\s*;/.test(c)
          }
        }
      },
      {
        title: "Module 2: Output with printf()",
        summary: "Format specifiers (%d, %f) and printing variables",
        lessons: [
          {
            title: "Format Specifiers in printf",
            explanation: "To print a variable in C, put a placeholder inside quotes (%d for int, %f for float) and list the variable after a comma.",
            analogy: "%d is an empty seat reserved inside a sentence for an integer to sit in.",
            examples: {
              sports: 'int score = 90;\nprintf("Score: %d", score);',
              nature: 'int birds = 14;\nprintf("Birds: %d", birds);',
              food:   'int total = 60;\nprintf("Total: %d", total);',
              space:  'int days = 365;\nprintf("Days: %d", days);'
            },
            question: "Which placeholder prints an int variable inside printf()?",
            options: ["%s", "%d", "%i-int"],
            answer: 1
          }
        ],
        tasks: {
          sports: {
            prompt: "Use printf to print the integer variable 'runs' using the %d format specifier.",
            clue: "Pass the format string \"%d\" as the first argument to printf, followed by a comma and the variable name.",
            validate: (c) => /printf\s*\(\s*["'].*%d.*["']\s*,\s*runs\s*\)\s*;/.test(c)
          },
          nature: {
            prompt: "Use printf to print the integer variable 'rivers' using the %d format specifier.",
            clue: "Inside printf(), put \"%d\" in double quotes, a comma, then rivers, and end with a semicolon.",
            validate: (c) => /printf\s*\(\s*["'].*%d.*["']\s*,\s*rivers\s*\)\s*;/.test(c)
          },
          food: {
            prompt: "Use printf to print the integer variable 'bill' using the %d format specifier.",
            clue: "Remember C requires double quotes around the format string and a semicolon after the closing parenthesis.",
            validate: (c) => /printf\s*\(\s*["'].*%d.*["']\s*,\s*bill\s*\)\s*;/.test(c)
          },
          space: {
            prompt: "Use printf to print the integer variable 'stars' using the %d format specifier.",
            clue: "Format: printf(\"%d\", variableName);",
            validate: (c) => /printf\s*\(\s*["'].*%d.*["']\s*,\s*stars\s*\)\s*;/.test(c)
          }
        }
      },
      {
        title: "Module 3: Conditions & Loops",
        summary: "Parentheses conditions and while loops",
        lessons: [
          {
            title: "if Conditions & while Loops",
            explanation: "In C, conditions inside if() or while() MUST be wrapped in parentheses ( ), and blocks use curly braces { }.",
            analogy: "Parentheses act like a test chamber; curly braces hold what runs if the test passes.",
            examples: {
              sports: 'if (wins > 5) {\n  printf("Finalist");\n}',
              nature: 'while (water > 0) {\n  water--;\n}',
              food:   'if (oven == 200) {\n  printf("Ready");\n}',
              space:  'while (count > 0) {\n  count--;\n}'
            },
            question: "What wraps the condition inside a C if-statement?",
            options: ["Square brackets [ ]", "Parentheses ( )", "Nothing"],
            answer: 1
          }
        ],
        tasks: {
          sports: {
            prompt: "Write a C if-statement checking if 'fouls == 3' and inside braces call printf(\"Out\");",
            clue: "Use double equals == for comparison inside parentheses, and curly braces around the printf statement.",
            validate: (c) => /if\s*\(\s*fouls\s*==\s*3\s*\)\s*\{[\s\S]*printf\s*\(\s*["']Out["']\s*\)\s*;[\s\S]*\}/.test(c)
          },
          nature: {
            prompt: "Write a C if-statement checking if 'aqi > 100' and inside braces call printf(\"Alert\");",
            clue: "Wrap the comparison in ( ), open { }, and end the inner printf with a semicolon.",
            validate: (c) => /if\s*\(\s*aqi\s*>\s*100\s*\)\s*\{[\s\S]*printf\s*\(\s*["']Alert["']\s*\)\s*;[\s\S]*\}/.test(c)
          },
          food: {
            prompt: "Write a C if-statement checking if 'salt == 0' and inside braces call printf(\"Bland\");",
            clue: "Equality comparison in C uses == (two equals signs) inside parentheses.",
            validate: (c) => /if\s*\(\s*salt\s*==\s*0\s*\)\s*\{[\s\S]*printf\s*\(\s*["']Bland["']\s*\)\s*;[\s\S]*\}/.test(c)
          },
          space: {
            prompt: "Write a C if-statement checking if 'fuel == 0' and inside braces call printf(\"Empty\");",
            clue: "Combine if (condition) { statement; } with double quotes around the text.",
            validate: (c) => /if\s*\(\s*fuel\s*==\s*0\s*\)\s*\{[\s\S]*printf\s*\(\s*["']Empty["']\s*\)\s*;[\s\S]*\}/.test(c)
          }
        }
      },
      {
        title: "Module 4: C Functions",
        summary: "Return types and building reusable C functions",
        lessons: [
          {
            title: "Typed Functions in C",
            explanation: "Every C function declares what type of value it returns (like int or void) before its name.",
            analogy: "If a function is a vending machine, 'int' on the front tells you it dispenses a whole number.",
            examples: {
              sports: "int addBonus(int pts) {\n  return pts + 5;\n}",
              nature: "int countAll(int a) {\n  return a * 2;\n}",
              food:   "int billWithTip(int b) {\n  return b + 10;\n}",
              space:  "int nextOrbit(int o) {\n  return o + 1;\n}"
            },
            question: "What return type is used when a C function returns nothing?",
            options: ["none", "empty", "void"],
            answer: 2
          }
        ],
        tasks: {
          sports: {
            prompt: "Write a C function named 'getTen' with return type int that takes no arguments and returns 10.",
            clue: "Start with the return type int, function name with empty (), curly braces, and return 10;",
            validate: (c) => /int\s+getTen\s*\(\s*\)\s*\{[\s\S]*return\s+10\s*;[\s\S]*\}/.test(c)
          },
          nature: {
            prompt: "Write a C function named 'getFive' with return type int that takes no arguments and returns 5.",
            clue: "Declare return type int before the function name, and end the return statement with a semicolon.",
            validate: (c) => /int\s+getFive\s*\(\s*\)\s*\{[\s\S]*return\s+5\s*;[\s\S]*\}/.test(c)
          },
          food: {
            prompt: "Write a C function named 'getPrice' with return type int that takes no arguments and returns 50.",
            clue: "Pattern: int functionName() { return value; }",
            validate: (c) => /int\s+getPrice\s*\(\s*\)\s*\{[\s\S]*return\s+50\s*;[\s\S]*\}/.test(c)
          },
          space: {
            prompt: "Write a C function named 'getMach' with return type int that takes no arguments and returns 2.",
            clue: "C functions require an explicit return type (int) and curly braces around the body.",
            validate: (c) => /int\s+getMach\s*\(\s*\)\s*\{[\s\S]*return\s+2\s*;[\s\S]*\}/.test(c)
          }
        }
      }
    ]
  }
};