
export class KeyValueModel {

    constructor(json: any = null) {
        if (json != null && json !== '') {
            this.Id = json.Id;
            this.Name = json.Name;
            this.Value = json.Value;
        }
    }

    public Id: string;
    public Name: string;
    public Value: any;
}