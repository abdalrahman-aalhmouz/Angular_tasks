import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandelDataComponent } from './handel-data.component';

describe('HandelDataComponent', () => {
  let component: HandelDataComponent;
  let fixture: ComponentFixture<HandelDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandelDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HandelDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
