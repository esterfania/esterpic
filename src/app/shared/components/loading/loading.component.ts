import { LoadingService } from "./loading.service";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-loading',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

    loading$: Observable<string>;

    constructor(private loadingService: LoadingService) { }

    ngOnInit(): void {
        this.loading$ =
            this.loadingService
                .getLoadingStatus()
                .pipe(map(status => status.valueOf()));                
    }

}
