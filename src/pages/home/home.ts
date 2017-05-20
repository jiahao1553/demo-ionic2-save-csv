import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  data: any;

  constructor(public navCtrl: NavController) {
    this.data = "A,B,C\n1,2,3\n4,\"5,3\",6";
    //Notice how the second column in the last line is “quoted” because the content of that value actually contains a “,” character. Without the quotes this character would be interpreted as a column separator. To avoid this confusion we put quotes around the whole value. 
  }

  downloadFile(data){
        let blob = new Blob(['\ufeff' + data], { type: 'text/csv;charset=utf-8;' });
        let dwldLink = document.createElement("a");
        let url = URL.createObjectURL(blob);
        let isSafariBrowser = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
        if (isSafariBrowser) {  //if Safari open in new window to save file with random filename.
        dwldLink.setAttribute("target", "_blank");
    }
        dwldLink.setAttribute("href", url);
        dwldLink.setAttribute("download", "data.csv");
        dwldLink.style.visibility = "hidden";
        document.body.appendChild(dwldLink);
        dwldLink.click();
        document.body.removeChild(dwldLink);
   }

}
