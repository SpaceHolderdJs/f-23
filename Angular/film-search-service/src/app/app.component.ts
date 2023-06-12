import { Component } from '@angular/core';

type SectionVariations = "liked" | "main";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentSection: SectionVariations = "main";

  sectionSwitcher(sectionName: SectionVariations) {
    this.currentSection = sectionName;
  }
}
