export class Product {

    private parts: string[] = [];

    public add(part: string) {
        this.parts.push(part);
    }

    public show() {
        let result: string = '';
        this.parts.forEach(part => result += part);

        return result;
    }
}
