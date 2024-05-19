import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSelectComponentComponent } from './data-select-component.component';

describe('DataSelectComponentComponent', () => {
  let component: DataSelectComponentComponent;
  let fixture: ComponentFixture<DataSelectComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataSelectComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataSelectComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
