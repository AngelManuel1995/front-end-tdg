import { Component, OnInit } from '@angular/core'

@Component({
    selector:'app-dashboard',
    templateUrl:'./dashboars.component.html'
})

export class DashboardComponent implements OnInit {

    public avatares = [
        {
            name:'',
            img:'https://miro.medium.com/fit/c/240/240/1*yh90bW8jL4f8pOTZTvbzqw.png',
            selected: false
        },
        {
            name:'',
            img:'https://picandocodigo.net/wp-content/uploads/2014/06/femalecodertocat.png',
            selected: false
        },
        {
            name:'',
            img:'https://techcrunch.com/wp-content/uploads/2010/07/github-logo.png?w=512',
            selected: false
        },
        {
            name:'',
            img:'https://avatars0.githubusercontent.com/u/24922775?s=460&v=4',
            selected: false
        },
        {
            name:'',
            img:'https://avatars0.githubusercontent.com/u/6642527?s=400&v=4',
            selected: false
        },
        {
            name:'',
            img:'https://blog.mgechev.com/images/revive/revive.png',
            selected: false
        },
        {
            name:'',
            img:'https://camo.githubusercontent.com/0e3c4976eb4b8ec80e285608a7f23744408a0ffb/68747470733a2f2f736563757265676f2e696f2f696d672f676f7365632e706e67',
            selected: false
        },
        {
            name:'',
            img:'https://d1q6f0aelx0por.cloudfront.net/product-logos/f5326186-8ae7-425c-a78d-7192dabf75be-jenkins.png',
            selected: false
        },
        {
            name:'',
            img:'https://image.flaticon.com/icons/png/512/186/186037.png',
            selected: false
        }
    ]

    constructor(){

    }

    ngOnInit(): void {
        
    }
}