interface ITest{ 
    validate() : boolean;
}

class TestInterface implements ITest{

    validate(){
        console.log('ITest -> validate() method implementation')
        return true;
    }
}