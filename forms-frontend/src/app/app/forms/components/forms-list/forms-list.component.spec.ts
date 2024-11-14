import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsListComponent } from './forms-list.component';
import { FormsService } from '../../services/forms.service';
import { Router } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';
import { of } from 'rxjs';
import { mockForms } from '../../mocks/forms-mocks'
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('FormsListComponent', () => {
  let component: FormsListComponent;
  let fixture: ComponentFixture<FormsListComponent>;
  let formsService: jasmine.SpyObj<FormsService>;
  let router: Router;


  beforeEach(async () => {
    const formsServiceSpy = jasmine.createSpyObj('FormsService', ['getForms']);
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, MatPaginatorModule],
      declarations: [FormsListComponent],
      providers: [{ provide: FormsService, useValue: formsServiceSpy }]
    }).compileComponents();

    fixture = TestBed.createComponent(FormsListComponent);
    component = fixture.componentInstance;
    formsService = TestBed.inject(FormsService) as jasmine.SpyObj<FormsService>;
    router = TestBed.inject(Router);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should load forms on init', () => {
    formsService.getForms.and.returnValue(of(mockForms));

    fixture.detectChanges(); // Ejecuta ngOnInit

    expect(component.forms.length).toBe(2);
    expect(component.forms).toEqual(mockForms);
    expect(component.isLoading).toBeFalse();
  });

  it('should navigate to form when goToForm is called', () => {
    spyOn(router, 'navigate');
    const formId = '1';

    component.goToForm(formId);

    expect(router.navigate).toHaveBeenCalledWith(['/forms', formId]);
  });

  it('should display forms in the table', () => {
    formsService.getForms.and.returnValue(of(mockForms));

    fixture.detectChanges();

    const tableRows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(tableRows.length).toBe(2);

    const firstRowCells = tableRows[0].queryAll(By.css('td'));
    expect(firstRowCells[0].nativeElement.textContent.trim()).toBe('Form 1');
    expect(firstRowCells[1].nativeElement.textContent.trim()).toBe('Description 1');
  });
});
