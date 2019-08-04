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