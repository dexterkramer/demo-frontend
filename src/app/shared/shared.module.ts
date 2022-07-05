import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Error403PageComponent, Error404PageComponent } from './pages';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        Error403PageComponent,
        Error404PageComponent
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
})
export class SharedModule {}
