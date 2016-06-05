import {Component} from 'angular2/core';
import {AuthorService} from './author.service';

@Component({
	selector: 'authors',
	template: `
		<h3>Authors</h3>
		<ul>
			<li *ngFor="#author of authors">{{author}}</li>
		</ul>
	`,
	providers: [AuthorService]
})
export class AuthorsComponent {
	authors: string[];
	constructor(authorService: AuthorService) {
		this.authors = authorService.getAuthors();
		console.log(this.authors);
	}	
}