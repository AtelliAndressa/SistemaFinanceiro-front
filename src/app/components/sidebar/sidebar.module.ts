import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SidebarComponent } from "./sidebar.component";

@NgModule({
    imports: [CommonModule, FormsModule, SidebarComponent],
    declarations: [],
    exports:[SidebarComponent]
})


export class SidebarModule{}