import { SufalamModifiedByModel } from "../model/base-model/SufalamModifiedBy.model";

export class ReferenceRangeCategoryUserRightsModel extends SufalamModifiedByModel {

    constructor(json: any = null){
        super(json);
        if(json != null){
            this.ReferenceRangeCategoryUserRightsId = json.ReferenceRangeCategoryUserRightsId;
            this.ReferenceRangeCategoryId = json.ReferenceRangeCategoryId;
            this.UserName = json.UserName;
            this.UserId = json.UserId;
        }
    }
    
    public ReferenceRangeCategoryUserRightsId = 0;
    public ReferenceRangeCategoryId = 0;
    public UserId = '';
    public UserName = '';

}