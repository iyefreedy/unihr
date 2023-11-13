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

export interface PersonalInformationStateProps {
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
    province: string | undefined;
    city: string | undefined;
}
