import {Component} from "./Component";

export class Composite extends Component {

    protected children: Component[] = [];

    public add(component: Component): void {
        this.children.push(component);
        component.setParent(this);
    }

    public remove(component: Component): void {
        const componentIndex = this.children.indexOf(component);
        this.children.splice(componentIndex, 1);

        component.setParent(null);
    }

    public isComposite(): boolean {
        return true;
    }

    public operation(): number {
        const results = [];
        for (const child of this.children) {
            results.push(child.operation());
        }

        return results.reduce((a, b) => a + b, 0);
    }
}
