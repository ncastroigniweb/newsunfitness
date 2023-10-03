/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
import { Pipe, PipeTransform } from '@angular/core';
import { config } from '../config/config';

const Url = config.Url + '/images';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(img: String): string {

  if ( !img ) {
    return '../assets/images/no-image.png';
  }

  const imgUrl = `${ Url }/${ img }`;
  return imgUrl;
  }

}
