import { CustomClaims } from "./CustomClaims";
import { ProviderData } from "./ProviderData";
import { UserMetadata } from "./UserMetadata";

export interface UserRecord {

    uid: string | undefined;
    tenantId: string | null | undefined;
    email: string | null;
    phoneNumber: string | null | undefined;
    emailVerified: boolean | null | undefined;
    displayName: string | null;
    photoUrl: string | null | undefined;
    disabled: boolean | null;
    tokensValidAfterTimestamp: any;
    userMetadata: UserMetadata;
    customClaims: CustomClaims;
    passwordHash: any;
    passwordSalt: any;
    providerData: ProviderData;
    providerId: string | undefined;

}






// {
//     "uid": "3tyMU3Rj9IWgaCjiiygX2RuyaTg1",
//     "tenantId": null,
//     "email": "haydenfieldstestt@gmail.com",
//     "phoneNumber": null,
//     "emailVerified": false,
//     "displayName": "Hayden Fields",
//     "photoUrl": null,
//     "disabled": false,
//     "tokensValidAfterTimestamp": 1610659824000,
//     "userMetadata": {
//         "creationTimestamp": 1610659824306,
//         "lastSignInTimestamp": 0,
//         "lastRefreshTimestamp": 0
//     },
//     "customClaims": {
//         "role": "User",
//         "group": "Default"
//     },
//     "passwordHash": null,
//     "passwordSalt": null,
//     "providerData": [
//         {
//             "uid": "haydenfieldstestt@gmail.com",
//             "displayName": "Hayden Fields",
//             "email": "haydenfieldstestt@gmail.com",
//             "phoneNumber": null,
//             "photoUrl": null,
//             "providerId": "password"
//         }
//     ],
//     "providerId": "firebase"
// },