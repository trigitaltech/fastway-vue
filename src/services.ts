import { API } from '@/config';
import axios from 'axios';

export const getCustomerInfo = async (data: any) => {
    const result = await axios({
        method: 'POST',
        url: API + '/getCustomerInfo/',
        headers: {
            ...data,
        },
    });
    return result;
}

export const openAndClosedComplaintsCount = async (data: any) =>{
    const result = await axios({
        method: 'POST',
        url: API + '/openAndClosedComplaintsCount/',
        headers: {
            CREDS: JSON.stringify(data),
            PARAMS: 7
        }
    })
    return result;
}

export const totalSubscriberCount = async (data: any) =>{
    const result = await axios({
        method: 'POST',
        url: API + '/totalSubscriberCount/',
        headers: {
            CREDS: JSON.stringify(data)
        }
    })
    return result;
}

export const subscriberWiseActivePkgCount = async (data: any) =>{
    const result = await axios({
        method: "POST",
        url: API + "/subscriberWiseActivePkgCount/",
        headers: {
          CREDS: JSON.stringify(data)
        }
    });
    return result;
}

export const dailyAndWeeklyCollectionReport = async (data: any) =>{
    const result = await axios({
        method: "POST",
        url: API + "/dailyAndWeeklyCollectionReport/",
        headers: {
            CREDS: JSON.stringify(data)
        }
    });
    return result;
}

export const getPlanList = async (data: any) =>{
    const result = await axios({
        method: "POST",
        url: API + "/getPlanList/",
        headers: {
          CREDS: JSON.stringify(data)
        }
    });
    return result;
}

export const getPlanListById = async (creds: any, planId: any) =>{

    const result = await axios({
        method: "POST",
        url: API + "/getPlanListByID/",
        headers: {
          CREDS: JSON.stringify(creds),
          PLAN_LIST_ID: planId
        }
    });
    return result;
}

export const AddNewPlan = async (creds: any, plans: any) =>{
    const result = await axios({
        method: "POST",
        url: API + "/addPlan/",
        headers: {
          CREDS: JSON.stringify(creds),
          PARAMS: JSON.stringify(plans)
        }
    });
    return result;
}