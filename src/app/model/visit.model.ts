import { SufalamModifiedByModel } from './base-model/SufalamModifiedBy.model';
import { Exclude } from 'class-transformer';
import { Enumeration } from '../service/shared-service/others/enumeration';
import { VisitPatientDetailModel } from './visit-patient-detail.model';

export class VisitModel extends SufalamModifiedByModel {

    constructor(json: any = null) {
        super(json);
        if (json != null) {
            this.VisitId = json.VisitId;
            this.ParentVisitId = json.ParentVisitId;
            this.RegistrationDate = json.RegistrationDate;
            this.VisitBookedBy = json.VisitBookedBy;
            this.Address = json.Address;
            this.CityId = json.CityId;
            this.B2BId = json.B2BId;
            this.AreaId = json.AreaId;
            this.MobileNo = json.MobileNo;
            this.PhoneNo = json.PhoneNo;
            this.EmailId = json.EmailId;
            this.Remarks = json.Remarks;
            this.PhleboId = json.PhleboId;
            this.TestDetails = json.TestDetails;
            this.OtherVisitDateTime1 = json.OtherVisitDateTime1;
            this.OtherVisitDateTime2 = json.OtherVisitDateTime2;
            this.OtherVisitDateTime3 = json.OtherVisitDateTime3;
            this.OtherVisitDateTime4 = json.OtherVisitDateTime4;
            this.OtherVisitDateTime5 = json.OtherVisitDateTime5;
            this.CollDateTime = json.CollDateTime;
            this.BranchId = json.BranchId;
            this.Status = json.Status;
            this.AreaName = json.AreaName;
            this.CityName = json.CityName;
            this.PhlebotomistName = json.PhlebotomistName;
            this.BranchName = json.BranchName;
            this.PreferredPhleboId = json.PreferredPhleboId;
            this.PaymentModeId = json.PaymentModeId;
            this.MembershipId = json.MembershipId;
            this.PatientCount = json.PatientCount;
            this.PSNCount = json.PSNCount;
            this.VisitOTP = json.VisitOTP;
            this.B2BName = json.B2BName;
            this.PaymentModeName = json.PaymentModeName;
            this.OtherVisitDateTimeNo = json.OtherVisitDateTimeNo;
            this.CollectionDateTime = json.CollectionDateTime;
            this.AdditionalVisitCount = json.AdditionalVisitCount;
            this.IsVisitBookByPatient = json.IsVisitBookByPatient;
            this.VisitConfirmBy = json.VisitConfirmBy;
            this.VisitConfirmDate = json.VisitConfirmDate;
            this.IsChildVisit = json.IsChildVisit;
            this.AllowDeleteVisitPatientAfterCompletion = json.AllowDeleteVisitPatientAfterCompletion;
            this.VisitCategory = json.VisitCategory;
            this.VisitCurrentSlot =json.VisitCurrentSlot;
            this.PatientSourceId = json.PatientSourceId;
            this.VisitClassification = json.VisitClassification;
            this.IntegrationSoftwareId = json.IntegrationSoftwareId;
            this.IntegrationVisitOrderId = json.IntegrationVisitOrderId;
            if(!this.IsVisitBookByPatient){
                this.IsVisitConfirm = true;
            }else{
                this.IsVisitConfirm = json.IsVisitConfirm;
            }
            if (json.VisitPatientDetails != undefined && json.VisitPatientDetails != null) {
                for (let i = 0; i < json.VisitPatientDetails.length; i++) {
                    this.VisitPatientDetails.push(new VisitPatientDetailModel(json.VisitPatientDetails[i]));
                }
            }
        }
    }

    public VisitId = 0;
    public ParentVisitId = null;
    public RegistrationDate: any = this.GetLocalDate();
    public VisitBookedBy = '';
    public Address = '';
    public CityId = 0;
    public AreaId = 0;
    public B2BId = 0;
    public MobileNo = '';
    public PhoneNo = '';
    public EmailId = '';
    public Remarks = '';
    public B2BName = '';
    public PaymentModeName = '';
    public PhleboId = null;
    public TestDetails = '';
    public CollectionDateTime: any = null;
    public CollDateTime: any;
    public VisitAmount = 0;
    public PaidAmount = 0;
    public BranchId = 0;
    public Status = Enumeration.VisitRouteStatus.New;
    public VisitPatientDetails: Array<VisitPatientDetailModel> = [];
    public OtherVisitDateTime1: any = null;
    public OtherVisitDateTime2: any = null;
    public OtherVisitDateTime3: any = null;
    public OtherVisitDateTime4: any = null;
    public OtherVisitDateTime5: any = null;
    public OldOtherVisitDateTime1: any = null;
    public OldOtherVisitDateTime2: any = null;
    public OldOtherVisitDateTime3: any = null;
    public OldOtherVisitDateTime4: any = null;
    public OldOtherVisitDateTime5: any = null;
    public MembershipId = 0;
    public BranchName = '';
    public CityName = '';
    public PhlebotomistName = '';
    public AreaName = '';
    public PreferredPhleboId = null;
    public PaymentModeId = 0;
    public PatientCount = 0;
    public PSNCount = 0;
    public OtherVisitDateTimeNo: Number = null;
    public AdditionalVisitCount: Number = 0;
    public AllowDeleteVisitPatientAfterCompletion: boolean;
    public IsVisitBookByPatient : boolean = false;
    public IsVisitConfirm = true;
    public VisitConfirmBy = null;
    public VisitConfirmDate = null;
    public IsChildVisit = false;
    public VisitCategory = Enumeration.VisitCategory.Home_Visit;
    public VisitCurrentSlot;
    public PatientSourceId: number = null;
    public VisitClassification = '';
    public IntegrationSoftwareId:number = 0;
    public IntegrationVisitOrderId:string = null;
    @Exclude()
    public TotalAmount = 0;
    @Exclude()
    public VisitOTP = '';
}
