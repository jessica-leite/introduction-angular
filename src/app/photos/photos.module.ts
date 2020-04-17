import { NgModule } from '@angular/core';

import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotoModule } from './photo/photo.module';
import { PhotoFormModule } from './photo-form/photo-form.module';

@NgModule({
    declarations: [],
    imports: [
        PhotoListModule,
        PhotoModule,
        PhotoFormModule
    ]
})
export class PhotosModule{}