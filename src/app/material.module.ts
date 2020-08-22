import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';




@NgModule({
    imports: [
        MatButtonModule,
        MatSliderModule,
        MatGridListModule,
        MatCardModule,
        MatToolbarModule,
        MatInputModule,
        MatSelectModule,
        MatSidenavModule,
        MatDividerModule
    ],
    exports: [
        MatButtonModule,
        MatSliderModule,
        MatGridListModule,
        MatCardModule,
        MatToolbarModule,
        MatInputModule,
        MatSelectModule,
        MatSidenavModule,
        MatDividerModule
    ]
})


export class MaterialModule {}
