import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoogleDocsService {
  private readonly API_URL= 'https://docs.googleapis.com/v1/documents';
  private readonly API_KEY = 'MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC1qLE1eP3WfrxS\nXdPZRVExQ+io9als0Ec2VmtxfePoeuASCCgMFlpiCLg1ipdBt2mPDf+cHyz7009Y\njPYCV5xeGEuDzcPrw8vdEDqsUwClrnIQp3BfzvFkKZ8zyV9+aqWlFlqHP5opZUnA\nYWP3v3OihSi1TUj6sfLQ7uC94HD0KQyizl9L51s3O43VJSpOPi41Gw5pdrpbqf1X\nZIwodztJ5wNaFf7pbUbK+Dq6KUmSL22HiTQFvElF7MoJjmdOdc4Hm4RK4caJ1Vji\nV9YnqQyS9BMQuv/4fDzlDlnOoKZ9zEdzTiuHpMu7gQL4t5g2K7K0r0nc2lnwkRVz\nsTUc1BlbAgMBAAECggEAFuhxhG1AEXME+5wScZVAsmY+akQke/Dd8he+z96QxYnt\nRMjbh/6voio4VKQoA+UFvkEFKWJzEUSp/mA0S8JRmToWF8Z0fQBBbpyz0XRcIgiY\nIMqErMhTf46SIX00+iOnxORHQUP/hFXeEZEWgrEVe3qwUgCvgdG77aYaGEe75sYp\n3WQDCCFiQkdlNF9NLKhxu3NHVlJrb/fxw5q3VFT83wNX9u53Oq8CIgE9hDrhBDhY\neQunj2kKzKEGgiW5vVvlp6CoKiviFo52aAdO2R77iTSyKTvz6epwSKEpk/XJQ7F4\nfR43PCBLTkXQxjXoeoJs5YdZHGMfR7sgLjt+l85ZsQKBgQDpu3sl6OOCpx0irkbI\nBvFqn8jqpJ0D3Xp8hDjEjE2JWrZjPnaQN0oj88/qhTZlpJEq+B5Bb1d+mPfYkWLS\n7QkGdQ9LZxTrEwrffnknwo+iKX37U4pbaoR33sw1dvuZEm7oDVmjlthZmjVnkMBP\nThgMy0lW/BgT42Oztv9/a4WS8QKBgQDG9zBFMx0MWXz1GDOQ6fdGJll420Tdpl1q\n8F3K1HuO1rJmRHdz/PO7tLdb8pYUO2Mq5eX+9de4nIOZKtjknvRIdlWmMYhcksKz\nTL1e2eIuTCakziVRCD/n/nwvLhw9lmX+aPwIH6YRn2jopMQTae43d/zvrh8iU0tG\ntw0YDBFZCwKBgCedo03Vn1oxwPpz14Nnydtsob1DkWlqTKx2LLkDntC9E1TW7Xmc\nJXDajk8NrR6lOgWycE5e9NF8U+XdHobprjHt/V2mZyFA5QLkiNx4Waf+qF/E1RqR\nf0ph9PLK6/IR8cJbIOpdUuY9APhAzJekgOcKPbAEooAcdnWrerq6GrXBAoGABfQV\njKyH3Pu8gnTz7g0iKgYxvS0KdXtp5i5FEDGldNO1yNuZm23hOSeiKO0sUnSodfsl\nE6j1iH+ebHHcxZKACr8Htw5aXzLBAq50KCdq3inHKj1E3pTZnK5/tsWxcKJUcPVh\nPTj9Nh/H+tYbS91qlFxRxDY4lkVZxkbp7GNIDZsCgYEA5GuDrz1cZ4WX+3XsE28/\ntyNzZGnczEpR5Pc/heeU0x4ItwwLuU3Se6JMYvls5zq+w4FSHyx+1olGEkT5Pk7d\nIAZcX4BvrLcKUsQwZrGXxIY3+2+adKEBa18T3QKWHfqCNtyWlgk9QA8Z020pXSil\n56QmMg6HMOVBULp6EeY94OM='

  constructor(private http: HttpClient) { }

  getDocumentContent(documentId: string): Observable<any> {
    const headers = new HttpHeaders();
    const params = new HttpParams().set('key', this.API_KEY);
    const url = `${this.API_URL}/${documentId}`;

    return this.http.get(url, { headers, params });
  }
}
