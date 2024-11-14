import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FormsService } from './forms.service';
import { addForm } from '../interfaces/form.interface';
import { mockForms, fields } from '../mocks/forms-mocks'
describe('FormsService', () => {
  let service: FormsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FormsService]
    });
    service = TestBed.inject(FormsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should retrieve forms (getForms)', () => {

    service.getForms().subscribe(forms => {
      expect(forms.length).toBe(2);
      expect(forms).toEqual(mockForms);
    });

    const req = httpMock.expectOne(service.apiUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockForms);
  });

  it('should add a form (addForm)', () => {
    const newForm: addForm = { name: 'New Form', description: 'New Description', fields };

    service.addForm(newForm).subscribe(response => {
      expect(response).toEqual(mockForms[0]);
    });

    const req = httpMock.expectOne(service.apiUrl);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(JSON.stringify(newForm));
    req.flush(mockForms[0]);
  });
});
