const levels = {
    easy: {
        words: [
            "HTML", "CSS", "SQL", "TAG", "STYLE", "TABLE", "FORM", "DIV", "SPAN", "HREF",
            "CLASS", "ID", "SRC", "HEAD", "BODY"
        ],
        clues: [
            "Markup language for web pages",
            "Styles web pages",
            "Structured Query Language for databases",
            "Defines elements in an HTML document",
            "CSS rule to change appearance of elements",
            "Organizes data in rows and columns",
            "Collects user inputs in a webpage",
            "A container element in HTML for structuring content",
            "An inline container for grouping elements",
            "HTML attribute used for links",
            "Defines a reusable set of styles in CSS",
            "Uniquely identifies an element in CSS",
            "Specifies the source for an image or media file",
            "Contains metadata like title, scripts, and styles",
            "Contains the main content of the webpage"
        ]
    },

    medium: {
        words: [
            "JAVASCRIPT", "NODEJS", "QUERY", "ARRAY", "OBJECT", "FUNCTION", "EVENT",
            "DOM", "LOCALSTORAGE", "SESSIONSTORAGE", "LOOP", "SCOPE", "CLOSURE", "PROMISE",
            "ASYNC", "AWAIT"
        ],
        clues: [
            "Programming language for the web",
            "JavaScript runtime for backend",
            "A request to retrieve data from a database",
            "A data structure for storing lists",
            "A structure that stores key-value pairs",
            "A reusable block of code that performs a task",
            "Triggered by user actions like clicks and keypresses",
            "Represents the structure of a webpage",
            "Stores data persistently in the browser",
            "Stores temporary data in the browser",
            "Executes a block of code multiple times",
            "Determines variable accessibility in JavaScript",
            "A function that retains access to its scope after execution",
            "An object representing a future result in async code",
            "Keyword used for handling asynchronous operations",
            "Waits for a promise to resolve before executing the next line"
        ]
    },

    hard: {
        words: [
            "EXPRESS", "MONGODB", "INDEX", "JOIN", "FETCH", "AXIOS", "CALLBACK",
            "REDUX", "MODULE", "WEBPACK", "BABEL", "HOISTING", "TYPESCRIPT", "POLYMORPHISM",
            "REACT", "VUE"
        ],
        clues: [
            "Minimalist web framework for Node.js",
            "NoSQL database commonly used with Node.js",
            "Improves search performance in SQL databases",
            "Combines rows from two or more tables in SQL",
            "Method to make HTTP requests in JavaScript",
            "A promise-based HTTP client for JavaScript",
            "A function passed as an argument to another function",
            "State management library for JavaScript applications",
            "Encapsulates reusable functionality in JavaScript",
            "A popular module bundler for JavaScript applications",
            "JavaScript compiler that converts ES6+ code to ES5",
            "JavaScript mechanism where variable declarations move to the top",
            "A superset of JavaScript with optional static typing",
            "OOP concept where objects can take multiple forms",
            "A frontend library for building UI components",
            "A progressive JavaScript framework for UI development"
        ]
    },

    mindcrack: {
        words: [
            "ASYNC", "WEBPACK", "REACT", "CLOSURE", "ALGORITHM", "SQLITE", "MIDDLEWARE",
            "MICROSERVICES", "WEBRTC", "CSR", "SSR", "THROTTLING", "DEBOUNCING",
            "DYNAMICPROGRAMMING", "GRAPHQL", "RESTAPI", "OAUTH", "ENCRYPTION"
        ],
        clues: [
            "Keyword used for asynchronous operations in JavaScript",
            "A module bundler for JavaScript applications",
            "A popular frontend JavaScript library developed by Meta",
            "A function that retains access to its scope even after execution",
            "Step-by-step procedure for solving a problem efficiently",
            "Lightweight database used for mobile and embedded applications",
            "Software that processes requests before they reach a server",
            "Architectural pattern breaking applications into independent services",
            "A technology for real-time peer-to-peer communication",
            "Client-Side Rendering where UI updates happen in the browser",
            "Server-Side Rendering where pages are generated on the server",
            "Reduces the frequency of API calls by limiting executions",
            "Prevents multiple rapid executions of a function",
            "Optimization technique breaking problems into subproblems",
            "Query language for APIs that allows fetching only required data",
            "Standard architecture for designing RESTful APIs",
            "Authentication framework for secure user login and authorization",
            "Process of encoding data for security purposes"
        ]
    },

    coding: {
        words: [
            "FORLOOP", "RECURSION", "PROMISE", "OBJECT", "CLASS", "INHERITANCE", "INTERFACE",
            "ABSTRACTION", "ENCAPSULATION", "STACK", "QUEUE", "TREE", "GRAPH", "DFS", "BFS",
            "BINARYSEARCH", "MERGESORT", "QUICKSORT"
        ],
        clues: [
            "A loop that iterates over a sequence of numbers",
            "A function that calls itself to solve a problem",
            "An object that represents a future asynchronous result",
            "A data structure used to store key-value pairs in JavaScript",
            "Defines a blueprint for creating objects",
            "Concept where a class derives properties from another class",
            "A contract specifying methods a class must implement",
            "Hiding implementation details from the user",
            "Bundling data and methods together in OOP",
            "LIFO data structure where elements are added/removed from the top",
            "FIFO data structure where elements are processed in order",
            "Hierarchical data structure used in algorithms",
            "A collection of nodes connected by edges",
            "Depth-first search algorithm for traversing graphs",
            "Breadth-first search algorithm for traversing graphs",
            "Search algorithm that finds an element in a sorted array",
            "Sorting algorithm that divides and merges arrays",
            "Efficient sorting algorithm using partitioning"
        ]
    },

    code_output: {
        words: [
            "UNDEFINED", "NULL", "NAN", "ERROR", "REFERENCEERROR", "SYNTAXERROR",
            "LOG", "WARN", "DEBUG", "JSON", "STRINGIFY", "PARSE", "TYPEOF", "INSTANCEOF",
            "EVENTLOOP", "CALLSTACK"
        ],
        clues: [
            "Value returned when a variable is declared but not assigned a value",
            "A special value that represents an empty or unknown value in JavaScript",
            "Returned when a mathematical operation results in an invalid number",
            "An unexpected issue that prevents code execution",
            "Error when trying to access an undefined variable",
            "Error due to incorrect syntax in the code",
            "Method used to print messages to the console",
            "Logs a warning message in the console",
            "Used for debugging JavaScript code",
            "Format used to store and transfer data",
            "Converts JavaScript objects into JSON format",
            "Parses a JSON string into a JavaScript object",
            "Returns the data type of a variable",
            "Checks if an object is an instance of a specific class",
            "Handles asynchronous operations in JavaScript",
            "Keeps track of function execution in JavaScript"
        ]
    }
};

module.exports = levels;