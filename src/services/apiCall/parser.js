import { AppConstant } from "../../assets/AppConstant";


export const parseOrderDetail = ({ data = {} }) => {
    AppConstant.showConsoleLog('parseOrderDetail :', data);

    let flexiPlans = [];
    let bingePlans = [];

    flexiPlans = data?.productList?.filter(item => item.showPlan && item?.productType == 'Flexi')?.map(item => {

        let isAmazon = false;
        let isSunNext = false;

        isAmazon = item?.appList?.BUCKET1?.filter(innerItem => innerItem?.appName == "Prime")?.length > 0
        isSunNext = item?.appList?.BUCKET1?.filter(innerItem => innerItem?.appName == "SunNxt")?.length > 0

        let belowMsg = ""
        if (isAmazon && AppConstant.getDrupalInfoToInnerApis().primeText != null) {
            belowMsg += AppConstant.getDrupalInfoToInnerApis().primeText
        }
        if (isSunNext && AppConstant.getDrupalInfoToInnerApis().sunNxtText != null) {
            belowMsg += AppConstant.getDrupalInfoToInnerApis().sunNxtText
        }

        belowMsg += item?.appOnTv ?? ''

        let deviceListInfo = null;
        if (item?.devicesList?.length > 0) {
            deviceListInfo = AppConstant.getDrupalInfoToInnerApis()?.listOfDevices?.find(findItem => {

                if (findItem?.device?.length == item?.devicesList?.length) {
                    const devItemData = item?.devicesList?.filter(deviItem => findItem?.device?.includes(deviItem))
                    if (devItemData?.length == item?.devicesList?.length) {
                        return true;
                    } else {
                        return false
                    }
                } else {
                    return false
                }
            })
        }

        return {
            ...item,
            tenureInfo: data?.tenuresList?.[item?.productClass]?.filter(tenureItem => tenureItem?.packId == item?.packId),
            deviceListInfo,
            belowMsg: AppConstant.replaceAll(belowMsg, "#", "\n")
            // msg:item?.appOnTv
        }
    })
    bingePlans = data?.productList?.filter(item => item.showPlan && item?.productType == 'Fixed')?.map(item => {

        let isAmazon = false;
        let isSunNext = false;

        isAmazon = item?.appList?.BUCKET1?.filter(innerItem => innerItem?.appName == "Prime")?.length > 0
        isSunNext = item?.appList?.BUCKET1?.filter(innerItem => innerItem?.appName == "SunNxt")?.length > 0

        let belowMsg = ""
        if (isAmazon && AppConstant.getDrupalInfoToInnerApis().primeText != null) {
            belowMsg += AppConstant.getDrupalInfoToInnerApis().primeText
        }
        if (isSunNext && AppConstant.getDrupalInfoToInnerApis().sunNxtText != null) {
            belowMsg += AppConstant.getDrupalInfoToInnerApis().sunNxtText
        }

        belowMsg += item?.appOnTv ?? ''

        let deviceListInfo = null;
        if (item?.devicesList?.length > 0) {
            deviceListInfo = AppConstant.getDrupalInfoToInnerApis()?.listOfDevices?.find(findItem => {

                if (findItem?.device?.length == item?.devicesList?.length) {
                    const devItemData = item?.devicesList?.filter(deviItem => findItem?.device?.includes(deviItem))
                    if (devItemData?.length == item?.devicesList?.length) {
                        return true;
                    } else {
                        return false
                    }
                } else {
                    return false
                }
            })
        }
        return {
            ...item,
            deviceListInfo,
            tenureInfo: data?.tenuresList?.[item?.productClass]?.filter(tenureItem => tenureItem?.packId == item?.packId),
            belowMsg: AppConstant.replaceAll(belowMsg, "#", "\n")
            // msg:item?.appOnTv
        }
    })

    return {
        flexiPlans,
        bingePlans
    }
};

