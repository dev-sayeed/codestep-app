const COURSE_HTML = {
  title: "HTML",
  badge: "<h1>",
  bg: "#FFEDD5",
  color: "#C2410C",
  desc: "40 step-by-step tasks covering tags, media, lists, tables, forms & semantic HTML.",
  modules: [
    {
      title: "Headings & Paragraphs",
      tasks: [
        { title: "Main Headings", explain: "<h1> creates the largest page headline.", analogy: "Like a newspaper front-page banner.", example: "<h1>{WORD} News</h1>", prompt: "Write an <h1> heading containing '{WORD}'.", clue: "Wrap the word inside opening and closing h1 tags.", match: "<h1>.*{WORD}.*</h1>" },
        { title: "Subheadings", explain: "<h2> creates a smaller section title under <h1>.", analogy: "Like chapter titles inside a book.", example: "<h2>{ITEM} Stats</h2>", prompt: "Write an <h2> subheading containing '{ITEM}'.", clue: "Use h2 opening and closing tags.", match: "<h2>.*{ITEM}.*</h2>" },
        { title: "Paragraphs", explain: "<p> holds normal body text sentences.", analogy: "Like neat blocks of text on a page.", example: "<p>Welcome to {WORD} hub.</p>", prompt: "Write a <p> paragraph containing '{WORD}'.", clue: "Wrap your text in <p> and </p>.", match: "<p>.*{WORD}.*</p>" },
        { title: "Small Headings", explain: "<h3> creates a third-level card heading.", analogy: "Great for small card titles.", example: "<h3>{ITEM} #{NUM}</h3>", prompt: "Write an <h3> heading containing '{NUM}'.", clue: "Use opening and closing h3 tags.", match: "<h3>.*{NUM}.*</h3>" }
      ]
    },
    {
      title: "Text Formatting",
      tasks: [
        { title: "Bold Importance", explain: "<strong> makes key words bold.", analogy: "Like highlighting with a marker.", example: "<strong>{WORD}</strong>", prompt: "Wrap '{WORD}' in <strong> tags.", clue: "Open with <strong> and close with </strong>.", match: "<strong>.*{WORD}.*</strong>" },
        { title: "Italic Emphasis", explain: "<em> italicizes text for emphasis.", analogy: "Like tilting your voice when speaking.", example: "<em>{ITEM}</em>", prompt: "Wrap '{ITEM}' in <em> tags.", clue: "Use <em> and </em> around the word.", match: "<em>.*{ITEM}.*</em>" },
        { title: "Line Breaks", explain: "<br> forces text onto a new line without a closing tag.", analogy: "Like pressing Enter on a typewriter.", example: "{WORD}<br>{ITEM}", prompt: "Write '{WORD}' followed by <br> and '{ITEM}'.", clue: "<br> stands alone with no slash tag.", match: "{WORD}\\s*<br\\s*/?>\\s*{ITEM}" },
        { title: "Horizontal Divider", explain: "<hr> draws a clean horizontal line between sections.", analogy: "Like drawing a ruler line across paper.", example: "<p>{WORD}</p><hr>", prompt: "Write an <hr> tag.", clue: "Just type <hr>.", match: "<hr\\s*/?>" }
      ]
    },
    {
      title: "Links & Navigation",
      tasks: [
        { title: "Basic Anchor Link", explain: "<a> creates clickable links using the href attribute.", analogy: "Like a road sign pointing to another page.", example: '<a href="home.html">{WORD}</a>', prompt: "Create a link to 'page.html' with text '{WORD}'.", clue: "Put href=\"page.html\" inside the opening <a> tag.", match: "<a\\s+href=[\"']page\\.html[\"']\\s*>.*{WORD}.*</a>" },
        { title: "External Website Link", explain: "Full URLs start with https:// inside href.", analogy: "Like dialing a full international phone number.", example: '<a href="[https://example.com](https://example.com)">{ITEM}</a>', prompt: "Link to '[https://google.com](https://google.com)' with text '{ITEM}'.", clue: "Include https:// inside href.", match: "<a\\s+href=[\"']https://google\\.com[\"']\\s*>.*{ITEM}.*</a>" },
        { title: "Open in New Tab", explain: 'target="_blank" opens a link in a fresh browser tab.', analogy: "Keeps your current page open while peeking at another.", example: '<a href="a.html" target="_blank">{WORD}</a>', prompt: "Write an <a> tag with target=\"_blank\" and href=\"go.html\" showing '{WORD}'.", clue: "Both href and target go inside the opening <a> tag.", match: "<a[^>]*href=[\"']go\\.html[\"'][^>]*target=[\"']_blank[\"'][^>]*>.*{WORD}.*</a>" },
        { title: "Page Section Jump", explain: "href='#top' jumps smoothly to an element with id='top'.", analogy: "Like an elevator button inside the same building.", example: '<a href="#top">Back to {WORD}</a>', prompt: "Create a jump link with href=\"#info\" and text '{ITEM}'.", clue: "Start the href value with a # symbol.", match: "<a\\s+href=[\"']#info[\"']\\s*>.*{ITEM}.*</a>" }
      ]
    },
    {
      title: "Images & Media",
      tasks: [
        { title: "Image Source", explain: "<img> loads a picture using the src attribute.", analogy: "Like hanging a framed photo on the wall.", example: '<img src="pic.jpg">', prompt: "Write an <img> tag with src=\"photo.png\".", clue: "<img> needs no closing tag.", match: "<img[^>]*src=[\"']photo\\.png[\"'][^>]*>" },
        { title: "Accessible Alt Text", explain: "alt describes the image for screen readers and slow connections.", analogy: "A caption written on the back of a photo.", example: '<img src="a.png" alt="{WORD}">', prompt: "Write an <img> with src=\"a.png\" and alt=\"{WORD}\".", clue: "Put both src and alt attributes inside <img>.", match: "<img[^>]*src=[\"']a\\.png[\"'][^>]*alt=[\"']{WORD}[\"'][^>]*>" },
        { title: "Image Width", explain: "The width attribute sets pixel width directly.", analogy: "Trimming a photo to fit a wallet slot.", example: '<img src="b.png" width="200">', prompt: "Write an <img> with src=\"b.png\" and width=\"{NUM}\".", clue: "Add width=\"{NUM}\" inside the <img> tag.", match: "<img[^>]*src=[\"']b\\.png[\"'][^>]*width=[\"']{NUM}[\"'][^>]*>" },
        { title: "Figure Caption", explain: "<figcaption> adds a visible caption under media.", analogy: "Like a museum plaque beneath a painting.", example: "<figcaption>{ITEM}</figcaption>", prompt: "Write a <figcaption> containing '{ITEM}'.", clue: "Open and close figcaption tags around the word.", match: "<figcaption>.*{ITEM}.*</figcaption>" }
      ]
    },
    {
      title: "Bullet & Numbered Lists",
      tasks: [
        { title: "Unordered List", explain: "<ul> wraps bullet-point lists.", analogy: "A shopping bag holding items.", example: "<ul><li>{ITEM}</li></ul>", prompt: "Create a <ul> containing one <li> with '{ITEM}'.", clue: "Nest <li> inside <ul>.", match: "<ul>\\s*<li>.*{ITEM}.*</li>\\s*</ul>" },
        { title: "Ordered List", explain: "<ol> creates numbered 1, 2, 3 lists automatically.", analogy: "Like a race leaderboard.", example: "<ol><li>{WORD}</li></ol>", prompt: "Create an <ol> containing one <li> with '{WORD}'.", clue: "Use <ol> instead of <ul>.", match: "<ol>\\s*<li>.*{WORD}.*</li>\\s*</ol>" },
        { title: "Multiple List Items", explain: "Add as many <li> tags as needed inside a list.", analogy: "Each <li> is one bullet line.", example: "<ul><li>A</li><li>B</li></ul>", prompt: "Create a <ul> with two <li> items: '{WORD}' and '{ITEM}'.", clue: "Close the first <li> before opening the second.", match: "<ul>[\\s\\S]*<li>.*{WORD}.*</li>[\\s\\S]*<li>.*{ITEM}.*</li>[\\s\\S]*</ul>" },
        { title: "Definition Term", explain: "<dt> defines a term inside a description list.", analogy: "Like a bold word in a dictionary.", example: "<dt>{WORD}</dt>", prompt: "Wrap '{WORD}' inside <dt> tags.", clue: "Use <dt> and </dt>.", match: "<dt>.*{WORD}.*</dt>" }
      ]
    },
    {
      title: "Containers & Classes",
      tasks: [
        { title: "Div Box", explain: "<div> groups related elements into a block container.", analogy: "Like a cardboard box holding smaller items.", example: "<div><p>{WORD}</p></div>", prompt: "Wrap '{WORD}' inside a <div> tag.", clue: "Use <div> and </div>.", match: "<div>.*{WORD}.*</div>" },
        { title: "Inline Span", explain: "<span> styles a small piece of text inside a sentence.", analogy: "Like coloring one word inside a paragraph.", example: "<span>{ITEM}</span>", prompt: "Wrap '{ITEM}' inside a <span> tag.", clue: "Use <span> and </span>.", match: "<span>.*{ITEM}.*</span>" },
        { title: "Class Attribute", explain: "class labels elements so CSS can style them together.", analogy: "Like a team uniform name.", example: '<div class="card">{WORD}</div>', prompt: "Create a <div> with class=\"box\" containing '{WORD}'.", clue: "Put class=\"box\" inside the opening <div>.", match: "<div\\s+class=[\"']box[\"']\\s*>.*{WORD}.*</div>" },
        { title: "Unique ID", explain: "id gives a single element a unique identifier.", analogy: "Like an Aadhaar number—only one per page.", example: '<h1 id="main">{ITEM}</h1>', prompt: "Create an <h1> with id=\"top\" containing '{ITEM}'.", clue: "Add id=\"top\" inside <h1>.", match: "<h1\\s+id=[\"']top[\"']\\s*>.*{ITEM}.*</h1>" }
      ]
    },
    {
      title: "Tables",
      tasks: [
        { title: "Table Wrapper", explain: "<table> starts a grid of rows and columns.", analogy: "Like an Excel spreadsheet grid.", example: "<table><tr><td>{WORD}</td></tr></table>", prompt: "Write opening and closing <table> tags around '{WORD}'.", clue: "Use <table> and </table>.", match: "<table>.*{WORD}.*</table>" },
        { title: "Table Row", explain: "<tr> creates one horizontal row in a table.", analogy: "One line across a ledger.", example: "<tr><td>{NUM}</td></tr>", prompt: "Wrap '{NUM}' inside a <tr> tag.", clue: "Use <tr> and </tr>.", match: "<tr>.*{NUM}.*</tr>" },
        { title: "Table Header Cell", explain: "<th> creates a bold column header cell.", analogy: "The title row at the top of a spreadsheet.", example: "<th>{WORD}</th>", prompt: "Wrap '{WORD}' inside a <th> tag.", clue: "Use <th> and </th>.", match: "<th>.*{WORD}.*</th>" },
        { title: "Table Data Cell", explain: "<td> holds standard data inside a row.", analogy: "One single box in a grid.", example: "<td>{ITEM}</td>", prompt: "Wrap '{ITEM}' inside a <td> tag.", clue: "Use <td> and </td>.", match: "<td>.*{ITEM}.*</td>" }
      ]
    },
    {
      title: "Forms & Inputs",
      tasks: [
        { title: "Text Input", explain: '<input type="text"> creates a single-line typing box.', analogy: "A blank line on a paper form.", example: '<input type="text">', prompt: "Write an <input> with type=\"text\".", clue: "Specify type=\"text\" inside <input>.", match: "<input[^>]*type=[\"']text[\"'][^>]*>" },
        { title: "Number Input", explain: '<input type="number"> only accepts numeric digits.', analogy: "A keypad locked to numbers only.", example: '<input type="number">', prompt: "Write an <input> with type=\"number\".", clue: "Set type=\"number\".", match: "<input[^>]*type=[\"']number[\"'][^>]*>" },
        { title: "Placeholder Hint", explain: "placeholder displays faint helper text inside an input.", analogy: "Pencil instructions inside an empty box.", example: '<input placeholder="{WORD}">', prompt: "Write an <input> with placeholder=\"{WORD}\".", clue: "Use the placeholder attribute.", match: "<input[^>]*placeholder=[\"']{WORD}[\"'][^>]*>" },
        { title: "Submit Button", explain: "<button> creates a clickable action button.", analogy: "Pressing Send on a form.", example: "<button>{ITEM}</button>", prompt: "Create a <button> labeled '{ITEM}'.", clue: "Wrap the text in <button> and </button>.", match: "<button>.*{ITEM}.*</button>" }
      ]
    },
    {
      title: "Semantic Layout",
      tasks: [
        { title: "Header Landmark", explain: "<header> wraps top logos and intro banners.", analogy: "The letterhead at the top of stationery.", example: "<header>{WORD}</header>", prompt: "Wrap '{WORD}' inside <header> tags.", clue: "Use <header> and </header>.", match: "<header>.*{WORD}.*</header>" },
        { title: "Navigation Bar", explain: "<nav> holds major site navigation links.", analogy: "The signposts at a park entrance.", example: "<nav>{ITEM}</nav>", prompt: "Wrap '{ITEM}' inside <nav> tags.", clue: "Use <nav> and </nav>.", match: "<nav>.*{ITEM}.*</nav>" },
        { title: "Main Content", explain: "<main> marks the primary content of the page.", analogy: "The main stage of a theater.", example: "<main>{WORD}</main>", prompt: "Wrap '{WORD}' inside <main> tags.", clue: "Use <main> and </main>.", match: "<main>.*{WORD}.*</main>" },
        { title: "Page Footer", explain: "<footer> holds copyright and bottom info.", analogy: "The fine print at the bottom of a poster.", example: "<footer>{NUM}</footer>", prompt: "Wrap '{NUM}' inside <footer> tags.", clue: "Use <footer> and </footer>.", match: "<footer>.*{NUM}.*</footer>" }
      ]
    },
    {
      title: "HTML Capstone",
      tasks: [
        { title: "Article Card", explain: "<article> wraps a self-contained post or card.", analogy: "One magazine story you could clip out.", example: "<article><h2>{WORD}</h2></article>", prompt: "Create an <article> containing an <h2> with '{WORD}'.", clue: "Nest <h2> inside <article>.", match: "<article>[\\s\\S]*<h2>.*{WORD}.*</h2>[\\s\\S]*</article>" },
        { title: "Labeled Input", explain: "<label> describes what an input box is for.", analogy: "A name tag beside a form box.", example: "<label>{ITEM}</label>", prompt: "Wrap '{ITEM}' inside <label> tags.", clue: "Use <label> and </label>.", match: "<label>.*{ITEM}.*</label>" },
        { title: "Dropdown Select", explain: "<select> with <option> builds a dropdown menu.", analogy: "A roll-down list of choices.", example: "<select><option>{WORD}</option></select>", prompt: "Create a <select> containing one <option> with '{WORD}'.", clue: "Nest <option> inside <select>.", match: "<select>[\\s\\S]*<option>.*{WORD}.*</option>[\\s\\S]*</select>" },
        { title: "Complete Mini Card", explain: "Combine a container, heading, and button into a real UI component.", analogy: "Putting walls, roof, and door together.", example: '<div class="card"><h2>{WORD}</h2><button>Go</button></div>', prompt: "Create a <div> containing an <h2> with '{WORD}' and a <button> with '{ITEM}'.", clue: "Open <div>, add <h2> and <button>, then close </div>.", match: "<div>[\\s\\S]*<h2>.*{WORD}.*</h2>[\\s\\S]*<button>.*{ITEM}.*</button>[\\s\\S]*</div>" }
      ]
    }
  ]
};
