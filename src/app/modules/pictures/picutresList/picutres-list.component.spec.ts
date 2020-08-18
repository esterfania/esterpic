import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicutresListComponent } from './picutres-list.component';

describe('PicutresListComponent', () => {
  let component: PicutresListComponent;
  let fixture: ComponentFixture<PicutresListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicutresListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicutresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
