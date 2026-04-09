export class IdNameValueModel {
    constructor(json: any = null) {
        if (json) {
            this.Id = json.Id;
            this.Name = json.Name;
            this.Value = json.Value;
            this.Value1 = json.Value1;
            this.Value2 = json.Value2;
            this.Value3 = json.Value3;
        }
    }

    public Id = '';
    public Name = '';
    public Value = '';
    public Value1 = '';
    public Value2 = '';
    public Value3 = '';
}