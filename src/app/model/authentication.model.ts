import { Enumeration } from "../service/shared-service/others/enumeration";


export class AuthenticationModel {
    constructor(json: any = null) {
        if (json != null) {
            this.loginUserId = json.loginUserId ? json.loginUserId : '';
            this.loginUserName = json.loginUserName ? json.loginUserName : '';
            this.loginUserType = json.loginUserType ? json.loginUserType : null;
            this.loginUserToken = json.loginUserToken ? json.loginUserToken : '';
            this.ProfilePictureIconURL = json.ProfilePictureIconURL ? json.ProfilePictureIconURL : '';
            this.PatientName = json.PatientName ? json.PatientName : '';
            this.CityId = json.CityId;
            this.PatientId = json.PatientId;
            this.CityName = json.CityName;
            this.Photograph = json.Photograph;
            this.notificationList = json.notificationList;
            this.IsPasswordAvailable = json.IsPasswordAvailable;
        }
    }

    public loginUserId = '';
    public loginUserName = '';
    public loginUserType: Enumeration.UserType = null;
    public loginUserToken = '';
    public ProfilePictureIconURL = '';
    public PatientName = '';
    public PatientId = 0;
    public CityId = 0;
    public CityName = '';
    public Photograph ;
    public IsPasswordAvailable = false;
    public notificationList: any = [];
    
}
