import { Pipe, PipeTransform } from "@angular/core";

import { Picture } from "src/app/models";

@Pipe({
    name: 'filterByDescription'
})
export class FilterByDescription implements PipeTransform {
   
    transform(pictures: Picture[], description: string) {
        description = description
            .trim()
            .toLowerCase();

        if (description) {
            return pictures.filter(o => o.description.toLowerCase().includes(description))
        }
        else {
            return pictures;
        }
    }

}