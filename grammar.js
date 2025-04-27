/**
 * @file Fine grammar
 * @author Eduardo García Maleta <egmaleta@proton.me>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />

export default grammar({
  name: "fine",

  extras: $ => [$.comment, $.whitespace],

  rules: {
    module: $ => choice(
      $.string,
      $.identifier
    ),

    string: $ => seq(
      "\"",
      repeat(choice(
        $.string_fragment,
        $.escape_sequence,
      )),
      "\"",
    ),
    string_fragment: _ => token.immediate(prec(1, /[^"\\\r\n]+/)),
    escape_sequence: _ => token.immediate(seq(
      "\\",
      choice(
        /[^xu0-7]/,
        /[0-7]{1,3}/,
        /x[0-9a-fA-F]{2}/,
        /u[0-9a-fA-F]{4}/,
        /u\{[0-9a-fA-F]+\}/,
        /[\r?][\n\u2028\u2029]/,
      ),
    )),

    identifier: _ => {
      const small = /[a-z\xdf-\xf6\xf8-\xff\_]/;
      const alphanum = /[a-z\xdf-\xf6\xf8-\xff\_A-Z\xc0-\xd6\xd8-\xde0-9]/;
      return token(seq(small, repeat(alphanum)));
    },

    // EXTRAS

    comment: _ => token(choice(
      seq("//", /[^\r\n\u2028\u2029]*/),
      seq(
        "/*",
        /[^*]*\*+([^/*][^*]*\*+)*/,
        "/",
      ),
    )),

    whitespace: _ => token(/[\s\p{Zs}\uFEFF\u2028\u2029\u2060\u200B]*/)
  }
});
