
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcomponentComponent } from './listcomponent.component';

describe('listcomponentComponent', () => {
  let component:  ListcomponentComponent;
  let fixture: ComponentFixture< ListcomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ListcomponentComponent]
    });
    fixture = TestBed.createComponent( ListcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});