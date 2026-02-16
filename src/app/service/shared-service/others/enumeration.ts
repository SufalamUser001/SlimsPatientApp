import { Injectable, EventEmitter } from '@angular/core';
import { AbstractControlDirective } from '@angular/forms';

export module Enumeration {
    export module Config {
        export enum UserConfig {
            UserConfiguration1 = 'UserConfiguration1',
            UserConfiguration2 = 'UserConfiguration1',
            UserConfiguration3 = 'UserConfiguration1'
        }

        export enum AppConfig {
            UserConfiguration1 = 'AppConfiguration1',
            UserConfiguration2 = 'AppConfiguration1',
            UserConfiguration3 = 'AppConfiguration1'
        }
    }

    export enum RegPatientNameCase {

        Title_Case = 'T',
        lower_case = 'L',
        UPPER_CASE = 'U'
    }

    export enum OutsourceReportBasedOn {
        Approval_On = 'A',
        Shipment_Out_All = 'S',
        Shipment_Out_Pending = 'P'
    }
    export enum AuditTrialSearchType {
        UserId = "U",
        LabId = "L",
    }
    export enum TrainingStatusType {
        UpComing = "U",
        History = "H",
    }
    export enum TATLikelyOvershootType {
        Approval = "A",
        Technician = "T",
    }

    export enum RefundApprovalStatus {
        New = "N",
        Validate = "V",
        Approved = "A",
        Rejected = "R",
    }

    export enum ManagerType {
        Zone = "Z",
        Region = "R",
        Territory = "T"
    }
    export enum IssueType {
        Individual = 'I',
        Quantity_Volume_Based = 'Q'
    }
    export enum BarcodeBasedOn {
        Purchase = 'P',
        Stock = 'S',
        //Add by Pratik Patel : Start 
        //STOCK / ISSUE UNIT
        Issue = 'I'
        //Add by Pratik Patel : End 
    }
    export enum UrgentClassification {
        AlwaysUrgent = 'U',
        Never = 'N',
        WhenUserSelect = 'W'
    }

    export enum ServiceType {
        Investigation = 'I',
        Charge = 'C',
        Visit = 'V'
    }
    export enum IntegrationReportUploadCriteria {
        Integration_Auto_Registered = "IAR",
        Manual_Registered_With_Reference_Id = "MRR"
    }

    export enum ReportType {
        PDF = 'P',
        EXCEL = 'E',
        SEARCH = 'S'
    }

    export enum DiscountReportType {
        LabId_Wise = 'LW',
        Discount_By_Summary = 'DBS',
        Branch_Summary = 'BS',
        Branch_Monthly_Summary = 'BMS',
        Category_Summary = 'CS',
        Category_Monthly_Summary = 'CMS',
        Branch_Category_Summary = 'BCS',
        Branch_Category_Monthly_Summary = 'BCMS',
        OutSource_Discount_Details = 'ODD',

    }

    export enum OrganismReportType {
        Patient = 'P',
        Organism = 'O',
        Antibiotics = 'A'
    }

    export enum RegistrationDynamicFields {
        ReferenceId1 = 'ReferenceId1',
        ReferenceId2 = 'ReferenceId2',
        PatientLocation = 'PatientLocation',
        AadharNo = 'AadharNo',
        DispatchAt = 'DispatchAt',
        Remarks = 'Remarks',
        PatientSource = 'PatientSource',
        Nationality = 'Nationality',
        PassportNo = 'PassportNo'
    }

    export enum MenuCaptionField {
        B2B = 'B2B',
        Mobile = 'Mobile',
        Phone = 'Phone',
        Title = 'Title',
        FirstName = 'FirstName',
        MiddleName = 'MiddleName',
        LastName = 'LastName',
        DOB = 'DOB',
        Age = 'Age',
        Gender = 'Gender',
        Email = 'Email',
        Address = 'Address',
        City = 'City',
        Area = 'Area',
        RefId1 = 'RefId1',
        RefId2 = 'RefId2',
        PatientLocation = 'PatientLocation',
        AadharNo = 'AadharNo',
        DispatchAt = 'DispatchAt',
        Remarks = 'Remarks',
        Post = 'Post',
        InformTo = 'InformTo',
        ReceiptRemarks = 'ReceiptRemarks',
        PatientSource = 'PatientSource',
        Employee = 'Employee',
        Clinic = 'Clinic',
        ReferredDoctor = 'ReferredDoctor',
        ManualReferredBy = 'ManualReferredBy',
        Nationality = 'Nationality',
        PassportNo = 'PassportNo',
        Height = 'Height',
        Weight = 'Weight',
        SRFID = 'SRFID',
        ICMRID = 'ICMRID',
        District = 'District',
        CRMNo = 'CRMNo',
        Zone = 'Zone',
        AarogyaSetuAppDownloaded = 'AarogyaSetuAppDownloaded',
        PatientOccupation = 'PatientOccupation',
        CovidVaccinated = 'CovidVaccinated',
        Vaccine = 'Vaccine',
        FirstDose = 'FirstDose',
        SecondDose = 'SecondDose',
        InsuranceAssociateCompany = 'InsuranceAssociateCompany',
        InsuranceNetwork = 'InsuranceNetwork',
        InsuranceCompany = 'InsuranceCompany',
        MaritalStatus = 'MaritalStatus',
        IntegrationOrderId = 'IntegrationOrderId',
        IntegrationPatientId = 'IntegrationPatientId',
        BranchId = 'BranchId',
        LabId = 'LabId',
        PreRegisteredLabId = 'PreRegisteredLabId',
        RegistrationDate = 'RegistrationDate',
        RegistrationBy = 'RegistrationBy',
    }

    export enum ReceiptBookStatus {
        Completed = 'C',
        Issued = 'I'
    }
    export enum GeneralReportType {
        Details = 'Details',
        Summary = 'Summary'
    }

    export enum InsuranceStatus {
        New = 'N',
        Pending = 'P',
        Submitted = 'S',
        Approved = 'A',
        Partial_Approved = 'T',
        Partial_Amount_Approved = 'V',
        Rejected = 'R',
        Re_Submit = 'D',
    }

    export enum GeneralReportDetailType {
        Vertical = 'Vertical',
        Horizontal = 'Horizontal'
    }
    export enum GeneralExcelReportType {
        Details = 'Details',
        Summary = 'Summary',
        Summary_Specimen_Last_Location_Include = 'Summary(With Last Specimen Location)'
    }
    export enum GeneralExcelDetailType {
        Horizontal = 'Horizontal',
        Vertical = 'Vertical',
        Vertical_Specimen_Last_Location_Include = 'Vertical(With Last Specimen Location)'
    }
    export enum InvoiceReportDetailType {
        Process_Invoice = 'Process Invoice',
        Do_Not_Process_Invoice = 'Do Not Process Invoice',
        All = 'All'
    }
    export enum InvoiceReportType {
        Process_Invoice = 'P',
        Do_Not_Process_Invoice = 'DP',
        All = 'A'
    }

    export enum InvoiceType {
        Branch_Transfer = 'BT',
        B2B = 'B'
    }


    export enum TestResultExcelField {
        Branch_Name = "BranchName",
        Registration_Date = "RegistrationDate",
        Registration_DateTime = "RDateTime",
        Patient_Name = "PatientName",
        Gender = "Gender",
        Age = "Age",
        Birth_Date = "BirthDate",
        B2B_Name = "B2BName",
        Doctor_Name = "DoctorName",
        Doctor_Name_With_Communication_Person = "DoctorWithCommunicationPerson",
        RefId1 = "RefId1",
        RefId2 = "RefId2",
        Remarks = "Remarks",
        //Added on 4-Sep-2020
        Project_Name = "ProjectName",
        Visit_Name = "VisitName",
        Site_Name = "SiteName",
        Subject_No = "SubjectNo",
        Patient_Location_Name = "PatientLocationName",
        Patient_Source_Name = "PatientSourceName",
        Receipt_Remarks = "ReceiptRemarks",
        Dispatch_At = "DispatchAt",
        Volunteer_Registration_No = "VolunteerRegistrationNo",
        Manual_Referred_By = "ManualReferredBy",
        Mobile_No = "Mobile",
        Phone_No = "Phone",
        Email_Id = "EmailId",
        Address = "Address",
        Area_Name = "AreaName",
        City_Name = "CityName",
        District_Name = "DistrictName",
        Country_Name = "CountryName",
        Aadhar_No = "AadharNo",
        Passport_No = "PassportNo",
        Is_To_be_Informed = "IsTobeInformed",
        Is_To_be_posted = "IsTobeposted",
        Informed_To = "InformedTo",
        Height = "Height",
        Weight = "Weight",
        Collection_Date = "CollectionDate",
        Received_Date = "ReceivedDate",
        Specimen_Id = "SpecimenId",
        Specimen_Name = "SpecimenName",
        Approved_DateTime = "ApprovedOn",
        Approved_By = "ApprovedBy",
        Validated_DateTime = "ValidatedOn",
        Validated_By = "ValidatedBy",
        SRFID = "SRFID",
        Unit_Name = "UnitName",
        Method_Name = "MethodName",
        Department_Name = "DepartmentName",
        SubDepartment_Name = "SubDepartmentName",
        BRIInterval = "BRInterval",
        BRILowValue = "BRILowValue",
        BRIHighValue = "BRIHighValue",
        ICMRID = "ICMRID",
        CRM_No = "CRMNo",
        Zone = "Zone",
        Nationality_Name = "NationalityName",
        Aarogya_Setu_App_Downloaded = "IsAarogyaSetuAppDownloaded",
        Covid_Vaccinated = "IsCovidVaccinated",
        Vaccine_Type = "VaccineType",
        Vaccine_First_DoseDate = "VaccineFirstDoseDate",
        Vaccine_Second_DoseDate = "VaccineSecondDoseDate",
        Patient_Occupation = "PatientOccupation",
        Bleeding_Time = "BleedingTime",
        Clotting_Time = "ClottingTime",
        Mantoux_Value = "MantouxValue",
        Clinic_Name = "ClinicName",
        Insurance_Type = "InsuranceType",
        Insurance_Company_Name = "InsuranceCompanyName",
        Insurance_Network_Name = "InsuranceNetworkName",
        Insurance_Associate_Company_Name = "InsuranceAssociateCompanyName",
        PatientId = "PatientId",
        MembershipId = "MembershipId"

    }

    export enum StoreType {
        Parent = 'P',
        Child = 'C',
        All = 'A'
    }

    export enum PurchaseRequisitionReportStatus {
        New = 'N',
        Validate = 'V',
        Level_1 = "L1",
        Level_2 = "L2",
        Level_3 = "L3",
        Approved = "A",
        PO_Prepared = "POPrepared",
        PO_Cancelled = "POCancelled",
        Settled = "S",
        Partial_Settle = "P",
    }

    export enum PurchaseRequisitionStatus {
        New = 'N',
        Level_1 = "L1",
        Level_2 = "L2",
        Level_3 = "L3",
        Validate = 'V',
        Approved = 'A'
    }

    export enum POStatus {
        New = 'N',
        Validate = 'V',
        Approved = 'A'
    }

    export enum ResultStatus {
        New = 'N',
        Tested = 'T',
        Approved = 'A'
    }

    export enum ValidateStatus {
        Pending_Validate = 'P',
        Validated = 'V',
        Approved = 'A',
        Pending_Acknowledge = 'AK',
        Acknowledge_Approval = 'AKA',

    }

    export enum POApprovalStatus {
        Pending_Approval = 'PA',
        Approved = 'AP',
        Pending_Acknowledge = 'AK',
        Acknowledge_Approval = 'AKA',
        All = 'AL',
    }
    export enum POPreClosureStatus {
        Approved_Purchase_Order = 'A',
        Pre_Closed_Purchase_Order = 'PC',
    }

    export enum ApprovalStatus {
        Pending_Approval = 'P',
        Approved = 'A',
        All = 'ALL'
    }

    export enum DocumentApprovalStatus {
        New = 'N',
        Approved = 'A',
        Rejected = 'R'
    }

    export enum PurchaseInvoiceVoucherStatus {
        All = 'A',
        Pending = 'P',
        Invoice_Booked = 'IB'
    }

    export enum ReceiptBookPersonType {
        Collection = 'C',
        Pick_Up_Person = 'P'
    }

    export enum SMSEmailType {
        // Max length in EmailDetails and SMSDetails is set to 25.
        Anniversary = 1,
        BackuoAlert = 2,
        Birthday = 3,
        Invoice = 4,
        Login = 5,
        MIS = 6,
        Quotation = 7,
        Registration = 8,
        ReportReady = 9,
        TestResult = 10,
        VisitPatient = 11,
        VisitPhlebo = 12,
    }

    export enum ShipmentContain {
        Sample = 'Sample',
        Report = 'Report',
        Invoice = 'Invoice',
        Material = 'Material',
        Other = 'Other'
    }

    export enum B2BDocumentStatus {
        All = "All",
        Active = "Active",
        Disabled = "Disabled",
        Expired = "Expired",
        Expired_Within = "ExpiredWithin"
    }

    export enum ShipmentMode {
        By_bus = 'Bybus',
        By_Person = 'ByPerson',
        Courier = 'Courier',
        Other = 'Other',
    }

    export enum ShipmentType {
        Sample_outsource_to_branch_laboratory = 'B',
        Sample_outsource_to_other_laboratory = 'O',
    }

    export enum ServiceCount {
        Branch_Wise = 'B',
        System_Wise = 'S',
    }

    export enum ServiceReportCountType {
        Reg_Service = 'R',
        Service = 'S',
        Parameter = 'P',
    }

    export enum ServiceReportBranchGroupType {
        Registration_Branch = 'R',
        Processing_Branch = 'P',
        Registration_Branch_And_Processing_Branch = 'RP',
        ALL = 'A',
    }

    export enum ServiceReportFormatType {
        General = 'G',
        Date = 'D'
    }

    export enum ShipmentStatus {
        New = 'N',
        Send = 'S',
        Cancelled = 'C',
        Partial_Received = 'P',
        Received = 'R'
    }
    export enum InvoiceStatus {
        Processed = 'P',
        Released = 'R'
    }

    export enum ProcessingType {
        Local = 'L',
        Branch_Transfer = 'B',
        OutSource = 'O'
    }

    export enum OutsourceProcessingType {
        All = 'A',
        Local = 'L',
        OutSource = 'O'
    }

    export enum ShipmentFrequency {
        Daily = 'Daily',
        Monthly = 'Monthly',
    }

    export enum InstrumentCommunicationPersonType {
        Sales = 'S',
        Technical_Support = 'T',
        Reagent_Supply = 'R'
    }
    export enum NPCStatus {
        New = 'N',
        Partial = 'P',
        Complete = 'C'
    }

    export enum InstrumentIQOQPQType {
        IQ = 'IQ',
        OQ = 'OQ',
        PQ = 'PQ'
    }

    export enum ProblemSampleNotificationAttachmentType {
        Problem = 'P',
        Resolve = 'R'
    }

    export enum BithdayAnniversaryPersonTypeStatus {
        B2B = 'B',
        Doctor = 'D',
        Branch = 'Br'
    }

    export enum BithdayOrAnniversaryStatus {
        Birtday = 'B',
        Anniversary = 'A'
    }

    export enum PhlebotomyStatus {
        Pending = 'P',
        Completed = 'C'
    }

    export enum SpecimenStatus {
        Pending = 'P',
        Collected = 'C',
        Received = 'R',
        Will_Not_Receive = 'W'
    }

    export enum VoucherReferenceType {
        Advance = 'Advance',
        Against_Reference = 'AgainstReference',
        New_Reference = 'NewReference',
        On_Account = 'Account'
    }

    export enum LogbookFieldType {
        Textbox = 'Textbox',
        Multiline_Textbox = 'Multiline',
        Switch = 'Switch',
        Date = 'Date',
        DateTime = 'DateTime',
        DropDown = 'DropDown',
        Attachment = 'Attachment'
    }

    export enum LogbookSearchFieldType {
        Textbox = 'Textbox',
        Switch = 'Switch',
        DateTime = 'DateTime',
    }

    export enum ConfigurationDataType {
        DD_Static = 'DD_Static',
        BOOL = 'BOOL',
        DD_Dynamic = 'DD_Dynamic',
        TXT = 'TXT',
        NUM = 'NUM',
    }

    export enum ReflexConditionType {
        Less_Than = "L",
        Greater_Than = "G",
        Equal_To = "E",
        Between = "B"
    }
    export enum ConditionType {
        Less_Than = "L",
        Greater_Than = "G",
        Equal_To = "E",
        Between = "B"
    }

    export enum ReflexAdditionType {
        Test = 'T',
        Service = 'S'
    }
    export enum LogbookFieldDataType {
        Numeric = 'Numeric',
        AlphaNumeric = 'AlphaNumeric',
    }

    export enum LogbookDropdownSource {
        Static = 'Static',
        User = 'User',
    }

    export enum Eligibilities {
        Double_Marker = 'DoubleMarker',
        Triple_Marker = 'TripleMarker',
    }

    export enum PaymentMode {
        Cash = 'Cash',
        Cheque = 'Cheque',
        NEFT = 'NEFT',
        RTGS = 'RTGS',
        Credit_Card = 'CreditCard',
        Net_Banking = 'NetBanking',
    }

    export enum MenuTheme {
        MENUBGCOLOR = 'MENUBGCOLOR',
        ISCOMPACTMENU = 'ISCOMPACTMENU',
        MENUWIDTH = 'MENUWIDTH',
        ISMENUIMAGEVISIBLE = 'ISMENUIMAGEVISIBLE',
        TESTRESULTCARDTHEME = 'TESTRESULTCARDTHEME',
        MENUBGIMAGE = 'MENUBGIMAGE',
        DEFAULTBRANCH = 'DEFAULTBRANCH',
    }
    export enum ServiceTestingType {
        Final = 'F',
        Revised = 'R',
        Interim = 'I',
    }

    export enum ConfigCodeParameter {
        MENUBGCOLOR = 'MENUBGCOLOR',
        ISCOMPACTMENU = 'ISCOMPACTMENU',
        MENUWIDTH = 'MENUWIDTH',
        ISMENUIMAGEVISIBLE = 'ISMENUIMAGEVISIBLE',
        TESTRESULTCARDTHEME = 'TESTRESULTCARDTHEME',
        ISRESULTENTRYSCREENDEFAULNOTMAXIMIZE = 'ISRESULTENTRYSCREENDEFAULNOTMAXIMIZE',
        TESTRESULTVALUEAUTOSELECT = 'TESTRESULTVALUEAUTOSELECT',
        LABIDCLICKSHOWSELECTEDDEPARTMENTSERVICES = 'LABIDCLICKSHOWSELECTEDDEPARTMENTSERVICES',
        ISTESTRESULTAPPROVALDEFAULTEXPANDED = 'ISTESTRESULTAPPROVALDEFAULTEXPANDED',
        MENUBGIMAGE = 'MENUBGIMAGE',
        DEFAULTBRANCH = 'DEFAULTBRANCH',
        DEFAULTCOUNTRYCALLINGCODE = 'DEFAULTCOUNTRYCALLINGCODE',
        SRTRTADEFAULTVIEW = 'SRTRTADEFAULTVIEW',
        TESTRESULTPROCESSINGTYPEDEFAULTSELECT = 'TESTRESULTPROCESSINGTYPEDEFAULTSELECT',
        DEFAULTDEPARTMENT = 'DEFAULTDEPARTMENT',
        DEFAULTSCANOUTFROMDEPARTMENT = 'DEFAULTSCANOUTFROMDEPARTMENT',
        ISHISTOASSIGNEDTOMEDEFAULTSELECTED = 'ISHISTOASSIGNEDTOMEDEFAULTSELECTED',
        DEFAULTSTORELOCATION = 'DEFAULTSTORELOCATION',
        PAGESIZE = 'PAGESIZE',
        SHORTCUTMENU1 = 'SHORTCUTMENU1',
        SHORTCUTMENU2 = 'SHORTCUTMENU2',
        SHORTCUTMENU3 = 'SHORTCUTMENU3',
        SHORTCUTMENU4 = 'SHORTCUTMENU4',
        SHORTCUTMENU5 = 'SHORTCUTMENU5',
        SHORTCUTMENU6 = 'SHORTCUTMENU6',
        SHORTCUTMENU7 = 'SHORTCUTMENU7',
        SHORTCUTMENU8 = 'SHORTCUTMENU8',
        SHORTCUTMENU9 = 'SHORTCUTMENU9',
        SHORTCUTMENU10 = 'SHORTCUTMENU10',
        SLIMSUTILITYPORT = 'SLIMSUTILITYPORT',
        ISOUTSOURCEDEFAULTSELECTED = 'ISOUTSOURCEDEFAULTSELECTED',
        TELEPHONYCLICKTOCALLURL = 'TELEPHONYCLICKTOCALLURL',
        DEFAULTCOUNTER = 'DEFAULTCOUNTER',
        DEFAULTFILTEREXPENDED = 'DEFAULTFILTEREXPENDED',
        REGISTRATIONANDREPORTDASHBOARDDATECOMPAREWITH = 'REGISTRATIONANDREPORTDASHBOARDDATECOMPAREWITH',
        ISHISTOTESTRESULTDEFAULTCOLLAPSED = 'ISHISTOTESTRESULTDEFAULTCOLLAPSED',
        ISALLOWHISTOAUTOSAVE = 'ISALLOWHISTOAUTOSAVE',
        HISTOAUTOSAVEDURATION = 'HISTOAUTOSAVEDURATION'
    }


    export enum OutSourcedDefaultSelectedType {
        DEFAULT = 'Default',
        YES = 'Yes',
        NO = 'No',
    }

    export enum B2BCategory {
        CUSTOMER = 'C',
        VENDOR = 'V',
        BOTH = 'B',
    }
    export enum TemperatureType {
        HIGH = 'H',
        NORMAL = 'N',
        LOW = 'L',
    }


    export enum Accreditation {
        CAP = 'C',
        NABL = 'N',
    }

    export enum Days {
        Sunday,
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday
    }

    export enum VisitRouteStatus {
        New = 'N',
        Assigned = 'AS',
        Accepted = 'A',
        Started = 'S',
        Reached = 'RE',
        Rejected = 'R',
        Completed = 'C',
        Cancelled = 'CN',
    }

    export enum AppointmentStatus {
        New = 'N',
        Accepted = 'A',
        Rejected = 'R',
        Completed = 'C',
        Cancelled = 'CN',
    }


    export enum SmartReportType {
        Nirogyan = 'N',
        Care = 'C',
        Reporting_Server = 'R',
    }

    export enum VisitRouteSearchStatus {
        ALL = 'ALL',
        Pending = 'P',
        New = 'N',
        Assigned = 'AS',
        Accepted = 'A',
        Started = 'S',
        Reached = 'RE',
        Rejected = 'R',
        Completed = 'C',
        Cancelled = 'CN',
        Delayed = 'D',
        Modified = 'M',
        SampleNotRegistered = 'SNR',
        BookedByPatient = 'BP',
        ConfirmationPending = 'CP',
    }

    export enum DiscountType {
        Amount = 'A',
        Percentage = 'P',
    }

    export enum RegistrationDiscountType {
        Percentage_Based = 'P',
        Amount_Based = 'A',
        Service_Based = 'S',
    }

    export enum RegistrationType {
        Routine = 'R',
        Clinical_Trial = 'C',
    }

    export enum LocationType {
        Relay = 'R',
        B2B = 'B',
        Doctor = 'D',
        GeoLocation = 'G',
        Branch = 'BR',
    }

    export enum PhleboPickup {
        Phlebo = 'PH',
        Pickup = 'PI',
        All = 'ALL',
    }

    export enum SMSDesignTemplateGroupName {
        General = 'G',
        Registration = 'R',
        Sample_Pickup_Collection = 'SP',
        Visit = 'V',
        Test_Result = 'TR',
        User_Creation = 'UC',
        Quotation = 'Q',
        Finance = 'F',
        QMS = 'QMS',
        Alert = 'Alert',
        Inventory = "I",

    }

    export enum EmailDesignTemplateGroupName {
        General = 'G',
        Registration = 'R',
        Sample_Pickup_Collection = 'SP',
        Visit = 'V',
        Test_Result = 'TR',
        User_Creation = 'UC',
        Quotation = 'Q',
        Finance = 'F',
        QMS = 'QMS',
        Alert = 'Alert',
        Inventory = "I",
    }

    export enum TestDataType {
        Numeric = 'N',
        Alpha_Numeric = 'A',
    }
    export enum BDOrderStatusType {
        New = 'N',
        Partial = 'P',
        Full = 'F',
    }
    export enum CancerReportType {
        Diagnosis_Summary = 'DS',
        Diagnosis_Specimen_Wise_Summary = 'DSS',
        Patient_Details = 'PD',
        Organ_Summary = 'OS',
        Diagnosis_Organ_Wise_Summary = 'DOS',
    }

    export enum RegistrationResultStatusType {
        New = 'N',
        Approved = 'A',
        Tested = 'T',
        First_Validated = 'F',
    }

    export enum RegistrationResultDisplayStatusType {
        New = 'N',
        Approved = 'A',
        Tested = 'T',
        First_Validated = 'F',
        Ordered = 'O',
        Approval_Pending = 'AP',
        Analysis = 'AN',
    }

    export enum RegistrationResultFlagType {
        Normal = 'N',
        Abnormal = 'A',
        High = 'H',
        Low = 'L',
        Resistance = 'R',
        Intermidiate = 'I',
        Sensitive = 'S',
    }

    export enum TestResultStatus {
        Not_Tested = 'N',
        Tested = 'T',
        Do_Not_Performed = 'D'
    }

    export enum TestMethodType {
        Instrument = 'I',
        Manual = 'M'
    }

    export enum AlertType {
        TATOvershoot,
        VisitDelayed,
        VisitPendingAsignment,
        DiscountApprovalPending,
        Reminder,
        TATLikelyOvershoootTechnician,
        TATLikelyOvershoootApproval,
        OutsourceServiceOvershootPendingReport,
        CalibrationOverdue,
        PreventiveMaintenanceOverdue,
        CalibrationSchedulePending,
        PreventiveMaintenanceSchedulePending
    }

    export enum B2BPortalDashboardComponentType {
        Patient_Registered = 'PatientRegistered',
        Report_Ready = 'ReportReady',
        Pending_Reports = 'PendingReports',
        Pending_Resolution = 'PendingResolution',
        Ledger_Amount = 'LedgerAmount',
        Closing_Balance_Amount = 'ClosingBalanceAmount',
        Unbilled_Amount = 'UnbilledAmount',
        Creadit_Days = 'CreaditDays',
        Credit_Amount = 'CreditAmount',
        News_Board = 'NewsBoard',
    }

    export enum DashboardComponentType {
        Patient_Registered = 'PatientRegistered',
        Services_Registered = 'ServicesRegistered',
        Approval_Pending = 'ApprovalPending',
        Home_Visits = 'HomeVisits',
        Gross_Amount = 'GrossAmount',
        Discount_Amount = 'DiscountAmount',
        Net_Amount = 'NetAmount',
        Received_Amount = 'ReceivedAmount',

        Daily_Patient_Count = 'DailyPatientCount',
        Daily_Revenue = 'DailyRevenue',

        Department_Patient_Count = 'DepartmentSampleCount',
        Department_Revenue = 'DepartmentRevenue',
        Closing_Balance_Amount = 'ClosingBalanceAmount',
        Credit_Limit='CreditLimit'
    }

    export enum RegistrationServiceStatusType {
        New = 'N',
        Approved = 'A',
        Tested = 'T',
        Partial_Tested = 'PT',
        Partial_Approved = 'PA',
        Partial_Approved_And_Partial_Tested = 'TA'
    }

    export enum IcmrNoStatus {
        ICMR_NO_Available = 'A',
        ICMR_NO_NOT_Available = 'N',
    }

    export enum RegistrationServiceStatusTypeForFilter {
        New = 'N',
        Approved = 'A',
        Tested = 'T',
        Partial_Tested = 'PT',
        Partial_Approved = 'PA',
        Partial_Approved_And_Partial_Tested = 'TA',
        Approval_Pending = 'AP',
        Testing_Pending = 'TP',
        Ready_For_Full_Approval = 'RFA',
        Repeat_Requested = 'RR',
        Hold = 'H',
        Second_Level_Testing_Pending = 'STP',
        Not_Printed = 'NP',
        Partial_Printed = 'PP',
        Printed = 'P',
        Not_Dispatched = 'ND',
        Partial_Dispatched = 'PD',
        Dispatched = 'D',
        Printed_Not_Dispatched = 'PND',
        Informed = 'I',
        Not_Informed = 'NI',
        Not_Approved = 'NA',
        Service_Document_Pending = 'SP'
    }

    export enum RegistrationServiceStatusTypeForFilterLevel1 {
        First_Level_Testing_Pending = 'FTP',
        Second_Level_Testing_Pending = 'STP',
    }


    export enum InvoiceDiscountSlabB2BType {
        All = 'A',
        Defined = 'D',
        Not_Defined = 'N',
    }

    export enum DefineNotDefine {
        Defined = 'D',
        Not_Defined = 'N'
    }

    export enum AnalysisType {
        Summary = 'S',
        Detailed = 'D',
        BusinessSummary = 'BS',
        BusinessDetails = 'BD',
    }


    export enum VisitRouteAnalysisStatus {
        On_Time = 'Ontime',
        Delayed = 'Delayed',
        Early = 'Early',
        Not_Visited = 'NotVisited',
        Problematic = 'Problematic',
        Distance_Deviation = 'Distance_Deviation'
        ////TotalCount
        //Total_Count = 'TotalCount',

        //// On Time Percentage,
        //On_Time_Percentage = 'OnTimePer',
        ////Delayed Percentage,
        //Delayed_Percentage = 'DelayedPer',
        ////Early Percentage
        //Early_Percentage = 'EarlyPer',
        ////NotVisited Percentage
        //Not_Visited_Percentage = 'NotVisitedPer',
    }

    export enum LogInOutStatus {
        All = '',
        Log_In = 'Login',
        Log_Out = 'Logout',
        Failed = 'Failed',
        Unauthorized = 'Unauthorized',
    }
    export enum UserActivityTransactionType {
        All = '',
        Inserted = 'I',
        Updated = 'U',
        Activated = 'A',
        Deactivated = 'D',
        Read = 'R',
    }

    export enum OutsourceTRFParameter {
        LabId = 'LabId',
        Aadhar = 'Aadhar',
        Address = 'Address',
        Area = 'Area',
        B2B = 'B2B',
        Birth_Date = 'BirthDate',
        Branch = 'Branch',
        City = 'City',
        Dispatch = 'Dispatch',
        Email = 'Email',
        First_Name = 'FirstName',
        Gender = 'Gender',
        Last_Name = 'LastName',
        Middle_Name = 'MiddleName',
        Mobile = 'Mobile',
        Patient_Location = 'PatientLocation',
        Phone = 'Phone',
        Patient_Name = 'PatientName',
        Patient_Age = 'PatientAge',
        Registration_Date = 'RegistrationDate',
        Reference_Id_1 = 'ReferenceId_1',
        Reference_Id_2 = 'ReferenceId_2',
        Referred_By = 'ReferredBy',
        Remarks = 'Remarks',
        Title = 'Title',
        Specimen = "Specimen",
        Services = "Services",
        Service_1 = "Service_1",
        Service_2 = "Service_2",
        Service_3 = "Service_3",
        Service_4 = "Service_4",
        Service_5 = "Service_5",
        Service_6 = "Service_6",
        Service_7 = "Service_7",
        Service_8 = "Service_8",
        Service_9 = "Service_9",
        Service_10 = "Service_10",
        Service_11 = "Service_11",
        Service_12 = "Service_12",
        Service_13 = "Service_13",
        Service_14 = "Service_14",
        Service_15 = "Service_15",
        Service_16 = "Service_16",
        Service_18 = "Service_18",
        Service_19 = "Service_19",
        Service_20 = "Service_20",
        Branch_Contact_No = "BranchContactNo",
        Branch_Email = "BranchEmail"
    }
    export enum ConsentFormParameter {
        Aadhar = 'Aadhar',
        Address = 'Address',
        Area = 'Area',
        B2B = 'B2B',
        Birth_Date = 'BirthDate',
        Branch = 'Branch',
        City = 'City',
        Dispatch = 'Dispatch',
        Email = 'Email',
        First_Name = 'FirstName',
        Gender = 'Gender',
        Last_Name = 'LastName',
        Middle_Name = 'MiddleName',
        Mobile = 'Mobile',
        Patient_Location = 'PatientLocation',
        Phone = 'Phone',
        Registration_Date = 'RegistrationDate',
        Reference_Id_1 = 'ReferenceId_1',
        Reference_Id_2 = 'ReferenceId_2',
        Referred_By = 'ReferredBy',
        Remarks = 'Remarks',
        Title = 'Title',
        Patient_Name = 'PatientName',
        Patient_Age = 'PatientAge',
        Branch_Address = 'BranchAddress',
        Height = 'Height',
        Weight = 'Weight',
        Current_DateTime = 'CurrentDateTime',
        LabId = 'LabId',
        SpecimenType = 'SpecimenType',
        Registration_DateTime = "RegistrationDateTime",
        Service_Name = "serviceName",
        Branch_Contact_No = "BranchContactNo",
        Branch_Email = "BranchEmail",
        Custom = "Custom"
    }

    export enum RegistrationPatientType {
        B2B = 'B2B',
        B2C = 'B2C',
        Both = 'Both',
        B2B_Cash = 'B2B_Cash'
    }

    export enum NewRegistrationPatientType {
        B2B = 'B2B',
        B2C = 'B2C',
        Both = 'Both',
        B2B_Cash = 'B2B_Cash',
        Inside_Patient = 'IP',
        Outside_Patient = 'OP',
        Insurance = 'I',
        TPA = 'T',
        Insurance_TPA = 'IT',
    }

    export enum InsuranceType {
        Cash = 'C',
        Insurance = 'I',
        TPA = 'T'
    }

    export enum DocumentStorageConfigurationType {
        AWS_Server = 'A',
        DataBase = 'D',
        Folder = 'F'
    }

    export enum AvailablilityStatusType {
        Available = 'Available',
        Break = 'Break',
        Off = 'Off',
        On = 'On',
    }

    // export enum OrganismReferenceRangeMethod {
    //     Manual = 'Manual',
    //     MIC = 'MIC',
    // }

    export enum OrganismDrugClassification {
        A = 'A',
        B = 'B',
        C = 'C',
        F = 'F',
        O = 'O',
        U = 'U',
    }

    export enum TypeOfPeriod {
        Year = 'Y',
        Month = 'M',
        Day = 'D',
    }

    export enum B2BDoctorSMSEmailType {
        Auto_Result_SMS = 'AutoResultSMS',
        Auto_Result_Email = 'AutoResultEmail',
        Auto_Logistic_SMS = 'AutoLogisticSMS',
        Auto_Delayed_Report_SMS = 'AutoDelayedReportSMS',
        Auto_Registration_SMS = 'AutoRegistrationSMS',
        Auto_Birthday_Wishes_SMS = 'AutoBirthdayWishesSMS',
        Auto_Anniversary_Wishes_SMS = 'AutoAnniversaryWishesSMS',
        Account_Voucher_Email = 'AccountVoucherEmail',
        Account_Voucher_SMS = 'AccountVoucherSMS',
        Invoice_SMS = 'InvoiceSMS',
        Invoice_Email = 'InvoiceEmail',
    }

    export enum UserType {
        Laboratory = 'L',
        B2B = 'B',
        Doctor = 'D',
    }

    export enum AlertMessageType {
        Green = 'green',
        LightBlue = 'lightBlue',
        Orange = 'orange',
        Red = 'red',
        Blue = 'blue',
        Gray = 'gray',
    }

    export enum CustomerSubType {
        Normal_B2B = 'N',
        Parent_B2B = 'P',
        Sub_B2B = 'S',
    }

    export enum CustomerSubTypeSearch {
        Normal_B2B = 'N',
        Parent_B2B = 'P',
        Sub_B2B = 'S',

        Normal_Parent_B2B = 'NP',
        Normal_Sub_B2B = 'NS',
        Parent_Sub_B2B = 'PS',
        All = 'A'
    }


    export enum HistoResultEntryType {
        Specimen = 'S',
        Grossing = 'G',
        Diagnosis = 'D',
        Microscopic_Examination = 'M',
        Footer = 'F',
        Clinical_History = 'C',
        IHC_Details = 'I',
        Comment = 'N'
    }

    export enum RegistrationDocumentTRFType {
        Registration = 'Registration',
        PreRegistration = 'PreRegistration',
        Visit = 'Visit',
        Token = 'Token',
        TRFIdentification = 'TRFIdentification',

    }

    export enum PreRegistrationType {
        Shipment_In = 'Shipment In',
        Route = 'Route',
        Routine = 'R',
        Clinical_trial = 'C',
        PreRegistration_By_QRCode = 'P',
        Third_Party_PreRegistration = 'T',
        Manual_PreRegistration = 'M',
    }

    export enum ServiceWorkflow {
        Routine = 'R',
        Histopathology = 'H',
        Cytopathology = 'C',
        Micro_Sensitivity = 'M',
        RTF = 'F',
        HTML = 'L'
    }

    export enum HistoStatus {
        New = 'N',
        Accessioning_Completed = 'A',
        Grossing_Completed = 'G',
        Embedding_Completed = 'E',
        Cutting_Completed = 'C',
        Staining_Completed = 'ST',
        Scanning_Completed = 'SC',
        Assignment_Selection_By_Histopathology = 'AS',
        Microscopic_Examination_Completed = 'ME',
        First_Approval_Completed = 'FA',
        Second_Approval_Completed = 'SA',
    }

    export enum RegistrationServiceTaskStatus {
        New_Task = 'N',
        Acceepted__Task = 'A',
    }

    export enum HistoStatusDisplay {
        New = 'N',
        Accessioning_Completed = 'A',
        Grossing_Completed = 'G',
        Tissue_Processing_Started = 'TPS',
        Tissue_Processing_Completed = 'TPC',
        Embedding_Completed = 'E',
        Slide_Preparation_Completed = 'SPC',
        Cutting_Completed = 'C',
        Staining_Completed = 'ST',
        Mounting_Completed = 'MC',
        Scanning_Completed = 'SC',
        Assignment_Selection_By_Histopathology = 'AS',
        My_First_Microscopic_Examination_Pending = 'MFP',
        My_Second_Review_Microscopic_Examination_Pending = 'MSP',
        Microscopic_Examination_Pending = 'MP',
        First_Approval_Completed = 'FA',
        Second_Approval_Completed = 'SA',
        Microscopic_Examination_Completed = 'ME',
        Approved = 'O',
        Internal_HandOver_Completed = 'HC',
        Internal_HandOver_Pending = 'HP',
        Patient_HandOver_Completed = 'PHC',
        Patient_HandOver_Pending = 'PHP',
    }

    export enum GrossingProcessingType {
        Routine = 'Routine',
        Rapid = 'Rapid',
    }

    export enum HistoProcess {
        TissueProcessingStart = 'TissueProcessingStart',
        TissueProcessingComplete = 'TissueProcessingComplete',
        Embedding = 'Embedding',
        CuttingAndSlidePreparation = 'CuttingAndSlidePreparation',
        Staining = 'Staining',
        Mounting = 'Mounting',
        Scanning = 'Scanning',
        AssignmentSelection = 'AssignmentSelection',
    }

    export enum ReportControlType {
        Fixed_Text = 'F',
        Dynamic_Text = 'D',
        Image = 'I',
        Line = 'L',
        Rectangle = 'R',
        Repeat = 'E'
    }

    export enum ReportDesignType {
        Body = 'B',
        Header = 'H',
        Footer = 'F'

    }

    export enum ExpressionType {
        Hidden = 'H',
        Data = 'D',
        Font_Color = 'F',
        Backgroung_Color = 'B',
    }

    export enum RDLCImageSizing {
        AutoSize = 'AutoSize',
        Fit = 'Fit',
        Fit_Proportional = 'FitProportional',
        Clip = 'Clip'
    }

    export enum TextAlignment {
        Left = 'Left',
        Center = 'Center',
        Right = 'Right',
    }

    export enum FontCase {
        Normal = 'N',
        Upper = 'U',
        Lower = 'L',
    }

    export enum ReportSingleVariable {

        Aadhar_No = 'AadharNo',
        Address = 'Address',
        Approved_By = 'ApprovedBy',
        Approved_Date = 'ApprovedDate',
        Approved_On = 'ApprovedOn',
        Area_Name = 'AreaName',
        B2B_Address = 'B2BAddress',
        B2B_Code = 'B2BCode',
        B2B_Name = 'B2BName',
        B2B_Received_Sample_Report_Remarks = 'B2BReceivedSampleReportRemarks',
        Barcode_Image = 'BarcodeImage',
        QRCode_Image = 'QRCodeImage',
        QRCode_Image_With_Report_URL = 'QRCodeImageWithReportURL',
        Birthdate = 'Birthdate',
        Branch_Name = 'BranchName',
        Processing_Branch_Name = 'ProcessingBranchName',
        Processing_Branch_Address = 'ProcessingBranchAddress',
        Branch_Code = 'BranchCode',
        Processing_Branch_Code = 'ProcessingBranchCode',
        Branch_Address = 'BranchAddress',
        Branch_Contact_No = 'BranchContactNo',
        City_Name = 'CityName',
        Collected_At = 'CollectedAt',
        Collection_Date = 'CollectionDate',
        Collection_DateTime = 'CollectionDateTime',
        Dispatch_At = 'DispatchAt',
        Due_Amount = 'DueAmount',
        EmailId = 'EmailId',
        End_Of_Report = 'EndOfReport',
        Gender = 'Gender',
        Image1 = 'Image1',
        Image2 = 'Image2',
        Image3 = 'Image3',
        Image4 = 'Image4',
        Image5 = 'Image5',
        LabId = 'LabId',
        Mobile = 'Mobile',
        Patient_Age = 'PatientAge',
        Patient_Id = 'PatientId',
        Patient_Initials = 'PatientInitials',
        Patient_Location = 'PatientLocation',
        Patient_Location_Code = 'PatientLocationCode',
        Patient_Name = 'PatientName',
        Payment_Status = 'PaymentStatus',
        Phone = 'Phone',
        Print_By = 'PrintBy',
        Print_Date = 'PrintDate',
        Print_DateTime = 'PrintDateTime',
        Received_Date = 'ReceivedDate',
        Received_DateTime = 'ReceivedDateTime',
        Referred_By = 'ReferredBy',
        Referred_Name_With_Speciality = 'ReferredNameWithSpeciality',
        Reference_Id1 = 'ReferenceId1',
        Reference_Id2 = 'ReferenceId2',
        Registration_Date = 'RegistrationDate',
        Registration_DateTime = 'RegistrationDateTime',
        Registration_Remarks = 'RegistrationRemarks',

        Nationality = 'Nationality',
        Passport_No = 'PassportNo',

        Report_Status = 'ReportStatus',
        Specimen = 'Specimen',
        Specimen_Remarks = 'SpecimenRemarks',

        Service_Testing_Type = 'ServiceTestingType',

        Package_Name = 'PackageName',
        Report_Title = 'ReportTitle',
        Department_Title = 'DepartmentTitle',

        Validated_By = 'ValidatedBy',
        Validated_Date = 'ValidatedDate',
        Validated_On = 'ValidatedOn',
        Validated_Signature = 'ValidatedSignature',
        Validated_Degree = 'ValidatedDegree',

        First_Validated_By_Name = 'FirstValidatedByName',
        First_Validated_On = 'FirstValidatedOn',

        Result_Entered_By = 'ResultEnteredBy',
        Result_Entered_On = 'ResultEnteredOn',

        Age_Disclaimer = 'AgeDisclaimer',
        NABL_Scope_Statement = 'NABLScopeStatement',
        NABL_License_Number = 'NABLLicenseNumber',
        Electronic_Sign_Note = 'ElectronicSignNote',

        Accessioning_Remarks = 'AccessioningRemarks',

        Project_Code = 'ProjectCode',
        Project_Name = 'ProjectName',
        Site_Code = 'SiteCode',
        Site_Name = 'SiteName',
        Visit_Code = 'VisitCode',
        Visit_Name = 'VisitName',
        Volunteer_Registration_No = 'VolunteerRegistrationNo',
        Subject_No = 'SubjectNo',

        Signature1_Doctor_Name = 'Signature1DoctorName',
        Signature1_Doctor_Signature = 'Signature1DoctorSignature',
        Signature1_Doctor_Degree = 'Signature1DoctorDegree',

        Signature2_Doctor_Name = 'Signature2DoctorName',
        Signature2_Doctor_Signature = 'Signature2DoctorSignature',
        Signature2_Doctor_Degree = 'Signature2DoctorDegree',

        Signature3_Doctor_Name = 'Signature3DoctorName',
        Signature3_Doctor_Signature = 'Signature3DoctorSignature',
        Signature3_Doctor_Degree = 'Signature3DoctorDegree',

        Signature4_Doctor_Name = 'Signature4DoctorName',
        Signature4_Doctor_Signature = 'Signature4DoctorSignature',
        Signature4_Doctor_Degree = 'Signature4DoctorDegree',

        Signature5_Doctor_Name = 'Signature5DoctorName',
        Signature5_Doctor_Signature = 'Signature5DoctorSignature',
        Signature5_Doctor_Degree = 'Signature5DoctorDegree',

        Micro_Organism = 'MicroOrganism',
        Page_No = 'PageNo',
        Pending_Services = 'PendingServices',
        Revised_Report_Footnote = 'RevisedReportFootnote',
        IPOPDetails = 'IPOPDetails',
        Report_Description = 'ReportDescription',
        Service_Series_Id = 'ServiceSeriesId',
        LPL_NABL_Scope_Note = 'LPLNABLScopeNote',

        ICMR_Id = 'ICMRID',
        Person_Conditon = 'PersonConditon',
        SRF_Id = 'SRFID',
        CRM_No = 'CRMNo',
        Zone = 'Zone',
        CRM_No_Barcode_Image = 'CRMNoBarcodeImage',
        Integration_Order_Id = 'IntegrationOrderId',
        Integration_Patient_Id = 'IntegrationPatientId',

        Is_Unit_Available = 'IsUnitAvailable',
        Is_ReferenceRange_Available = 'IsReferenceRangeAvailable',
        Registration_Regional_Branch_Address = 'RegistrationRegionalBranchAddress',
        Patient_Age_Full_Gender = 'PatientAgeFullGender',
        Patient_Gender_Age_Full = 'PatientGenderAgeFull',
        Patient_Age_Short_Gender = 'PatientAgeShortGender',
        Patient_Gender_Age_Short = 'PatientGenderAgeShort',
        Report_Version_No = 'ReportVersionNo',
        NABH_License_Number = 'NABHLicenseNumber',
        Validated_By_At_Last_page = 'ValidatedByAtLastpage',
        Approved_By_At_Last_page = 'ApprovedByAtLastpage',
        Consultant_Pathologist_At_Last_Page = 'ConsultantPathologistAtLastPage',
        Critical_Remarks_At_Last_Page = 'CriticalRemarksAtLastPage',
        CAP_Logo = 'CAPLogo',
        NABL_Logo = 'NABLLogo',
        Referred_By_Without_Degree = 'ReferredByWithoutDegree',
        Accessioning_Date = 'AccessioningDate',
        Accessioning_DateTime = 'AccessioningDateTime',
        Report_Instrument_Name = 'ReportInstrumentName'

    }

    export enum ReportListVariable {
        High_Low_Flag = 'HighLowFlag',
        Method_Name = 'MethodName',
        Package_Name = 'PackageName',
        Reference_Range = 'ReferenceRange',
        Report_SubHeading = 'ReportSubHeading',
        Report_Title = 'ReportTitle',

        Result_Value = 'ResultValue',
        Result_Value_Low = 'ResultValueLow',
        Result_Value_High = 'ResultValueHigh',
        Result_Value_Abnormal = 'ResultValueAbnormal',
        Result_Value_In_Range = 'ResultValueInRange',
        Result_Value_Out_Range = 'ResultValueOutRange',

        Accessioning_Remarks = 'AccessioningRemarks',
        Service_Report_Remarks = 'ServiceReportRemarks',
        Test_Name = 'TestName',
        Test_Report_Remarks = 'TestReportRemarks',
        Test_Report_Description = 'TestReportDescription',
        Unit = 'Unit',
        Image = 'Image',

        Collection_Date = 'CollectionDate',
        Received_Date = 'ReceivedDate',
        Department_Name = 'DepartmentName',
        Specimen_Name = 'SpecimenName',
        Specimen_Id = 'SpecimenId',

        Specimen_Name_Single_With_Caption = 'SpecimenNameSingleWithCaption',
        Specimen_Id_Single_With_Caption = 'SpecimenIdSingleWithCaption',

        Collection_Time_Single_With_Caption = 'CollectionTimeSingleWithCaption',
        Received_Time_Single_With_Caption = 'ReceivedTimeSingleWithCaption',
        Accessioning_Remarks_Single_With_Caption = 'AccessioningRemarksSingleWithCaption',

        Resistance_RR = 'ResistanceRR',
        Intermediate_RR = 'IntermediateRR',
        Sensitive_RR = 'SensitiveRR',
        Micro_Method = 'MicroMethod',
        Micro_Sensitivity = 'MicroSensitivity',
        Zone_Size = 'ZoneSize',
        MIC = 'MIC',
        Drug_Classification = 'DrugClassification',
        Madicine_Name = 'MadicineName',
        Reference_Range_Category_Color = 'ReferenceRangeCategoryColor',
        Reference_Range_Category_Symbol = 'ReferenceRangeCategorySymbol',
        Name_ToBe_Printed_Other_Language = 'NameToBePrintedOtherLanguage',
        Is_Test_Under_NABL_Scope = 'IsTestUnderNABLScope',
        NABL_License_Number = 'NABLLicenseNumber',
        NABL_Logo = 'NABLLogo',
        Result_Entered_By = 'ResultEnteredBy',
        Result_Entered_On = 'ResultEnteredOn',
    }

    export enum ReportFontType {
        Arial = 'Arial',
        Times_New_Roman = 'Times New Roman',
        Calibri = 'calibri',
        Helvetica = 'Helvetica',
        Century_Gothic = 'Century Gothic'
    }

    export enum BillRegisterReportFormate {
        Full_Test_Name = 'FullTestName',
        Short_Test_Name = 'ShortTestName',
        User_Wise = 'UserWise',
        B2B = 'B2B',
        B2B_Summary = 'B2BSummary',
        B2B_Daily_Summary = 'B2BDailySummary',
        Doctor = 'Doctor',
        Doctor_Summary = 'DoctorSummary',
        Doctor_Daily_Summary = 'DoctorDailySummary',
        Branch_Summary = 'BranchSummary',
        Branch_Daily_Summary = 'BranchDailySummary',
        Day_Wise_Summary = 'DayWiseSummary',
        Employee_Wise = 'EmployeeWise',
        Phlebotomist_Wise = "PhlebotomistWise",
        Pickup_Person_Wise = "PickupPersonWise"
        // Visitor_Wise = 'VisitorWise',
        // Project_Wise = 'ProjectWise',
    }

    export enum SalesSummaryReportFormat {
        Day_Wise_Summary = 'DayWiseSummary',
        Month_Wise_Summary = 'MonthWiseSummary',
        Year_Wise_Summary = 'YearWiseSummary',
        Branch_Wise_Summary = 'BranchWiseSummary',
        Branch_Wise_Day_Wise_Summary = 'BranchWiseDayWiseSummary',
        Branch_Wise_Month_Wise_Summary = 'BranchWiseMonthWiseSummary',
        Branch_Wise_Year_Wise_Summary = 'BranchWiseYearWiseSummary',
        Branch_Wise_B2B_Wise_Summary = 'BranchWiseB2BWiseSummary',
        Branch_Wise_B2B_Wise_Day_Wise_Summary = 'BranchWiseB2BWiseDayWiseSummary',
        Branch_Wise_B2B_Wise_Month_Wise_Summary = 'BranchWiseB2BWiseMonthWiseSummary',
        Branch_Wise_B2B_Wise_Year_Wise_Summary = 'BranchWiseB2BWiseYearWiseSummary',
        SBU_Wise_Summary = 'SBUWiseSummary',
        B2B_Area_Wise_Summary = 'B2BAreaWiseSummary',
        B2C_Area_Wise_Summary = 'B2CAreaWiseSummary',
        B2B_State_Wise_Summary = 'B2BStateWiseSummary',
        B2C_State_Wise_Summary = 'B2CStateWiseSummary',
    }

    export enum ServiceSalesSummaryReportFormat {
        B2B_Service_Sales_Summary = 'B2BServiceSalesSummary',
        Doctor_Service_Sales_Summary = 'DoctorServiceSalesSummary',
    }

    export enum PaymentStatus {
        Paid = 'P',
        Due = 'D',
        All = 'A'
    }

    export enum PaymentStatusWithOutAll {
        Paid = 'P',
        Due = 'D',
    }

    export enum QueueActivity {
        Pre_Registration = 'PreRegistration',
        Registration = 'Registration',
        Report_Collection = 'ReportCollection',
        Payment = 'Payment',
        Inquiry = 'Inquiry',
        Complaint = 'Complaint',
        Plebotomy = 'Plebotomy',
        Other = 'Other',
    }

    export enum SpecimenInOutStatus {
        New = 'N',
        Batch_Completed = 'C',
        Partial = 'P',
        Received = 'R'
    }
    export enum SpecimenInStatus {
        Not_Received = 'C',
        Partial_Received = 'P',
        Received = 'R'
    }
    export enum FormEStatus {
        Pending = 'P',
        Submitted = 'S',
        All = 'A'
    }

    export enum DataAuthorizationStatus {
        New = 'N',
        Rejected = 'R',
        Authorized = 'A',
        Order_Given = 'OG',
        Order_Pending = 'OP',
        QC_Data = 'QCD',
        Re_Order = 'RO',
        Raw_Data = 'RD'
    }

    export enum DataAuthorizationStage1Status {
        New = 'N',
        Rejected = 'R',
        Approved = 'A',
    }

    export enum SpecimenAccessioningStatus {
        Accepted = 'A',
        Rejected = 'R',
        Sub_Optimal = 'S',
    }

    export enum AuditTrailCategory {
        Registration_Field_Modification = 'RegistrationFieldModification',
        Refered_By_Modification = 'ReferedByModification',
        Service_Modification = 'ServiceModification',
        Payment_Modification = 'PaymentModification',
        Clinical_Trial_Modification = 'ClinicalTrialModification',
        Result_Modification = 'ResultModification',
        Result_Modification_After_Approval = 'ResultModificationAfterApproval',
        Registration_Field_Modification_After_Approval = 'RegistrationFieldModificationAfterApproval',
        Registration_Field_Modification_Before_Approval = 'RegistrationFieldModificationBeforeApproval',
    }

    export enum AuditTrailSubCategory {
        B2B = 'B2B',
        Mobile = 'Mobile',
        Email = 'Email',
        Phone = 'Phone',
        Patient_Id = 'PatientId',
        Last_Name = 'LastName',
        Middle_Name = 'MiddleName',
        Title = 'Title',
        Birth_Date = 'BirthDate',
        Age = 'Age',
        Gender = 'Gender',
        Address = 'Address',
        City = 'City',
        Ref_Id_1 = 'RefId1',
        Ref_Id_2 = 'RefId2',
        PatientLocation = 'PatientLocation',
        Aadhar_No = 'AadharNo',
        Dispatch_At = 'DispatchAt',
        Post = 'Post',
        InformTo = 'Inform_To',
        Referred_By_Added = 'ReferredByAdded',
        Referred_By_Removed = 'ReferredByRemoved',
        Service_Added = 'ServcieAdded',
        Service_Modified = 'ServcieModified',
        Service_Removed = 'ServiceRemoved',
        Payment_Removed = 'PaymentRemoved',
        Test_Result_Modification = 'TestResultModification',
        Test_Result_Validation = 'TestResultValidation',
        Test_Result_Approval = 'TestResultApproval',
        Test_Result_DisApproval = 'TestResultDisApproval',
    }

    export enum SuffixPrefix {
        Suffix = 'S',
        Prefix = 'P'
    }

    export enum OrderType {
        Routine = 'R',
        Urgent = 'U',
        All = 'A'
    }

    export enum CumulativeOrderBy {
        Ascending = 'A',
        Descending = 'D'
    }

    export enum OvershootType {
        OvershootProcessingCenter = 'processing',
        OvershootDueToLogistics = 'logistics',
        Overall = 'all',
    }

    export enum TATReportType {
        Summary = 'Summary',
        Details = 'Details'
    }

    export enum TATType {
        ALL = 'ALL',
        OnTime = 'OnTime',
        Overshoot = 'Overshoot',
    }

    export enum ReportFormat {
        Summary = 'S',
        BranchSummary = 'BS',
        Details = 'D'
    }

    export enum CardIssuedStatus {
        Issued = 'I',
        NearExpiry = 'N',
        Expired = 'E'
    }

    export enum RepeatACKStatusType {
        Not_Repeat = 'N',
        Accepted = 'A',
        Requested = 'R',
    }

    export enum InstrumentRecordType {
        B = 'BreakDown',
        C = 'Calibration',
        P = 'Preventive Maintenance',
    }

    export enum MicroBiologyMethodName {
        Manual = 'M',
        MIC = 'V'
    }

    export enum TATOvershootActionEnteredPendingAll {
        Entered = 'Entered',
        Pending = 'Pending',
        All = 'All',
    }

    export enum EmailSMSPersonType {
        B2B = 'B2B',
        B2C = 'B2C',
        Doctor = 'Doctor',
    }

    export enum RegistrationTypeFilter {
        Routine = 'R',
        Clinical_Trial = 'C',
        All = 'A',
    }

    export enum ShipmentOutFilterStatus {
        Pending_Outsource = 'P',
        Outsourced = 'O',
        Not_Outsourced = 'N',
        All = 'A',
    }

    export enum InstrumentMaintenanceScheduleFrequency {
        Daily = 'D',
        Weekly = 'W',
        Monthly = 'M',
        Others = 'O',
        As_And_When_Required = 'A',
    }

    export enum WeekDays {
        Monday = '0',
        Tuesday = '1',
        Wednesday = '2',
        Thursday = '3',
        Friday = '4',
        Saturday = '5',
        Sunday = '6',
    }
    export enum Month {
        January = '1',
        feburary = '2',
        March = '3',
        April = '4',
        May = '5',
        June = '6',
        July = '7',
        August = '8',
        September = '9',
        October = '10',
        November = '11',
        December = '12',
    }

    export enum ReportPrintType {
        Interim = 'Interim',
        Duplicate = 'Duplicate',
        Final = 'Final',
        Revised = 'Revised',
        Single = 'Single',
        Cumulative = 'Cumulative',
    }

    export enum RateType {
        Rate_Contract = 'RC',
        Dynamic_Price = 'DP',
    }

    export enum DeltaDDCheckType {
        None = 'N',
        Absolute_Value_Variation = 'A',
        Percentage_Variation = 'P',
    }

    export enum DeltaViolationType {
        High = 'H',
        Low = 'L',
    }

    export enum CumulativeBasedOnType {
        Patient = 'P',
        Reference = 'R',
    }
    export enum ReportFormatType {
        Row = 'R',
        Column = "C",
    }
    export enum TestResultCompulsoryStep {
        Collection = 'C',
        Single_Scan = 'S',
        Department_Scan = 'D',
    }

    export enum LabIdTestServiceReportType {
        LabId_Wise = 'L',
        Service_Wise = 'S',
        Test_Wise = 'T'
    }

    export enum ShipmentAnalyticsGroupType {
        Shipment_Out_Count = 'ShipmentOutCount',
        Shipment_Out_Specimen_Count = 'ShipmentOutSpecimenCount',
        Shipment_In_Count = 'ShipmentInCount',
        Shipment_In_Specimen_Count = 'ShipmentInSpecimenCount'
    }

    export enum priceListType {
        Service_Category_base = 'S',
        Non_Service_Category_base = 'N'

    }

    export enum TaskStatus {
        New = 'N',
        Accepted = 'A',
        Completed = 'C'
    }
    export enum NotificationType {
        TATOvershoot = 'TATOvershoot',
        VisitDelayed = 'VisitDelayed',
        VisitPendingAsignment = 'VisitPendingAsignment',
        DiscountApprovalPending = 'DiscountApprovalPending',
        Reminder = 'Reminder',
        TATLikelyOvershoootTechnician = 'TATLikelyOvershoootTechnician',
        TATLikelyOvershoootApproval = 'TATLikelyOvershoootApproval',
        OutsourceServiceOvershootPendingReport = 'OutsourceServiceOvershootPendingReport',
        PreventiveMaintenanceOverdue = 'PreventiveMaintenanceOverdue',
        CalibrationOverdue = 'CalibrationOverdue'
    }

    export enum ScheduleMode {
        Batch = 'B',
        Routine = 'R'
    }
    export enum InstrumentDashboard {
        Online = "Online",
        Offline = "Offline",
        QC_Performed = "QCPerformed",
        QC_Passed = "QCPassed",
        QC_Failed = "QCFailed",
        QC_Not_Performed = "QCNotPerformed",
        PM_Due = "PMDue",
        Calibration_Due = "CalibrationDue",
        Calibration_Performed = "CalibrationPerformed",
        Daily_Activity_Due = "DailyActivityDue",
    }
    export enum EmbeddedType {
        All = 'A',
        Partially = 'P',
        Whole = 'W',
        Both = 'B',
        Near_Completely = 'N',
    }
    export enum OutsourceServiceStatus {
        All = 'A',
        Pending = 'P',
        Received = 'R',
        Overshoot = 'O'
    }

    export enum BulkRegistrationPageType {
        New_Upload = 'N',
        Pending = 'P',
        History = 'H'
    }

    export enum ApplicationAccessType {

        Anywhere = 'A',
        Trusted_IPs = 'T',
        Trusted_Devices = 'D',
        Both = 'B',
        Specific = 'S'
    }
    export enum ResultConditionType {

        Range = 'R',
        Less_Greater = 'L',
    }
    export enum FileStatusType {
        Success = 'S',
        Error = 'E',
        Invalid = 'I'
    }
    export enum RegistrationLogbookActivityStatusType {
        All = 'A',
        Pending_Only = 'P',
        Partial = 'T',
        Completed = 'C'
    }
    export enum B2BReportStatus {
        All = 'A',
        Pending = 'P',
        Report_Ready = 'R'
    }
    export enum AccessioningCategory {
        Acceptable = 'A',
        Sample_Deficiency = 'SD',
        Delay = 'D',
        Repeat = 'R',
        Hold = 'H'
    }

    export enum BatchStatus {
        New = 'N',
        Handover = 'H',
        Accept = 'A'
    }

    export enum AddressbookFilterType {
        Custome = 'C',
        B2B = 'B',
        Doctor = 'D'
    }
    export enum PaymentDepositedStatus {
        New = 'N',
        Completed = 'C',
        Rejected = 'R',
        Cancel = 'CN'
    }
    export enum TRFVerificationStatus {
        Verification_pending = 'VP',
        Verified = 'V',
        Scan_Pending = 'SP',
        Skipped = 'SK',
    }

    export enum ReceiptFormat {
        Detail = 'Detail',
        Summary = 'Summary',
        Summary_Without_Visit = 'Summary_Without_Visit'
    }
    export enum InvoiceFormat {
        Standard = 'S',
        With_Reference_No = 'R',
        With_IPOP_No = 'I',
        With_Received_and_Due_Amount = 'D',
        Client_Service_Code = 'C',
        Service_With_MRP = 'M',
        Service_Without_MRP = 'W',
        Client_Service_Code_With_Reference_Id = 'G',
        DateWise_ServiceWise = 'E',
        With_Vat = 'V',
        With_Project_Visit_and_Site = 'P'
    }
    export enum ApprovalType {
        Auto_Approval = 'AA',
        Manual_Approval = 'M',
        ALL = 'A'
    }

    export enum PreventiveOrCalibrationStatus {
        OverDue = 'O',
        Scheduled = 'S',
        Scheduled_but_Overdue = 'SO',
        Completed = 'C',
        Schedule_Pending = 'SP'
    }
    export enum ProcessingPriority {
        Normal = 'N',
        High = 'H'
    }

    export enum ServiceSalesReportType {
        Summary = 'Summary',
        // Branch_Wise = 'Branch_Wise',
        Month_Wise_Branch_Wise = 'Month_Wise_Branch_Wise',
        Branch_Wise_Month_Wise = 'Branch_Wise_Month_Wise'
    }

    export enum RegistrationAnalyticsGroupType {
        LabId_Wise = 'L',
        Service_Wise = 'S',
        Error_Wise = 'E'
    }

    export enum OutSourceRevenueReportType {
        Summary = 'S',
        Department_Wise = 'D',
        Service_Wise = 'SW',
        LabId_Wise = 'L',

    }

    export enum ReportVerificationType {
        Verified = 'V',
        Not_Verified = 'NV',
        All = 'A',

    }
    export enum ReceiptLayout {
        Standard = 'Standard',
        Without_Package_Parameter_And_Single_Expected_Report_Date = 'Without_Package_Parameter_And_Single_Expected_Report_Date',
        Separate_Age_Gender_Branch_Legal_Name_As_Title = 'Separate_Age_Gender_Branch_Legal_Name_As_Title'
    }

    export enum CustomerFeedbackReportType {
        Summary = 'S',
        Detailed = 'D',
    }


    export enum CustomerFeedbackRating {
        All = '0',
        Excellent = '5',
        Good = '4',
        Average = '3',
        Poor = '2',
        Bad = '1',

    }

    export enum SmartReportStatus {
        New = 'N',
        Uploaded = 'U',
        Received = 'R',
        Error = 'E',
    }

    export enum HL7RecordType {
        OBR = 'OBR',
        PID = 'PID',
        ORC = 'ORC',
        MSH = 'MSH',
        OBX = 'OBX',
        PV1 = 'PV1',
    }

    export enum HL7FieldName {
        First_Name = 'FirstName',
        Middle_Name = 'MiddleName',
        Last_Name = 'LastName',
        Gender = 'Gender',
        CTPatientID = 'CTPatientID',
        Title = 'Title',
        BirthDate = 'BirthDate',
        Address = 'Address',
        State = 'State',
        Country = 'Country',
        Phone = 'Phone',
        Priority = 'Priority',
        MobileNo = 'MobileNo',
        EmailId = 'EmailId',
        AgeType = 'AgeType',
        Age = 'Age',
        LabId = 'LabId',
        HisOrderNo = 'HisOrderNo',
        DoctorCode = 'DoctorCode',
        DoctorName = 'DoctorName',
        BranchCode = 'BranchCode',
        ProjectCode = 'ProjectCode',
        SiteCode = 'SiteCode',
        VisitCode = 'VisitCode',
        ServiceCode = 'ServiceCode',
        ScreeningId = 'ScreeningId',
        BloodGroup = 'BloodGroup',
        RegistrationDate = 'RegistrationDate',
        StartTime = 'StartTime',
        RefId1 = 'RefId1',
        RefId2 = 'RefId2',
        DispatchAt = 'DispatchAt',
        IPOPFlag = 'IPOPFlag',
        IPOPNo = 'IPOPNo',
        B2BCode = 'B2BCode',
        AadharNo = 'AadharNo',
        IntegrationOrderId = 'IntegrationOrderId',
        Height = "Height",
        Weight = "Weight",
        PassportNo = "PassportNo",
        Service_Added_Remarks = "ServiceAddedRemarks",
        Integration_Service_Remarks = "IntegrationServiceRemarks",
        Integration_Service_OrderNo = "IntegrationServiceOrderNo",
        Service_Mode = 'ServiceMode',
        Remarks = 'Remarks',
        Ethnicity = 'Ethnicity'

    }

    export enum GenerateHL7FieldName {
        FirstName = 'FirstName',
        MiddleName = 'MiddleName',
        LastName = 'LastName',
        Gender = 'Gender',
        GenderName = 'GenderName',
        IntegrationPatientId = 'IntegrationPatientId',
        Title = 'Title',
        BirthDate = 'BirthDate',
        Address = 'Address',
        State = 'State',
        Country = 'Country',
        MobileNo = 'MobileNo',
        EmailId = 'EmailId',
        AgeType = 'AgeType',
        Age = 'Age',
        LabId = 'LabId',
        DoctorId = 'DoctorId',
        DoctorCode = 'DoctorCode',
        DoctorName = 'DoctorName',
        BranchId = 'BranchId',
        BranchCode = 'BranchCode',
        ProjectCode = 'ProjectCode',
        SiteCode = 'SiteCode',
        VisitCode = 'VisitCode',
        ServiceId = 'ServiceId',
        ServiceCode = 'ServiceCode',
        ScreeningId = 'ScreeningId',
        BloodGroup = 'BloodGroup',
        RegistrationDate = 'RegistrationDate',
        StartTime = 'StartTime',
        RefId1 = 'RefId1',
        RefId2 = 'RefId2',
        DispatchAt = 'DispatchAt',
        IPOPFlag = 'IPOPFlag',
        IPOPNo = 'IPOPNo',
        B2BId = 'B2BId',
        B2BCode = 'B2BCode',
        AadharNo = 'AadharNo',
        IntegrationOrderId = 'IntegrationOrderId',
        Height = "Height",
        Weight = "Weight",
        PassportNo = "PassportNo",
        ServiceAddedRemarks = "ServiceAddedRemarks",
        IntegrationServiceRemarks = "IntegrationServiceRemarks",
        IntegrationBranchCode = "IntegrationBranchCode",
        IntegrationServiceCode = "IntegrationServiceCode",
        IntegrationB2BCode = "IntegrationB2BCode",
        IntegrationDoctorCode = "IntegrationDoctorCode",
        RegistrationDateTime = "RegistrationDateTime",
        ServiceAddedDateTime = "ServiceAddedDateTime",
        ServiceMode = "ServiceMode",
        ServiceSrNo = "ServiceSrNo",
        ServiceCounter = "ServiceCounter",
        PatientName = "PatientName",
        SystemDate = "SystemDate",
        SystemDateTime = "SystemDateTime",
        ServiceName = "ServiceName",
        PatientId = "PatientId",
        SpecimenCollectionDate = "SpecimenCollectionDate",
        SpecimenReceivedDate = "SpecimenReceivedDate",
        SpecimenName = "SpecimenName",
        SpecimenId = "SpecimenId",
        ProcessingBranch_Code = "ProcessingBranchCode",
        IntegrationProcessingBranchCode = "IntegrationProcessingBranchCode",
        Processing_BranchId = "ProcessingBranchId",
        HL7IntegrationBranchCode = "HL7IntegrationBranchCode",
        Ethnicity = "Ethnicity",
        EthnicityName = "EthnicityName",

    }

    export enum IntegrationResultFieldName {
        FirstName = 'FirstName',
        MiddleName = 'MiddleName',
        LastName = 'LastName',
        PatientName = 'PatientName',
        Gender = 'Gender',
        GenderName = 'GenderName',
        PatientId = 'PatientId',
        IntegrationPatientId = 'IntegrationPatientId',
        Title = 'Title',
        BirthDate = 'BirthDate',
        Address = 'Address',
        State = 'State',
        Country = 'Country',
        MobileNo = 'MobileNo',
        Phone = 'Phone',
        EmailId = 'EmailId',
        AgeType = 'AgeType',
        Age = 'Age',
        LabId = 'LabId',
        DoctorId = 'DoctorId',
        DoctorCode = 'DoctorCode',
        DoctorName = 'DoctorName',
        IntegrationDoctorCode = 'IntegrationDoctorCode',
        BranchId = 'BranchId',
        BranchCode = 'BranchCode',
        BranchName = 'BranchName',
        IntegrationBranchCode = 'IntegrationBranchCode',
        ProjectCode = 'ProjectCode',
        SiteCode = 'SiteCode',
        VisitCode = 'VisitCode',
        ServiceId = 'ServiceId',
        ServiceCode = 'ServiceCode',
        ServiceName = 'ServiceName',
        ServiceAddedDateTime = 'ServiceAddedDateTime',
        IntegrationServiceCode = 'IntegrationServiceCode',
        ServiceAddedRemarks = 'ServiceAddedRemarks',
        ServiceCounter = 'ServiceCounter',
        ServiceApprovedOn = 'ServiceApprovedOn',
        ServiceApprovedByUserName = 'ServiceApprovedByUserName',
        ServiceBase64Data = 'ServiceBase64Data',
        IntegrationServiceRemarks = 'IntegrationServiceRemarks',
        ProcessingType = 'ProcessingType',
        RegistrationDate = 'RegistrationDate',
        RegistrationDateTime = 'RegistrationDateTime',
        RefId1 = 'RefId1',
        RefId2 = 'RefId2',
        DispatchAt = 'DispatchAt',
        IPOPFlag = 'IPOPFlag',
        IPOPNo = 'IPOPNo',
        B2BId = 'B2BId',
        B2BCode = 'B2BCode',
        B2BName = 'B2BName',
        IntegrationB2BCode = 'IntegrationB2BCode',
        AadharNo = 'AadharNo',
        IntegrationOrderId = 'IntegrationOrderId',
        Height = 'Height',
        Weight = 'Weight',
        PassportNo = 'PassportNo',
        ProcessingBranchId = 'ProcessingBranchId',
        ProcessingBranchCode = 'ProcessingBranchCode',
        IntegrationProcessingBranchCode = 'IntegrationProcessingBranchCode',
        TestId = 'TestId',
        TestName = 'TestName',
        TestCode = 'TestCode',
        TestValidatedByUserName = 'TestValidatedByUserName',
        TestValidatedOn = 'TestValidatedOn',
        TestApprovedByUserName = 'TestApprovedByUserName',
        TestApprovedOn = 'TestApprovedOn',
        ServiceTestCounter = 'ServiceTestCounter',
        ResultValue = 'ResultValue',
        ResultFlag = 'ResultFlag',
        ReferenceRange = 'ReferenceRange',
        Unit = 'Unit',
        IsRepeat = 'IsRepeat',
        RepeatFlag_R = 'RepeatFlag',
        SpecimenCollectionDate = 'SpecimenCollectionDate',
        SpecimenReceivedDate = 'SpecimenReceivedDate',
        SpecimenName = 'SpecimenName',
        SpecimenId = 'SpecimenId',
        CurrentDate = 'CurrentDate',
        CurrentDateTime = 'CurrentDateTime',
        Ethnicity = "Ethnicity",
        EthnicityName = "EthnicityName",
        UniqueNumber = 'UniqueNumber',
        HL7IntegrationBranchCode = 'HL7IntegrationBranchCode',
        SystemDateTime = 'SystemDateTime',
        SystemDate = 'SystemDate',
        CR = 'CR',
        LF = 'LF'
    }

    export enum PaymentGateway {
        Paytm = 'Paytm',
        BillDesk = 'BillDesk',
        Razorpay = 'Razorpay',
        CCAvenue = 'CCAvenue',
        PayUMoney = 'PayUMoney',
        PhonePe = 'PhonePe',
        JioOnePay = 'JioOnePay'

    }

    export enum RegistrationCreditLimitAction {
        None = 'N',
        Alert = 'A',
        Block = 'B'
    }

    export enum RuleType {
        Demographic_base = 'D',
        Result_Base = 'R'
    }
    export enum RuleCodeType {
        Rule_1_2s = 'Rule_1_2s',
        Rule_1_3s = 'Rule_1_3s',
        Rule_1_4s = 'Rule_1_4s',
        Rule_1_5s = 'Rule_1_5s',
        Rule_2_2s = 'Rule_2_2s',
        Rule_R_4s = 'Rule_R_4s',
        Rule_3_1s = 'Rule_3_1s',
        Rule_4_1s = 'Rule_4_1s',
        Rule_7_T = 'Rule_7_T',
        Rule_7_x = 'Rule_7_x',
        Rule_8_x = 'Rule_8_x',
        Rule_9_x = 'Rule_9_x',
        Rule_10_x = 'Rule_10_x',
        Rule_12_x = 'Rule_12_x',
    }
    export enum NoOfLevels {
        Level_1 = 'Level_1',
        Level_2 = 'Level_2',
        Level_3 = 'Level_3',
        Level_4 = 'Level_4',
        Level_5 = 'Level_5',
        Level_6 = 'Level_6',
    }
    export enum AnalyteResultType {
        Quantitative = 'Quantitative',
        Qualitative = 'Qualitative',
    }
    export enum ComparisonType {
        Demographic_Base = 'D',
        Result_Range_Base = 'R',
        Result_Other_Test_Base = 'O'
    }
    export enum ComparisonOperatorType {
        Equal_To = 'E',
        Greater_Than = 'GT',
        Greater_Than_Equal_To = 'GTE',
        Less_Than = 'LT',
        Less_Than_Equal_To = 'LTE',
    }
    export enum MeanSDCVType {
        Fix = 'Fix',
        Floating = 'Floating',
    }
    export enum WarningRejectionType {
        Warning = 'W',
        Rejection = 'R',
    }
    export enum B2BType {
        Cash_Client = 'Cash_Client',
        Credit_Client = 'Credit_Client',
        All = 'All'
    }

    export enum B2BOutstandingType {
        Marked_as_B2C = 'B2C',
        Exclude_Marked_B2C = 'EB2C',
        All = 'All'
    }

    export enum HelpDDResultFlagType {
        Resistance = 'R',
        Intermidiate = 'I',
        Sensitive = 'S',
    }

    export enum HandOverType {
        Patient = 'P',
        Internal = 'I',
    }

    export enum QCStatus {
        Pass = 'P',
        Fail = 'F',
        Warning = 'W',
    }

    export enum AddressPrintingType {
        B2B = 'B',
        Doctor = 'D',
        B2C = 'B2C',
        LabId = 'LabId'
    }
    export enum TestTaggingType {
        Height = "Height",
        Weight = "Weight",
        eGFR = "eGFR",
        ICMR_Id = "ICMRId",
        SRF_Id = "SRFId",
        Person_Condition = "PersonCondition",
        Total_Protein = 'TotalProtein',
        Covid_Result = 'CovidResult',
        Heamoglobin = 'Heamoglobin',
        Nationality = 'Nationality',
        Passport_No = 'PassportNo',
        Creatinine_Clearance = 'CreatinineClearance',
        Bleeding_Time = 'BleedingTime',
        Clotting_Time = 'ClottingTime',
        Mantoux_Value = 'MantouxValue',
        _24_Hr_Urine_Volume = 'UrineVolume24Hr',
        Specimen_Remarks = 'SpecimenRemarks'
    }

    export enum B2BBalanceLogic {
        Credit_Limit = 'C',
        LabId_based = 'L',
        Credit_Limit_and_LabId_both = 'CL',
        Credit_Limit_Balance_as_on_Registration = 'CR'
    }

    export enum MethodType {
        Get = 'Get',
        Post = 'Post',
    }
    export enum PriceListStatus {
        New = 'N',
        Send = 'S',
        Approval = 'A'
    }

    export enum MobileBelongsTo {
        Self = 'S',
        Family = 'F'
    }

    export enum PatientCategory {
        TRAVEL = 'Travel',
        SURGERY = 'Surgery',
        SITILD = 'Symptomatic international traveller in last 14 days',
        SCOLCC = 'Symptomatic contact of lab confirmed case',
        SHFW = 'Symptomatic Healthcare worker / Frontline workers',
        HSARI = 'Hospitalized SARI (Severe Acute Respiratory Illness) patient',
        ADAHRCOLCFM = 'Asymptomatic direct and high risk contact of lab confirmed case - family member',
        AHWICWCCWAP = 'Asymptomatic healthcare worker in contact with confirmed case without adequate protection',
        SILIH = 'Symptomatic Influenza like Illness (ILI) in Hospital',
        PWINL = 'Pregnant woman in / near labour',
        SARAM = 'Symptomatic (ILI) amongh returness and migrants (within 7 days of illness)',
        SILIPHC = 'Symptomatic Influenza like Illness (ILI) patient in Hotspot / Containment zones',
    }

    export enum ClinicalSymptoms {
        C = 'Cough',
        B = 'Breathlessness',
        ST = 'Sore throat',
        D = 'Diarrhoea',
        N = 'Nausea',
        CP = 'Chest pain',
        V = 'Vomiting',
        H = 'Heamoptysis',
        ND = 'Nasal discharge',
        FE = 'Fever at evalution',
        BA = 'Body ache',
        S = 'Sputum',
        AP = 'Abdominal pain',
    }

    export enum PatientCondition {
        CLD = 'Chronic lung disease',
        CRD = 'Chronic renal disease',
        IC = 'Immunocompromised condition',
        M = 'Malignancy',
        D = 'Diabetes',
        HD = 'Heart disease',
        H = 'Hypertension',
        CLID = 'Chronic liver disease',
    }
    export enum QueueTokenStatus {
        New = 'N',
        Skipped = 'S',
        Next_Queue_Pending = 'NQP',
        Process = 'P',
        Completed = 'C'

    }
    export enum ICMRCovidDataStatus {
        All = 'A',
        Pending = 'P',
        Completed = 'C'
    }
    export enum AgeingReportType {
        Day_Wise = 'D',
        Month_Wise = 'M'
    }

    export enum TrendReportType {
        Day_Wise = 'D',
        Month_Wise = 'M'
    }

    export enum InstrumentMaintenanceStatus {
        New = 'N',
        Performed = 'P',
        Approved = 'A'
    }

    export enum HL7ServiceType {
        Local = 'L',
        Branch_Transfer = 'B',
    }
    export enum DateCompareWith {
        Registration_Date = 'R',
        Approved_Date = 'A',
        Both = 'B'
    }
    export enum POSDeviceType {
        Pinelabs = 'Pinelabs',
        Paytm = 'Paytm',
        Ezetap = 'Ezetap',
        Mswipe = 'Mswipe'
    }
    export enum VisitAuditTrialSearchType {
        UserId = "U",
        VisitId = "V",
    }

    export enum POSTransactionStatus {
        All = 'A',
        Failed = 'F',
        Pending = 'P',
        Success = 'S',
    }
    export enum RegPatienetNameCase {
        Title_Case = 'T',
        lower_case = 'L',
        UPPER_CASE = 'U',
    }
    export enum B2BBillRegisterReportFormate {
        Full_Test_Name = 'FullTestName',
        Short_Test_Name = 'ShortTestName',
        B2B_Daily_Summary = 'B2BDailySummary',
    }

    export enum BatchExcelExportDirection {
        Row = 'R',
        Column = 'C',
    }
    export enum ICRMStatus {
        Uploaded = 'U',
        Error = 'E'
    }

    export enum PaymentDepositType {
        Voucher = 'V',
        On_Account = 'O'
    }

    export enum RegOrderBy {
        CreatedDate = 'C',
        B2B = 'B',
        Doctor = 'D'
    }

    export enum StoreLocationSMSEmailType {
        Purchase_Requisition_Alert_SMS = 'PurchaseRequisitionAlertSMS',
        Purchase_Requisition_Alert_Email = 'PurchaseRequisitionAlertEmail',
        Material_Requisition_Alert_SMS = 'MaterialRequisitionAlertSMS',
        Material_Requisition_Alert_Email = 'MaterialRequisitionAlertEmail',
    }

    export enum VendorSMSEmailType {
        Purchase_Order_Alert_SMS = 'PurchaseOrderAlertSMS',
        Purchase_Order_Alert_Email = 'PurchaseOrderAlertEmail',
    }

    export enum PRMRLevelType {
        Level_1 = "Level1",
        Level_2 = "Level2",
        Level_3 = "Level3",
        No_Approval = "NoApproval"
    }

    export enum LotFrequency {
        Daily = 'D',
        Weekly = 'W',
        Monthly = 'M',
    }

    export enum ErrorType {

        SQL_Error = "SQL",
        System_Error = "SYS"
    }


    export enum VendorAgreementStatus {
        All = 'A',
        Agreement_Available = 'AA',
        Agreement_Not_Available = 'AN',
    }

    export enum DiseaseType {

        Disease = "Disease",
        Condition = "Condition",
        Habit = "Habit",
        Risk = "Risk"
    }


    export enum VisitCategory {

        Home_Visit = "H",
        Drop_Of = "D",
        WalkIn = "W",
    }

    export enum LabIdAttachmentStatus {
        All = 'A',
        Attachment_Available = 'AA',
        Attachment_Not_Available = 'AN',
    }

    export enum TRFIdentificationStatus {

        Pending = "P",
        Identified = "I",
        All = "A",
    }

    export enum DepartmentServiceConfirmationType {
        Registration_Not_Allow = 'RNA',
        Registration_Allow_With_Confirmation = 'RAWC',
        All = 'All'
    }

    export enum TrustedIPDeviceType {
        IP = "I",
        Device = "D",
    }


    export enum MPCardApprovalStatus {
        New = 'N',
        Send_For_Approval = 'S',
        Approved = 'A',
        Rejected = 'R',

    }

    export enum CouponType {
        Single = "S",
        Multiple = "M",
    }

    export enum ExpenseHeaderStatus {
        All = 'All',
        Approved = 'A',
        Pending = 'P',

    }

    export enum ExpensePaymentMode {
        Bank_Transfer = 'Bank_Transfer',
        Cash = 'Cash',
        Cheque = 'Cheque'
    }

    export enum OncallPayoutStatus {
        New = 'N',
        Validate = 'V',
        Level_1 = "L1",
        Approved = 'A'
    }

    export enum RegType {
        All = 'A',
        B2B = 'B2B',
        B2C = "B2C",
        Home_Visit = 'H'
    }

    export enum SpecimenCollectionAnalyticsReportFormat {
        Summary = "S",
        Branch_Wise = "B",
        User_Wise = "U"
    }

    export enum InstrumentAnalyteType {
        Same_Analyte = "S",
        Create_New_Analyte = "N",
    }

    export enum InstrumentAnalyteResultDataType {
        Numeric = 'N',
        Alpha_Numeric = 'A',
    }

    export enum OrganismReferenceRangeReference {
        CLSI = 'C',
        UCAS = 'U'
    }

    export enum RegistrationDiscountAuthorizationType {
        Patient = 'P',
        Permitted_By = 'PB',
        Both = 'B',
        None = 'N'
    }

    export enum PrivilegeCardType {
        DiscountCard = 'D',
        PrepaidCard = 'P',
    }


    export enum DiscountPermittedByType {
        First = 'F',
        Second = 'S',
        Both = 'B'
    }

    export enum CheckInOutStatus {
        New = 'N',
        CheckIn = 'CI',
        Pending = 'P',
        Completed = 'C',
        Cancelled = 'CN'
    }

    export enum InvoiceApprovalStatus {
        All = 'All',
        Pending = 'P',
        Approved = 'A'
    }

    export enum PendingSpecimenStatus {
        All = 'A',
        New = 'N',
        Pending = 'P',
        Re_Collection = 'R',
    }
    export enum CriticalValueInformedStatus {
        Pending = 'P',
        Informed = 'I',
        All = 'A',
    }

    export enum ServiceFilterValues {
        Consent_Form_Defined = 'Consent_Form_Defined',
        Consent_Form_Undefined = 'Consent_Form_Undefined',
        Service_Form_Defined = 'Service_Form_Defined',
        Service_Form_Undefined = 'Service_Form_Undefined',
        Urgent_Classification_Always_Urgent = 'Urgent_Classification_Always_Urgent',
        Urgent_Classification_Never_Urgent = 'Urgent_Classification_Never_Urgent',

    }

    export enum ResultEntryRequiredAt {
        Registration = 'R',
        Collection = 'C'
    }

    export enum PriceListType {
        Master = 'MASTER',
        Branch = 'BRANCH',
        B2B = 'B2B',
        B2B_Individual = 'B2BINDIVIDUAL',
        Doctor = 'DOCTOR',
        Doctor_Individual = 'DOCTORINDIVIDUAL',
        Outsource = 'OUTSOURCE',
        Branch_Transfer = 'BRANCHTRANSFER',
        HLM_FOFO = 'HLM_FOFO',
        Prepaid = 'PREPAID',
        Service_Category = 'SERVICECATEGORY',
        Insurance = 'INSURANCE',
        Network = 'NETWORK',
        Branch_Wise_B2B = 'BRANCHWISEB2B',
        OnCall = 'ONCALL'
    }

    export enum DiseaseCategoryType {
        Principal = 'P',
        Secondary = 'S',
        Admitting = 'A'
    }

    export enum ServiceCancellationLevel {
        Level_1 = "L1",
        Level_2 = "L2",
        Level_3 = "L3",
        Level_4 = "L4",
    }

    export enum ServiceCancellationStage {
        Sample_Collected = "SC",
        Shipment_Out = "SO",
        Check_In = "CI",
        Check_Out = "CO",
        Department_Received = "DR",
        Approved = "A",
    }

    export enum RSCApprovalStatus {
        Pending_Approval = "P",
        Partial_Approved = "PA",
        Approved = "A",
        Rejected = "R",
        Lower_Level_Approval_Pending = "LL"
    }

    export enum FileNameFormatReceiptLayout {
        Receipt = "R",
        Receipt2 = "R2",
    }

    export enum SamplePendingTrackerStatus {
        Sample_Collection = "SampleCollection",
        Shipment_Out = "ShipmentOut",
        Delayed_Shipment_Out = "DelayedShipmentOut",
        Shipment_In = "ShipmentIn",
        Delayed_Shipment_In = "DelayedShipmentIn",
        Department_Out = "DepartmentOut",
        Department_In = "DepartmentIn",
        Delayed_Department_In = "DelayedDepartmentIn",
        Check_In = "CheckIn",
        Check_Out = "CheckOut",
        L1 = "L1",
        L2 = "L2",
        L3 = "L3",

    }

    export enum SamplePendingTrackerOutsourceStatus {
        Outsource = "Outsource",
        Without_Outsource = "WithoutOutsource"
    }

    export enum SamplePendingTrackerScheduleTestStatus {
        Scheduled_Test = "ScheduledTest",
        Without_Scheduled_Test = "WithoutScheduledTest"
    }

    export enum ParameterServiceType {
        Service = 'S',
        Parameter = 'P'
    }

    export enum AllowedSpecimenStatus {
        Any = "A",
        Collected = "C",
        Received = "R"
    }

    export enum RegistrationServiceCancellationStatusType {
        New = "N",

        Level1 = "L1",

        Level2 = "L2",

        Level3 = "L3",

        Level4 = "L4",

        Approved = "A",

        Rejected = "R"
    }

    export enum TicketRegistrationTicketRelatedTo {
        LabId_based = "L",
        B2b_Specific = "B",
        Doctor_Specific = "D",
        Employee_Specific = "E",
        Home_Visit_Specific = "H",
        General = "G"
    }

    export enum TicketRegistrationStatus {
        New = "N",
        Assigned = "A",
        Started = "S",
        Completed = "C",
        Cancelled = "CN"
    }

    export enum ResultOfDiagnosis {
        Normal = "N",
        Abnormal = "A",
    }

    export enum RequiredAt {
        Shift_Start = 'SS',
        Shift_End = 'SE',
        Both = "B"
    }

    export enum ApplicableFor {
        Phlebotomist = 'PH',
        Pickup_Person = 'PP',
    }

    export enum ShiftApprovalType {
        Pending = 'P',
        Approved = 'A',
    }

    export enum LogisticsShiftApprovalStatus {
        New = 'N',
        Approved = 'A',
    }

    export enum CreditDebitType {
        Credit_Amount = 'C',
        Debit_Amount = 'D',
    }

    export enum SampleHandoverStatus {
        Pending = 'P',
        Handovered = 'H',
    }


    export enum HistoAnalyticsType{
        Accessioning = 'A',
        Grossing = 'G',
        FirstMicroscopic = 'FM',
        SecondMicroscopic = 'SM',
    }

    export enum TrayContent{
        OnlyId = 'O',
        Slide = 'S',
        Block = 'B',
    }

    export class Methods {

        public static PrivilegeCardTypeArray() {
            return Object.keys(PrivilegeCardType)
                .map(key => ({ Id: PrivilegeCardType[key], Name: key.replace(/_/g, ' ') }));
        }

        public static PreRegistrationTypeArray() {
            return Object.keys(PreRegistrationType)
                .map(key => ({ Id: PreRegistrationType[key], Name: key.replace(/_/g, ' ') }));
        }

        public static ProcessingTypeForFilterArray() {
            return Object.keys(ProcessingType)
                .map(key => ({ Id: ProcessingType[key], Name: key.replace(/_/g, ' ') }));
        }

        public static InsuranceStatusArray() {
            return Object.keys(InsuranceStatus)
                .map(key => ({ Id: InsuranceStatus[key], Name: key.replace(/_/g, ' ') }));
        }

        public static DiseaseCategoryArray() {
            return Object.keys(DiseaseCategoryType)
                .map(key => ({ Id: DiseaseCategoryType[key], Name: key.replace(/_/g, ' ') }));
        }

        public static CancerReportTypeArray() {
            return Object.keys(CancerReportType)
                .map(key => ({ Id: CancerReportType[key], Name: key.replace(/_/g, ' ') }));
        }

        public static MPCardApprovalStatusTypeArray() {
            return Object.keys(MPCardApprovalStatus)
                .map(key => ({ Id: MPCardApprovalStatus[key], Name: key.replace(/_/g, ' ') }));
        }

        public static DocumentStorageConfigurationTypeArray() {
            return Object.keys(DocumentStorageConfigurationType)
                .map(key => ({ Id: DocumentStorageConfigurationType[key], Name: key.replace(/_/g, ' ') }));
        }

        public static GeneralReportTypeArray() {
            return Object.keys(GeneralReportType)
                .map(key => ({ Id: GeneralReportType[key], Name: key.replace(/_/g, ' ') }));
        }

        public static LabIdAttachmentStatusArray() {
            return Object.keys(LabIdAttachmentStatus)
                .map(key => ({ Id: LabIdAttachmentStatus[key], Name: key.replace(/_/g, ' ') }));
        }

        public static ErrorTypeTypeArray() {
            return Object.keys(ErrorType)
                .map(key => ({ Id: ErrorType[key], Name: key.replace(/_/g, ' ') }));
        }

        public static SmartReportStatusTypeArray() {
            return Object.keys(SmartReportStatus)
                .map(key => ({ Id: SmartReportStatus[key], Name: key.replace(/_/g, ' ') }));
        }

        public static ReportVerificationTypeArray() {
            return Object.keys(ReportVerificationType)
                .map(key => ({ Id: ReportVerificationType[key], Name: key.replace(/_/g, ' ') }));
        }

        public static B2BReportStatusArray() {
            return Object.keys(B2BReportStatus)
                .map(key => ({ Id: B2BReportStatus[key], Name: key.replace(/_/g, ' ') }));
        }
        public static PreventiveOrCalibrationStatusArray() {
            return Object.keys(PreventiveOrCalibrationStatus)
                .map(key => ({ Id: PreventiveOrCalibrationStatus[key], Name: key.replace(/_/g, ' ') }));
        }
        public static ReflexConditionTypeArray() {
            return Object.keys(ReflexConditionType)
                .map(key => ({ Id: ReflexConditionType[key], Name: key.replace(/_/g, ' ') }));

        }
        public static ReflexAdditionTypeArray() {
            return Object.keys(ReflexAdditionType)
                .map(key => ({ Id: ReflexAdditionType[key], Name: key.replace(/_/g, ' ') }));

        }
        public static RegistrationLogbookActivityStatusTypeDDArray() {
            return Object.keys(RegistrationLogbookActivityStatusType)
                .map(key => ({ Id: RegistrationLogbookActivityStatusType[key], Name: key.replace(/_/g, ' ') }));
        }

        public static ApplicationAccessTypeDDArray() {
            return Object.keys(ApplicationAccessType)
                .map(key => ({ Id: ApplicationAccessType[key], Name: key.replace(/_/g, ' ') }));
        }
        public static BulkRegistrationPageTypeDDArray() {
            return Object.keys(BulkRegistrationPageType)
                .map(key => ({ Id: BulkRegistrationPageType[key], Name: key.replace(/_/g, ' ') }));
        }
        public static IntegrationReportUploadCriteriaDDArray() {
            return Object.keys(IntegrationReportUploadCriteria)
                .map(key => ({ Id: IntegrationReportUploadCriteria[key], Name: key.replace(/_/g, ' ') }));
        }

        public static DeltaCheckTypeDDArray() {
            return Object.keys(DeltaDDCheckType)
                .map(key => ({ Id: DeltaDDCheckType[key], Name: key.replace(/_/g, ' ') }));
        }

        public static RateTypeDDArray() {
            return Object.keys(RateType)
                .map(key => ({ Id: RateType[key], Name: key.replace(/_/g, ' ') }));
        }

        public static MonthDDArray() {
            return Object.keys(Month)
                .map(key => ({ Id: Number(Month[key]), Name: key.replace(/_/g, ' ') }));
        }
        public static ReceiptBookStatusDDArray() {
            return Object.keys(ReceiptBookStatus)
                .map(key => ({ Id: ReceiptBookStatus[key], Name: key.replace(/_/g, ' ') }));
        }

        public static ShipmentContainDDArray() {
            return Object.keys(ShipmentContain)
                .map(key => ({ Id: ShipmentContain[key], Name: key.replace(/_/g, ' ') }));
        }

        public static DiscountReportTypeDDArray() {
            return Object.keys(DiscountReportType)
                .map(key => ({ Id: DiscountReportType[key], Name: key.replace(/_/g, ' ') }));
        }


        public static B2BDocumentStatusDDArray() {
            return Object.keys(B2BDocumentStatus)
                .map(key => ({ Id: B2BDocumentStatus[key], Name: key.replace(/_/g, ' ') }));
        }

        public static ShipmentModeDDArray() {
            return Object.keys(ShipmentMode)
                .map(key => ({ Id: ShipmentMode[key], Name: key.replace(/_/g, ' ') }));
        }

        public static ShipmentTypeDDArray() {
            return Object.keys(ShipmentType)
                .map(key => ({ Id: ShipmentType[key], Name: key.replace(/_/g, ' ') }));
        }

        public static ShipmentFrequencyDDArray() {
            return Object.keys(ShipmentFrequency)
                .map(key => ({ Id: ShipmentFrequency[key], Name: key.replace(/_/g, ' ') }));
        }

        public static ShipmentStatusDDArray() {
            return Object.keys(ShipmentStatus)
                .map(key => ({ Id: ShipmentStatus[key], Name: key.replace(/_/g, ' ') }));
        }

        public static InstrumentCommunicationPersonTypeDDArray() {
            return Object.keys(InstrumentCommunicationPersonType)
                .map(key => ({ Id: InstrumentCommunicationPersonType[key], Name: key.replace(/_/g, ' ') }));
        }

        public static SpecimenStatusDDArray() {
            return Object.keys(SpecimenStatus)
                .map(key => ({ Id: SpecimenStatus[key], Name: key.replace(/_/g, ' ') }));
        }

        public static VoucherReferenceTypeDDArray() {
            return Object.keys(VoucherReferenceType)
                .map(key => ({ Id: VoucherReferenceType[key], Name: key.replace(/_/g, ' ') }));
        }

        public static POPreClosureStatusDDArray() {
            return Object.keys(POPreClosureStatus)
                .map(key => ({ Id: POPreClosureStatus[key], Name: key.replace(/_/g, ' ') }));
        }
        public static LogbookFieldTypeDDArray() {
            return Object.keys(LogbookFieldType)
                .map(key => ({ Id: LogbookFieldType[key], Name: key.replace(/_/g, ' ') }));
        }

        public static LogbookSearchFieldTypeDDArray() {
            return Object.keys(LogbookSearchFieldType)
                .map(key => ({ Id: LogbookSearchFieldType[key], Name: key.replace(/_/g, ' ') }));
        }

        public static LogbookFieldDataTypeDDArray() {
            return Object.keys(LogbookFieldDataType)
                .map(key => ({ Id: LogbookFieldDataType[key], Name: key.replace(/_/g, ' ') }));
        }

        public static LogbookDropdownSourceDDArray() {
            return Object.keys(LogbookDropdownSource)
                .map(key => ({ Id: LogbookDropdownSource[key], Name: key.replace(/_/g, ' ') }));
        }

        public static BarcodeBasedOnDDArray() {
            return Object.keys(BarcodeBasedOn)
                .map(key => ({ Id: BarcodeBasedOn[key], Name: key.replace(/_/g, ' ') }));
        }

        public static EligibilitiesDDArray() {
            return Object.keys(Eligibilities)
                .map(key => ({ Id: Eligibilities[key], Name: key.replace(/_/g, ' ') }));
        }
        public static PaymentModeDDArray() {
            return Object.keys(PaymentMode)
                .map(key => ({ Id: PaymentMode[key], Name: key.replace(/_/g, ' ') }));
        }
        public static DaysArray() {
            return Object.keys(Days)
                .map(key => ({ Id: Days[key], Name: key.replace(/_/g, ' ') }));
        }
        public static DiscountTypeArray() {
            return Object.keys(DiscountType)
                .map(key => ({ Id: DiscountType[key], Name: key.replace(/_/g, ' ') }));
        }

        public static RegistrationDiscountTypeArray() {
            return Object.keys(RegistrationDiscountType)
                .map(key => ({ Id: RegistrationDiscountType[key], Name: key.replace(/_/g, ' ') }));
        }

        public static AccreditationArray() {
            return Object.keys(Accreditation)
                .map(key => ({ Id: Accreditation[key], Name: key.replace(/_/g, ' ') }));
        }
        public static VisitStatusArray() {
            return Object.keys(VisitRouteStatus)
                .map(key => ({ Id: VisitRouteStatus[key], Name: key.replace(/_/g, ' ') }));
        }
        public static VisitSearchStatusArray() {
            return Object.keys(VisitRouteSearchStatus)
                .map(key => ({ Id: VisitRouteSearchStatus[key], Name: key.replace(/_/g, ' ') }));
        }
        public static LocationTypeArray() {
            return Object.keys(LocationType)
                .map(key => ({ Id: LocationType[key], Name: key.replace(/_/g, ' ') }));
        }

        public static SMSDesignTemplateGroupNameArray() {
            return Object.keys(SMSDesignTemplateGroupName)
                .map(key => ({ Id: SMSDesignTemplateGroupName[key], Name: key.replace(/_/g, ' ') }));
        }

        public static EmailDesignTemplateGroupNameArray() {
            return Object.keys(EmailDesignTemplateGroupName)
                .map(key => ({ Id: EmailDesignTemplateGroupName[key], Name: key.replace(/_/g, ' ') }));
        }

        public static RegistrationTypeArray() {
            return Object.keys(RegistrationType)
                .map(key => ({ Id: RegistrationType[key], Name: key.replace(/_/g, ' ') }));
        }

        public static TestResultStatusArray() {
            return Object.keys(TestResultStatus)
                .map(key => ({ Id: TestResultStatus[key], Name: key.replace(/_/g, ' ') }));
        }

        public static TestMethodTypeArray() {
            return Object.keys(TestMethodType)
                .map(key => ({ Id: TestMethodType[key], Name: key.replace(/_/g, ' ') }));
        }

        public static RegistrationResultStatusTypeArray() {
            return Object.keys(RegistrationResultStatusType)
                .map(key => ({ Id: RegistrationResultStatusType[key], Name: key.replace(/_/g, ' ') }));
        }

        public static RegistrationServiceStatusTypeForFilterArray() {
            return Object.keys(RegistrationServiceStatusTypeForFilter)
                .map(key => ({ Id: RegistrationServiceStatusTypeForFilter[key], Name: key.replace(/_/g, ' ') }));
        }

        public static RegistrationServiceStatusTypeForFilterLevel1Array() {
            return Object.keys(RegistrationServiceStatusTypeForFilterLevel1)
                .map(key => ({ Id: RegistrationServiceStatusTypeForFilterLevel1[key], Name: key.replace(/_/g, ' ') }));
        }


        public static RegistrationResultDisplayStatusTypeArray() {
            return Object.keys(RegistrationResultDisplayStatusType)
                .map(key => ({ Id: RegistrationResultDisplayStatusType[key], Name: key.replace(/_/g, ' ') }));
        }

        public static RegistrationServiceStatusTypeArray() {
            return Object.keys(RegistrationServiceStatusType)
                .map(key => ({ Id: RegistrationServiceStatusType[key], Name: key.replace(/_/g, ' ') }));
        }

        public static VisitRouteAnalysisStatusArray() {
            return Object.keys(VisitRouteAnalysisStatus)
                .map(key => ({ Id: VisitRouteAnalysisStatus[key], Name: key.replace(/_/g, ' ') }));
        }

        public static LogInOutStatusArray() {
            return Object.keys(LogInOutStatus)
                .map(key => ({ Id: LogInOutStatus[key], Name: key.replace(/_/g, ' ') }));
        }

        public static UserActivityTransactionTypeArray() {
            return Object.keys(UserActivityTransactionType)
                .map(key => ({ Id: UserActivityTransactionType[key], Name: key.replace(/_/g, ' ') }));
        }
        public static ConsentFormParameterArray() {
            return Object.keys(ConsentFormParameter)
                .map(key => ({ Id: ConsentFormParameter[key], Name: key.replace(/_/g, ' ') }));
        }
        public static RegistrationPatientTypeArray() {
            return Object.keys(RegistrationPatientType)
                .map(key => ({ Id: RegistrationPatientType[key], Name: key.replace(/_/g, ' ') }));
        }

        public static NewRegistrationPatientTypeArray() {
            return Object.keys(NewRegistrationPatientType)
                .map(key => ({ Id: NewRegistrationPatientType[key], Name: key.replace(/_/g, ' ') }));
        }

        public static InsuranceTypeArray() {
            return Object.keys(InsuranceType)
                .map(key => ({ Id: InsuranceType[key], Name: key.replace(/_/g, ' ') }));
        }
        public static TestResultCompulsoryStep() {
            return Object.keys(TestResultCompulsoryStep)
                .map(key => ({ Id: TestResultCompulsoryStep[key], Name: key.replace(/_/g, ' ') }));
        }
        public static OrganismReferenceRangeMethodArray() {
            return Object.keys(MicroBiologyMethodName)
                .map(key => ({ Id: MicroBiologyMethodName[key], Name: key.replace(/_/g, ' ') }));
        }
        public static OrganismDrugClassificationArray() {
            return Object.keys(OrganismDrugClassification)
                .map(key => ({ Id: OrganismDrugClassification[key], Name: key.replace(/_/g, ' ') }));
        }
        public static TypeOfPeriodArray() {
            return Object.keys(TypeOfPeriod)
                .map(key => ({ Id: TypeOfPeriod[key], Name: key.replace(/_/g, ' ') }));
        }
        public static B2BDoctorSMSEmailTypeArray() {
            return Object.keys(B2BDoctorSMSEmailType)
                .map(key => ({ Id: B2BDoctorSMSEmailType[key], Name: key.replace(/_/g, ' ') }));
        }
        public static UserTypeArray() {
            return Object.keys(UserType)
                .map(key => ({ Id: UserType[key], Name: key.replace(/_/g, ' ') }));
        }
        public static AlertMessageTypeArray() {
            return Object.keys(AlertMessageType)
                .map(key => ({ Id: AlertMessageType[key], Name: key.replace(/_/g, ' ') }));
        }
        public static HistoResultEntryTypeArray() {
            return Object.keys(HistoResultEntryType)
                .map(key => ({ Id: HistoResultEntryType[key], Name: key.replace(/_/g, ' ') }));
        }

        public static ServiceWorkflowArray() {
            return Object.keys(ServiceWorkflow)
                .map(key => ({ Id: ServiceWorkflow[key], Name: key.replace(/_/g, ' ') }));
        }

        public static HistoStatusArray() {
            return Object.keys(HistoStatus)
                .map(key => ({ Id: HistoStatus[key], Name: key.replace(/_/g, ' ') }));
        }

        public static RegistrationServiceTaskStatusArray() {
            return Object.keys(RegistrationServiceTaskStatus)
                .map(key => ({ Id: RegistrationServiceTaskStatus[key], Name: key.replace(/_/g, ' ') }));
        }



        public static HistoStatusDisplayArray() {
            return Object.keys(HistoStatusDisplay)
                .map(key => ({ Id: HistoStatusDisplay[key], Name: key.replace(/_/g, ' ') }));
        }

        public static GrossingProcessingTypeArray() {
            return Object.keys(GrossingProcessingType)
                .map(key => ({ Id: GrossingProcessingType[key], Name: key.replace(/_/g, ' ') }));
        }

        public static ReportControlTypeArray() {
            return Object.keys(ReportControlType)
                .map(key => ({ Id: ReportControlType[key], Name: key.replace(/_/g, ' ') }));
        }

        public static RDLCImageSizingArray() {
            return Object.keys(RDLCImageSizing)
                .map(key => ({ Id: RDLCImageSizing[key], Name: key.replace(/_/g, ' ') }));
        }


        public static ReportDesignerTypeArray() {
            return Object.keys(ReportDesignType)
                .map(key => ({ Id: ReportDesignType[key], Name: key.replace(/_/g, ' ') }));
        }

        public static ReportSingleVariableArray() {
            return Object.keys(ReportSingleVariable)
                .map(key => ({ Id: ReportSingleVariable[key], Name: key.replace(/_/g, ' ') }));
        }

        public static ReportListVariableArray() {
            return Object.keys(ReportListVariable)
                .map(key => ({ Id: ReportListVariable[key], Name: key.replace(/_/g, ' ') }));
        }

        public static ExpressionTypeVariableArray() {
            return Object.keys(ExpressionType)
                .map(key => ({ Id: ExpressionType[key], Name: key.replace(/_/g, ' ') }));
        }

        public static ReportFontTypeArray() {
            return Object.keys(ReportFontType)
                .map(key => ({ Id: ReportFontType[key], Name: key.replace(/_/g, ' ') }));
        }

        public static PaymentStatusArray() {
            return Object.keys(PaymentStatus)
                .map(key => ({ Id: PaymentStatus[key], Name: key.replace(/_/g, ' ') }));
        }

        public static PaymentStatusWithOutAllArray() {
            return Object.keys(PaymentStatusWithOutAll)
                .map(key => ({ Id: PaymentStatusWithOutAll[key], Name: key.replace(/_/g, ' ') }));
        }

        public static BillRegisterReportFormateArray() {
            return Object.keys(BillRegisterReportFormate)
                .map(key => ({ Id: BillRegisterReportFormate[key], Name: key.replace(/_/g, ' ') }));
        }

        public static SalesSummaryReportFormatArray() {
            return Object.keys(SalesSummaryReportFormat)
                .map(key => ({ Id: SalesSummaryReportFormat[key], Name: key.replace(/_/g, ' ') }));
        }

        public static ServiceSalesSummaryReportFormatArray() {
            return Object.keys(ServiceSalesSummaryReportFormat)
                .map(key => ({ Id: ServiceSalesSummaryReportFormat[key], Name: key.replace(/_/g, ' ') }));
        }

        public static QueueActivityArray() {
            return Object.keys(QueueActivity)
                .map(key => ({ Id: QueueActivity[key], Name: key.replace(/_/g, ' '), ActivityName: QueueActivity[key], IsSelected: false }));
        }

        public static SpecimenInOutStatusArray() {
            return Object.keys(SpecimenInOutStatus)
                .map(key => ({ Id: SpecimenInOutStatus[key], Name: key.replace(/_/g, ' '), ActivityName: SpecimenInOutStatus[key], IsSelected: false }));
        }
        public static SpecimenInStatusArray() {
            return Object.keys(SpecimenInStatus)
                .map(key => ({ Id: SpecimenInStatus[key], Name: key.replace(/_/g, ' '), ActivityName: SpecimenInStatus[key], IsSelected: false }));
        }
        public static FormEStatusArray() {
            return Object.keys(FormEStatus)
                .map(key => ({ Id: FormEStatus[key], Name: key.replace(/_/g, ' '), ActivityName: FormEStatus[key], IsSelected: false }));
        }
        public static DataAuthorizationStatusArray() {
            return Object.keys(DataAuthorizationStatus)
                .map(key => ({ Id: DataAuthorizationStatus[key], Name: key.replace(/_/g, ' '), ActivityName: DataAuthorizationStatus[key], IsSelected: false }));
        }
        public static DataAuthorizationStage1StatusArray() {
            return Object.keys(DataAuthorizationStage1Status)
                .map(key => ({ Id: DataAuthorizationStage1Status[key], Name: key.replace(/_/g, ' '), ActivityName: DataAuthorizationStage1Status[key], IsSelected: false }));
        }

        public static AuditTrailCategoryArray() {
            return Object.keys(AuditTrailCategory)
                .map(key => ({ Id: AuditTrailCategory[key], Name: key.replace(/_/g, ' '), ActivityName: AuditTrailCategory[key], IsSelected: false }));
        }
        public static AuditTrailSubCategoryArray() {
            return Object.keys(AuditTrailSubCategory)
                .map(key => ({ Id: AuditTrailSubCategory[key], Name: key.replace(/_/g, ' '), ActivityName: AuditTrailSubCategory[key], IsSelected: false }));
        }

        public static SuffixPrefixArray() {
            return Object.keys(SuffixPrefix)
                .map(key => ({ Id: SuffixPrefix[key], Name: key.replace(/_/g, ' ') }));
        }

        public static OrderTypeArray() {
            return Object.keys(OrderType)
                .map(key => ({ Id: OrderType[key], Name: key.replace(/_/g, ' ') }));
        }

        public static DashboardComponentTypeArray() {
            return Object.keys(DashboardComponentType)
                .map(key => ({ Id: DashboardComponentType[key], Name: key.replace(/_/g, ' ') }));
        }

        public static ShipmentOutFilterStatusArray() {
            return Object.keys(ShipmentOutFilterStatus)
                .map(key => ({ Id: ShipmentOutFilterStatus[key], Name: key.replace(/_/g, ' ') }));
        }

        public static InstrumentMaintenanceScheduleFrequencyArray() {
            return Object.keys(InstrumentMaintenanceScheduleFrequency)
                .map(key => ({ Id: InstrumentMaintenanceScheduleFrequency[key], Name: key.replace(/_/g, ' ') }));
        }
        public static WeekDaysArray() {
            return Object.keys(WeekDays)
                .map(key => ({ Id: WeekDays[key], Name: key.replace(/_/g, ' ') }));
        }

        public static MicroBiologyMethodNameArray() {
            return Object.keys(MicroBiologyMethodName)
                .map(key => ({ Id: MicroBiologyMethodName[key], Name: key.replace(/_/g, ' ') }));
        }
        public static ServiceTestingTypeArray() {
            return Object.keys(ServiceTestingType)
                .map(key => ({ Id: ServiceTestingType[key], Name: key.replace(/_/g, ' ') }));
        }


        public static ReportPrintTypeArray() {
            return Object.keys(ReportPrintType)
                .map(key => ({ Id: ReportPrintType[key], Name: key.replace(/_/g, ' ') }));
        }

        public static SpecimenAccessioningStatusArray() {
            return Object.keys(SpecimenAccessioningStatus)
                .map(key => ({ Id: SpecimenAccessioningStatus[key], Name: key.replace(/_/g, ' ') }));
        }

        public static priceListType() {
            return Object.keys(priceListType)
                .map(key => ({ Id: priceListType[key], Name: key.replace(/_/g, ' ') }));
        }

        public static DefineNotDefineDDLArray() {
            return Object.keys(DefineNotDefine)
                .map(key => ({ Id: DefineNotDefine[key], Name: key.replace(/_/g, ' ') }));
        }

        public static TaskStatusDDArray() {
            return Object.keys(TaskStatus)
                .map(key => ({ Id: TaskStatus[key], Name: key.replace(/_/g, ' ') }));
        }

        public static OutsourceProcessingTypeDDArray() {
            return Object.keys(OutsourceProcessingType)
                .map(key => ({ Id: OutsourceProcessingType[key], Name: key.replace(/_/g, ' ') }));
        }
        public static ProcessingTypeArray() {
            return Object.keys(ProcessingType)
                .map(key => ({ Id: ProcessingType[key], Name: key.replace(/_/g, ' ') }));
        }
        public static NotificationTypeArray() {
            return Object.keys(NotificationType)
                .map(key => ({ Id: NotificationType[key], Name: key.replace(/_/g, ' '), IsSelected: false }));
        }

        public static StoreTypeArray() {
            return Object.keys(StoreType)
                .map(key => ({ Id: StoreType[key], Name: key.replace(/_/g, ' '), IsSelected: false }));
        }

        public static PurchaseRequisitionReportStatusArray() {
            return Object.keys(PurchaseRequisitionReportStatus)
                .map(key => ({ Id: PurchaseRequisitionReportStatus[key], Name: key.replace(/_/g, ' '), IsSelected: false }));
        }

        public static PurchaseRequisitionStatusArray() {
            return Object.keys(PurchaseRequisitionStatus)
                .map(key => ({ Id: PurchaseRequisitionStatus[key], Name: key.replace(/_/g, ' '), IsSelected: false }));
        }

        public static POStatusArray() {
            return Object.keys(POStatus)
                .map(key => ({ Id: POStatus[key], Name: key.replace(/_/g, ' '), IsSelected: false }));
        }

        public static POApprovalStatusArray() {
            return Object.keys(POApprovalStatus)
                .map(key => ({ Id: POApprovalStatus[key], Name: key.replace(/_/g, ' '), IsSelected: false }));
        }

        public static ValidateStatusArray() {
            return Object.keys(ValidateStatus)
                .map(key => ({ Id: ValidateStatus[key], Name: key.replace(/_/g, ' '), IsSelected: false }));
        }

        public static ApprovalStatusArray() {
            return Object.keys(ApprovalStatus)
                .map(key => ({ Id: ApprovalStatus[key], Name: key.replace(/_/g, ' '), IsSelected: false }));
        }

        public static DocumentApprovalStatusArray() {
            return Object.keys(DocumentApprovalStatus)
                .map(key => ({ Id: DocumentApprovalStatus[key], Name: key.replace(/_/g, ' '), IsSelected: false }));
        }

        public static InstrumentDashboardArray() {
            return Object.keys(InstrumentDashboard)
                .map(key => ({ Id: InstrumentDashboard[key], Name: key.replace(/_/g, ' ') }));
        }
        public static EmbeddedTypeArray() {
            return Object.keys(EmbeddedType)
                .map(key => ({ Id: EmbeddedType[key], Name: key.replace(/_/g, ' ') }));
        }

        public static ProblemSampleNotificationAttachmentTypeArray() {
            return Object.keys(ProblemSampleNotificationAttachmentType)
                .map(key => ({ Id: ProblemSampleNotificationAttachmentType[key], Name: key.replace(/_/g, ' ') }));
        }
        public static ResultConditionTypeArray() {
            return Object.keys(ResultConditionType)
                .map(key => ({ Id: ResultConditionType[key], Name: key.replace(/_/g, ' ') }));
        }
        public static FileStatusTypeArray() {
            return Object.keys(FileStatusType)
                .map(key => ({ Id: FileStatusType[key], Name: key.replace(/_/g, ' ') }));
        }
        public static HandOverTypeArray() {
            return Object.keys(HandOverType)
                .map(key => ({ Id: HandOverType[key], Name: key.replace(/_/g, ' ') }));
        }
        public static AccessioningCategoryArray() {
            return Object.keys(AccessioningCategory)
                .map(key => ({ Id: AccessioningCategory[key], Name: key.replace(/_/g, ' ') }));
        }

        public static BatchStatusArray() {
            return Object.keys(BatchStatus)
                .map(key => ({ Id: BatchStatus[key], Name: key.replace(/_/g, ' ') }));
        }

        public static OrganismReportTypeArray() {
            return Object.keys(OrganismReportType)
                .map(key => ({ Id: OrganismReportType[key], Name: key.replace(/_/g, ' ') }));
        }


        public static DeltaCheckViolationTypeArray() {
            return Object.keys(DeltaViolationType)
                .map(key => ({ Id: DeltaViolationType[key], Name: key.replace(/_/g, ' ') }));
        }

        public static AddressbookFilterTypeArray() {
            return Object.keys(AddressbookFilterType)
                .map(key => ({ Id: AddressbookFilterType[key], Name: key.replace(/_/g, ' ') }));
        }
        public static PaymentDepositedStatusArray() {
            return Object.keys(PaymentDepositedStatus)
                .map(key => ({ Id: PaymentDepositedStatus[key], Name: key.replace(/_/g, ' ') }));
        }
        public static TRFVerificationStatusArray() {
            return Object.keys(TRFVerificationStatus)
                .map(key => ({ Id: TRFVerificationStatus[key], Name: key.replace(/_/g, ' ') }));
        }

        public static InvoiceStatusArray() {
            return Object.keys(InvoiceStatus)
                .map(key => ({ Id: InvoiceStatus[key], Name: key.replace(/_/g, ' ') }));
        }

        public static ReceiptFormatArray() {
            return Object.keys(ReceiptFormat)
                .map(key => ({ Id: ReceiptFormat[key], Name: key.replace(/_/g, ' ') }));
        }
        public static InvoiceFormatArray() {
            return Object.keys(InvoiceFormat)
                .map(key => ({ Id: InvoiceFormat[key], Name: key.replace(/_/g, ' ') }));
        }
        public static ApprovalTypeArray() {
            return Object.keys(ApprovalType)
                .map(key => ({ Id: ApprovalType[key], Name: key.replace(/_/g, ' ') }));
        }
        public static ProcessingPriorityArray() {
            return Object.keys(ProcessingPriority)
                .map(key => ({ Id: ProcessingPriority[key], Name: key.replace(/_/g, ' ') }));
        }


        public static ServiceSalesReportTypeArray() {
            return Object.keys(ServiceSalesReportType)
                .map(key => ({ Id: ServiceSalesReportType[key], Name: key.replace(/_/g, ' ') }));
        }
        public static OutSourceRevenueReportTypeArray() {
            return Object.keys(OutSourceRevenueReportType)
                .map(key => ({ Id: OutSourceRevenueReportType[key], Name: key.replace(/_/g, ' ') }));
        }
        public static ReceiptLayoutArray() {
            return Object.keys(ReceiptLayout)
                .map(key => ({ Id: ReceiptLayout[key], Name: key.replace(/_/g, ' ') }));
        }

        public static ConditionTypeArray() {
            return Object.keys(ConditionType)
                .map(key => ({ Id: ConditionType[key], Name: key.replace(/_/g, ' ') }));
        }
        public static CustomerFeedbackRatingArray() {
            return Object.keys(CustomerFeedbackRating)
                .map(key => ({ Id: CustomerFeedbackRating[key], Name: key.replace(/_/g, ' ') }));
        }
        public static HL7RecordTypeArray() {
            return Object.keys(HL7RecordType)
                .map(key => ({ Id: HL7RecordType[key], Name: key.replace(/_/g, ' ') }));
        }
        public static HL7FieldNameArray() {
            return Object.keys(HL7FieldName)
                .map(key => ({ Id: HL7FieldName[key], Name: key.replace(/_/g, ' ') }));
        }

        public static GenerateHL7FieldNameArray() {
            return Object.keys(GenerateHL7FieldName)
                .map(key => ({ Id: GenerateHL7FieldName[key], Name: key.replace(/_/g, ' ') }));
        }

        public static PaymentGatewayArray() {
            return Object.keys(PaymentGateway)
                .map(key => ({ Id: PaymentGateway[key], Name: key.replace(/_/g, ' ') }));
        }

        public static RegistrationCreditLimitActionArray() {
            return Object.keys(RegistrationCreditLimitAction)
                .map(key => ({ Id: RegistrationCreditLimitAction[key], Name: key.replace(/_/g, ' ') }));
        }

        public static PurchaseInvoiceVoucherStatusArray() {
            return Object.keys(PurchaseInvoiceVoucherStatus)
                .map(key => ({ Id: PurchaseInvoiceVoucherStatus[key], Name: key.replace(/_/g, ' ') }));
        }
        public static RuleTypeArray() {
            return Object.keys(RuleType)
                .map(key => ({ Id: RuleType[key], Name: key.replace(/_/g, ' ') }));
        }
        public static RuleCodeTypeArray() {
            return Object.keys(RuleCodeType)
                .map(key => ({ Id: RuleCodeType[key], Name: key.replace(/_/g, ' ') }));
        } public static NoOfLevelsArray() {
            return Object.keys(NoOfLevels)
                .map(key => ({ Id: NoOfLevels[key], Name: key.replace(/_/g, ' ') }));
        }

        public static ComparisionTypeArray() {
            return Object.keys(ComparisonType)
                .map(key => ({ Id: ComparisonType[key], Name: key.replace(/_/g, ' ') }));
        }
        public static ComparisionOperatorTypeArray() {
            return Object.keys(ComparisonOperatorType)
                .map(key => ({ Id: ComparisonOperatorType[key], Name: key.replace(/_/g, ' ') }));
        }

        public static MeanSDCVTypeArray() {
            return Object.keys(MeanSDCVType)
                .map(key => ({ Id: MeanSDCVType[key], Name: key.replace(/_/g, ' ') }));
        }
        public static WarningRejectionTypeArray() {
            return Object.keys(WarningRejectionType)
                .map(key => ({ Id: WarningRejectionType[key], Name: key.replace(/_/g, ' ') }));
        }
        public static OutsourceTRFParameterArray() {
            return Object.keys(OutsourceTRFParameter)
                .map(key => ({ Id: OutsourceTRFParameter[key], Name: key.replace(/_/g, ' ') }));
        }
        public static B2BTypeArray() {
            return Object.keys(B2BType)
                .map(key => ({ Id: B2BType[key], Name: key.replace(/_/g, ' ') }));
        }
        public static ResultStatusArray() {
            return Object.keys(ResultStatus)
                .map(key => ({ Id: ResultStatus[key], Name: key.replace(/_/g, ' ') }));
        }
        public static HelpDDResultFlagTypeArray() {
            return Object.keys(HelpDDResultFlagType)
                .map(key => ({ Id: HelpDDResultFlagType[key], Name: key.replace(/_/g, ' ') }));
        }
        public static QCStatusArray() {
            return Object.keys(QCStatus)
                .map(key => ({ Id: QCStatus[key], Name: key.replace(/_/g, ' ') }));
        }
        public static AddressPrintingTypeArray() {
            return Object.keys(AddressPrintingType)
                .map(key => ({ Id: AddressPrintingType[key], Name: key.replace(/_/g, ' ') }));
        }
        public static TestTaggingTypeArray() {
            return Object.keys(TestTaggingType)
                .map(key => ({ Id: TestTaggingType[key], Name: key.replace(/_/g, ' ') }));
        }
        public static TestResultExcelFieldArray() {
            return Object.keys(TestResultExcelField)
                .map(key => ({ Id: TestResultExcelField[key], Name: key.replace(/_/g, ' ') }));
        }
        public static B2BBalancelogicArray() {
            return Object.keys(B2BBalanceLogic)
                .map(key => ({ Id: B2BBalanceLogic[key], Name: key.replace(/_/g, ' ') }));
        }
        public static PriceListStatusArray() {
            return Object.keys(PriceListStatus)
                .map(key => ({ Id: PriceListStatus[key], Name: key.replace(/_/g, ' ') }));
        }
        public static MobileBelongsToArray() {
            return Object.keys(MobileBelongsTo)
                .map(key => ({ Id: MobileBelongsTo[key], Name: key.replace(/_/g, ' ') }));
        }
        public static ClinicalSymptomsArray() {
            return Object.keys(ClinicalSymptoms)
                .map(key => ({ Id: ClinicalSymptoms[key], Name: key.replace(/_/g, ' ') }));
        }
        public static PatientConditionArray() {
            return Object.keys(PatientCondition)
                .map(key => ({ Id: PatientCondition[key], Name: key.replace(/_/g, ' ') }));
        }

        public static ICMRCovidDataStatusArray() {
            return Object.keys(ICMRCovidDataStatus)
                .map(key => ({ Id: ICMRCovidDataStatus[key], Name: key.replace(/_/g, ' ') }));
        }

        public static AgeingReportTypeArray() {
            return Object.keys(AgeingReportType)
                .map(key => ({ Id: AgeingReportType[key], Name: key.replace(/_/g, ' ') }));
        }

        public static InstrumentMaintenanceStatusTypeArray() {
            return Object.keys(InstrumentMaintenanceStatus)
                .map(key => ({ Id: InstrumentMaintenanceStatus[key], Name: key.replace(/_/g, ' ') }));
        }
        public static HL7ServiceTypeArray() {
            return Object.keys(HL7ServiceType)
                .map(key => ({ Id: HL7ServiceType[key], Name: key.replace(/_/g, ' ') }));
        }

        public static DateCompareWithArray() {
            return Object.keys(DateCompareWith)
                .map(key => ({ Id: DateCompareWith[key], Name: key.replace(/_/g, ' ') }));
        }

        public static POSDeviceTypeArray() {
            return Object.keys(POSDeviceType)
                .map(key => ({ Id: POSDeviceType[key], Name: key.replace(/_/g, ' ') }));
        }
        public static POSTransactionStatusArray() {
            return Object.keys(POSTransactionStatus)
                .map(key => ({ Id: POSTransactionStatus[key], Name: key.replace(/_/g, ' ') }));
        }
        public static RegPatienetNameCaseArray() {
            return Object.keys(RegPatienetNameCase)
                .map(key => ({ Id: RegPatienetNameCase[key], Name: key.replace(/_/g, ' ') }));
        }

        public static QueueTokenStatusArray() {
            return Object.keys(QueueTokenStatus)
                .map(key => ({ Id: QueueTokenStatus[key], Name: key.replace(/_/g, ' ') }));
        }
        public static B2BBillRegisterReportFormateArray() {
            return Object.keys(B2BBillRegisterReportFormate)
                .map(key => ({ Id: B2BBillRegisterReportFormate[key], Name: key.replace(/_/g, ' ') }));
        }
        public static batchExcelExportDirectionArray() {
            return Object.keys(BatchExcelExportDirection)
                .map(key => ({ Id: BatchExcelExportDirection[key], Name: key.replace(/_/g, ' ') }));
        }

        public static ICRMStatusArray() {
            return Object.keys(ICRMStatus)
                .map(key => ({ Id: ICRMStatus[key], Name: key.replace(/_/g, ' ') }));
        }

        public static PaymentDepositTypeArray() {
            return Object.keys(PaymentDepositType)
                .map(key => ({ Id: PaymentDepositType[key], Name: key.replace(/_/g, ' ') }));
        }

        public static RegOrderByArray() {
            return Object.keys(RegOrderBy)
                .map(key => ({ Id: RegOrderBy[key], Name: key.replace(/_/g, ' ') }));
        }

        public static SmartReportTypeArray() {
            return Object.keys(SmartReportType)
                .map(key => ({ Id: SmartReportType[key], Name: key.replace(/_/g, ' ') }));
        }

        public static PRMRLevelTypeArray() {
            return Object.keys(PRMRLevelType)
                .map(key => ({ Id: PRMRLevelType[key], Name: key.replace(/_/g, ' ') }));
        }


        public static LotFrequencyArray() {
            return Object.keys(LotFrequency)
                .map(key => ({ Id: LotFrequency[key], Name: key.replace(/_/g, ' ') }));
        }

        public static VendorAgreementStatusArray() {
            return Object.keys(VendorAgreementStatus)
                .map(key => ({ Id: VendorAgreementStatus[key], Name: key.replace(/_/g, ' ') }));
        }

        public static DiseaseTypeArray() {
            return Object.keys(DiseaseType)
                .map(key => ({ Id: DiseaseType[key], Name: key.replace(/_/g, ' ') }));
        }

        public static VisitCategoryArray() {
            return Object.keys(VisitCategory)
                .map(key => ({ Id: VisitCategory[key], Name: key.replace(/_/g, ' ') }));
        }

        public static TRFIdentificationStatusArray() {
            return Object.keys(TRFIdentificationStatus)
                .map(key => ({ Id: TRFIdentificationStatus[key], Name: key.replace(/_/g, ' ') }));
        }

        public static DepartmentServiceConfirmationTypeArray() {
            return Object.keys(DepartmentServiceConfirmationType)
                .map(key => ({ Id: DepartmentServiceConfirmationType[key], Name: key.replace(/_/g, ' ') }));
        }

        public static TrustedIPDeviceTypeArray() {
            return Object.keys(TrustedIPDeviceType)
                .map(key => ({ Id: TrustedIPDeviceType[key], Name: key.replace(/_/g, ' ') }));
        }

        public static B2BCategoryArray() {
            return Object.keys(B2BCategory)
                .map(key => ({ Id: B2BCategory[key], Name: key.replace(/_/g, ' ') }));
        }


        public static CouponTypeArray() {
            return Object.keys(CouponType)
                .map(key => ({ Id: CouponType[key], Name: key.replace(/_/g, ' ') }));
        }


        public static ExpenseHeaderStatusTypeArray() {
            return Object.keys(ExpenseHeaderStatus)
                .map(key => ({ Id: ExpenseHeaderStatus[key], Name: key.replace(/_/g, ' ') }));
        }

        public static ExpensePaymentModeTypeArray() {
            return Object.keys(ExpensePaymentMode)
                .map(key => ({ Id: ExpensePaymentMode[key], Name: key.replace(/_/g, ' ') }));
        }


        public static OncallPayoutStatusTypeArray() {
            return Object.keys(OncallPayoutStatus)
                .map(key => ({ Id: OncallPayoutStatus[key], Name: key.replace(/_/g, ' ') }));
        }

        public static RegTypeArray() {
            return Object.keys(RegType)
                .map(key => ({ Id: RegType[key], Name: key.replace(/_/g, ' ') }));
        }

        public static IntegrationResultFieldNameArray() {
            return Object.keys(IntegrationResultFieldName)
                .map(key => ({ Id: IntegrationResultFieldName[key], Name: key.replace(/_/g, ' ') }));
        }

        public static OrganismReferenceRangeReferenceArray() {
            return Object.keys(OrganismReferenceRangeReference)
                .map(key => ({ Id: OrganismReferenceRangeReference[key], Name: key.replace(/_/g, ' ') }));
        }

        public static InstrumentAnalyteTypeArray() {
            return Object.keys(InstrumentAnalyteType)
                .map(key => ({ Id: InstrumentAnalyteType[key], Name: key.replace(/_/g, ' ') }));
        }

        public static InstrumentAnalyteResultDataTypeArray() {
            return Object.keys(InstrumentAnalyteResultDataType)
                .map(key => ({ Id: InstrumentAnalyteResultDataType[key], Name: key.replace(/_/g, ' ') }));
        }

        public static RegistrationDiscountAuthorizationTypeArray() {
            return Object.keys(RegistrationDiscountAuthorizationType)
                .map(key => ({ Id: RegistrationDiscountAuthorizationType[key], Name: key.replace(/_/g, ' ') }));
        }

        public static DiscountPermittedByTypeArray() {
            return Object.keys(DiscountPermittedByType)
                .map(key => ({ Id: DiscountPermittedByType[key], Name: key.replace(/_/g, ' ') }));
        }

        public static CheckInOutStatusArray() {
            return Object.keys(CheckInOutStatus)
                .map(key => ({ Id: CheckInOutStatus[key], Name: key.replace(/_/g, ' ') }));
        }

        public static InvoiceApprovalStatusArray() {
            return Object.keys(InvoiceApprovalStatus)
                .map(key => ({ Id: InvoiceApprovalStatus[key], Name: key.replace(/_/g, ' ') }));
        }

        public static InformedStatusArray() {
            return Object.keys(CriticalValueInformedStatus)
                .map(key => ({ Id: CriticalValueInformedStatus[key], Name: key.replace(/_/g, ' ') }));
        }

        public static ServiceFiltersArray() {
            return Object.keys(ServiceFilterValues)
                .map(key => ({ Id: ServiceFilterValues[key], Name: key.replace(/_/g, ' ') }));
        }

        public static ResultEntryRequiredAtArray() {
            return Object.keys(ResultEntryRequiredAt)
                .map(key => ({ Id: ResultEntryRequiredAt[key], Name: key.replace(/_/g, ' ') }));
        }

        public static PriceListTypeArray() {
            return Object.keys(PriceListType)
                .map(key => ({ Id: PriceListType[key], Name: key.replace(/_/g, ' ') }));
        }

        public static ServiceCancellationLevelTypeArray() {
            return Object.keys(ServiceCancellationLevel)
                .map(key => ({ Id: ServiceCancellationLevel[key], Name: key.replace(/_/g, ' ') }));
        }

        public static ServiceCancellationStageTypeArray() {
            return Object.keys(ServiceCancellationStage)
                .map(key => ({ Id: ServiceCancellationStage[key], Name: key.replace(/_/g, ' ') }));
        }

        public static FileNameFormatReceiptLayoutTypeArray() {
            return Object.keys(FileNameFormatReceiptLayout)
                .map(key => ({ Id: FileNameFormatReceiptLayout[key], Name: key.replace(/_/g, ' ') }));
        }

        public static SamplePendingTrackerStatusTypeArray() {
            return Object.keys(SamplePendingTrackerStatus)
                .map(key => ({ Id: SamplePendingTrackerStatus[key], Name: key.replace(/_/g, ' ') }));
        }

        public static SamplePendingTrackerOutsourceStatusTypeArray() {
            return Object.keys(SamplePendingTrackerOutsourceStatus)
                .map(key => ({ Id: SamplePendingTrackerOutsourceStatus[key], Name: key.replace(/_/g, ' ') }));
        }

        public static SamplePendingTrackerScheduleTestStatusTypeArray() {
            return Object.keys(SamplePendingTrackerScheduleTestStatus)
                .map(key => ({ Id: SamplePendingTrackerScheduleTestStatus[key], Name: key.replace(/_/g, ' ') }));
        }

        public static AllowedSpecimenStatusTypeArray() {
            return Object.keys(AllowedSpecimenStatus)
                .map(key => ({ Id: AllowedSpecimenStatus[key], Name: key.replace(/_/g, ' ') }));
        }

        public static RefundApprovalStatusTypeArray() {
            return Object.keys(RefundApprovalStatus)
                .map(key => ({ Id: RefundApprovalStatus[key], Name: key.replace(/_/g, ' ') }));
        }

        public static RegistrationServiceCancellationStatusTypeArray() {
            return Object.keys(RegistrationServiceCancellationStatusType)
                .map(key => ({ Id: RegistrationServiceCancellationStatusType[key], Name: key.replace(/_/g, ' ') }));
        }

        public static TicketRegistrationTicketRelatedToTypeArray() {
            return Object.keys(TicketRegistrationTicketRelatedTo)
                .map(key => ({ Id: TicketRegistrationTicketRelatedTo[key], Name: key.replace(/_/g, ' ') }));
        }

        public static TicketRegistrationStatusTypeArray() {
            return Object.keys(TicketRegistrationStatus)
                .map(key => ({ Id: TicketRegistrationStatus[key], Name: key.replace(/_/g, ' ') }));
        }

        public static ResultOfDiagnosisArray() {
            return Object.keys(ResultOfDiagnosis)
                .map(key => ({ Id: ResultOfDiagnosis[key], Name: key.replace(/_/g, ' ') }));
        }

        public static RequiredAtArray() {
            return Object.keys(RequiredAt)
                .map(key => ({ Id: RequiredAt[key], Name: key.replace(/_/g, ' ') }));
        }

        public static ApplicableForArray() {
            return Object.keys(ApplicableFor)
                .map(key => ({ Id: ApplicableFor[key], Name: key.replace(/_/g, ' ') }));
        }

        public static ScheduleModeForArray() {
            return Object.keys(ScheduleMode)
                .map(key => ({ Id: ScheduleMode[key], Name: key.replace(/_/g, ' ') }));
        }

        public static TypeArray() {
            return Object.keys(CreditDebitType)
                .map(key => ({ Id: CreditDebitType[key], Name: key.replace(/_/g, ' ') }));
        }

        public static TrayContentTypeArray() {
            return Object.keys(TrayContent)
                .map(key => ({ Id: TrayContent[key], Name: key.replace(/_/g, ' ') }));
        }
    }
}

