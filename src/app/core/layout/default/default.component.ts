import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DefaultLayoutComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onFileSelected(event: any) {

    const file:File = event.target.files[0];

    if (file) {

        // this.fileName = file.name;

        const formData = new FormData();

        formData.append("file", file);

        console.log(formData);

        const upload$ = this.http.post("http://localhost:3000/api/upload", formData);

        upload$.subscribe();
    }
}

}
