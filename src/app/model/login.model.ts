

import { Exclude } from 'class-transformer';
import { Enumeration } from '../service/shared-service/others/enumeration';
import { BaseModel } from './base-model/base.model';


export class LoginModel extends BaseModel {
    constructor(json: any = null) {
        super(json);
        if (json != null) {
            this.UserId = json.UserId;
            this.Password = json.Password;
            this.Token = json.Token;
            this.Version = json.Version;
            this.AuthenticatorCode = json.AuthenticatorCode;

            this.UserType = json.UserType;
            this.UserName = json.UserName;
            this.ProfilePictureIconURL = json.ProfilePictureIconURL;
            this.Mobile = json.Mobile;
            this.PatientName = json.PatientName;
            this.CityId = json.CityId;
            this.CityName = json.CityName;
            this.PatientId = json.PatientId;
            this.IsOTPLogin = json.IsOTPLogin;
            this.IsPasswordAvailable = json.IsPasswordAvailable;
        }
    }

    public UserId = '';
    public Mobile = '';
    public Password = '';
    public OTP = null;
    public Token = '';
    public Version = '';
    public TrustedDeviceId: string = '';
    public AuthenticatorCode: string = null;
    public IsOTPLogin = false;
    public IsPasswordAvailable = false;
    @Exclude()
    public UserType: Enumeration.UserType = null;
    @Exclude()
    public PatientName = '';
    @Exclude()
    public CityId = null;
    @Exclude()
    public PatientId = null;
    @Exclude()
    public CityName = null;

    @Exclude()
    public UserName = '';

    @Exclude()
    public ProfilePictureIconURL = '';

    @Exclude()
    rememberMe = true;
}
