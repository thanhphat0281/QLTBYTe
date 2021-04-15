import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeNameEquipmentComponent } from './change-name-equipment.component';

describe('ChangeNameEquipmentComponent', () => {
  let component: ChangeNameEquipmentComponent;
  let fixture: ComponentFixture<ChangeNameEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeNameEquipmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeNameEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
