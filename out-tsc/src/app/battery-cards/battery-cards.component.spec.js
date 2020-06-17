import { async, TestBed } from '@angular/core/testing';
import { BatteryCardsComponent } from './battery-cards.component';
describe('BatteryCardsComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BatteryCardsComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(BatteryCardsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=battery-cards.component.spec.js.map