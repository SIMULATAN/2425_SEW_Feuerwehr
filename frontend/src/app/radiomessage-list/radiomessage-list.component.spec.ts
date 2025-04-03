import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiomessageListComponent } from './radiomessage-list.component';

describe('RadiomessageListComponent', () => {
  let component: RadiomessageListComponent;
  let fixture: ComponentFixture<RadiomessageListComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RadiomessageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
