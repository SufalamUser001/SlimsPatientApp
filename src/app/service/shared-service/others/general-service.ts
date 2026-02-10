import { EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { serialize } from 'class-transformer';
declare var ImageCapture: any;

export class GeneralService {

    constructor() {
    
    }

    public getYearList(howmanyYears = 5){
        let crntyear =  new Date().getFullYear();
        let list = [];
        for (let index = 1; index <= howmanyYears; index++) {
            var Obj = {
                Id:crntyear,
                Name: crntyear
            }
            list.push(Obj);
            crntyear--;
        }
        return list;
    }
    

    public focusControl(focusControlEvent: EventEmitter<boolean>) {
        if (focusControlEvent != null) {
            setTimeout(() => {
                focusControlEvent.emit(true);
            }, 100);
        }
    }

    public getAgeString(ageYYY: number, ageMM: number, ageDD: number): string {
        if (ageYYY || ageMM || ageDD) {
            ageYYY = ageYYY == undefined || ageYYY == null ? 0 : ageYYY;
            ageMM = ageMM == undefined || ageMM == null ? 0 : ageMM;
            ageDD = ageDD == undefined || ageDD == null ? 0 : ageDD;

            return (ageYYY > 0 ? ageYYY + ' Year' + (ageYYY > 1 ? '(s)' : '') : '') +
                (ageMM > 0 ? (ageYYY > 0 ? ', ' : null) + ageMM + ' Month' + (ageMM > 1 ? '(s)' : '') : '') +
                (ageDD > 0 ? (ageMM > 0 ? ', ' : null) + ageDD + ' Day' + (ageDD > 1 ? '(s)' : '') : '');
        } else {
            return '';
        }
    }

    public base64toBlob(base64Data, contentType) {
        contentType = contentType || '';
        var sliceSize = 1024;
        var byteCharacters = atob(base64Data);
        var bytesLength = byteCharacters.length;
        var slicesCount = Math.ceil(bytesLength / sliceSize);
        var byteArrays = new Array(slicesCount);

        for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
            var begin = sliceIndex * sliceSize;
            var end = Math.min(begin + sliceSize, bytesLength);

            var bytes = new Array(end - begin);
            for (var offset = begin, i = 0; offset < end; ++i, ++offset) {
                bytes[i] = byteCharacters[offset].charCodeAt(0);
            }
            byteArrays[sliceIndex] = new Uint8Array(bytes);
        }
        return new Blob(byteArrays, { type: contentType });
    }


    public getDataForChart(data: Array<any>, fieldName: string, filterColumnName: string = null, filtercolumnValue: string = null): Array<any> {
        var chartLabel: Array<string> = [];
        if (data != null && data.length > 0) {
            for (var i = 0; i < data.length; i++) {
                if (filterColumnName && filtercolumnValue) {
                    if (data[i][filterColumnName] == filtercolumnValue) {
                        chartLabel.push(data[i][fieldName])
                    }
                } else {
                    chartLabel.push(data[i][fieldName])
                }
            }
        }
        return chartLabel;
    }

    public compareFromToDate(fromDate, toDate) {
        var FromDate = new Date(fromDate);
        var ToDate = new Date(toDate);
        if (FromDate && ToDate && ToDate < FromDate) {
            return true;
        }
        return false;
    }

    public getAge(dateString) {
        var now = new Date();
        var dob = new Date(dateString);

        var monthNow = now.getMonth();
        var dateNow = now.getDate();

        var monthDob = dob.getMonth();
        var dateDob = dob.getDate();

        var yearAge = now.getFullYear() - dob.getFullYear();

        if (monthNow >= monthDob)
            var monthAge = monthNow - monthDob;
        else {
            yearAge--;
            var monthAge = 12 + monthNow - monthDob;
        }

        if (dateNow >= dateDob)
            var dateAge = dateNow - dateDob;
        else {
            monthAge--;
            let days = 31;
            if (monthDob == 1) {
                days = 28;
                var crntYear = Number(dob.getFullYear());
                if ((crntYear % 400 == 0) || ((crntYear % 4 == 0) && (crntYear % 100 != 0))) {
                    days++;
                }
            } else if (monthDob == 3 || monthDob == 5 || monthDob == 8 || monthDob == 10) {
                days = 30;
            }
            var dateAge = days + dateNow - dateDob;
            if (monthAge < 0) {
                monthAge = 11;
                yearAge--;
            }
        }

        if (yearAge == 0 && monthAge == 0 && dateAge == 0) {
            dateAge = 1;
        }

        return {
            years: yearAge,
            months: monthAge,
            days: dateAge
        };
    }

    public getMaxValue(data: Array<any>, fieldName: string): number {
        var maxValue = Math.max.apply(Math, data.map(function (o) { return o[fieldName]; }));
        if (maxValue == Infinity || maxValue == -Infinity) {
            return 0
        } else {
            return maxValue;
        }
    }

    numberOnly(event, isDecimalAllow: boolean = false, decimalPlacesAllow: number = 2): boolean {



        const charCode = (event.which) ? event.which : event.keyCode;
        //if ((charCode > 31 && (charCode < 48 || charCode > 57 || charCode == 46)) || (charCode >= 96 && charCode <= 105)) {
        //    if (!isDecimalAllow) {
        //        return false;
        //    } else if (String(event.target.value).indexOf('.') > -1) {
        //        return false;
        //    }
        //}

        //if (isDecimalAllow && String(event.target.value).indexOf('.') > -1) {

        //    var afterPointData = String(event.target.value).split('.')[1];

        //    if (afterPointData && afterPointData.length >= decimalPlacesAllow) {
        //        return false;
        //    }
        //}

        if (isDecimalAllow && charCode == 190) {
            //Check if the text already contains the . character
            if (String(event.target.value).indexOf('.') === -1) {
                return true;
            } else {
                return false;
            }
        } else {
            if (charCode > 31
                && (charCode < 48 || charCode > 57))
                return false;

            if (isDecimalAllow && String(event.target.value).indexOf('.') > -1) {

                var afterPointData = String(event.target.value).split('.')[1];

                if (afterPointData && afterPointData.length >= decimalPlacesAllow) {
                    return false;
                }
            }
        }

        return true;
    }

     _arrayBufferToBase64( uint8Array ) {
        var binary = '';
        var bytes = new Uint8Array( uint8Array );
        var len = bytes.byteLength;
        for (var i = 0; i < len; i++) {
            binary += String.fromCharCode( bytes[ i ] );
        }
        var b64encoded =  window.btoa( binary );
        return b64encoded;
    }   

    public Uint8ArrayToBase64(uint8Array) {
        var u8 = new Uint8Array(uint8Array);
        var decoder = new TextDecoder('utf8');
        var b64encoded = btoa(decoder.decode(u8))
        return b64encoded;
    }
    public base64ToByteArray(base64: string): any {
        var binary_string = window.atob(base64);
        var len = binary_string.length;
        var bytes = new Array(len);
        for (var i = 0; i < len; i++) {
            bytes[i] = binary_string.charCodeAt(i);
        }
        return bytes;
    }

    public resizeImage(settings: any) {
        const file = settings.file;
        const maxSize = settings.maxSize;
        const reader = new FileReader();
        const image = new Image();
        const canvas = document.createElement('canvas');
        const dataURItoBlob = (dataURI: string) => {
            const bytes = dataURI.split(',')[0].indexOf('base64') >= 0 ? atob(dataURI.split(',')[1]) : unescape(dataURI.split(',')[1]);
            const max = bytes.length;
            const ia = new Uint8Array(max);
            for (var i = 0; i < max; i++) ia[i] = bytes.charCodeAt(i);
            return ia;
        };
        const resize = () => {
            let width = image.width;
            let height = image.height;

            if (width > height) {
                if (width > maxSize) {
                    height *= maxSize / width;
                    width = maxSize;
                }
            } else {
                if (height > maxSize) {
                    width *= maxSize / height;
                    height = maxSize;
                }
            }

            canvas.width = width;
            canvas.height = height;
            canvas.getContext('2d').drawImage(image, 0, 0, width, height);
            let dataUrl = canvas.toDataURL('image/jpeg');
            return dataURItoBlob(dataUrl);
        };

        return new Promise((ok, no) => {
            if (!file.type.match(/image.*/)) {
                no(new Error("Not an image"));
                return;
            }

            reader.onload = (readerEvent: any) => {
                image.onload = () => ok(resize());
                image.src = readerEvent.target.result;
            };
            reader.readAsDataURL(file);
        })
    };

    // public method for encoding an Uint8Array to base64
    public encode(input): string {
        var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;

        while (i < input.length) {
            chr1 = input[i++];
            chr2 = i < input.length ? input[i++] : Number.NaN; // Not sure if the index 
            chr3 = i < input.length ? input[i++] : Number.NaN; // checks are needed here

            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;

            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            }
            output += keyStr.charAt(enc1) + keyStr.charAt(enc2) +
                keyStr.charAt(enc3) + keyStr.charAt(enc4);
        }
        return output;
    }
    public CheckMobileDevice(): boolean {
        var isMobile = false; //initiate as false
        // device detection
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
            || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
            isMobile = true;
        }
        return isMobile;
    }
    public CheckIosDevice(): boolean {
        var isIosDevice = false;
        if (navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform)) {
            isIosDevice = true;
        }
        return isIosDevice;
    }
    public ConvertOnlyIfHtml2Text(str) {
        var divElement = document.createElement('div');
        divElement.innerHTML = str;
        var c = divElement.childNodes
        for (var i = c.length; i--;) {
            if (c[i].nodeType == 1) {
                return divElement.innerHTML;
            }
        }
        return str;
    }

    public ConvertHtml2Text(html) {
        var tag = document.createElement('div');
        tag.innerHTML = html;
        return tag.innerText;
    }
  

    public encstr(csnt: string) {
        let sctn: number[] = csnt.split('').map(x => x.charCodeAt(0));
        for (let i = 0; i < sctn.length; i++) {
            sctn[i] = Number(sctn[i] ^ 83);
        }
        return this.Uint8ArrayToBase64(sctn);
    }

    public decstr(dscpt: string) {
        let strr = this.base64ToByteArray(dscpt);
        for (let i = 0; i < strr.length; i++) {
            strr[i] = Number(strr[i] ^ 83);
        }
        return strr.map((x) => String.fromCharCode(x)).join("");
    }

    public cngpstr(rstr: string, srtr: string, numb = 0) {
        rstr = this.encstr(rstr);
        var ctsn = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
        let trsr = [...srtr];
        var csnt = '';
        let sctn = '';
        let cnts = '';
        [...rstr].forEach(rtes => {
            csnt += rtes;
            let el = trsr.shift();
            csnt += el ? ctsn.charAt(Math.floor(Math.random() * ctsn.length)) : Math.floor(Math.random() * 9);
        })
        let estr = this.encstr(srtr);
        [1, 2].forEach(x => {
            let cntr = Math.floor(Math.random() * 5);
            if (numb > 0) {
                cntr = numb;
            }
            let rnstr = '';
            cnts += (cntr + 1).toString();
            for (let j = 0; j < cntr; j++) {
                rnstr += this.gnrndstr(estr);
            }
            sctn += rnstr;
            if ((x - 1) == 0) {
                sctn += csnt;
            }
        })
        sctn += cnts;
        return this.encstr(sctn);
    }

    public gnrndstr(estr) {
        var etrs = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
        var rtes = '';
        for (var ters = 0; ters < estr.length; ters++) {
            rtes += etrs.charAt(Math.floor(Math.random() * etrs.length));
        }
        return rtes;
    }

    public DownloadFile(data, name, extension) {
        var element = document.createElement('a');
        element.setAttribute('href', "data:text/json;charsset=UTF-8," + encodeURIComponent(data));
        element.setAttribute('download', name + extension);
        element.style.display = "none";
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }

    GetDistinctList(list: Array<any>, prop: string) {
        return list.filter((v, i, self) => self.map(x => x[prop]).indexOf(v[prop]) === i);
    }

    takePhotoFromCamera() {
        return new Promise<any>((resolve, reject) => {
            window.navigator.mediaDevices.getUserMedia({ video: true })
                .then(function (mediaStream) {
                    let mediaStreamTrack = mediaStream.getVideoTracks()[0];
                    var imageCapture = new ImageCapture(mediaStreamTrack);
                    imageCapture.takePhoto()
                        .then(blob => {
                            const reader = new FileReader();
                            reader.readAsDataURL(blob);
                            reader.onloadend = () => {
                                resolve(String(reader.result).substring(String(reader.result).indexOf('base64,') + 7));
                            };
                        })
                        .catch(function (error) {
                            reject(error);
                        });
                })
                .catch(function (error) {
                    reject('Camera Not Available');
                })
        });
    }



    public CustomRound(n: number, dp: number): number {
        const h = +('1'.padEnd(dp + 1, '0')) // 10 or 100 or 1000 or etc
        return Math.round(n * h) / h
    }

    public loadScript(url: string) {
        if (url) {
            let node = document.createElement('script');
            node.src = url;
            node.type = 'text/javascript';
            node.async = true;
            node.charset = 'utf-8';
            document.getElementsByTagName('head')[0].appendChild(node);
        }
    }

  

    isInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 && rect.left >= 0 &&  rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            && rect.top <= (window.innerHeight || document.documentElement.clientHeight)
            && rect.bottom > 36
        );
    }

    public sorting(list,column, sort) {
        return list.sort((previous: any, current: any) => {
            if (Number(previous[column]) > Number(current[column])) {
                return sort === 'desc' ? -1 : 1;
            } else if (Number(previous[column]) < Number(current[column])) {
                return sort === 'asc' ? -1 : 1;
            }
            return 0;
        });
    }

}
