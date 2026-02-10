
export class ForgotPasswordModel {
    constructor(json: any = null) {
        if (json != null) {
            this.UserId = json.UserId;
            this.Mobile = json.Mobile;
            this.Email = json.Email;
            this.OTP = json.OTP;
            this.Password = json.Password;
            this.ConfirmPassword = json.ConfirmPassword;
        }
    }

    public UserId = '';
    public Mobile = '';
    public OTP = '';
    public Email = '';
    public Password = '';
    public ConfirmPassword = '';
}


