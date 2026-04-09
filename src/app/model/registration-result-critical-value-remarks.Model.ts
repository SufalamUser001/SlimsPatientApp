import { Exclude } from 'class-transformer';
import { SufalamModifiedByModel } from "../model/base-model/SufalamModifiedBy.model";

export class RegistrationResultCriticalValueDetailsModel extends SufalamModifiedByModel {

    constructor(json: any = null) {
        super(json);
        if (json != null) {
            this.RegistrationResultCriticalValueDetailsId = json.RegistrationResultCriticalValueDetailsId;
            this.LabId = json.LabId;
            this.ServiceId = json.ServiceId;
            this.TestId = json.TestId;
            this.CriticalRemarks = json.CriticalRemarks;
            this.ResultValue = json.ResultValue;
            this.NameToBePrinted = json.NameToBePrinted;
            this.CriticalLowValue = json.CriticalLowValue;
            this.CriticalHighValue = json.CriticalHighValue;
            this.RepeatLowValue = json.RepeatLowValue;
            this.RepeatHighValue = json.RepeatHighValue;
            this.AbsurdLowValue = json.AbsurdLowValue;
            this.AbsurdHighValue = json.AbsurdHighValue;
            this.IsCritical = json.IsCritical;
            this.CreatedByUserName = json.CreatedByUserName;
            this.CreatedOn = json.CreatedOn;
            if (json.isAbsurdSelected) {
                this.isAbsurdSelected = json.isAbsurdSelected;
            }
            if (json.isSelected) {
                this.isSelected = json.isSelected;
            }

            this.CriticalLowRemarks = json.CriticalLowRemarks;
            this.CriticalHighRemarks = json.CriticalHighRemarks;
            this.RepeatLowRemarks = json.RepeatLowRemarks;
            this.RepeatHighRemarks = json.RepeatHighRemarks;
            this.AbsurdLowRemarks = json.AbsurdLowRemarks;
            this.AbsurdHighRemarks = json.AbsurdHighRemarks;
        }
    }

    public RegistrationResultCriticalValueDetailsId = 0;
    public LabId: string = '';
    public ServiceId = 0;
    public TestId = 0;
    public CriticalRemarks = '';
    public ResultValue = '';
    public CreatedByUserName = '';
    public CreatedOn: Date = null;
    public IsCritical = false;
    @Exclude()
    public CriticalLowValue = 0;
    @Exclude()
    public CriticalHighValue = 0;
    @Exclude()
    public RepeatLowValue = 0;
    @Exclude()
    public RepeatHighValue = 0;
    @Exclude()
    public AbsurdLowValue = 0;
    @Exclude()
    public AbsurdHighValue = 0;

    @Exclude()
    public NameToBePrinted = '';

    ////// For Selecting a row ///////
    @Exclude()
    public isSelected: boolean = false;
    ////// For Selecting a absurd values ///////
    @Exclude()
    public isAbsurdSelected: boolean = false;

    @Exclude()
    public CriticalLowRemarks = '';
    @Exclude()
    public CriticalHighRemarks = '';
    @Exclude()
    public RepeatLowRemarks = '';
    @Exclude()
    public RepeatHighRemarks = '';
    @Exclude()
    public AbsurdLowRemarks = '';
    @Exclude()
    public AbsurdHighRemarks = '';

}

