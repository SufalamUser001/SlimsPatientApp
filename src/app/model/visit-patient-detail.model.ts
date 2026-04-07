import { SufalamModifiedByModel } from './base-model/SufalamModifiedBy.model';
import { Exclude } from 'class-transformer';
import { MemberAddressModel } from './member-address.model';
import { ScanDocumentDetailsModel } from './scan-document-details';

export class VisitPatientDetailModel extends SufalamModifiedByModel {

    constructor(json: any = null) {
        super(json);
        if (json != null) {
            this.VisitPatientDetailsId = json.VisitPatientDetailsId;
            this.VisitId = json.VisitId;
            this.PatientId = json.PatientId;
            this.AgeYYY = json.AgeYYY;
            this.AgeMM = json.AgeMM;
            this.AgeDD = json.AgeDD;
            this.DoctorId = json.DoctorId;
            this.Remarks = json.Remarks;
            this.PhleboRemarks = json.PhleboRemarks;
            this.FirstName = json.FirstName;
            this.LastName = json.LastName;
            this.MiddleName = json.MiddleName;
            this.Gender = json.Gender;
            this.BirthDate = json.BirthDate;
            this.MembershipId = json.MembershipId;
            this.TRFId = json.TRFId;
            this.Photograph = json.Photograph;
            this.IsVIP = json.IsVIP;
            this.VIPDescription = json.VIPDescription;
            this.isSelected = json.isSelected;
            this.ReceivedAmount = json.ReceivedAmount;
            this.AmountToBeCollectedFromPatient = json.AmountToBeCollectedFromPatient;
            this.PaymentModeName = json.PaymentModeName;
            this.DoctorName = json.DoctorName;
            this.LabId = json.LabId;
            if (json.MemberAddressList) {
                for (let i = 0; i < json.MemberAddressList.length; i++) {
                    this.MemberAddressList.push(new MemberAddressModel(json.MemberAddressList[i]));
                }
            }
            if (json.ScanDocumentDetails) {
                for (let i = 0; i < json.ScanDocumentDetails.length; i++) {
                    this.ScanDocumentDetails.push(new ScanDocumentDetailsModel(json.ScanDocumentDetails[i]));
                }
            }
        }
    }
    public VisitPatientDetailsId = 0;
    public VisitId = 0;
    public PatientId = 0;
    public AgeYYY = 0;
    public AgeMM = 0;
    public AgeDD = 0;
    public DoctorId = 0;
    public Remarks = '';
    public PhleboRemarks = '';
    public FirstName = '';
    public MiddleName = '';
    public LastName = '';
    public Gender = '';
    public BirthDate = '';
    public TRFId = 0;
    public ReceivedAmount = 0;
    public AmountToBeCollectedFromPatient = null;
    public PaymentModeName = '';
    public Photograph = '';
    public IsVIP: boolean = false;
    public VIPDescription: string = null;
    public LabId: string = null;
    public ScanDocumentDetails : Array<ScanDocumentDetailsModel> = [];
    public VisitServiceDetails = [];
    public VisitPatientSpecimenDetails = [];
    @Exclude()
    public MembershipId = 0;

    @Exclude()
    public TotalAmount = 0;

    @Exclude()
    public selectedServiceId: number = null;

    @Exclude()
    public MemberAddressList: Array<MemberAddressModel> = [];
    
    @Exclude()
    public isSelected = false;

    @Exclude()
    public AgeString  = "";

    @Exclude()
    public ServiceList;
    
    @Exclude()
    public DoctorName = "";

  
}
