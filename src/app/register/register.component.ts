import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  @Input() valuesFromHomes: any;
  @Output() cancelRegister = new EventEmitter();
          
  model: any = {}; 
  constructor() {}

  ngOnInit() {}

  register() {
    console.log(this.model);
  }

  cancel(){
   
    this.cancelRegister.emit(false);
  }
}
