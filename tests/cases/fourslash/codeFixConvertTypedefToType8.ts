/// <reference path='fourslash.ts' />

////
//// class Example {
////     /**
////      * List of items to be rendered in the bar chart
////      * @typedef {{ count: number }} Counter
////      * @returns {Counter}
////      */
////     get something() {
////         return { count: 0 };
////     }
//// }
////

verify.codeFixAll({
  fixId: 'convertTypedefToType',
  fixAllDescription: ts.Diagnostics.Convert_all_typedef_to_TypeScript_types.message,
  newFileContent: `
type Counter = { count: number; };

class Example {
    /**
     * List of items to be rendered in the bar chart
     * @returns {Counter}
     */
    get something() {
        return { count: 0 };
    }
}
`,
});
