import { SufalamCreatedByModel } from './base-model/SufalamCreatedBy.model';
import { Exclude } from 'class-transformer';
import { Enumeration } from '../service/shared-service/others/enumeration';

export class ScanDocumentDetailsModel extends SufalamCreatedByModel {
    constructor(json: any = null) {
        super(json);
        if (json != null) {
            this.ScanDocumentDetailsId = json.ScanDocumentDetailsId;
            this.ScanDocumentId = json.ScanDocumentId;
            this.TRFPicture = json.TRFPicture;
            this.ReferenceNo = json.ReferenceNo;
            this.TRFPictureDisplay = json.TRFPicture;
            this.DocumentPath = json.DocumentPath;
            this.ScanAt = json.ScanAt;
            this.VisitPatientDetailsId = json.VisitPatientDetailsId;
            this.FileName = json.FileName;
            this.RouteDailyDetailsId = json.RouteDailyDetailsId;
            this.PreRegistrationCount= json.PreRegistrationCount;
            this.LockBy = json.LockBy;
            this.LockOn = json.LockOn;
            this.NoOfPatient = json.NoOfPatient;
            this.ScanDocumentCreatedBy = json.ScanDocumentCreatedBy;
            this.ScanDocumentCreatedDate = json.ScanDocumentCreatedDate;
            this.TRFIdentificationDetailsId = json.TRFIdentificationDetailsId;
        }
    }

    public ScanDocumentDetailsId = 0;
    public ScanDocumentId = null;
    public ReferenceNo: string = null;
    public ScanAt: Enumeration.RegistrationDocumentTRFType = Enumeration.RegistrationDocumentTRFType.Registration;
    public TRFPicture = [];
    public DocumentPath = '';
    public VisitPatientDetailsId: number = null;
    public TRFIdentificationDetailsId: number = null;
    public RouteDailyDetailsId:number = null;
    public PreRegistrationCount: number = 0;
    public NoOfPatient: number = 0;
    public LockBy = null;
    public LockOn = null;
    
    public isSelected = false;
    
    public SrNo: number = null;
    
    @Exclude()
    public FileName = '';
    
    @Exclude()
    public TRFPictureDisplay: any;
    @Exclude()
    public ScanDocumentCreatedBy = "";
    @Exclude()
    public ScanDocumentCreatedDate : Date ;
}
