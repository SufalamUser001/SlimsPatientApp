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

      authenticateUserOnSufalamServerWithLabCode(labCode: string) {
        return this.baseService.postOnSufalamServer('server/ValidateLabCode', { 'LabCode': labCode });
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
    
      GetLabCartPatientReportList(mobile,fromdate,todate){
        return this.baseService.post(this.labcartApiEndPoint + 'GetLabCartPatientReportList', { Mobile: mobile, VaccineFirstDoseDate : fromdate, VaccineSecondDoseDate : todate });
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


      //#region  apprelated api

         
      GetNearByBranchLocations(lat,long){
        return this.baseService.post(this.labcartApiEndPoint + 'GetNearByBranchLocations', { Latitude : lat, Longitude : long });
      }

      GetPatientAppDashboardImageDetailsList(){
        return this.baseService.post(this.labcartApiEndPoint + 'GetPatientAppDashboardImageDetailsList', {});
      }

      GetPatientAppConfiguration(){
        return this.baseService.post(this.labcartApiEndPoint + 'GetPatientAppConfiguration', { ServiceId : 0});
      }

      GetOrgansForLabCart(){
        return this.baseService.post(this.labcartApiEndPoint + 'GetOrgansForLabCart', null);
      }

      GetDiseasesForLabCart(){
        return this.baseService.post(this.labcartApiEndPoint + 'GetDiseasesForLabCart', null);
      }

      GetLabCartOrganServiceDetails(){
        return this.baseService.post(this.labcartApiEndPoint + 'GetLabCartOrganServiceDetails', null);
      }

      GetLabCartDiseaseServiceDetails(){
        return this.baseService.post(this.labcartApiEndPoint + 'GetLabCartDiseaseServiceDetails', null);
      }

      GetAllNearByBranchLocations(){
        return this.baseService.post(this.labcartApiEndPoint + 'GetAllNearByBranchLocations', null);
      }

      //#endregion

}
