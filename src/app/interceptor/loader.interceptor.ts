import { Injectable } from "@angular/core";  
import {
    HttpEvent,
    HttpHandler,
    HttpRequest,
    HttpHeaders,
    HttpInterceptor
} from "@angular/common/http";
import { Router } from "@angular/router";
import { BehaviorSubject, Observable, throwError } from "rxjs";
import { catchError, finalize, map } from "rxjs";

import { NgxSpinnerService } from "ngx-spinner";
import { AuthService } from "../services/auth.service";

@Injectable()
export class HTTPStatus
{
    private requestInFlight$: BehaviorSubject<Boolean>;

    constructor()
    {
        this.requestInFlight$ = new BehaviorSubject<Boolean>(false);
    }

    setHttpStatus(inFlight: boolean)
    {
        this.requestInFlight$.next(inFlight);
    }

    getHttpStatus()
    {
        return this.requestInFlight$.asObservable();
    }
}

@Injectable()
export class LoaderInterceptor implements HttpInterceptor
{

    private _requests = 0;

    constructor(private spinner: NgxSpinnerService,
                private status: HTTPStatus,
                private authService: AuthService,
                private router: Router)
    {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> 
    {
        ++this._requests;
        let headers;


        if (req.url.includes('api.ipify.org'))
        {
            headers: new HttpHeaders({
                contentType: "false",
                processData: "false"
            });
        } //Pegar o token, sem login feito
        else if (req.body instanceof FormData) 
        {
            headers: new HttpHeaders({
                contentType: "false",
                processData: "false",
                Authorization: "Bearer " + this.authService.getToken
            });
        } else //após fazer o login entra aqui no else
        {
            debugger
            headers = new HttpHeaders()
                .append("accept", "application/json")
                .append("Content-Type", "application/json")
                .append("Authorization", "Bearer " + this.authService.getToken);
            
        }

        let request = req.clone({ headers });
        this.status.setHttpStatus(true);
        this.spinner.show(); //Abre o loader na tela

        return next.handle(request).pipe(
            map((event) => {
            return event;
        }),
        catchError((error: Response) => {
            if (error.status === 401) {
                this.router.navigate(["/Rota 401 Unauthorized"]);
            }
            return throwError(error);
        }), 
        finalize(() => {
            //Ao dar tudo certo entra aqui
            --this._requests;
            this.status.setHttpStatus(this._requests > 0);
            this.status.getHttpStatus().subscribe((status: boolean) => {
                if (!status) 
                {
                    this.spinner.hide(); //remove o loader.
                }
            });
          })        
        );
    }
}