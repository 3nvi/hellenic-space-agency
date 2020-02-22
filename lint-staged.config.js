module.exports = {
  /*
   * Run prettier on all TS, JS, YAML, JSON, and Markdown files found anywhere in the project
   */
  '*.{ts,tsx,js,json,yml,md}': ['prettier --write', 'git add'],

  /*
   * Run ESLint checks for all TS & JS files found anywhere in hte project
   */
  '*.{ts,tsx,js}': ['eslint'],

  /*
   * only run the TS compiler when there are changes in TS files
   */
  '*.ts?(x)': () => 'tsc -p .',
};
