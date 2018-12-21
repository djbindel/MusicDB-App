import { Component, OnInit } from '@angular/core';

const data = `I'm a string!`;
const otherData = {
  sentence: `I'm also a string`,
  status: false
};

@Component({
  selector: 'app-album-chart',
  templateUrl: './album-chart.component.html',
  styleUrls: ['./album-chart.component.css']
})
export class AlbumChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  doSomething(truth: string, lie: string) {
    return `${truth} ${lie}`;
  }

  doSomeElse() {
    const statements = this.doSomething(data, otherData.sentence);
  }
}
