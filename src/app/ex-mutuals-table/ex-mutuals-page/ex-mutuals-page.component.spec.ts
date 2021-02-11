import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExMutualsPageComponent } from './ex-mutuals-page.component';

describe('ExMutualsPageComponent', () => {
  let component: ExMutualsPageComponent;
  let fixture: ComponentFixture<ExMutualsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExMutualsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExMutualsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
