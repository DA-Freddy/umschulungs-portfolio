import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  imports: [RouterLink,TranslatePipe],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {
  private translate = inject(TranslateService);
  firstName : string = "Freddy";

  useLanguage(language: string): void {
      this.translate.use(language);
  }
}
