import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulerviewComponent } from './schedulerview.component';

describe('SchedulerviewComponent', () => {
  let component: SchedulerviewComponent;
  let fixture: ComponentFixture<SchedulerviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedulerviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulerviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
