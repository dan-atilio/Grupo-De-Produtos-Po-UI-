import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManipulateComponent } from './manipulate.component';

describe('ManipulateComponent', () => {
  let component: ManipulateComponent;
  let fixture: ComponentFixture<ManipulateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManipulateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManipulateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
