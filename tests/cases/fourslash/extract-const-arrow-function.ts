/// <reference path='fourslash.ts' />

////const f = (x) => /*a*/2 + 1/*b*/);

goTo.select("a", "b");
edit.applyRefactor({
    refactorName: "Extract Symbol",
    actionName: "constant_scope_0",
    actionDescription: "Extract to constant in enclosing scope",
    newContent:
`const f = () => {
    const newLocal = 2 + 1;
    return /*RENAME*/newLocal;
};`
});
