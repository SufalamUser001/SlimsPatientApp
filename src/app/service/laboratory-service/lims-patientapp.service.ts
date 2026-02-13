import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { tap } from 'rxjs/operators';
import { SharedService } from '../shared-service/shared.service';
import { ToastService } from '../shared-service/toast.service';
import { AuthService } from '../shared-service/auth.service';
import { LoginModel } from 'src/app/model/login.model';
import { ForgotPasswordModel } from 'src/app/model/forgot-password.model';


@Injectable({providedIn: 'root'})
export class SlimsPatientApplicationService {

    public baseService : BaseService;
    public labcartApiEndPoint = 'labcart/';
    
    constructor(private authService: AuthService,public sharedService: SharedService,private toastService: ToastService) {
            this.baseService = new BaseService(authService,sharedService,toastService);
            //this.phleboApplicationService = new PhleboApplicationService(this.baseService);
    }

      GetAPIVersion() {
        return this.baseService.post(this.labcartApiEndPoint + 'GetAPIVersion', null);
      }
    
      LabCartUserLogin(data: LoginModel) {
        return this.baseService.post(this.labcartApiEndPoint + 'LabCartUserLogin', {Mobile : data.UserId,Password:data.Password,OTP : data.OTP ,IsOTPLogin : data.IsOTPLogin});
      }
    
      LabCartUserLogout(){
        return this.baseService.post(this.labcartApiEndPoint + 'LabCartUserLogout',null);
      }
    
      SendLabCartPatientOtp(data) {
        return this.baseService.post(this.labcartApiEndPoint + 'SendLabCartPatientOtp', {Mobile : data.UserId});
      }
    
      CheckOTPForLabCart(data: ForgotPasswordModel) {
        return this.baseService.post(this.labcartApiEndPoint + 'CheckOTPForLabCart', {Mobile : data.UserId,OTP : data.OTP});
      }
    
      ChangeLabCartPassword(data){
        return this.baseService.post(this.labcartApiEndPoint + 'ChangeLabCartPassword', data);
      }

      SendLabCartPatientForgotPasswordOTP(data) {
        return this.baseService.post(this.labcartApiEndPoint + 'SendLabCartPatientForgotPasswordOTP', {Mobile : data.UserId});
      }
    
      CheckForgotPasswordOTPForLabCart(data: ForgotPasswordModel) {
        return this.baseService.post(this.labcartApiEndPoint + 'CheckForgotPasswordOTPForLabCart', {Mobile : data.UserId,OTP : data.OTP});
      }

      ChangeLabCartPasswordWithOTP(data){
        return this.baseService.post(this.labcartApiEndPoint + 'ChangeLabCartPasswordWithOTP', data);
      }
    
      SetLabCartPassword(data){
        return this.baseService.post(this.labcartApiEndPoint + 'SetLabCartPassword', data);
      }
    
      GetDDForLabCartProfile(){
        return this.baseService.post(this.labcartApiEndPoint + 'GetDDForLabCartProfile', null);
      }
    
      GetDDForLabCartProfileRegister(){
        return this.baseService.post(this.labcartApiEndPoint + 'GetDDForLabCartProfileRegister', null);
      }
    
      GetLabCartProfileByMobile(mobile){
        return this.baseService.post(this.labcartApiEndPoint + 'GetLabCartProfileByMobile', {Mobile : mobile });
      }
    
      GetLabCartPatientImageByPatientId(PatientId){
        return this.baseService.post(this.labcartApiEndPoint + 'GetLabCartPatientImageByPatientId', { PatientId: PatientId});
      }
    
      SaveLabCartPatient(data){
        return this.baseService.post(this.labcartApiEndPoint + 'SaveLabCartPatient', data);
      }
    
      SaveNewLabCartPatient(data){
        return this.baseService.post(this.labcartApiEndPoint + 'SaveNewLabCartPatient', data);
      }
    
      SaveLabCartMemberAddress(data){
        return this.baseService.post(this.labcartApiEndPoint + 'SaveLabCartMemberAddress', data);
    
      }
    
      DeleteLabCartMemberAddress(MemberAddressId: number, reasonForChange: string) {
        return this.baseService.post(this.labcartApiEndPoint + 'DeleteLabCartMemberAddress', { MemberAddressId: MemberAddressId, ReasonForChange: reasonForChange });
      }
    
      ChangeLabCartPatientStatus(PatientId: number, reasonForChange: string) {
        return this.baseService.post(this.labcartApiEndPoint + 'ChangeLabCartPatientStatus', { PatientId: PatientId, ReasonForChange: reasonForChange });
      }
    
      GetLabCartPatientReportList(mobile,month,year){
        return this.baseService.post(this.labcartApiEndPoint + 'GetLabCartPatientReportList', { Mobile: mobile, RegistrationMonth: month, RegistrationYear: year });
      }
    
      DownloadReportForLabCartPatient(labid,password){
        labid = this.sharedService.generalService.encstr(labid);
        return this.baseService.post(this.labcartApiEndPoint + 'DownloadReportForLabCartPatient', { LabId: labid, Password: password });
      }
    
      DownloadReceiptForLabCartPatient(labid,password){
        labid = this.sharedService.generalService.encstr(labid);
        return this.baseService.post(this.labcartApiEndPoint + 'DownloadReceiptForLabCartPatient', { LabId: labid, Password: password});
      }
    
      ///////////////////////////////////
     
    
      //#region Visit booking
    
    
      GetDDForLabCartVisitBooking(){
        return this.baseService.post(this.labcartApiEndPoint + 'GetDDForLabCartVisitBooking', null);
      }
    
    
      GetPatientDetailWithDueOrOweAmountByPatientId(patientIds){
        return this.baseService.post(this.labcartApiEndPoint + 'GetPatientDetailWithDueOrOweAmountByPatientId', patientIds);
      }
    
      SaveLabCartVisitForPatient(data){
        return this.baseService.post(this.labcartApiEndPoint + 'SaveLabCartVisitForPatient', data);
      }
    
      GetPickupCollectionSlotDetailsForPatient(data){
        return this.baseService.post(this.labcartApiEndPoint + 'GetPickupCollectionSlotDetailsForPatient', data);
      }
    
      SavePatientForLabCart(data){
        return this.baseService.post(this.labcartApiEndPoint + 'SavePatientForLabCart', data);
    
      }
    
      SaveLabCartTRFDetails(data){
        return this.baseService.post(this.labcartApiEndPoint + 'SaveLabCartTRFDetails', data);
    
      }
    
      GetLabCartTRFDetails(){
        return this.baseService.post(this.labcartApiEndPoint + 'GetLabCartTRFDetails', null);
      }
    
      GetLabCartVisitsListByMobileNo(mobile){
        return this.baseService.post(this.labcartApiEndPoint + 'GetLabCartVisitsListByMobileNo', { Mobile : mobile });
      }
    
    
      GetLabCartPackageDetails(isLimitedData = true){
        return this.baseService.post(this.labcartApiEndPoint + 'GetLabCartPackageDetails', {IsReturnPartialResponse : isLimitedData});
      }
    
      GetLabCartPackageDetailsByServiceId(serviceId) {
        return this.baseService.post(this.labcartApiEndPoint + 'GetLabCartPackageDetailsByServiceId', { ServiceId : serviceId});
      }
}
