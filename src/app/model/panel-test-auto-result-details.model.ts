
import { Exclude } from 'class-transformer';
import { SufalamModifiedByModel } from '../model/base-model/SufalamModifiedBy.model';
import { Enumeration } from '../service/shared-service/others/enumeration';

export class PanelTestAutoResultDetailsModel extends SufalamModifiedByModel {

    constructor(json: any = null) {
        super(json);
        if (json != null) {
            this.PanelTestAutoResultDetailsId = json.PanelTestAutoResultDetailsId;
            this.PanelId = json.PanelId;
            this.ConditionTestId = json.ConditionTestId;
            this.ConditionType = json.ConditionType;
            this.ConditionValue = json.ConditionValue;
            this.ConditionToValue = json.ConditionToValue;
            this.AutoResultTestId = json.AutoResultTestId;
            this.AutoResultValue = json.AutoResultValue;
            this.ConditionFromToValue = json.ConditionFromToValue;
            if (json.ConditionTestName) {
                this.ConditionTestName = json.ConditionTestName;
            }
            if (json.AutoResultTestName) {
                this.AutoResultTestName = json.AutoResultTestName;
            }
        }
    }


    public PanelTestAutoResultDetailsId = 0;
    public PanelId = 0;
    public ConditionTestId = 0;
    public ConditionType: Enumeration.ReflexConditionType;
    public ConditionValue = '';
    public ConditionToValue = '';
    public AutoResultTestId = 0;
    public AutoResultValue = '';
    public ConditionFromToValue = '';
    @Exclude()
    public ConditionTestName = '';

    @Exclude()
    public AutoResultTestName = '';
}
