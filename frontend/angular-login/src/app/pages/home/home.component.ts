import { Component } from '@angular/core';
import { AppModule } from 'src/app/app.module';
import { NavComponent } from 'src/app/shared/nav/nav.component';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
