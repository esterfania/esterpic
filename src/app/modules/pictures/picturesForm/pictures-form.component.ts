import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { PicturesService } from '../picture/picturesService/pictures.service';
import { UserService } from 'src/app/core/user/user.service';
import { AlertService } from 'src/app/shared/components/alert/alert.service';
import { finalize } from 'rxjs/operators';
import { HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-pictures-form',
  templateUrl: './pictures-form.component.html',
  styleUrls: ['./pictures-form.component.css']
})
export class PicturesFormComponent implements OnInit {

  form: FormGroup;
  file: File;
  preview: string;
  percentDone: number;

  constructor(
    private formBuilder: FormBuilder,
    private picturesService: PicturesService,
    private router: Router,
    private userService: UserService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      file: ['', [Validators.required]],
      description: ['', [Validators.maxLength(300)]],
      allowComments: [true]
    })
  }

  upload() {
    const description = this.form.get('description').value;
    const allowComments = this.form.get('allowComments').value;
    this.picturesService
      .upload(description, allowComments, this.file)
      .pipe(
        finalize(() => this.router.navigate(['/user', this.userService.getUserName()])
        ))
      .subscribe((event: HttpEvent<any>) => {
        if (event.type == HttpEventType.UploadProgress) {
          this.percentDone = Math.round(100 * event.loaded / event.total)
        }
        else if (event instanceof HttpResponse) {
          this.alertService.success('Upload complete!', true)
        }
      },
        err => {
          console.log(err);
          this.alertService.danger('An error occurred, please try again later!', true) 
        });

  }

  handleFile(file: File) {
    this.file = file;
    const reader = new FileReader();
    reader.onload = (event: any) => this.preview = event.target.result;
    reader.readAsDataURL(file);
  }

}
