import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mitransform'
})
export class MitransformPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if(args.length>0){
      return args[0]+value+args[1];
    }else{
      return '*'+value+'*';
    }
    
  }

}
