import { Pipe, PipeTransform } from '@angular/core';
// import * as parse from 'date-fns/parse';

@Pipe({ name: 'stringToDate' })
export class StringToDatePipe implements PipeTransform {
	transform(value: string): Date {
		return new Date();
		// return parse(value);
	}
}