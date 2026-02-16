import { Exclude } from "class-transformer";
import { SufalamModifiedByModel } from "./base-model/SufalamModifiedBy.model";

export class MemberAddressModel extends SufalamModifiedByModel {

    constructor(json: any = null) {
        super(json);
        if (json != null) {
            this.MemberAddressId = json.MemberAddressId;
            this.MembershipId = json.MembershipId;
            this.CityId = json.CityId;
            this.AreaId = json.AreaId;
            this.Address = json.Address;
            this.Latitude = json.Latitude;
            this.Longitude = json.Longitude;

            this.CityName = json.CityName;
            this.AreaName = json.AreaName;
        }
    }

    public MemberAddressId = 0;
    public MembershipId = 0;
    public CityId = null;
    public AreaId = null;
    public Address = '';
    public Latitude: number = null;
    public Longitude: number = null;

    public CityName = '';
    public AreaName = '';

    @Exclude()
    public IsSelected = false;
}
