import { Exclude } from 'class-transformer';
import { SufalamModifiedByModel } from './base-model/SufalamModifiedBy.model';
import { ScanDocumentDetailsModel } from './scan-document-details';

export class ScanDocumentModel extends SufalamModifiedByModel {

    constructor(json: any = null) {
        super(json);
        if (json != null) {
            this.ScanDocumentId = json.ScanDocumentId;
            this.ScanDocumentName = json.ScanDocumentName;
            this.IsTRF = json.IsTRF;
            this.IsIdCard = json.IsIdCard;
            this.IsActive = json.IsActive;
            this.IsB2BSpecific = json.IsB2BSpecific;
            this.IsMandatory = json.IsMandatory;
            this.DownloadFileNameFormat = json.DownloadFileNameFormat;

            if (json.registrationTRFDetails != null && json.registrationTRFDetails != undefined) {
                for (let i = 0; i < json.registrationTRFDetails.length; i++) {
                    this.registrationTRFDetails.push(new ScanDocumentDetailsModel(json.registrationTRFDetails[i]));
                }
            }
        }
    }

    public ScanDocumentId = 0;
    public ScanDocumentName = '';
    public IsTRF = false;
    public IsActive = true;
    public IsIdCard = false;
    public IsB2BSpecific:boolean = false;

    public registrationTRFDetails = new Array<ScanDocumentDetailsModel>();

    public DownloadFileNameFormat = '';
    @Exclude()
    public SrNo: number = null;
    @Exclude()
    public IsMandatory:boolean = false;
}
