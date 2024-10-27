/**
 * @file Fine grammar
 * @author Eduardo García Maleta <egmaleta@proton.me>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: "fine",

  rules: {
    // TODO: add the actual grammar rules
    source_file: $ => "hello"
  }
});
