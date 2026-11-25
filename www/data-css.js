const COURSE_CSS = {
  title: "CSS",
  badge: "{ }",
  bg: "#DBEAFE",
  color: "#1D4ED8",
  desc: "40 step-by-step tasks covering colors, typography, box model, flexbox & grid.",
  modules: [
    {
      title: "Colors & Selectors",
      tasks: [
        { title: "Text Color", explain: "color changes the foreground text color of an element.", analogy: "Choosing ink color for your pen.", example: "h1 { color: blue; }", prompt: "Set h1 text color to red.", clue: "Write selector h1, curly braces, and color: red;", match: "h1\\s*\\{[\\s\\S]*color\\s*:\\s*red\\s*;?[\\s\\S]*\\}" },
        { title: "Background Color", explain: "background-color paints behind an element's content.", analogy: "Painting the wall behind a poster.", example: "body { background-color: ivory; }", prompt: "Set p background-color to yellow.", clue: "Use the hyphenated background-color property.", match: "p\\s*\\{[\\s\\S]*background-color\\s*:\\s*yellow\\s*;?[\\s\\S]*\\}" },
        { title: "Class Selector", explain: "Prefix a class name with a dot (.) to style elements with that class.", analogy: "Styling everyone wearing the same team jersey.", example: ".{word} { color: green; }", prompt: "Style the .{word} class so color is green.", clue: "Start with a period before the class name.", match: "\\.{word}\\s*\\{[\\s\\S]*color\\s*:\\s*green\\s*;?[\\s\\S]*\\}" },
        { title: "ID Selector", explain: "Prefix an id name with # to style one unique element.", analogy: "Using a VIP pass for one specific item.", example: "#{item} { color: navy; }", prompt: "Style the #{item} id so color is navy.", clue: "Start with # before the id name.", match: "#{item}\\s*\\{[\\s\\S]*color\\s*:\\s*navy\\s*;?[\\s\\S]*\\}" }
      ]
    },
    {
      title: "Typography",
      tasks: [
        { title: "Font Size", explain: "font-size controls how big text appears in pixels (px).", analogy: "Adjusting zoom on a page.", example: "h1 { font-size: {NUM}px; }", prompt: "Set h1 font-size to {NUM}px.", clue: "Include px right after the number.", match: "h1\\s*\\{[\\s\\S]*font-size\\s*:\\s*{NUM}px\\s*;?[\\s\\S]*\\}" },
        { title: "Font Weight", explain: "font-weight: bold makes text thick and heavy.", analogy: "Switching from a fine pen to a thick marker.", example: "p { font-weight: bold; }", prompt: "Make .{word} text bold using font-weight.", clue: "Set font-weight to bold.", match: "\\.{word}\\s*\\{[\\s\\S]*font-weight\\s*:\\s*bold\\s*;?[\\s\\S]*\\}" },
        { title: "Text Alignment", explain: "text-align centers or aligns text horizontally.", analogy: "Centering a title on a certificate.", example: "h1 { text-align: center; }", prompt: "Center-align h2 text using text-align.", clue: "Use text-align: center;", match: "h2\\s*\\{[\\s\\S]*text-align\\s*:\\s*center\\s*;?[\\s\\S]*\\}" },
        { title: "Line Height", explain: "line-height adds vertical breathing space between lines.", analogy: "Double-spacing a handwritten essay.", example: "p { line-height: 1.5; }", prompt: "Set p line-height to 1.6.", clue: "line-height takes a plain number like 1.6.", match: "p\\s*\\{[\\s\\S]*line-height\\s*:\\s*1\\.6\\s*;?[\\s\\S]*\\}" }
      ]
    },
    {
      title: "Box Model",
      tasks: [
        { title: "Inner Padding", explain: "padding adds cushion inside an element's border.", analogy: "Foam padding inside a shipping box.", example: ".card { padding: {NUM}px; }", prompt: "Give .{word} {NUM}px of padding.", clue: "Use padding with px units.", match: "\\.{word}\\s*\\{[\\s\\S]*padding\\s*:\\s*{NUM}px\\s*;?[\\s\\S]*\\}" },
        { title: "Outer Margin", explain: "margin pushes neighboring elements away outside the border.", analogy: "Empty space between parked cars.", example: ".card { margin: 20px; }", prompt: "Give .{item} 20px of margin.", clue: "Use margin: 20px;", match: "\\.{item}\\s*\\{[\\s\\S]*margin\\s*:\\s*20px\\s*;?[\\s\\S]*\\}" },
        { title: "Element Width", explain: "width sets how wide a box stretches.", analogy: "Setting shelf width with a tape measure.", example: ".box { width: 300px; }", prompt: "Set .{word} width to 250px.", clue: "Use width: 250px;", match: "\\.{word}\\s*\\{[\\s\\S]*width\\s*:\\s*250px\\s*;?[\\s\\S]*\\}" },
        { title: "Element Height", explain: "height sets the vertical size of a box.", analogy: "Setting the height of a banner.", example: ".box { height: 100px; }", prompt: "Set .{item} height to 120px.", clue: "Use height: 120px;", match: "\\.{item}\\s*\\{[\\s\\S]*height\\s*:\\s*120px\\s*;?[\\s\\S]*\\}" }
      ]
    },
    {
      title: "Borders & Corners",
      tasks: [
        { title: "Solid Border", explain: "border draws an outline using thickness, style, and color.", analogy: "Drawing a frame around a picture.", example: ".card { border: 2px solid black; }", prompt: "Give .{word} a '1px solid gray' border.", clue: "Combine thickness, style, and color in border.", match: "\\.{word}\\s*\\{[\\s\\S]*border\\s*:\\s*1px\\s+solid\\s+gray\\s*;?[\\s\\S]*\\}" },
        { title: "Rounded Corners", explain: "border-radius curves sharp square corners.", analogy: "Rounding the corners of a playing card.", example: ".btn { border-radius: 12px; }", prompt: "Give .{item} a border-radius of 16px.", clue: "Use border-radius: 16px;", match: "\\.{item}\\s*\\{[\\s\\S]*border-radius\\s*:\\s*16px\\s*;?[\\s\\S]*\\}" },
        { title: "Circle Avatar", explain: "border-radius: 50% turns a square into a perfect circle.", analogy: "Cutting a square photo into a round badge.", example: ".avatar { border-radius: 50%; }", prompt: "Set .{word} border-radius to 50%.", clue: "Use 50% instead of px.", match: "\\.{word}\\s*\\{[\\s\\S]*border-radius\\s*:\\s*50%\\s*;?[\\s\\S]*\\}" },
        { title: "Remove Outline", explain: "outline: none removes default browser focus rings.", analogy: "Cleaning stray pencil marks.", example: "input { outline: none; }", prompt: "Set input outline to none.", clue: "Target input and set outline: none;", match: "input\\s*\\{[\\s\\S]*outline\\s*:\\s*none\\s*;?[\\s\\S]*\\}" }
      ]
    },
    {
      title: "Display & Visibility",
      tasks: [
        { title: "Hide Element", explain: "display: none completely hides an element from view.", analogy: "Putting an item away in a drawer.", example: ".hidden { display: none; }", prompt: "Hide .{word} using display: none.", clue: "Set display to none.", match: "\\.{word}\\s*\\{[\\s\\S]*display\\s*:\\s*none\\s*;?[\\s\\S]*\\}" },
        { title: "Inline-Block", explain: "display: inline-block lets elements sit side-by-side while keeping width/height.", analogy: "Tiles placed neatly in a row.", example: ".badge { display: inline-block; }", prompt: "Set .{item} display to inline-block.", clue: "Use display: inline-block;", match: "\\.{item}\\s*\\{[\\s\\S]*display\\s*:\\s*inline-block\\s*;?[\\s\\S]*\\}" },
        { title: "Opacity Fade", explain: "opacity controls transparency from 0 (invisible) to 1 (solid).", analogy: "Adjusting frosted glass transparency.", example: ".dim { opacity: 0.5; }", prompt: "Set .{word} opacity to 0.8.", clue: "Use a decimal between 0 and 1.", match: "\\.{word}\\s*\\{[\\s\\S]*opacity\\s*:\\s*0\\.8\\s*;?[\\s\\S]*\\}" },
        { title: "Pointer Cursor", explain: "cursor: pointer shows a hand icon on hover.", analogy: "Signaling that a button is clickable.", example: "button { cursor: pointer; }", prompt: "Set button cursor to pointer.", clue: "Target button with cursor: pointer;", match: "button\\s*\\{[\\s\\S]*cursor\\s*:\\s*pointer\\s*;?[\\s\\S]*\\}" }
      ]
    },
    {
      title: "Flexbox Basics",
      tasks: [
        { title: "Enable Flexbox", explain: "display: flex arranges child elements in a flexible row.", analogy: "Lining books upright on a shelf.", example: ".row { display: flex; }", prompt: "Turn .{word} into a flex container.", clue: "Use display: flex;", match: "\\.{word}\\s*\\{[\\s\\S]*display\\s*:\\s*flex\\s*;?[\\s\\S]*\\}" },
        { title: "Flex Gap", explain: "gap adds clean spacing between flex items.", analogy: "Equal spacers between tiles.", example: ".row { gap: 12px; }", prompt: "Set .{item} gap to 16px.", clue: "Use gap: 16px;", match: "\\.{item}\\s*\\{[\\s\\S]*gap\\s*:\\s*16px\\s*;?[\\s\\S]*\\}" },
        { title: "Horizontal Centering", explain: "justify-content: center centers items along the main row.", analogy: "Sliding beads to the middle of a string.", example: ".bar { justify-content: center; }", prompt: "Set .{word} justify-content to center.", clue: "Use justify-content: center;", match: "\\.{word}\\s*\\{[\\s\\S]*justify-content\\s*:\\s*center\\s*;?[\\s\\S]*\\}" },
        { title: "Vertical Alignment", explain: "align-items: center aligns items vertically in a flex row.", analogy: "Hanging picture frames at equal eye level.", example: ".bar { align-items: center; }", prompt: "Set .{item} align-items to center.", clue: "Use align-items: center;", match: "\\.{item}\\s*\\{[\\s\\S]*align-items\\s*:\\s*center\\s*;?[\\s\\S]*\\}" }
      ]
    },
    {
      title: "Advanced Flexbox",
      tasks: [
        { title: "Space Between", explain: "justify-content: space-between pushes first and last items to edges.", analogy: "Bookends holding the outer ends of a shelf.", example: ".nav { justify-content: space-between; }", prompt: "Set .{word} justify-content to space-between.", clue: "Use space-between with a hyphen.", match: "\\.{word}\\s*\\{[\\s\\S]*justify-content\\s*:\\s*space-between\\s*;?[\\s\\S]*\\}" },
        { title: "Column Stack", explain: "flex-direction: column stacks flex items vertically.", analogy: "Stacking plates on top of each other.", example: ".col { flex-direction: column; }", prompt: "Set .{item} flex-direction to column.", clue: "Use flex-direction: column;", match: "\\.{item}\\s*\\{[\\s\\S]*flex-direction\\s*:\\s*column\\s*;?[\\s\\S]*\\}" },
        { title: "Wrap Overflow", explain: "flex-wrap: wrap lets items drop onto a new line when full.", analogy: "Words wrapping onto the next line of a page.", example: ".grid { flex-wrap: wrap; }", prompt: "Set .{word} flex-wrap to wrap.", clue: "Use flex-wrap: wrap;", match: "\\.{word}\\s*\\{[\\s\\S]*flex-wrap\\s*:\\s*wrap\\s*;?[\\s\\S]*\\}" },
        { title: "Flex Grow", explain: "flex: 1 lets an item expand to fill remaining space.", analogy: "An elastic band stretching across a gap.", example: ".grow { flex: 1; }", prompt: "Set .{item} flex to 1.", clue: "Use flex: 1;", match: "\\.{item}\\s*\\{[\\s\\S]*flex\\s*:\\s*1\\s*;?[\\s\\S]*\\}" }
      ]
    },
    {
      title: "CSS Grid",
      tasks: [
        { title: "Enable Grid", explain: "display: grid unlocks two-dimensional rows and columns.", analogy: "Drawing a chessboard layout.", example: ".board { display: grid; }", prompt: "Turn .{word} into a grid container.", clue: "Use display: grid;", match: "\\.{word}\\s*\\{[\\s\\S]*display\\s*:\\s*grid\\s*;?[\\s\\S]*\\}" },
        { title: "Two Equal Columns", explain: "grid-template-columns: 1fr 1fr splits space into two equal columns.", analogy: "Folding a sheet of paper neatly in half.", example: ".two { grid-template-columns: 1fr 1fr; }", prompt: "Set .{item} grid-template-columns to '1fr 1fr'.", clue: "1fr means one fraction of available space.", match: "\\.{item}\\s*\\{[\\s\\S]*grid-template-columns\\s*:\\s*1fr\\s+1fr\\s*;?[\\s\\S]*\\}" },
        { title: "Three Columns", explain: "repeat(3, 1fr) creates three equal columns cleanly.", analogy: "Dividing a tray into three equal sections.", example: ".three { grid-template-columns: repeat(3, 1fr); }", prompt: "Set .{word} grid-template-columns to 'repeat(3, 1fr)'.", clue: "Use repeat(3, 1fr).", match: "\\.{word}\\s*\\{[\\s\\S]*grid-template-columns\\s*:\\s*repeat\\(\\s*3\\s*,\\s*1fr\\s*\\)\\s*;?[\\s\\S]*\\}" },
        { title: "Grid Gap", explain: "gap works in CSS Grid too to separate rows and columns.", analogy: "Grout lines between floor tiles.", example: ".board { gap: 10px; }", prompt: "Set .{item} gap to 10px.", clue: "Use gap: 10px;", match: "\\.{item}\\s*\\{[\\s\\S]*gap\\s*:\\s*10px\\s*;?[\\s\\S]*\\}" }
      ]
    },
    {
      title: "Positioning",
      tasks: [
        { title: "Relative Anchor", explain: "position: relative makes an element a positioning anchor for children.", analogy: "Setting a base camp before measuring offsets.", example: ".wrap { position: relative; }", prompt: "Set .{word} position to relative.", clue: "Use position: relative;", match: "\\.{word}\\s*\\{[\\s\\S]*position\\s*:\\s*relative\\s*;?[\\s\\S]*\\}" },
        { title: "Absolute Pin", explain: "position: absolute pins an element to exact coordinates.", analogy: "Sticking a badge onto the corner of a card.", example: ".badge { position: absolute; }", prompt: "Set .{item} position to absolute.", clue: "Use position: absolute;", match: "\\.{item}\\s*\\{[\\s\\S]*position\\s*:\\s*absolute\\s*;?[\\s\\S]*\\}" },
        { title: "Fixed Bottom Bar", explain: "position: fixed locks an element to the screen even while scrolling.", analogy: "Like a sticky note stuck directly on your monitor.", example: ".bar { position: fixed; }", prompt: "Set .{word} position to fixed.", clue: "Use position: fixed;", match: "\\.{word}\\s*\\{[\\s\\S]*position\\s*:\\s*fixed\\s*;?[\\s\\S]*\\}" },
        { title: "Layer Order", explain: "z-index controls which overlapping element sits on top.", analogy: "Placing one playing card above another.", example: ".modal { z-index: 10; }", prompt: "Set .{item} z-index to 100.", clue: "Use z-index: 100;", match: "\\.{item}\\s*\\{[\\s\\S]*z-index\\s*:\\s*100\\s*;?[\\s\\S]*\\}" }
      ]
    },
    {
      title: "CSS Capstone",
      tasks: [
        { title: "Hover Interaction", explain: ":hover applies styles when a user touches or hovers over an element.", analogy: "A button lighting up when your finger nears it.", example: "button:hover { opacity: 0.9; }", prompt: "Write a button:hover rule setting opacity to 0.8.", clue: "Attach :hover directly to button with no space.", match: "button:hover\\s*\\{[\\s\\S]*opacity\\s*:\\s*0\\.8\\s*;?[\\s\\S]*\\}" },
        { title: "Smooth Transition", explain: "transition animates property changes smoothly over time.", analogy: "Dimming lights smoothly instead of flipping a switch.", example: ".btn { transition: 0.2s; }", prompt: "Set .{word} transition to 0.3s.", clue: "Use transition: 0.3s;", match: "\\.{word}\\s*\\{[\\s\\S]*transition\\s*:\\s*0\\.3s\\s*;?[\\s\\S]*\\}" },
        { title: "Text Transform", explain: "text-transform: uppercase converts text to all capitals.", analogy: "Turning on Caps Lock via CSS.", example: ".tag { text-transform: uppercase; }", prompt: "Set .{item} text-transform to uppercase.", clue: "Use text-transform: uppercase;", match: "\\.{item}\\s*\\{[\\s\\S]*text-transform\\s*:\\s*uppercase\\s*;?[\\s\\S]*\\}" },
        { title: "Styled Card Component", explain: "Combine background, padding, and rounded corners into a modern card.", analogy: "Polishing a UI card for production.", example: ".card { background-color: white; padding: 16px; border-radius: 12px; }", prompt: "Style .{word} with background-color: white and padding: 20px.", clue: "Include both background-color and padding inside .{word}.", match: "\\.{word}\\s*\\{[\\s\\S]*background-color\\s*:\\s*white\\s*;[\\s\\S]*padding\\s*:\\s*20px\\s*;?[\\s\\S]*\\}" }
      ]
    }
  ]
};
