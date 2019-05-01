import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommissieComponent } from './commissie.component';

describe('CommissieComponent', () => {
  let component: CommissieComponent;
  let fixture: ComponentFixture<CommissieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommissieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommissieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
