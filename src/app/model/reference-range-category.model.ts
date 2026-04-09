import { ReferenceRangeCategoryUserRightsModel } from "../model/referenceRangeUserRights.model";
import { SufalamModifiedByModel } from "../model/base-model/SufalamModifiedBy.model";




export class ReferenceRangeCategoryModel extends SufalamModifiedByModel {

    constructor(json: any = null){
        super(json);
        if(json != null){
            this.ReferenceRangeCategoryId = json.ReferenceRangeCategoryId;
            this.ReferenceRangeCategoryName = json.ReferenceRangeCategoryName;
            this.IsActive = json.IsActive;
            this.LowValue = json.LowValue;
            this.LowRemarks = json.LowRemarks;
            this.HighValue = json.HighValue;
            this.HighRemarks = json.HighRemarks;
            this.ReferenceRangeCategoryColor = json.ReferenceRangeCategoryColor;
            this.TestRangeDetailsId = json.TestRangeDetailsId;
            this.SrNo = json.SrNo;
            this.ReportSymbol = json.ReportSymbol;
            // this.IsNormal = json.IsNormal;
            // this.IsCritical = json.IsCritical;
            if (json.ReferenceRangeUserRightsList) {
                for (let i = 0; i < json.ReferenceRangeUserRightsList.length; i++) {
                    this.ReferenceRangeUserRightsList.push(new ReferenceRangeCategoryUserRightsModel(json.ReferenceRangeUserRightsList[i]));
                }
            }
        }
    }
    
    public ReferenceRangeCategoryId = 0
    public ReferenceRangeCategoryName = '';
    public IsActive = true;
    public ReferenceRangeUserRightsList = new Array<ReferenceRangeCategoryUserRightsModel>();
    public TestRangeDetailsId = 0;
    public LowValue :number;
    public LowRemarks = '';
    public HighValue :number;
    public HighRemarks = '';
    public ReferenceRangeCategoryColor;
    public ReportSymbol;
    public SrNo :number;
    // public IsNormal = true;
    // public IsCritical = true;

}
