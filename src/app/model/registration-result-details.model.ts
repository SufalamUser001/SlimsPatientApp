import { Exclude } from "class-transformer";
import { Subject, Observable, throttleTime, distinctUntilChanged, merge, map } from "rxjs";
import { Enumeration } from "../service/shared-service/others/enumeration";
import { SufalamModifiedByModel } from "../model/base-model/SufalamModifiedBy.model";
import { OrganismServiceMappingModel } from "./organism-service-mapping.model";
import { ReferenceRangeCategoryModel } from "../model/reference-range-category.model";
import { TestDropDownValuesModel } from "./test-dropdown-values.model";
import { PanelTestAutoResultDetailsModel } from "./panel-test-auto-result-details.model";
import { RegistrationResultCriticalValueDetailsModel } from "../model/registration-result-critical-value-remarks.Model";


export class RegistrationResultDetailsModel extends SufalamModifiedByModel {

    constructor(json: any = null) {
        super(json);
        if (json != null) {
            this.RegistrationResultDetailsId = json.RegistrationResultDetailsId;
            this.TestId = json.TestId;
            this.NameToBePrinted = json.NameToBePrinted;
            this.ResultValue = json.ResultValue;
            this.ResultValueOld = json.ResultValue;
            this.UnitName = json.UnitName;
            this.BRInterval = json.BRInterval;
            this.BRILowValue = json.BRILowValue;
            this.BRIHighValue = json.BRIHighValue;
            this.CriticalLowValue = json.CriticalLowValue;
            this.CriticalHighValue = json.CriticalHighValue;
            this.RepeatLowValue = json.RepeatLowValue;
            this.RepeatHighValue = json.RepeatHighValue;
            this.AbsurdLowValue = json.AbsurdLowValue;
            this.AbsurdHighValue = json.AbsurdHighValue;
            this.ResultStatus = json.ResultStatus;
            this.ResultStatusOld = json.ResultStatus;
            this.IsCritical = json.IsCritical;
            this.NoOfDecimalPlaces = json.NoOfDecimalPlaces;
            this.ReportRemarks = json.ReportRemarks;
            this.ReportRemarksOld = json.ReportRemarks;
            this.IsRepeat = json.IsRepeat;
            this.InstResultValue = json.InstResultValue;
            this.DataType = json.DataType;
            this.InstrumentFlag = json.InstrumentFlag;
            this.InstrumentFlagWithDesc = json.InstrumentFlagWithDesc;
            this.ServiceSeriesId = json.ServiceSeriesId;
            if (json.isSelected) {
                this.isSelected = json.isSelected;
            }

            this.IsAbnormalResultIfNotInList = json.IsAbnormalResultIfNotInList;
            this.DontAllowOtherResult = json.DontAllowOtherResult;
            this.IsDoubleDataEntry = json.IsDoubleDataEntry;
            this.IsTestResultDisplayToSecondUser = json.IsTestResultDisplayToSecondUser;
            this.FirstValidatedBy = json.FirstValidatedBy;
            this.FirstValidatedOn = json.FirstValidatedOn;
            this.ValidatedBy = json.ValidatedBy;
            this.ValidatedOn = json.ValidatedOn;
            this.ApprovedOn = json.ApprovedOn;
            this.ApprovedBy = json.ApprovedBy;
            this.IsAutoApproved = json.IsAutoApproved;
            this.registrationResultCriticalValueDetails = json.registrationResultCriticalValueDetails;
            this.TestTagging = json.TestTagging;

            if (json.TestDropDownValues) {
                for (let i = 0; i < json.TestDropDownValues.length; i++) {
                    this.TestDropDownValues.push(new TestDropDownValuesModel(json.TestDropDownValues[i]));
                }
            }

            this.TestReportRemarksList = json.TestReportRemarksList;

            if (json.PanelTestAutoResultDetails) {
                for (let i = 0; i < json.PanelTestAutoResultDetails.length; i++) {
                    this.PanelTestAutoResultDetails.push(new PanelTestAutoResultDetailsModel(json.PanelTestAutoResultDetails[i]));
                }
            }

            this.RepeatCount = json.RepeatCount;
            this.InstrumentHistoryCount = json.InstrumentHistoryCount;
            this.ManualHistoryCount = json.ManualHistoryCount;
            this.ResultFlagOld = json.ResultFlag;
            this.ResultFlag = json.ResultFlag;
            this.IsResultFlagSetManually = json.IsResultFlagSetManually;
            this.ValidationExpression = json.ValidationExpression;
            this.ValidationMessage = json.ValidationMessage;
            this.FormulaExpression = json.FormulaExpression;
            this.IsOrganismTest = json.IsOrganismTest;

            this.MICResistant = json.MICResistant;
            this.MICIntermediateFrom = json.MICIntermediateFrom;
            this.MICIntermediateTo = json.MICIntermediateTo;
            this.MICSensitive = json.MICSensitive;
            this.ManualResistant = json.ManualResistant;
            this.ManualIntermediateFrom = json.ManualIntermediateFrom;
            this.ManualIntermediateTo = json.ManualIntermediateTo;
            this.ManualSensitive = json.ManualSensitive;
            this.ProcessingBranchId = json.ProcessingBranchId;
            this.TestName = json.TestName;
            this.TestShortName = json.TestShortName;
            this.TestCode = json.TestCode;
            this.IsResultRequired = json.IsResultRequired;

            var slashData;
            if (this.MICResistant) {
                slashData = this.MICResistant.split('/');
                if (slashData.length > 1) {
                    this.MICResistantCal = slashData[0];
                }
                else {
                    this.MICResistantCal = this.MICResistant;
                }
            }


            if (this.MICIntermediateFrom) {
                slashData = this.MICIntermediateFrom.split('/');
                if (slashData.length > 1) {
                    this.MICIntermediateFromCal = slashData[0];
                }
                else {
                    this.MICIntermediateFromCal = this.MICIntermediateFrom;
                }
            }

            if (this.MICIntermediateTo) {
                slashData = this.MICIntermediateTo.split('/');
                if (slashData.length > 1) {
                    this.MICIntermediateToCal = slashData[0];
                }
                else {
                    this.MICIntermediateToCal = this.MICIntermediateTo;
                }
            }

            if (this.MICSensitive) {
                slashData = this.MICSensitive.split('/');
                if (slashData.length > 1) {
                    this.MICSensitiveCal = slashData[0];
                }
                else {
                    this.MICSensitiveCal = this.MICSensitive;
                }
            }

            if (this.ManualResistant) {
                slashData = this.ManualResistant.split('/');
                if (slashData.length > 1) {
                    this.ManualResistantCal = slashData[0];
                }
                else {
                    this.ManualResistantCal = this.ManualResistant;
                }
            }

            if (this.ManualIntermediateFrom) {
                slashData = this.ManualIntermediateFrom.split('/');
                if (slashData.length > 1) {
                    this.ManualIntermediateFromCal = slashData[0];
                }
                else {
                    this.ManualIntermediateFromCal = this.ManualIntermediateFrom;
                }
            }

            if (this.ManualIntermediateTo) {
                slashData = this.ManualIntermediateTo.split('/');
                if (slashData.length > 1) {
                    this.ManualIntermediateToCal = slashData[0];
                }
                else {
                    this.ManualIntermediateToCal = this.ManualIntermediateTo;
                }
            }

            if (this.ManualSensitive) {
                slashData = this.ManualSensitive.split('/');
                if (slashData.length > 1) {
                    this.ManualSensitiveCal = slashData[0];
                }
                else {
                    this.ManualSensitiveCal = this.ManualSensitive;
                }
            }


            this.IsHistoResultLinkWithMaster = json.IsHistoResultLinkWithMaster;
            this.HistoResultEntryType = json.HistoResultEntryType;
            this.RegistrationServiceHistoDetailsId = json.RegistrationServiceHistoDetailsId;
            if (json.MBMethod) {
                this.MBMethod = json.MBMethod;
            }

            if (this.ResultFlag == Enumeration.RegistrationResultFlagType.Normal) {
                this.IsAbnormal = false;
                this.IsAbnormalOld = false;
            }
            else {
                this.IsAbnormal = true;
                this.IsAbnormalOld = true;
            }

            this.IsDisableControls = json.IsDisableControls;
            this.DisableRemarks = json.DisableRemarks;
            this.RepeatACKStatus = json.RepeatACKStatus;
            this.IsModificationRemarksCompulsory = json.IsModificationRemarksCompulsory;
            this.ManualInstrumentId = json.ManualInstrumentId;
            this.SavedManualInstrumentId = json.ManualInstrumentId;
            this.MaxLengthOfResult = json.MaxLengthOfResult;
            this.OldMaxLengthOfResult = json.MaxLengthOfResult;

            this.CriticalLowRemarks = json.CriticalLowRemarks;
            this.CriticalHighRemarks = json.CriticalHighRemarks;
            this.RepeatLowRemarks = json.RepeatLowRemarks;
            this.RepeatHighRemarks = json.RepeatHighRemarks;
            this.AbsurdLowRemarks = json.AbsurdLowRemarks;
            this.AbsurdHighRemarks = json.AbsurdHighRemarks;


            this.DeltaCheckType = json.DeltaCheckType;
            this.AbsoluteValue = json.AbsoluteValue;
            this.PercentageVariation = json.PercentageVariation;
            this.DeltaCheckPreviousResult = json.DeltaCheckPreviousResult;
            this.DeltaCheckPreviousRegDate = json.DeltaCheckPreviousRegDate;
            this.DeltaCheckRegistrationResultDetailsId = json.DeltaCheckRegistrationResultDetailsId;
            this.DeltaCheckCurrentRegistrationResultDetailsId = json.DeltaCheckCurrentRegistrationResultDetailsId;
            this.PreviousResultValue = json.PreviousResultValue;
            this.IsIgnoreFormulaExpression = json.IsIgnoreFormulaExpression;
            this.IsDisapproved = json.IsDisapproved;
            this.IsSingleSelectionOnly = json.IsSingleSelectionOnly;
            this.IsAntibioticTest = json.IsAntibioticTest;
            this.IsSpecimenRejected = json.IsSpecimenRejected;
            this.IsReflexTest = json.IsReflexTest;
            this.DeltaViolationFlag = json.DeltaViolationFlag;
            this.DeltaCheckAlertMessageShown = json.DeltaCheckAlertMessageShown;
            this.RRDSpecimenMasterId = json.RRDSpecimenMasterId
            this.SpecimenName = json.SpecimenName;
            this.RegistrationBy = json.RegistrationBy;
            this.RegistrationOn = json.RegistrationOn;
            this.ValidatedByName = json.ValidatedByName;
            this.FirstValidatedByName = json.FirstValidatedByName;
            this.ApprovedByName = json.ApprovedByName;
            this.RegistrationByName = json.RegistrationByName;
            this.ResultInstrumentId = json.ResultInstrumentId;
            this.IsTestResultNotAllowToSaveOnValidationFailure = json.IsTestResultNotAllowToSaveOnValidationFailure;
            this.IsSameUserAllowedForSecondReview = json.IsSameUserAllowedForSecondReview;
            
            if (json.ResultValue && json.DataType == Enumeration.TestDataType.Numeric) {
                var compareResultValue = json.ResultValue.replace(/[^0-9.]/g, "");

                var otherLength = json.ResultValue.length - compareResultValue.length;
                if (otherLength && otherLength > 0) {
                    this.MaxLengthOfResult = json.MaxLengthOfResult + otherLength;
                }
            }
            this.ReferenceRangeCategoryJson =  json.ReferenceRangeCategoryJson;
            if (json.ReferenceRangeCategoryJsonList != undefined && json.ReferenceRangeCategoryJsonList != null) {
                for (let i = 0; i < json.ReferenceRangeCategoryJsonList.length; i++) {
                    this.ReferenceRangeCategoryJsonList.push(new ReferenceRangeCategoryModel(json.ReferenceRangeCategoryJsonList[i]));
                }
            }
            this.ReferenceRangeCategoryColor = json.ReferenceRangeCategoryColor;
            this.lineChartLabels =json.lineChartLabels;
            this.lineChartData=json.lineChartData;
            this.PanelId = json.PanelId;
            this.IsHideInTestResult = json.IsHideInTestResult;
            this.PanelTestAutoResultChildTestDetailsId = json.PanelTestAutoResultChildTestDetailsId;
            this.HtmlImageWidth = json.HtmlImageWidth;
            this.HtmlImageHeight = json.HtmlImageHeight;
            this.PanelTestAutoResultChildTestDetailsIdOld = json.PanelTestAutoResultChildTestDetailsId;
            this.IsAttachmentAvailable = json.IsAttachmentAvailable;
            this.SubHeading = json.SubHeading;
            this.IsResultValueBoldInReport = json.IsResultValueBoldInReport;
            this.IsResultValueBoldInReportOld = json.IsResultValueBoldInReport;
            this.IsManuallyAllowResultValueBoldInReport = json.IsManuallyAllowResultValueBoldInReport;
            this.InstrumentId = json.InstrumentId;
            this.SpecimenId = json.SpecimenId;
            this.PatientName = json.PatientName;
            this.AnalysisDate = json.AnalysisDate;
            this.AnalyteCode = json.AnalyteCode;
            this.LabId = json.LabId;
            this.ResultValueWithAdjustmentAndMultiplication = json.ResultValueWithAdjustmentAndMultiplication;
            this.IsAllResultValueRequiredForVE = json.IsAllResultValueRequiredForVE;
            this.IsConfirmationNotRequiredOnAutoTestResultChange = json.IsConfirmationNotRequiredOnAutoTestResultChange;
            this.IsCounsellingRequired = json.IsCounsellingRequired;
            this.SynonymsTestId = json.SynonymsTestId;
            this.LinearityLowValue = json.LinearityLowValue;
            this.LinearityHighValue = json.LinearityHighValue;

            
        }
    }
    public RegistrationResultDetailsId = 0;
    public TestId = 0;
    public NameToBePrinted = '';
    public ResultValue = '';
    public UnitName = '';
    public BRInterval = '';
    public BRILowValue = '';
    public BRIHighValue = '';

    public ResultFlag = '';

    public IsResultFlagSetManually = false;
    public IsHideInTestResult = false;
    public ResultStatus = Enumeration.RegistrationResultStatusType.New;
    public IsCritical = false;
    public NoOfDecimalPlaces = 0;
    public ReportRemarks = '';
    public IsRepeat = false;
    public InstResultValue = '';

    public IsAbnormal = false;
    public DataType = '';
    public MaxLengthOfResult: number;

    public IsAbnormalResultIfNotInList = false;
    public DontAllowOtherResult = false;
    public FirstValidatedBy = '';
    public FirstValidatedOn;
    public ValidatedBy = '';
    public ApprovedOn;
    public ApprovedBy = '';
    public ValidatedOn = null;

    @Exclude()
    public TestDropDownValues: Array<TestDropDownValuesModel> = [];

    public IsAutoApproved: boolean;
    public ACInstrumentId = 0;
    public ACDilutionFactor = '';

    public ModificationRemarks = '';
    public ValidationExpression = '';
    public ValidationMessage = '';
    public FormulaExpression = '';
    //public ServiceIdForOrganism = 0;
    //public OrganismId = 0;
    //public ServiceNameForOrganism = '';
    public OrganismServiceMappingsToAdd = new Array<OrganismServiceMappingModel>();

    public IsOrganismTest = false;
    public PanelTestAutoResultChildTestDetailsId = null;

    public MICResistant = null;
    public MICIntermediateFrom = null;
    public MICIntermediateTo = null;
    public MICSensitive = null;
    public ManualResistant = null;
    public ManualIntermediateFrom = null;
    public ManualIntermediateTo = null;
    public ManualSensitive = null;

    public MICResistantCal = null;
    public MICIntermediateFromCal = null;
    public MICIntermediateToCal = null;
    public MICSensitiveCal = null;
    public ManualResistantCal = null;
    public ManualIntermediateFromCal = null;
    public ManualIntermediateToCal = null;
    public ManualSensitiveCal = null;

    public MBMethod = 'M';
    public InstrumentFlag = '';
    public IsIgnoreFormulaExpression = false;
    public IsDisapproved = false;
    public IsSpecimenRejected = false;
    public RepeatACKStatus = Enumeration.RepeatACKStatusType.Not_Repeat;
    public IsReflexTest = false;

    public IsHistoResultLinkWithMaster = false;
    public HistoResultEntryType: Enumeration.HistoResultEntryType;
    public RegistrationServiceHistoDetailsId: number = null;

    public IsDisableControls: boolean = false;
    public DisableRemarks = '';

    public IsModificationRemarksCompulsory: boolean = true;
    public ManualInstrumentId: number = null;

    public LabId = '';

    public CriticalLowRemarks = '';
    public CriticalHighRemarks = '';
    public RepeatLowRemarks = '';
    public RepeatHighRemarks = '';
    public AbsurdLowRemarks = '';
    public AbsurdHighRemarks = '';

    public IsSingleSelectionOnly = false;
    public IsAntibioticTest = false;
    public DeltaCheckRegistrationResultDetailsId = 0;
    public PanelId;
    public IsAttachmentAvailable: boolean = false;
    public IsResultValueBoldInReport: any = null;
    @Exclude()
    public IsResultValueBoldInReportOld: any = null;


    ////// For Selecting a row ///////
    @Exclude()
    public isSelected: boolean = false;
    public DeltaCheckType: Enumeration.DeltaDDCheckType;
    public AbsoluteValue;
    public PercentageVariation;
    public DeltaCheckPreviousResult = '';
    public DeltaCheckPreviousRegDate = '';
    public DeltaViolationFlag: Enumeration.DeltaViolationType;
    public IsCounsellingRequired: boolean = false;

    @Exclude()
    public DeltaCheckCurrentRegistrationResultDetailsId = 0;

    @Exclude()
    public OldMaxLengthOfResult: number;

    @Exclude()
    public DeltaCheckAlertMessageShown: boolean = false;

    @Exclude()
    public IsManuallyAllowResultValueBoldInReport: boolean = false;
    /// critical value Model
    @Exclude()
    public registrationResultCriticalValueDetails: RegistrationResultCriticalValueDetailsModel = new RegistrationResultCriticalValueDetailsModel();

    @Exclude()
    public index = 0;

    @Exclude()
    public IsDoubleDataEntry = false;

    @Exclude()
    public IsTestResultDisplayToSecondUser = false;

    @Exclude()
    public TestReportRemarksList = [];

    @Exclude()
    public PanelTestAutoResultDetails: Array<PanelTestAutoResultDetailsModel> = [];

    @Exclude()
    public ResultValueOld;

    @Exclude()
    public ResultStatusOld;

    @Exclude()
    public ReportRemarksOld;

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
    public LinearityLowValue = 0;
    @Exclude()
    public LinearityHighValue = 0;
    @Exclude()
    public RepeatCount = 0;

    @Exclude()
    public InstrumentHistoryCount = 0;

    @Exclude()
    public ManualHistoryCount = 0;

    @Exclude()
    public ResultFlagOld = '';

    @Exclude()
    public PreviousResultValue = '';

    @Exclude()
    public IsAbnormalOld;

    public ServiceId = 0;

    @Exclude()
    public ServiceName = '';

    @Exclude()
    public CriticalRemarks = '';

    @Exclude()
    public SavedManualInstrumentId: number = null;

    @Exclude()
    public modificationRemarksList = [];

    @Exclude()
    public tinyMCEIdForResult = Math.random() * 100;

    @Exclude()
    public ResultSwitch = false;

    @Exclude()
    public ProcessingBranchId = 0;

    @Exclude()
    public TestName = '';

    @Exclude()
    public TestShortName = '';

    @Exclude()
    public InstrumentFlagWithDesc = '';

    @Exclude()
    public RRDSpecimenMasterId;

    @Exclude()
    public SpecimenName;
    public RegistrationBy;
    public RegistrationOn

    @Exclude()
    focus$ = new Subject<string>();

    @Exclude()
    search = (text$: Observable<string>) => {
        const debouncedText$ = text$.pipe(throttleTime(200), distinctUntilChanged());
        const inputFocus$ = this.focus$;

        return merge(debouncedText$, inputFocus$).pipe(
            map(term => (this.TestReportRemarksList?.filter(v => !term || (v.Id && v.Id.toLowerCase().indexOf(term.toLowerCase()) > -1) || v.Name.toLowerCase().indexOf(term.toLowerCase()) > -1)))
        );
    }

    @Exclude()
    formatter = (name: string) => name;

    @Exclude()
    focusModification$ = new Subject<string>();

    @Exclude()
    searchModification = (text$: Observable<string>) => {
        const debouncedText$ = text$.pipe(throttleTime(200), distinctUntilChanged());
        const inputFocus$ = this.focusModification$;

        return merge(debouncedText$, inputFocus$).pipe(
            map(term => (term === '' ? this.modificationRemarksList.map(t => t.Name)
                : this.modificationRemarksList.filter(v => v.Name.toLowerCase().indexOf(term.toLowerCase()) > -1).map(t => t.Name)).slice(0, 5))
        );
    }

    @Exclude()
    TestTagging = null;

    @Exclude()
    IsExpressionCalculated = false;

    @Exclude()
    public IsResultRequired = false;

    @Exclude()
    ServiceSeriesId = null;

    @Exclude()
    public ValidatedByName = '';

    @Exclude()
    public FirstValidatedByName = '';

    @Exclude()
    public ApprovedByName = '';

    @Exclude()
    public RegistrationByName = '';

    @Exclude()
    public ResultInstrumentId: number;

    @Exclude()
    public IsTestResultNotAllowToSaveOnValidationFailure = false;

    @Exclude()
    public TestCode = '';

    @Exclude()
    public ReferenceRangeCategoryColor ;

    @Exclude()
    public ReferenceRangeCategoryJson = '';

    @Exclude()
    public IsSameUserAllowedForSecondReview = false;

    public ReferenceRangeCategoryJsonList  = new Array<ReferenceRangeCategoryModel>();

    @Exclude()
    public IsDisableControlsForDoubleDataEntry: boolean = false;
    @Exclude()
    public lineChartLabels: Array<any> = [];
    @Exclude()
    public lineChartData: Array<any> = [];
    @Exclude()
    public IsTrendDataAvailable = false;
    
    @Exclude()
    public IsAutoTestResultFromPanelEntered = false;
    @Exclude()
    public IsPanelEnteredValueAgeOrGenderBasedCount = 0;
    @Exclude()
    public IsEditable: boolean;
    @Exclude()
    public DefaultValue: string;
    @Exclude()
    public IsRequired: boolean;
    @Exclude()
    public HelpDDValuesList = [];
    @Exclude()
    public IsAllowFromDDOnly: boolean;
    @Exclude()
    public IsHelpDDAvailable: boolean;
    @Exclude()
    public PanelTestAutoResultChildTestDetailsIdOld = '';
    

    
    @Exclude()
    public HtmlImageWidth: number;
    
    @Exclude()
    public HtmlImageHeight: number;

    @Exclude()
    public IsOtherValueDependedOnMe : boolean = false;

    @Exclude()
    public OtherDependedPanelTestAutoResultChildTestDetailsIds = [];

    @Exclude()
    public SubHeading: string;

    public AnalyteCode: string;

    public AnalysisDate;

    @Exclude()
    public PatientName;
    public InstrumentId;
    public SpecimenId: string = null;

    @Exclude()
    public IsTestResultAttachmentExpanded: boolean = false;
    
    @Exclude()
    public ResultValueWithAdjustmentAndMultiplication = '';

    @Exclude()
    public IsAllResultValueRequiredForVE: boolean = false;

    @Exclude()
    public ValueExpressionTestIds = [];
    
    @Exclude()
    public expression: string;

    @Exclude()
    public IsConfirmationNotRequiredOnAutoTestResultChange: boolean = false;

    @Exclude()
    public SynonymsTestId;

    
    @Exclude()
    public IsSelected = false;
    
    @Exclude()
    public IsExpandTrendChart = false
}
