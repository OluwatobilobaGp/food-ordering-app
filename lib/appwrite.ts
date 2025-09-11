import { CreateUserParams, SignInParams } from "@/type";
import { Account, Avatars, Client, Databases, ID, Query, Storage } from "react-native-appwrite";

export const appwriteConfig = {
    endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!,
    projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!,
    platform: "com.jsm.foododering", 
    databaseId: '6890c91c000930401220',
    bucketId: '68ac95f2003b4b9f7efb',
    userCollectionId: '6890c994001e5e66c06b',
    categoriesCollectionId: '68ac8d9d0032e900cd00',
    menuCollectionId: '68ac8f4b001dd92c2e87', 
    customizationsCollectionId: '68ac92070019ae78242c',
    menuCustomizationsCollectionId: '68c2febb0022cf69a76d' 
}

export const client = new Client();

client 
    .setEndpoint(appwriteConfig.endpoint)
    .setProject(appwriteConfig.projectId)
    .setPlatform(appwriteConfig.platform)
    
export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);

export const createUser = async ({ email, password, name }: CreateUserParams) => {
    try {
        const newAccount = await account.create(ID.unique(), email, password, name);
        if(!newAccount) throw Error;

        await signIn({ email, password});

        const avatarUrl = avatars.getInitialsURL(name);

        return await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            ID.unique(),
            {  email, name, accountId: newAccount.$id, avatar: avatarUrl }
        );
    }catch(e){
        throw new Error(e as string);
    }
}

export const signIn = async ({email, password}: SignInParams) => {
    try{
        const session = await account.createEmailPasswordSession(email, password);
    }catch (e){
     throw new Error(e as string);  
    }
}

export const getCurrentUser = async () => {
    try{
        const currentAccount = await account.get();
        if(!currentAccount) throw Error;
    
        const currentUser = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            [Query.equal('accountId', currentAccount.$id)]
        )

        if(!currentUser) throw Error;

        return currentUser.documents[0];
    }catch(e){
        console.log(e);
        throw new Error(e as string);
    }
}