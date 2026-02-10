export class SufalamCreatedByModel {

    constructor(json: any = null) {
        if (json != null && json !== '') {
            this.CreatedBy = json.CreatedBy;
            this.CreatedDate = json.CreatedDate;
            this.CreatedFrom = json.CreatedFrom;
            this.ReasonForChange = json.ReasonForChange;
        }
    }

    public CreatedBy = '';
    public CreatedDate = '';
    public CreatedFrom = '';
    public ReasonForChange = '';

    public GetLocalDate(): string {
        // var date = new Date();
        // var local = new Date(date);
        // local.setMinutes(date.getMinutes() - date.getTimezoneOffset());
        // return local.toJSON();
        return this.ConvertDateToJson(new Date());
    }

    public GetCurrentDateOnly(): string {
        // var date = new Date();
        // var local = new Date(date);
        // local.setMinutes(date.getMinutes() - date.getTimezoneOffset());
        // return local.toJSON();
        return this.ConvertDateToJson(new Date()).split("T")[0];
    }

    public GetLocalDateFromJson(jsonDate: string): string {
        var date = new Date(jsonDate);
        var local = new Date(date);
        local.setMinutes(date.getMinutes() + date.getTimezoneOffset());
        return local.toJSON();
    }

    public GetDateWithStartTimeFromJson(): string {
        // var date = new Date(jsonDate);
        // var local = new Date(date);
        // local.setMinutes(date.getMinutes() + date.getTimezoneOffset());
        // return local.toJSON().split("T")[0] + "T00:00:00.000";
        return this.ConvertDateToJson(new Date()).split("T")[0] + "T00:00:00.000";
    }

    public GetDateWithEndTimeFromJson(): string {
        // var date = new Date(jsonDate);
        // var local = new Date(date);
        // local.setMinutes(date.getMinutes() + date.getTimezoneOffset());
        // return local.toJSON().split("T")[0] + "T23:59:59.000";
        return this.ConvertDateToJson(new Date()).split("T")[0] + "T23:59:59.000";
    }

    public ConvertDateToJson(date: Date): string {
        return new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toJSON().replace('Z', '');
    }
}
