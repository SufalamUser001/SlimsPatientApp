import { Exclude } from "class-transformer";
import { Subject, Observable, throttleTime, distinctUntilChanged, merge, map } from "rxjs";
import { Enumeration } from "../service/shared-service/others/enumeration";
import { RegistrationResultDetailsModel } from "./registration-result-details.model";
import { SufalamModifiedByModel } from "../model/base-model/SufalamModifiedBy.model";
import { IdNameValueModel } from "../model/Id-name-value.model";


export class RegistrationServiceDetailsModel extends SufalamModifiedByModel {

    constructor(json: any = null) {
        super(json);
        if (json != null) {
            this.RegistrationServiceDetailsId = json.RegistrationServiceDetailsId;
            this.LabId = json.LabId;
            this.ServiceId = json.ServiceId;
            this.ServiceSeriesId = json.ServiceSeriesId;
            this.IsUrgent = json.IsUrgent;
            this.PhleboUserId = json.PhleboUserId;
            this.VisitorAmount = json.VisitorAmount;
            this.ExpectedReportDateTime = json.ExpectedReportDateTime;
            this.SavedExpectedReportDateTime = json.ExpectedReportDateTime;

            this.LogbookVersionId = json.LogbookVersionId;

            this.ServiceName = json.ServiceName;

            if (json.ServiceCode) {
                this.ServiceName += ' - ' + json.ServiceCode;
            }

            this.UrgentClassification = json.UrgentClassification;
            this.ServiceType = json.ServiceType;
            this.ApplicableGender = json.ApplicableGender;
            this.ServiceAddedRemarks = json.ServiceAddedRemarks;
            this.IntegrationServiceRemarks = json.IntegrationServiceRemarks;
            this.IsCancel = json.IsCancel;
            this.CancellationRemarks = json.CancellationRemarks;
            this.CancellationUserId = json.CancellationUserId;
            this.CancellationOn = json.CancellationOn;
            this.CancellationUserName = json.CancellationUserName;
            this.ReportRemarks = json.ReportRemarks;
            this.ReportRemarksOld = json.ReportRemarks;

            this.AddedUserName = json.AddedUserName;
            this.AddedOn = json.AddedOn;
            this.ServiceReportRemarksList = json.ServiceReportRemarksList;
            this.MRPAmount = json.MRPAmount;
            this.TotalAmount = json.TotalAmount;
            this.ProcessingBranchName = json.ProcessingBranchName;

            this.IsDisableControls = json.IsDisableControls;
            this.ReasonForDisableControls = json.ReasonForDisableControls;

            this.IsServiceFormAvailable = json.IsServiceFormAvailable;
            this.IsConsentFormAvailable = json.IsConsentFormAvailable;
            this.ServiceWorkflow = json.ServiceWorkflow;
            this.SpecimenName = json.SpecimenName;
            this.SpecimenRemarks = json.SpecimenRemarks;
            this.IsServiceFormOrConsentFormAvailable = json.IsServiceFormOrConsentFormAvailable;
            this.RegistrationServiceHistoDetailsId = json.RegistrationServiceHistoDetailsId;

            this.IsDepartmentRights = json.IsDepartmentRights;
            this.DepartmentId = json.DepartmentId;
            this.IsServiceMarkAsHold = json.IsServiceMarkAsHold;
            this.IsRegistrationServiceAttachmentAvailable = json.IsRegistrationServiceAttachmentAvailable;
            this.IsRegistrationServiceAttachmentVerificationRequired = json.IsRegistrationServiceAttachmentVerificationRequired;
            this.IsPackage = json.IsPackage;
            this.AppointmentDoctorId = json.AppointmentDoctorId;
            this.IntegrationServiceRemarks2 = json.IntegrationServiceRemarks2
            this.CouponCode = json.CouponCode;
            this.B2BCouponDetailsId = json.B2BCouponDetailsId


            if (json.RegistrationResultDetails) {
                for (let i = 0; i < json.RegistrationResultDetails.length; i++) {
                    this.RegistrationResultDetails.push(new RegistrationResultDetailsModel(json.RegistrationResultDetails[i]));
                }
            }

            // if (json.RegistrationServiceAttachmentList) {
            //     for (let i = 0; i < json.RegistrationServiceAttachmentList.length; i++) {
            //         this.RegistrationServiceAttachmentList.push(new RegistrationServiceAttachmentModel(json.RegistrationServiceAttachmentList[i]));
            //     }
            // }

            if (json.SpecimenList) {
                for (let i = 0; i < json.SpecimenList.length; i++) {
                    this.SpecimenList.push(new IdNameValueModel(json.SpecimenList[i]));
                }
            }

            if (json.RegistrationSpecimenServiceDetailsLabIdWise) {
                for (let i = 0; i < json.RegistrationSpecimenServiceDetailsLabIdWise.length; i++) {
                    this.RegistrationSpecimenServiceDetailsLabIdWise.push(new IdNameValueModel(json.RegistrationSpecimenServiceDetailsLabIdWise[i]));
                }
            }

            this.PanelResultTemplateList = json.PanelResultTemplateList;

            this.TestResultReminderDetails = new RegistrationResultDetailsModel(json.TestResultReminderDetails);
            this.OrganismName = json.OrganismName;

            this.ProcessingType = json.ProcessingType;
            this.ProcessingTypeName = json.ProcessingTypeName;
            this.ServiceStatus = json.ServiceStatus;
            this.ServiceStatusName = json.ServiceStatusName;
            // this.IsInterim = json.IsInterim;
            // this.IsInterimOld = json.IsInterim;
            this.OldServiceTestingType = json.ServiceTestingType;
            this.ServiceTestingType = json.ServiceTestingType;
            this.SpecimenId = json.SpecimenId;
            this.RRDSpecimenId = json.RRDSpecimenId;
            this.ResultsForAllIncludedValidationExpression = json.ResultsForAllIncludedValidationExpression;
            this.IsDisplayFreeFloat = json.IsDisplayFreeFloat;
            this.FormattedCreatedDate = json.FormattedCreatedDate;
            this.LabIdRemarks = json.LabIdRemarks;
            this.FFWordFile = json.FFWordFile;
            this.DataType = json.DataType;

            this.IsServiceAutoApprovalBasedOnTimeInterval = json.IsServiceAutoApprovalBasedOnTimeInterval;
            this.ServiceAutoApprovalTimeInMin = json.ServiceAutoApprovalTimeInMin;
            this.IsAutoApprovalBasedOnTimeInterval = json.IsAutoApprovalBasedOnTimeInterval;
            this.AutoApprovalTimeInMin = json.AutoApprovalTimeInMin;
            this.AutoApprovalBasedOnTimeIntervalBy = json.AutoApprovalBasedOnTimeIntervalBy;
            this.AutoApprovalBasedOnTimeIntervalOn = json.AutoApprovalBasedOnTimeIntervalOn;

            this.ResultStatus = json.ResultStatus;
            this.RegistrationOn = json.RegistrationOn;
            this.RegistrationBy = json.RegistrationBy;
            this.BatchDetailsId = json.BatchDetailsId;

            this.IsRepeatTestAvailable = json.IsRepeatTestAvailable;
            this.IsDoubleDataTestAvailable = json.IsDoubleDataTestAvailable;
            this.BranchTransferPrice = json.BranchTransferPrice;
            this.IsUrgentFromCritical = json.IsUrgentFromCritical;
            this.Diagnosis = json.Diagnosis;
            this.Organ = json.Organ;
            this.RegistrationByName = json.RegistrationByName;
            this.BranchId = json.BranchId;
            this.ProcessingBranchId = json.ProcessingBranchId;
            this.IsBranchTransferAdditionalPriceAllow = json.IsBranchTransferAdditionalPriceAllow;

            this.BranchTransferAdditionalPrice = json.BranchTransferAdditionalPrice;
            this.BranchTransferAdditionalPriceAddedBy = json.BranchTransferAdditionalPriceAddedBy;
            this.BranchTransferAdditionalPriceAddedOn = json.BranchTransferAdditionalPriceAddedOn;

            this.UrgentType = json.UrgentType;
            this.UrgentTypeIcon = json.UrgentTypeIcon;
            this.SelectALL = json.SelectALL;
            this.isDisplayCustomTemplateFields = json.isDisplayCustomTemplateFields;
            this.InsuranceAmount = json.InsuranceAmount;
            this.InsurancePercentage = json.InsurancePercentage;
            this.PatientAmount = json.PatientAmount;
            this.PatientPercentage = json.PatientPercentage;
            this.SecondApprovalRemarks = json.SecondApprovalRemarks;
            this.SecondApprovalRequestedTo = json.SecondApprovalRequestedTo;
            this.SecondApprovalRequestedBy = json.SecondApprovalRequestedBy;
            this.IsSecondApprovalRequired = json.IsSecondApprovalRequired;
            this.IsSpecimenReCollected = json.IsSpecimenReCollected;
            this.SampleFlow = json.SampleFlow;
            this.CheckInOutStatus = json.CheckInOutStatus;
            this.ServiceInsuranceStatus = json.ServiceInsuranceStatus;
            this.IsCheckInOutRequired = json.IsCheckInOutRequired;
            this.MemberPrivilegeCardPrepaidServiceDetailsId = json.MemberPrivilegeCardPrepaidServiceDetailsId;
            this.IsNameToBePrintedInOtherLanguage = json.IsNameToBePrintedInOtherLanguage;
            this.IsServiceAttachmentRequired = json.IsServiceAttachmentRequired;
            this.IsServiceCancellationRequestRaised = json.IsServiceCancellationRequestRaised;
            this.RegistrationServiceCancellationApprovalDetailsId = json.RegistrationServiceCancellationApprovalDetailsId;
            this.ProcessingBranchIdForService = json.ProcessingBranchIdForService;
            this.IsExtractionAvailable = json.IsExtractionAvailable;
            this.IsReportWithoutAccreditation = json.IsReportWithoutAccreditation;

            this.IGSTPercentage = json.IGSTPercentage;
            this.IGSTAmount = json.IGSTAmount;
            this.PrimaryB2BAmount = json.PrimaryB2BAmount;
            this.SecondaryB2BAmount = json.SecondaryB2BAmount;
            this.SGSTPercentage = json.SGSTPercentage;
            this.SGSTAmount = json.SGSTAmount;
            this.CGSTPercentage = json.CGSTPercentage;
            this.CGSTAmount = json.CGSTAmount;
            this.CESSPercentage = json.CESSPercentage;
            this.CESSAmount = json.CESSAmount;
            this.UTGSTPercentage = json.UTGSTPercentage;
            this.UTGSTAmount = json.UTGSTAmount;
            this.TotalTaxAmount = json.TotalTaxAmopunt;
            this.IsGenerateCardFromRegistration = json.IsGenerateCardFromRegistration;
            this.MemberPrivilegeCardDetailsId = json.MemberPrivilegeCardDetailsId;
            this.IsAllowToSelectDoctorAppointment = json.IsAllowToSelectDoctorAppointment;
            this.IsNightCharges = json.IsNightCharges;
            this.ServiceTagging = json.ServiceTagging;
            this.AssignedTo = json.AssignedTo
            this.AssignedBy = json.AssignedBy
            this.AssignedName = json.AssignedName;
            this.AssignedOn = json.AssignedOn;
            this.FormatedAssignedOn = json.FormatedAssignedOn;
            this.PackageName = json.PackageName;
            this.IsParallelViewOfScanDocument = json.IsParallelViewOfScanDocument;
            this.IsAllowToMarkAbnormal = json.IsAllowToMarkAbnormal ;
            this.IsAbnormal = json.IsAbnormal ;
            this.PanelResultTemplateName = json.PanelResultTemplateName;
            this.IsManuallyAllowResultValueBoldInReport = json.IsManuallyAllowResultValueBoldInReport;
            this.IsCounsellingRequired = json.IsCounsellingRequired;
            this.IsCounsellingDone = json.IsCounsellingDone;
            this.CounsellingRemarks = json.CounsellingRemarks;
            this.CounsellingBy = json.CounsellingBy;
            this.CounsellingOn = json.CounsellingOn;
            this.IsAllowToMarkCounsellingRequiredManually = json.IsAllowToMarkCounsellingRequiredManually;
            this.IsCounsellingRequiredMarkedManually = json.IsCounsellingRequiredMarkedManually;
            this.IsReflexService = json.IsReflexService;
            this.OrganismServiceId = json.OrganismServiceId;
            this.IsAllowPriceChangeAtRegistration = json.IsAllowPriceChangeAtRegistration;
            this.ManualTotalPrice = json.ManualTotalPrice;
            this.FileBodyData = json.FileBodyData;
            this.RegistrationServiceStatusName = json.RegistrationServiceStatusName;
            if (json.FlexiPackageServiceList) {
                for (let i = 0; i < json.FlexiPackageServiceList.length; i++) {
                    this.FlexiPackageServiceList.push(new RegistrationServiceDetailsModel(json.FlexiPackageServiceList[i]));
                }
            }
            this.IsFlexiPackage = json.IsFlexiPackage;
            this.NumberOfServiceSelectionFromFlexiPackage = json.NumberOfServiceSelectionFromFlexiPackage ;
            
            this.IsModificationRemarksCompulsory = json.IsModificationRemarksCompulsory ;
            this.VisitServiceDetailsId = json.VisitServiceDetailsId;
        }
    }

    public RegistrationServiceDetailsId: number = 0;
    public LabId: string = '';
    public ServiceId: number = 0;
    public ServiceSeriesId: string = null;

    public IsUrgent: boolean = false;
    public IsNightCharges: boolean = false;
    public PhleboUserId: string = null;
    public VisitorAmount: number = 0;
    public ServiceAddedRemarks = null;
    public IntegrationServiceRemarks = null;
    public ExpectedReportDateTime = null;
    public LogbookVersionId = null;
    public RegistrationServiceHistoDetailsId = 0;
    public IsCancel = false;
    public CancellationRemarks;
    public CancellationUserId;
    public CancellationOn;
    public ReportRemarks = '';
    public ReportRemarksOld = '';
    public IsDepartmentRights = false;
    public SpecimenName = '';
    public OrganismName = '';
    public SpecimenId = '';
    public RRDSpecimenId = ''
    public IsServiceFormAvailable = false;
    public IsConsentFormAvailable = false;
    public ServiceWorkflow: Enumeration.ServiceWorkflow = Enumeration.ServiceWorkflow.Routine;
    public ServiceStatus = Enumeration.RegistrationServiceStatusType.New;
    public OldServiceStatus = Enumeration.RegistrationServiceStatusType.New;
    public ServiceStatusName = '';
    // public IsInterim = false;
    // public IsInterimOld = false;
    public ServiceTestingType: Enumeration.ServiceTestingType = Enumeration.ServiceTestingType.Final;
    public IsDisplayFreeFloat = false;
    public IsServiceMarkAsHold = false;

    public IsServiceAutoApprovalBasedOnTimeInterval = false;
    public ServiceAutoApprovalTimeInMin: number = null;
    public IsAutoApprovalBasedOnTimeInterval = false;
    public AutoApprovalTimeInMin: number = null;
    public AutoApprovalBasedOnTimeIntervalBy: string = null;
    public AutoApprovalBasedOnTimeIntervalOn = null;
    public BranchTransferPrice = null;
    public IsUrgentFromCritical = false;
    public IsRepeatTestAvailable = false;
    public IsDoubleDataTestAvailable = false;
    public Organ = '';
    public Diagnosis = '';

    public BranchTransferAdditionalPrice = null;
    public BranchTransferAdditionalPriceAddedBy = null;
    public BranchTransferAdditionalPriceAddedOn = null;
    public UrgentType: string = '';
    public SecondApprovalRemarks: string = null;
    public SecondApprovalRequestedTo: string;
    public SecondApprovalRequestedBy: string;
    public IsSecondApprovalRequired: boolean = false;
    public MemberPrivilegeCardPrepaidServiceDetailsId: number = null;

    public IGSTPercentage: number = 0;
    public IGSTAmount: number = 0;
    public SGSTPercentage: number = 0;
    public SGSTAmount: number = 0;
    public CGSTPercentage: number = 0;
    public CGSTAmount: number = 0;
    public CESSPercentage: number = 0;
    public CESSAmount: number = 0;
    public UTGSTPercentage: number = 0;
    public UTGSTAmount: number = 0;
    public TotalTaxAmount: number = 0;
    public PrimaryB2BAmount: number = 0;
    public SecondaryB2BAmount: number = 0;
    public IsCalculateVisitPhleboAmount: boolean = false;
    public PanelResultTemplateName:string = null;
    @Exclude()
    public IsGenerateCardFromRegistration = false;
    @Exclude()
    public MemberPrivilegeCardDetailsId = null;
    @Exclude()
    public UrgentTypeIcon = null;
    @Exclude()
    public IsServiceFormOrConsentFormAvailable = false;

    @Exclude()
    public FormattedCreatedDate = '';

    @Exclude()
    public OldServiceTestingType: Enumeration.ServiceTestingType;

    @Exclude()
    public Amount: number = 0;

    @Exclude()
    public ServiceName: string = '';

    @Exclude()
    public UrgentClassification: Enumeration.UrgentClassification = Enumeration.UrgentClassification.WhenUserSelect;

    @Exclude()
    public ServiceType: Enumeration.ServiceType = Enumeration.ServiceType.Investigation;

    @Exclude()
    public ApplicableGender: string;

    @Exclude()
    public CancellationUserName = '';

    @Exclude()
    public AddedUserName = '';

    // this is for price calculation. this date will refer in price calculation.
    // Dont exclude this field.
    public AddedOn = null;

    @Exclude()
    public IsDisableControls = false;

    @Exclude()
    public ReasonForDisableControls = '';

    @Exclude()
    public RegistrationOn;
    @Exclude()
    public RegistrationBy;

    @Exclude()
    public SpecimenList = new Array<IdNameValueModel>();

    @Exclude()
    public PanelResultTemplateList = [];
    @Exclude()
    public IsExtractionAvailable = false;
  
    public IsReflexService = false;

    
    public RegistrationResultDetails: Array<RegistrationResultDetailsModel> = new Array<RegistrationResultDetailsModel>();
    //public RegistrationServiceAttachmentList = new Array<RegistrationServiceAttachmentModel>();

    public TestResultReminderDetails: RegistrationResultDetailsModel = new RegistrationResultDetailsModel();

    public IsExpanded = true;

    public MRPAmount: number = 0;
    public TotalAmount: number = 0;
    public ProcessingBranchName = '';

    public ProcessingType = '';
    public ProcessingTypeName = '';


    public DiscountGivenAmount = 0;
    public MaxDiscountAmount = 0;
    public DiscountAmount: number = 0;
    public FFWordFile = null;
    public BatchDetailsId: number = null

    public InsuranceAmount: number = 0;
    public InsurancePercentage: number = 0;
    public InsuranceTaxPercentage: number = 0;
    public InsuranceTaxAmount: number = 0;
    public PatientAmount: number = 0;
    public PatientPercentage: number = 0;
    public CheckInOutStatus: Enumeration.CheckInOutStatus.New;
    public IsServiceAttachmentRequired = false;
    public ServiceInsuranceStatus: Enumeration.InsuranceStatus.New;
    public IntegrationServiceRemarks2 = null;
    public ServiceTagging: string;
    public CouponCode: string = null;
    public B2BCouponDetailsId: number = null;
    public AssignedTo: string = null;
    public AssignedBy: string = null;
    public AssignedName: string = null;
    public AssignedOn;
    public FormatedAssignedOn;
    public IsAllowToMarkAbnormal:boolean = false ;
    public IsAbnormal = null ;
    public IsCounsellingRequired: boolean = false;
    public IsCounsellingDone: boolean = false;
    public CounsellingRemarks: string = null;
    public CounsellingBy: string = null;
    public CounsellingOn = null;
    public IsCounsellingRequiredMarkedManually: boolean = false;
    public OrganismServiceId = null;
    public FileBodyData = null;
    public VisitServiceDetailsId: number = null;
    
    
    @Exclude()
    public IsSelected = false;

    @Exclude()
    public IsHistoGramDisplay = true;

    @Exclude()
    public IsCheckInOutRequired = true;

    @Exclude()
    public NetAmount: number = 0;

    public DepartmentId: number = 0;

    @Exclude()
    public PatientPreparation = '';

    @Exclude()
    public ResultsForAllIncludedValidationExpression = [];

    @Exclude()
    public IsPackage

    get UrgentClassificationTooltip(): string {
    if (this.ServiceType == Enumeration.ServiceType.Charge) {
            return 'Charge can not be urgent.';
        } else if (this.ServiceType == Enumeration.ServiceType.Visit) {
            return 'Visit can not be urgent.';
        } else if (this.UrgentClassification == Enumeration.UrgentClassification.AlwaysUrgent) {
            return 'Service mark as always urgent.';
        } else if (this.UrgentClassification == Enumeration.UrgentClassification.Never) {
            return 'Service mark as never urgent.';
        } else {
            return '';
        }
    }

    get IsUrgentChange(): boolean {
        if (this.ServiceType == Enumeration.ServiceType.Investigation && this.UrgentClassification == Enumeration.UrgentClassification.WhenUserSelect) {
            return true;
        }

        return false;
    }

    @Exclude()
    public ServiceReportRemarksList = [];

    @Exclude()
    focus$ = new Subject<string>();

    @Exclude()
    search = (text$: Observable<string>) => {
        const debouncedText$ = text$.pipe(throttleTime(200), distinctUntilChanged());
        const inputFocus$ = this.focus$;

        return merge(debouncedText$, inputFocus$).pipe(
            map(term => (this.ServiceReportRemarksList.filter(v => !term || (v.Id && v.Id.toLowerCase().indexOf(term.toLowerCase()) > -1) || v.Name.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 5))
        );
    }

    @Exclude()
    public index = 0;

    @Exclude()
    public IsRegistrationServiceAttachmentAvailable: boolean;

    @Exclude()
    public IsRegistrationServiceAttachmentVerificationRequired: boolean;

    @Exclude()
    public ResultStatus: Enumeration.RegistrationResultStatusType;

    @Exclude()
    public ResultSwitch: boolean;

    @Exclude()
    public IsAllTestStatusChangeEnable: boolean = false;

    @Exclude()
    public LabIdRemarks = '';

    @Exclude()
    public DataType = null;

    @Exclude()
    public RegistrationByName = '';

    @Exclude()
    public BranchId = 0;

    @Exclude()
    public ProcessingBranchId = 0;

    @Exclude()
    public IsBranchTransferAdditionalPriceAllow = false;
    @Exclude()
    public IsParallelViewOfScanDocument = false;
    
    @Exclude()
    public TestNameSearch = '';


    @Exclude()
    public ResultValueFill = '';

    @Exclude()
    public SpecimenRemarks = '';

    @Exclude()
    public SelectALL = false;

    @Exclude()
    public isDisplayCustomTemplateFields = false;

    @Exclude()
    public MaxService_DiscountPer: number;

    @Exclude()
    public Service_DiscountPer: number;

    @Exclude()
    public Service_DiscountAmount: number;

    @Exclude()
    public IsSpecimenReCollected = false;

    @Exclude()
    public SampleFlow = new Array<string>();
    @Exclude()
    public IsTrendDataExpanded = false;

    @Exclude()
    public IsNameToBePrintedInOtherLanguage = false;

    @Exclude()
    public IsManuallyAllowResultValueBoldInReport = false;

    public IsServiceAttachmentRequiredAcknowledged = false;
    public IsServiceCancellationRequestRaised = false;
    public RegistrationServiceCancellationApprovalDetailsId: number = null;
    public ProcessingBranchIdForService: number = null;
    public IsReportWithoutAccreditation = false;
    public IsAllowToSelectDoctorAppointment = false;
    public AppointmentDoctorId: string = null;
    public PackageName: string = null;
    public IsModificationRemarksCompulsory = false;

    @Exclude()
    public IsAddedFromVisit: boolean = false;
    
    @Exclude()
    public IsServiceAddedFromVisit: boolean = false;

    @Exclude()
    public IsNewPCAddService: boolean = false;

    @Exclude()
    public SavedExpectedReportDateTime = null;
    @Exclude()
    public ALLPanelTestAutoResultChildTestDetails = [];
    @Exclude()
    public IsDisableReRunService = false;

    @Exclude()
    public SelectedPanelResultTemplateName: string = null;

    @Exclude()
    public IsServiceAttachmentExpanded: boolean = false;

    public IsAllowToMarkCounsellingRequiredManually: boolean = false;

    public FlexiPackageServiceList : Array<RegistrationServiceDetailsModel> = [];

    @Exclude()
    public IsFlexiPackage :boolean = false; 

    @Exclude()
    public IsDoNotShowManualTotalPrice: boolean = false; 

    public ManualTotalPrice: number = null;

    public IsAllowPriceChangeAtRegistration: boolean = false;

    public NumberOfServiceSelectionFromFlexiPackage = null;

    @Exclude()
    public RegistrationSpecimenServiceDetailsLabIdWise = new Array<IdNameValueModel>();
    @Exclude()
    public RegistrationServiceStatusName = '';
}

