import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypingAnimationComponent } from './typing-animation.component';

describe('TypingAnimationComponent', () => {
  let component: TypingAnimationComponent;
  let fixture: ComponentFixture<TypingAnimationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypingAnimationComponent]
    });
    fixture = TestBed.createComponent(TypingAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
