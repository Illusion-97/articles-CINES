import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-article-editor',
  templateUrl: './article-editor.component.html',
  styleUrls: ['./article-editor.component.css']
})
export class ArticleEditorComponent {

  form = new FormGroup({
    id: new FormControl(0, Validators.required),
    nom: new FormControl("", Validators.required),
    description: new FormControl("", Validators.required),
    prix: new FormControl(0, Validators.required),
    image: new FormControl("")
  })

  constructor(private service:ArticlesService){

  }

  onSubmit(){
    //console.log(this.form.value);
    //@ts-ignore
    this.service.save(this.form.value).subscribe();
  }

  get preview(): string | null | undefined {
    return this.form.get('image')?.value
}

}
