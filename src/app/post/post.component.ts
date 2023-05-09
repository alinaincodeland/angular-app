import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
@Input("img") postImg= " https://images.unsplash.com/photo-1612833609248-5e9e9f8b0b0f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9zdCUyMGltYWdlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
@Output() imgSelected = new EventEmitter<string>();
}
