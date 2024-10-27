package tree_sitter_fine_test

import (
	"testing"

	tree_sitter "github.com/tree-sitter/go-tree-sitter"
	tree_sitter_fine "github.com/finelang/tree-sitter-fine/bindings/go"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_fine.Language())
	if language == nil {
		t.Errorf("Error loading Fine grammar")
	}
}
