import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GlassesPage } from './glasses.page';

describe('GlassesPage', () => {
  let component: GlassesPage;
  let fixture: ComponentFixture<GlassesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GlassesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
