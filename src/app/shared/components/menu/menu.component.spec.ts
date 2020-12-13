import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MenuComponent } from "./menu.component";
describe("MenuComponent", () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  let element: HTMLElement;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuComponent],
    });
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });
  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("should open menu bar", () => {
    component.toggle();
    expect(component.show).toBeTruthy();
  });
  it("should close menu bar", () => {
    component.toggle();
    component.toggle();
    expect(component.show).toBeFalsy();
  });
});
