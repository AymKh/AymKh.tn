import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  projects = [
    {
      name: "Containerized Mean Stack Application",
      coverImage: "https://raw.githubusercontent.com/openSource-jesaym/cdn/main/mean-dockerized/screenshot.png",
      github: "https://github.com/AymKh/Dockerized-MEAN",
      demo: "#",
      readmore: "#",
      tags: ["Docker", "MySQL", "NodeJS", "ExpressJS", "Angular", "Angular Material"]
    },
    {
      name: "Open source marketplace to buy, sell and trade goods.",
      coverImage: "https://raw.githubusercontent.com/openSource-jesaym/cdn/main/fnara/fnara.png",
      github: "https://github.com/openSource-jesaym/fnara.tn",
      demo: "https://fnara.tn",
      readmore: "#",
      tags: ["MEAN Stack", "MySQL", "Angular Material"]

    },
    {
      name: "ReactJS landing page using Material UI.",
      coverImage: "https://github.com/openSource-jesaym/cdn/blob/main/ivc/screenshot.png?raw=true",
      github: "https://github.com/islaibvscorona/ivc.tn",
      demo: "https://ivc.netlify.app/",
      readmore: "#",
      tags: ["Netlify", "ReactJS", "Material UI"]

    },
    {
      name: "Fetching random facts from a public API using vanilla JavaScript",
      coverImage: "https://github.com/openSource-jesaym/cdn/blob/main/fun-facts-js/screenshot.png?raw=true",
      github: "https://github.com/AymKh/FunFacts-fetch-Api",
      demo: "https://funcfacts-aymkh.netlify.app/",
      readmore: "#",
      tags: ["Vanilla JavaScrip", "Fetch API", "Scss", "GitHub pages"]

    }
  ];



  constructor() { }

  ngOnInit(): void {
  }

}
