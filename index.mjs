import { TextLintCore } from "textlint";
import noTodo from "textlint-rule-no-todo";
const textlint = new TextLintCore();
textlint.setupRules({
    "no-todo": noTodo.default
});
const results = await textlint.lintFile("README.md");
console.log("results", results);
