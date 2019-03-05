import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'belajar-angular';

  post={
    titles:"ini post",
    isFavorite:true
  }

  onFavoriteChanged(eventArgs){
    console.log("Favorite Changed:", eventArgs);
  }
}
