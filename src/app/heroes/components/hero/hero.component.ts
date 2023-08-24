import { Component } from '@angular/core';

@Component({
  selector: 'componentHero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
 public name:string="Peter P";
 public age :number=30;

 get capitalizedName():string{
  return this.name.toUpperCase();
 }
 get heroDescription():string{
  return this.name+" tiene "+this.age+", es algo mayor";
 }
 changeHero():void{
 this.name="Mike M";
 }
 changeAge():void{
  this.age=16;
 }
}
