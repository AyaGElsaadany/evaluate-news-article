import "babel-polyfill";
import { handleForm } from "../js/formHandler"
   
describe("Testing the submit functionality", () => {
    test("Testing the handleForm() function defined or not", () => {
        expect(handleForm).toBeDefined();
    })

});