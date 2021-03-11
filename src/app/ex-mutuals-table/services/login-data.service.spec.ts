import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { LoginDataService } from './login-data.service';
import { HttpClientModule } from '@angular/common/http';

describe('LoginDataService', () => {
  let service: LoginDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule],
      providers: [LoginDataService]
    });
    service = TestBed.inject(LoginDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
