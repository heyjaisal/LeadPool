import PocketBase from 'pocketbase';

const pb = new PocketBase('https://leadpool.pockethost.io');

export const register=async(formValues)=>{
    try {
        const data = {
            "username": formValues.username,
            "email": formValues.email,
            "emailVisibility": formValues.emailVisibility,
            "password": formValues.password,
            "passwordConfirm": formValues.passwordConfirm,
            "name": formValues.name
        };
        const record = await pb.collection('sys_users').create(data);
        await pb.collection('sys_users').requestVerification(data.email);
        
    } catch (error) {
        console.log(error);
    }  
}

export const login=async(data)=>{

    const authData = await pb.collection('sys_users').authWithPassword(
        data.username,
        data.password,
    );
    console.log(authData.record.verified)
   return authData.record.verified
}

export const fetchIndustries=async()=>{
    console.log('start');
    const records = await pb.collection('masters_industries').getFullList({});
return records
}