import { Component, OnInit } from '@angular/core';
import { Fruit } from '../fruit.model';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FruitService } from '../fruit.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fruit',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.css']
})
export class FruitComponent implements OnInit {
  successMsg = '';
  fruitForm!: FormGroup;
  fruits: Fruit[] = [];
  isEditMode = false;

  constructor(private fb: FormBuilder, private fruitService: FruitService) {}

  ngOnInit(): void {
    this.initForm();
    this.loadFruits();
  }

  initForm() {
    this.fruitForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      color: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(1)]]
    });
  }

  loadFruits() {
    this.fruits = this.fruitService.getFruits();
  }

  onSubmit() {
 if (this.fruitForm.invalid) return;

  if (this.isEditMode) {
    this.fruitService.updateFruit(this.fruitForm.value);
    this.successMsg = 'Fruit updated successfully!';
    this.isEditMode = false;
  } else {
    this.fruitService.addFruit(this.fruitForm.value);
    this.successMsg = 'Fruit added successfully!';
  }

  setTimeout(() => this.successMsg = '', 3000);
  this.fruitForm.reset();
  this.loadFruits();
  }

  editFruit(fruit: Fruit) {
    this.fruitForm.setValue(fruit);
    this.isEditMode = true;
  }

  deleteFruit(id: number) {
    this.fruitService.deleteFruit(id);
    this.loadFruits();
  }
}
