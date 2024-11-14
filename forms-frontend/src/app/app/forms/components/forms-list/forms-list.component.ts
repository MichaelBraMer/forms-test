import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsService } from '../../services/forms.service';
import { Router } from '@angular/router';
import { Form } from '../../interfaces/form.interface';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-forms-list',
  templateUrl: './forms-list.component.html',
  styleUrl: './forms-list.component.css'
})
export class FormsListComponent implements OnInit {
  forms: Form[] = [];
  isLoading = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private formsService: FormsService, private router: Router) { }

  ngOnInit(): void {
    this.loadForms()
  }

  loadForms(): void {
    this.formsService.getForms().subscribe((data) => {
      this.forms = data;
      this.isLoading = false;
    })
  }

  goToForm(id: string) {
    console.log(id)
    this.router.navigate(["/forms", id]);
  }
}
