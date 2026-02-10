export class BaseModel {

    constructor(json: any = null) {
        if (json != null && json !== '') {
            this.IsActive = json.IsActive;
            this.CreatedBy = json.CreatedBy;
            this.CreatedDate = json.CreatedDate;
            this.CreatedFrom = json.CreatedFrom;
            this.ModifiedBy = json.ModifiedBy;
            this.ModifiedDate = json.ModifiedDate;
            this.ModifiedFrom = json.ModifiedFrom;
            this.ReasonForChange = json.ReasonForChange;
        }
    }

    public IsActive = true;
    public CreatedBy = '';
    public CreatedDate = '';
    public CreatedFrom = '';
    public ModifiedBy = '';
    public ModifiedDate = '';
    public ModifiedFrom = '';
    public ReasonForChange = '';
}
