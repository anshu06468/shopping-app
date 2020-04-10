import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { RecipeStorageService } from '../shared/recipe-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  
  constructor(private dataStorageService:RecipeStorageService) { }

  ngOnInit() {
  }

  onSaveData(){
    this.dataStorageService.storeRecipes();
  }

  onFetchData(){
    this.dataStorageService.fetchRecipes().subscribe();
  }
}
