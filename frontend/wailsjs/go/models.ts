export namespace module {
	
	export class JSModule {
	    path: string;
	    title: string;
	
	    static createFrom(source: any = {}) {
	        return new JSModule(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.path = source["path"];
	        this.title = source["title"];
	    }
	}

}

