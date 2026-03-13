
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


export class PatientAppConfigurationModel {

    constructor(json: any = null) {
        if (json != null && json !== '') {
            this.IsServiceDisplay = json.IsServiceDisplay;
            this.IsServicePriceDisplay = json.IsServicePriceDisplay;
            this.IsFinancialDetailsDisplay = json.IsFinancialDetailsDisplay;
            this.IsAllowToGenerateReceipt = json.IsAllowToGenerateReceipt;
            this.IsPayDueBtnDisplay = json.IsPayDueBtnDisplay;
            this.IsEnableCart = json.IsEnableCart;
            this.IsPatientReportDisplayonDashboard = json.IsPatientReportDisplayonDashboard;
        }
    }

    public IsServiceDisplay = false;
    public IsServicePriceDisplay = false;
    public IsFinancialDetailsDisplay = false;
    public IsAllowToGenerateReceipt = false;
    public IsPayDueBtnDisplay = false;
    public IsEnableCart = false;
    public IsPatientReportDisplayonDashboard = false;

}


