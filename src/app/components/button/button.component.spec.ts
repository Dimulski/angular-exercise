import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call emitClicked method if disabled property is false', fakeAsync(() => {
    spyOn(component, 'emitClicked');
    component.disabled = false;
    fixture.detectChanges();    
    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    tick();
    expect(component.emitClicked).toHaveBeenCalled();
  }));
  
  it('shouldn\'t call emitClicked method if disabled property is true', fakeAsync(() => {
    spyOn(component, 'emitClicked');
    component.disabled = true;
    fixture.detectChanges();
    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    tick();
    expect(component.emitClicked).not.toHaveBeenCalled();
  }));

  it('should emit clicked event if disabled property is false', () => {
    spyOn(component.clicked, 'emit');
    component.disabled = false;
    fixture.detectChanges();
    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    expect(component.clicked.emit).toHaveBeenCalled();
  });

  it('shouldn\'t emit clicked event if disabled property is true', () => {
    spyOn(component.clicked, 'emit');
    component.disabled = true;
    fixture.detectChanges();
    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    expect(component.clicked.emit).not.toHaveBeenCalled();
  });
});
