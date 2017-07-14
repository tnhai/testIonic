import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/catch';

import * as Constants from  '../ultility/constants';

import Season from  '../models/impl/season';
import Team from  '../models/impl/team';

@Injectable()
export class APIServices {

    constructor(public http: Http, public opt: RequestOptions) {
        let headers = new Headers;
        headers.set("X-Auth-Token", Constants.XAuthToken);
        this.opt = new RequestOptions({
            headers: headers
        })
    }

    async getLeagues(): Promise<any> {
        return await new Promise(resolve => {
            this.http.get(Constants.LEAGUES, this.opt)
                .map(res => res.json().map(object => {
                    return new Season(
                        object.caption,
                        object.currentMatchday,
                        object.id,
                        object.lastUpdated,
                        object.league,
                        object.numberOfGames,
                        object.numberOfMatchdays,
                        object.numberOfTeams,
                        object.year
                    )
                }))
                .subscribe(data => {
                    console.log(data);
                    resolve(data);
                })
        })
    }

    async getTeams(id: number): Promise<any> {
        return await new Promise(resolve => {
            this.http.get(Constants.TEAMS.replace(/{id}/, id.toString()), this.opt)
                .map(res => res.json().teams.map(object => {
                    return new Team(
                        object.code,
                        object.crestUrl,
                        object.name,
                        object.shortName,
                        object.squadMarketValue
                    )
                }))
                .subscribe(data => {
                    console.log(data);
                    resolve(data);
                })
        })
    }
}