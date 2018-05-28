import { Component , OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
    selector : 'userprofile',
    templateUrl : './userprofile.component.html'   

})
export class UserProfileComponent{
    userProfileForm : FormGroup;

    ngOnInit(){
        this.initForm()
    }
    onFileChange(event) {
        debugger;
        let reader = new FileReader();
        if(event.target.files && event.target.files.length > 0) {
          let file = event.target.files[0];
          reader.readAsDataURL(file);
          reader.onload = () => {
            this.userProfileForm.get('ProfilePic').setValue({
              filename: file.name,
              filetype: file.type,
              value: reader.result.split(',')[1]
            })
          };
        }
      }
    
    updateProfile(){
        let reader = new FileReader();

        console.log(this.userProfileForm)
    }

    private initForm(){
        this.userProfileForm = new FormGroup({
            'ProfilePic' : new FormControl('',Validators.required) 
        })
    }
}