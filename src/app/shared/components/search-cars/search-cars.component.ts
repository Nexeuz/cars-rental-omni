import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-cars',
  templateUrl: './search-cars.component.html',
  styleUrls: ['./search-cars.component.scss']
})
export class SearchCarsComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm(): void {
    this.form = this.fb.group(
      {
        search: ['', [Validators.required]]
      }
    );
  }

  submit(): void {
    this.router.navigate(['search-car']);
  }
}
