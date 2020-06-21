import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VocabularComponent } from './vocabular.component';

describe('VocabularComponent', () => {
  let component: VocabularComponent;
  let fixture: ComponentFixture<VocabularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VocabularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VocabularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
