import { Location } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, Routes } from '@angular/router';

/**
 * A component the shows selected Protocol Information, Protocol Enrollments and a button to enroll new patients to this Protocol
 *
 * @author Pavan Kumar Jadda
 * @since 2.0.0
 */
@Component({
  selector: 'app-protocol',
  imports: [],
  templateUrl: './protocol.component.html',
})
export class ProtocolComponent {
  id = input<number>();

  constructor() {
    console.log('ProtocolComponent id:', this.id());
  }
}

//Protocol Routes
export const protocolRoutes: Routes = [
  {
    path: '',
    title: 'Protocol | PRES',
    component: ProtocolComponent,
  },
  {
    path: ':id',
    title: 'Protocol | PRES',
    component: ProtocolComponent,
  },
];
