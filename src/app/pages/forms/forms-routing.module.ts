import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsComponent } from './forms.component';
import { FormInputsComponent } from './form-inputs/form-inputs.component';
import { FormLayoutsComponent } from './form-layouts/form-layouts.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { ButtonsComponent } from './buttons/buttons.component';
// custom
import { FormManagmentComponent } from './form-management/form-management.component';
import { FormCreateComponent } from './form-create/form-create.component';

const routes: Routes = [{
    path: '',
    component: FormsComponent,
    children: [
        // custom
        {
            path: 'management',
            component: FormManagmentComponent,
        },
        {
            path: 'create',
            component: FormCreateComponent,
        },
        {
            path: 'edit/:id',
            component: FormCreateComponent,
        },
        // default
        {
            path: 'inputs',
            component: FormInputsComponent,
        },
        {
            path: 'layouts',
            component: FormLayoutsComponent,
        },
        {
            path: 'layouts',
            component: FormLayoutsComponent,
        },
        {
            path: 'buttons',
            component: ButtonsComponent,
        },
        {
            path: 'datepicker',
            component: DatepickerComponent,
        },
    ],
}];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule,
    ],
})
export class FormsRoutingModule {

}

export const routedComponents = [
    FormsComponent,
    FormInputsComponent,
    FormLayoutsComponent,
    DatepickerComponent,
    // custom
    FormManagmentComponent,
    FormCreateComponent,
];
