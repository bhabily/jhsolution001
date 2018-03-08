import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { Jhsolution001RegionMySuffixModule } from './region-my-suffix/region-my-suffix.module';
import { Jhsolution001CountryMySuffixModule } from './country-my-suffix/country-my-suffix.module';
import { Jhsolution001LocationMySuffixModule } from './location-my-suffix/location-my-suffix.module';
import { Jhsolution001DepartmentMySuffixModule } from './department-my-suffix/department-my-suffix.module';
import { Jhsolution001TaskMySuffixModule } from './task-my-suffix/task-my-suffix.module';
import { Jhsolution001EmployeeMySuffixModule } from './employee-my-suffix/employee-my-suffix.module';
import { Jhsolution001JobMySuffixModule } from './job-my-suffix/job-my-suffix.module';
import { Jhsolution001JobHistoryMySuffixModule } from './job-history-my-suffix/job-history-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        Jhsolution001RegionMySuffixModule,
        Jhsolution001CountryMySuffixModule,
        Jhsolution001LocationMySuffixModule,
        Jhsolution001DepartmentMySuffixModule,
        Jhsolution001TaskMySuffixModule,
        Jhsolution001EmployeeMySuffixModule,
        Jhsolution001JobMySuffixModule,
        Jhsolution001JobHistoryMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Jhsolution001EntityModule {}
