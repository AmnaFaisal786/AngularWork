import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!args) return value;
    if(!value) return null;

    args= args.toLowerCase();
    return value.filter(function(items:any){
    return  JSON.stringify(items).toLowerCase().includes(args)
    })
  }

}
