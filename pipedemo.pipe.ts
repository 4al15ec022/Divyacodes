import { Pipe, PipeTransform } from '@angular/core';
import { HttpClient }          from '@angular/common/http';


@Pipe({
  name: 'fetch',
  pure: false
})
export class PipedemoPipe implements PipeTransform {
  private cachedData: any = null;
  private cachedUrl = '';
  constructor(private http: HttpClient) { }

  transform(name: string, canDance:boolean): any {
    if (name !== this.cachedUrl) {
      this.cachedData = null;
      this.cachedUrl = name;
      this.http.get(name).subscribe(result => this.cachedData = result);
    }
    return this.cachedData;
  }

}
