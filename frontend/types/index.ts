export interface Employee {
    nik: string | undefined;
    name: string | undefined;
    email: string | undefined;
    mobile_phone: string | undefined;
    phone: string | undefined;
    birth_date: string | undefined;
    birth_place: string | undefined;
    gender: string | undefined;
    marital_status: string | undefined;
    blood_type: string | undefined;
    religion: string | undefined;
    address: string | undefined;
    postal_code: string | undefined;
}

export interface PersonalDetail {
    identity_number: string | undefined;
    name: string | undefined;
    email: string | undefined;
    phone: string | undefined;
    photo: File | undefined;
    birth_date: string | undefined;
    birth_place: string | undefined;
    gender: string | undefined;
    marital_status: string | undefined;
    blood_type: string | undefined;
    religion: string | undefined;
    address: string | undefined;
    postal_code: string | undefined;
    province: Province | undefined;
    city: string | undefined;
}

export interface Province {
    id: string;
    name: string;
    alt_name: string;
    latitude: number;
    longitude: number;
}

export interface EmploymentDetail {
    employee_id_number: string | undefined;
    status: string | undefined;
    grade: string | undefined;
    rank: string | undefined;
    join_date: string | undefined;
    organization: string | undefined;
    position: string | undefined;
    level: string | undefined;
}

export type ValidationErrors = Record<string, string[]>;

export type UseSubmitOptions = {
    onSuccess?: (result: any) => any;
    onError?: (error: Error) => any;
};

export type User = {
    name: string;
    email?: string;
};

export type LoginCredentials = {
    email: string;
    password: string;
};

export type RegisterCredentials = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
};

export type ResetPasswordCredentials = {
    email: string;
    password: string;
    password_confirmation: string;
    token: string;
};
