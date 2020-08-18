import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

import { Picture } from "src/app/models";
import { PicturesService } from "../../picture/picturesService/pictures.service";

@Injectable({
    providedIn: 'root'
})
export class PicturesListResolver implements Resolve<Observable<Picture[]>>{

    constructor(private service: PicturesService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        Observable<Picture[]> | Observable<Observable<Picture[]>> | Promise<Observable<Picture[]>> {
        const userName = route.params.userName;
        return this.service.listFromUserPaginated(userName, 1);
    }
}