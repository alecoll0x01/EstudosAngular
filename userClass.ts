//Arquivo de estudos sobre DI Angular

class userService{
    digaOla(){
        console.log("Ola")
    }
}

class Component {
    constructor(private user: userService) {
        
    }
}


class Injector{
    private _container = new Map();

    constructor(private _providers: any[] = []){
        this._providers.forEach(service => this._container.set(service, new service()))
    }

    get(service: any){
        const serviceInstace = this._container.get(service);
        if(!service){
            console.log("Error here!")
        }
        return serviceInstace;
    }
}