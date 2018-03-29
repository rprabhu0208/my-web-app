var TestInterface = /** @class */ (function () {
    function TestInterface() {
    }
    TestInterface.prototype.validate = function () {
        console.log('ITest -> validate() method implementation');
        return true;
    };
    return TestInterface;
}());
