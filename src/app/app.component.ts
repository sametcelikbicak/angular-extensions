import { Component, OnInit, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = `Angular ${VERSION.major} extensions`;
  stringValue = "String value for extension";
  dateValue = new Date();
  numberValue = 12345;
  booleanValue = true;

  ngOnInit() {
    console.log(this.title);

    console.log("String:", this.stringValue);
    console.log(
      "'toCamelCase' extension result:",
      this.stringValue.toCamelCase()
    );
    console.log(
      "'toPascalCase' extension result:",
      this.stringValue.toPascalCase()
    );
    console.log(
      "'toCapitalizeFirstLetter' extension result:",
      this.stringValue.toCapitalizeFirstLetter()
    );

    console.log("Date:", this.dateValue);
    console.log(
      "'toStringFormat' extension result:",
      this.dateValue.toStringFormat()
    );

    console.log("Number:", this.numberValue);
    console.log("'isNAN' extension result:", this.numberValue.isNAN());

    console.log("Boolean:", this.booleanValue);
    console.log("'not' extension result:", this.booleanValue.not());
  }
}
