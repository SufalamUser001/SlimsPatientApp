
import { Exclude } from 'class-transformer';
import { SufalamCreatedByModel } from '../model/base-model/SufalamCreatedBy.model';

export class OrganismServiceMappingModel extends SufalamCreatedByModel {

    constructor(json: any = null) {
        super(json);
        if (json != null) {
            this.OrganismServiceMappingId = json.OrganismServiceMappingId;
            this.OrganismId = json.OrganismId;
            this.ServiceId = json.ServiceId;
            this.ServiceName = json.ServiceName;
            this.SpecimenMasterId = json.SpecimenMasterId;
            this.SpecimenName = json.SpecimenName;
            this.RegistrationServiceDetailsId = json.RegistrationServiceDetailsId;
            this.IsSelected = json.IsSelected;
            this.IsDeleted = json.IsDeleted;
            this.IsMarkDefault = json.IsMarkDefault;
        }
    }

    public OrganismServiceMappingId = 0;
    public OrganismId = 0;
    public ServiceId = 0;
    public ServiceName = '';
    public SpecimenMasterId = null;
    public SpecimenName = '';
    public RegistrationServiceDetailsId = 0;
    public IsSelected = false;
    public IsMarkDefault = false;

    @Exclude()
    public IsDeleted = false;
}
