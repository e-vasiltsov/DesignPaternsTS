export class Singleton {

    private static uniqueInstance: Singleton = null;
    private singletonData: string = '';

    protected constructor() {}

    public static instance(): Singleton {
        if (Singleton.uniqueInstance === null) {
            Singleton.uniqueInstance = new Singleton();
        }

        return Singleton.uniqueInstance;
    }

    public singletonOperation() : void {
        this.singletonData = 'singletonData'
    }

    public getSingletonData() : string {
        return this.singletonData;
    }

}
