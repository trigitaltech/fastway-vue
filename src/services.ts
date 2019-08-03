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
            ...data
        }
    })
    return result;
}

export const totalSubscriberCount = async (data: any) =>{
    const result = await axios({
        method: 'POST',
        url: API + '/totalSubscriberCount/',
        headers: {
            ...data
        }
    })
    return result;
}