import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(menu:any[] , term:any): any {
    if (term == undefined) {
      return menu;
    }
      return menu.filter(function (menu) {
        return menu.en_name.toLowerCase().includes(term.toLowerCase());
      });
  }

}
