import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnemyStatsComponent } from './enemy-stats.component';

describe('EnemyStatsComponent', () => {
  let component: EnemyStatsComponent;
  let fixture: ComponentFixture<EnemyStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnemyStatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnemyStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
