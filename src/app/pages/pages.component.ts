import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map, Observable } from 'rxjs';


@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit{
  constructor(
    private router: Router,
  ){}

  title: string = 'Bienvenidos';


  ngOnInit(): void {

  }

  onActivate(ev: any){
    this.getTitle$().subscribe(title => this.title = title);
  }

  getTitle$(): Observable<string>{
    return this.router.events.pipe(
      filter((event: any) => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => Object.keys(event.snapshot.data).length > 0),
      filter((event: ActivationEnd) => !event.snapshot.firstChild),
      map((event: ActivationEnd )=> event.snapshot.data['title'])
    )
  }


}
