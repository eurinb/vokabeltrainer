import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VokabelAbfrageComponent } from './vokabel-abfrage.component';

describe('VokabelAbfrageComponent', () => {
  let component: VokabelAbfrageComponent;
  let fixture: ComponentFixture<VokabelAbfrageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VokabelAbfrageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VokabelAbfrageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
