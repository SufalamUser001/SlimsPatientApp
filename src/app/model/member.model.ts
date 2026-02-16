
import { Exclude } from 'class-transformer';
import { SufalamModifiedByModel } from './base-model/SufalamModifiedBy.model';
import { MemberAddressModel } from './member-address.model';


export class PatientModel extends SufalamModifiedByModel {

    constructor(json: any = null) {
        super(json);

        if (json != null) {
            this.PatientId = json.PatientId;
            this.MembershipId = json.MembershipId;
            this.TitleId = json.TitleId;
            this.FirstName = json.FirstName;
            this.MiddleName = json.MiddleName;
            this.LastName = json.LastName;
            this.Title = json.Title;
            if (json.PatientName) {
                this.PatientName = json.PatientName;
            } else {
                this.PatientName = this.Title + " " + this.FirstName + " " + this.MiddleName + " " + this.LastName;
            }
            this.Gender = json.Gender;
            this.BirthDate = json.BirthDate;
            this.AgeAsOnDate = json.AgeAsOnDate;
            this.AgeYYY = json.AgeYYY;
            this.AgeMM = json.AgeMM;
            this.AgeDD = json.AgeDD;
            this.Photograph = json.Photograph;
            this.PatientPhotographDisplay = json.Photograph;
            this.Mobile = json.Mobile;
            this.CountryCallingCode = json.CountryCallingCode;
            this.Phone = json.Phone;
            this.EmailId = json.EmailId
            this.CityId = json.CityId;
            this.AreaId = json.AreaId;
            this.PreferredPhleboId = json.PreferredPhleboId;
            this.Reason = json.Reason;
            this.IsVIP = json.IsVIP;
            this.VIPDescription = json.VIPDescription;
            this.IsBlock = json.IsBlock;
            this.BlockRemarks = json.BlockRemarks;
            this.IsMembershipHolder = json.IsMembershipHolder;
            this.Remarks = json.Remarks;
            this.IsActive = json.IsActive;
            this.MemberFirstName = json.MemberFirstName;
            this.Description = json.Description;
            this.isBirthDate = this.BirthDate != null && this.BirthDate != undefined && this.BirthDate != '';
            this.BalanceAmount = json.BalanceAmount;
            this.IsNewMember = json.IsNewMember;
            this.RefId1 = json.RefId1;
            this.RefId2 = json.RefId2;
            this.VisitCount = json.VisitCount;
            this.RegistrationDiscountCategoryId = json.RegistrationDiscountCategoryId;
            this.RegistrationDiscountCategoryName = json.RegistrationDiscountCategoryName;
            this.PassportNo = json.PassportNo;
            this.NationalityId = json.NationalityId;
            this.NationalNo = json.NationalNo;
            this.GenderName = json.GenderName;
            this.AgeString = json.AgeString;
            this.IsCardPrinted = json.IsCardPrinted;
            this.PrintedBy = json.PrintedBy;
            this.PrintedOn = json.PrintedOn
            this.PrintedUserName = json.PrintedUserName;
            this.PageSize = json.PageSize;
            this.PageNum = json.PageNum;
            this.Relation = json.Relation;
            this.IsGeneratedFromLabCart = json.IsGeneratedFromLabCart;
            this.Password = json.Password;
            this.Token = json.Token;
            this.LoginOn = json.LoginOn;
            this.IntegrationPatientId = json.IntegrationPatientId;
            this.IntegrationSoftwareId = json.IntegrationSoftwareId;
            this.ConfirmPassword = json.ConfirmPassword;
            this.IsPasswordAvailable = json.IsPasswordAvailable;
            this.IsPatientImageAvailable = json.IsPatientImageAvailable;
            if(!this.IsPatientImageAvailable && this.Photograph && this.Photograph.length > 0){
                this.IsPatientImageAvailable = true;
            }
            // if (json.memberPrivilegeCardDetails) {
            //     for (let i = 0; i < json.memberPrivilegeCardDetails.length; i++) {
            //         this.memberPrivilegeCardDetails.push(new MemberPrivilegeCardDetailsModel(json.memberPrivilegeCardDetails[i]));
            //     }
            // }
            // if (json.PatientDiseaseList) {
            //     for (let i = 0; i < json.PatientDiseaseList.length; i++) {
            //         this.PatientDiseaseList.push(new PatientDiseaseDetailsModel(json.PatientDiseaseList[i]));
            //     }
            // }

            if (json.MemberAddressList) {
                for (let i = 0; i < json.MemberAddressList.length; i++) {
                    this.MemberAddressList.push(new MemberAddressModel(json.MemberAddressList[i]));
                }
            }

            if (json.MemberList) {
                for (let i = 0; i < json.MemberList.length; i++) {
                    this.MemberList.push(new PatientModel(json.MemberList[i]));
                }
            }

            
        }
    }

    public PatientId: number = 0;
    public MembershipId: number = 0;
    public TitleId = null;
    public FirstName: string = '';
    public MiddleName: string = '';
    public LastName: string = '';
    public Gender: string = '';
    public BirthDate: any;
    public AgeAsOnDate: any = this.GetCurrentDateOnly();
    public AgeYYY: number;
    public AgeMM: number;
    public AgeDD: number;
    public Photograph = [];
    public Mobile: string = '';
    public CountryCallingCode: string = '';
    public Phone: string = '';
    public EmailId: string = '';
    public CityId: number = null;
    public AreaId: number = null;
    public PreferredPhleboId: string = '';
    public Reason: string = '';
    public IsVIP: boolean = false;
    public VIPDescription: string = null;
    public IsMembershipHolder: boolean = false;
    public IsBlock: boolean = false;
    public BlockRemarks: string = null;
    public Remarks: string = '';
    public IsActive: boolean = true;
    public Description: string = '';
    public Address: string = '';
    public Title = '';
    public IsNewMember = true;
    public RefId1 = '';
    public RefId2 = '';
    public RegistrationDiscountCategoryId: number = null;

    public PassportNo: string = '';
    public NationalityId: number = null;
    public NationalNo: string = '';
    public IsCardPrinted: boolean = false;
    public PrintedBy: string = null;
    public PrintedOn: Date = null;
    public PrintedUserName: string = null;
    public PageSize = 0;
    public PageNum = 1;
    public Relation: string = '';
    public IsGeneratedFromLabCart: boolean = false;
    public Password: string = null;
    public ConfirmPassword: string = null;
    public Token: string = null;
    public LoginOn: Date = null;
    public IntegrationPatientId: string = null;
    public IntegrationSoftwareId: number = null;
    public LabCartOTP = null;
    @Exclude()
    public MemberFirstName = '';

    @Exclude()
    public isBirthDate: boolean = true;

    @Exclude()
    public PatientPhotographDisplay: any = null;

    @Exclude()
    public BalanceAmount: any = null;

    @Exclude()
    public VisitCount: any = null;

    @Exclude()
    public PatientName = '';

    @Exclude()
    public GenderName = '';
    @Exclude()
    public AgeString = '';

    @Exclude()
    public IsPatientImageAvailable = false;

    //public PatientDiseaseList: Array<PatientDiseaseDetailsModel> = [];
    public MemberAddressList: Array<MemberAddressModel> = [];

    @Exclude()
    public MemberList: Array<PatientModel> = [];
    
    @Exclude()
    public RegistrationDiscountCategoryName: any = null;

    //@Exclude()
   // public memberPrivilegeCardDetails: Array<MemberPrivilegeCardDetailsModel> = [];

    @Exclude()
    public IsPasswordAvailable  = false;

    @Exclude()
    public IsSelected  = false;
}