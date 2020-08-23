import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { PicturesService } from '../picture/picturesService/pictures.service';

@Component({
  selector: 'app-pictures-form',
  templateUrl: './pictures-form.component.html',
  styleUrls: ['./pictures-form.component.css']
})
export class PicturesFormComponent implements OnInit {

  form: FormGroup;
  file: File;

  constructor(
    private formBuilder: FormBuilder,
    private picturesService: PicturesService,
    private router: Router
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
    .subscribe(() => this.router.navigate(['']));

  }
}
