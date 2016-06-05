import {Component} from 'angular2/core';
import {CourseService} from './course.service';

@Component({
	selector: 'courses',
	template: `
		<h2>{{title}}</h2>
		
		<h3>Courses</h3>
		<ul>
			<li *ngFor="#course of courses">{{course}}</li>
		</ul>
	`,
	providers: [CourseService]
})
export class CoursesComponent {
	courses: string[];
	
	constructor(courseService: CourseService) {
		this.courses = courseService.getCourses();
	}

	title: string = 'Courses Page Title';
}