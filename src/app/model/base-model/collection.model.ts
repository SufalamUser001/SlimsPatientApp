export class Collection<T> {

    Items: T[] = [];

    public Find(key: any, val: any): T {
        for (var x = 0; x < this.Items.length; x++) {
            for (var z in this.Items[x]) {
                if (z == key && this.Items[x][z] == val) {
                    return this.Items[x];
                }
            }
        }
        return null;
    }

    public IndexOf(key: any, val: any): number {
        for (var x = 0; x < this.Items.length; x++) {
            for (var z in this.Items[x]) {
                if (z == key && this.Items[x][z] == val) {
                    return x;
                }
            }
        }
        return -1;
    }
}