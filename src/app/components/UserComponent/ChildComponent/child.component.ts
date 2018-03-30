import { Component,Input ,OnInit , AfterViewInit,OnChanges, AfterContentInit, AfterContentChecked, AfterViewChecked } from "@angular/core";





@Component({
    selector : 'child-component',
    templateUrl : 'child.component.html'
})
export class ChildComponent implements OnChanges, OnInit, AfterContentInit,AfterContentChecked,
 AfterViewInit, 
AfterViewChecked 
{
    @Input() name : string 

    constructor(){
        console.log('child constructor')
    }
    ngOnChanges(str){
        console.log('child onchages')
        console.dir(str)
    }
    ngOnInit(){
        console.log('child initialize')
    }
    ngAfterContentInit(){
        console.log('child after content init')
    }
    ngAfterContentChecked(){
        console.log('child content checked')
    }
    ngAfterViewInit(){
        console.log('child after view init')
    }
 
    ngAfterViewChecked(){
        console.log('child view checked')
    }
}