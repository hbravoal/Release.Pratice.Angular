export interface User {
        UserId: number;
        Identification: string;
        FirstName: string;
        LastName: string;
        Email: string;
        UserName: string;
        Password: string;
        CreationDate: Date;
        CreationUserId: number;
        UpdateDate: Date;
        UpdateUserId: number;
        LastPasswordChange: Date;
        LastLogin: Date;
        InvalidLogins: number;
        IsActive: boolean;
}
