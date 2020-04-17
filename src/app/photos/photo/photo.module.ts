import { NgModule } from '@angular/core';
import { PhotoComponent } from './photo.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations:[PhotoComponent],
    imports: [
        HttpClientModule,
        CommonModule
    ],
    exports: [PhotoComponent]
})
export class PhotoModule{}