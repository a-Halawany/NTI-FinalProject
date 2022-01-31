import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddteachersubjectComponent } from './addteachersubject.component';

describe('AddteachersubjectComponent', () => {
  let component: AddteachersubjectComponent;
  let fixture: ComponentFixture<AddteachersubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddteachersubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddteachersubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
