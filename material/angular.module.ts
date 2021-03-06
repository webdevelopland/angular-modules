// ...

// —————————————————————— Material ——————————————————————
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatCardModule, MatInputModule, MatButtonModule, MatSelectModule, MatProgressSpinnerModule, MatIconModule } from "@angular/material";
import "hammerjs";

// ...

// ———————————————————————————————— NgModule ————————————————————————————————
@NgModule({
  declarations: [
    // ...
  ],
  imports: [
    // ...

    // Angular Material:
    BrowserAnimationsModule,
    MatCardModule, MatInputModule, MatButtonModule, MatSelectModule, MatProgressSpinnerModule, MatIconModule,

    // ...
  ],
  providers: [
    // ...
  ],
  bootstrap: [ AngularComponent ]
})
export class AngularModule {}