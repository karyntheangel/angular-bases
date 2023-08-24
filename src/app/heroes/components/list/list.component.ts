import { Component } from '@angular/core';

@Component({
  selector: 'heroesList',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNames:string[]=['Spiderman',"Ironman","blackwidow","Hulk","Thor"]
  public deletedName:string='';
  checkStatus():void{
    let actA=document.getElementById("activity");
    let actB=document.getElementById("activityB");
    let button=document.getElementById("btnRemove");
    console.log(this.heroNames.length);
    this.heroNames.length ===5 ? actA?.classList.remove("Invisible"):actB?.classList.remove("invisible");
    if (this.heroNames.length==0) {
      button?.classList.add("invisible")
    }
  }
  deleteLast():void{
  this.deletedName=this.heroNames.slice(-1).toString()
    this.heroNames=this.heroNames.slice(0,-1)
    this.checkStatus()
  }
}
