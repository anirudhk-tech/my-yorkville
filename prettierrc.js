module.exports = {
  // Specify the line length that the printer will wrap on.
  printWidth: 120, // (default: 80)

  // Specify the number of spaces per indentation-level.
  tabWidth: 2, // (default: 2)

  // Indent lines with tabs instead of spaces.
  useTabs: false, // (default: false)

  // Print semicolons at the ends of statements.
  semi: true, // (default: true)

  // Use single quotes instead of double quotes.
  singleQuote: true, // (default: false)

  // Use single quotes in JSX.
  jsxSingleQuote: false, // (default: false)

  // Add a comma after the last item in objects, arrays, etc.
  trailingComma: "all", // (options: "none", "es5", "all") (default: "es5")

  // Print spaces between brackets in object literals.
  bracketSpacing: true, // (default: true)

  // Put the `>` of a multi-line JSX element at the end of the last line instead of being alone on the next line.
  jsxBracketSameLine: false, // (default: false)

  // Include parentheses around a sole arrow function parameter.
  arrowParens: "always", // (options: "avoid", "always") (default: "always")

  // Control how Prettier formats the code based on the file's content.
  parser: "babel", // (default: "babel")

  // Specify the range of lines to format.
  rangeStart: 0, // (default: 0)
  rangeEnd: Infinity, // (default: Infinity)

  // Require a special comment, like `@format`, to format the file.
  requirePragma: false, // (default: false)

  // Insert a special @format marker at the top of files.
  insertPragma: false, // (default: false)

  // How to wrap prose.
  proseWrap: "preserve", // (options: "always", "never", "preserve") (default: "preserve")

  // Control how Prettier formats HTML.
  htmlWhitespaceSensitivity: "css", // (options: "css", "strict", "ignore") (default: "css")

  // End of line sequence.
  endOfLine: "lf", // (options: "auto", "lf", "crlf", "cr") (default: "lf")

  // Enable or disable embedded languages formatting.
  embeddedLanguageFormatting: "auto", // (options: "auto", "off") (default: "auto")
};
