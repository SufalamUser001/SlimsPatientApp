import { SufalamCreatedByModel } from './SufalamCreatedBy.model';

export class SufalamModifiedByModel extends SufalamCreatedByModel {

    constructor(json: any = null) {
        super(json);
        if (json != null && json !== '') {
            this.ModifiedBy = json.ModifiedBy;
            this.ModifiedDate = json.ModifiedDate;
            this.ModifiedFrom = json.ModifiedFrom;
        }
    }

    public ModifiedBy = '';
    public ModifiedDate = '';
    public ModifiedFrom = '';

}
