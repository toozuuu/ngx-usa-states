import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxUsaStatesListComponent } from './ngx-usa-states-list.component';

describe('NgxUsaStatesListComponent', () => {
  let component: NgxUsaStatesListComponent;
  let fixture: ComponentFixture<NgxUsaStatesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxUsaStatesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxUsaStatesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
