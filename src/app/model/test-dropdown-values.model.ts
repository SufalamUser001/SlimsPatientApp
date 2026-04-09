import { Exclude } from "class-transformer";
import { OrganismServiceMappingModel } from "../model/organism-service-mapping.model";
import { SufalamModifiedByModel } from '../model/base-model/SufalamModifiedBy.model';


export class TestDropDownValuesModel extends SufalamModifiedByModel {

    constructor(json: any = null) {
        super(json);
        if (json != null) {
            this.TestId = json.TestId;
            this.TestDDValuesId = json.TestDDValuesId;
            this.SrNo = json.SrNo;
            this.DdShortName = json.DdShortName;
            this.DdText = json.DdText;
            this.TestRemarks = json.TestRemarks;
            this.IsAbnormal = json.IsAbnormal;
            this.IsCritical = json.IsCritical;
            this.TestName = json.TestName;
            this.ServiceIdForOrganism = json.ServiceIdForOrganism;
            this.ServiceNameForOrganism = json.ServiceNameForOrganism;
            this.OrganismId = json.OrganismId;
            this.IsHtmlText = json.IsHtmlText;
            this.IsDefault = json.IsDefault;
            this.ResultFlagType = json.ResultFlagType;
            this.IsAutoApproval = json.IsAutoApproval;
            this.ReferenceRangeCategoryId = json.ReferenceRangeCategoryId;
            this.ReferenceRangeCategoryColor = json.ReferenceRangeCategoryColor;


            if (json.OrganismServiceMappings != undefined && json.OrganismServiceMappings != null) {
                for (let i = 0; i < json.OrganismServiceMappings.length; i++) {
                    this.OrganismServiceMappings.push(new OrganismServiceMappingModel(json.OrganismServiceMappings[i]));
                }
            }

        }
    }

    public TestId: number = 0;
    public TestName: number = 0;
    public TestDDValuesId: number = 0;
    public SrNo: number = 0;
    public DdShortName: string = '';
    public DdText: string = '';
    public TestRemarks: string = '';
    public IsAbnormal: boolean = false;
    public IsCritical: boolean = false;
    public IsHtmlText: boolean = false;
    public ServiceIdForOrganism = 0;
    public OrganismId = 0;
    public ServiceNameForOrganism = '';
    public IsDefault = false;
    public ResultFlagType = null;
    public IsAutoApproval = false;
    public OrganismServiceMappings = new Array<OrganismServiceMappingModel>();
    public ReferenceRangeCategoryId = 0;

    @Exclude()
    public IsSelected = false;
    @Exclude()
    public ReferenceRangeCategoryColor = null;
   
}


