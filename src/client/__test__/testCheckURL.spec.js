import "babel-polyfill";
import { checkURL } from "../js/checkURL"
   
describe("Testing check url functionality", () => {  
    test("Testing the checkURL() function defined or not", () => {
           expect(checkURL).toBeDefined();
    })
    
    test("Testing the checkURL() function return false for invalid url", () => {
        expect(checkURL("aaa")).toBeFalsy();
    })

    test("Testing the checkURL() function return true for valid url", () => {
        expect(checkURL("www.google.com")).toBeTruthy();
    })
});