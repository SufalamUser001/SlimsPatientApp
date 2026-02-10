export class ChangePasswordModel {

    constructor(json: any = null) {
        if (json != null) {
            this.UserId = json.UserId;
            this.CurrentPassword = json.CurrentPassword;
            this.NewPassword = json.NewPassword;
            this.ConfirmPassword = json.ConfirmPassword;
            this.TrustedDeviceId = json.TrustedDeviceId;
        }
    }

    public UserId = '';
    public CurrentPassword = '';
    public NewPassword = '';
    public ConfirmPassword = '';
    public TrustedDeviceId: string = null;
}
