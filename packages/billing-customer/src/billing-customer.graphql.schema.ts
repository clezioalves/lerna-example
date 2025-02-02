/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CustomerIdentification {
    nrc?: Nullable<string>;
    companyIdentification?: Nullable<string>;
}

export class FaultItemResponse {
    code?: Nullable<string>;
    date?: Nullable<string>;
    description?: Nullable<string>;
}

export class ResultItem {
    customerIdentification?: Nullable<CustomerIdentification>;
    faultItem?: Nullable<FaultItemResponse>;
}

export class SaveCustomerResultItem {
    resultItem?: Nullable<ResultItem>;
}

export class SaveCustomerResponse {
    saveCustomer?: Nullable<SaveCustomerResultItem>;
}

export class CustomerAddressRequest {
    label?: Nullable<string>;
    principal?: Nullable<string>;
    address?: Nullable<Address>;
}

export class CustomerInput {
    name?: Nullable<string>;
    personType?: Nullable<number>;
    mainDocument?: Nullable<MainDocumentInput>;
    companyAssociations?: Nullable<CompanyAssociationsInput>;
    customerContacts?: Nullable<CustomerContactsInput>;
    customerAddresses?: Nullable<Nullable<CustomerAddressRequest>[]>;
}
export class CustomerContactsInput {
    customerContact?: Nullable<Nullable<CustomerContactInput>[]>;
}

export class CompanyAssociationsInput {
    companyAssociation?: Nullable<Nullable<CompanyAssociationInput>[]>;
}

export class CompanyAssociationInput {
    nrc?: Nullable<string>;
    companyIdentification?: Nullable<string>;
    activationDate?: Nullable<string>;
}

export class MainDocumentInput {
    acronymType?: Nullable<string>;
    value?: Nullable<string>;
}

export class ContactModesValueInput {
    contactModeValue?: Nullable<Nullable<ContactModeValueInput>[]>;
}

export class ContactModeValueInput {
    contactModeIdentification?: Nullable<string>;
    value?: Nullable<string>;
    preferential?: Nullable<boolean>;
    noDisturb?: Nullable<boolean>;
}

export class CustomerContactInput {
    identification?: Nullable<string>;
    contactTypeIdentification?: Nullable<string>;
    principal?: Nullable<boolean>;
    contactModesValue?: Nullable<ContactModesValueInput>;
}

export class Fetchs {
    addressFull?: Nullable<boolean>;
}

export class FindAccountRequest {
    identification?: Nullable<string>;
    customerIdentification?: Nullable<string>;
    mainDocumentValue?: Nullable<string>;
    typeIdentification?: Nullable<number>;
    companyIdentification?: Nullable<string>;
    fetchs?: Nullable<Fetchs>;
}
export class FetchsRequest {
    physicalRestrictions?: Nullable<boolean>;
    dependents?: Nullable<boolean>;
    documents?: Nullable<boolean>;
    addressesFull?: Nullable<boolean>;
    principalAddress?: Nullable<boolean>;
    authData?: Nullable<boolean>;
    customerComments?: Nullable<boolean>;
    contacts?: Nullable<boolean>;
    additionalInformations?: Nullable<boolean>;
    historyAdditionalInformations?: Nullable<boolean>;
    collectionAdvisory?: Nullable<boolean>;
    debitAgreements?: Nullable<boolean>;
    dunningDebts?: Nullable<boolean>;
    customerSituationHistory?: Nullable<boolean>;
}

export class FindCustomerRequest {
    companyIdentification?: Nullable<string>;
    customerIdentification?: Nullable<string>;
    personType?: Nullable<number>;
    customerName?: Nullable<string>;
    mainDocumentNumber?: Nullable<string>;
    invoiceIdentification?: Nullable<string>;
    accountIdentification?: Nullable<string>;
    accessPointIdentification?: Nullable<string>;
    vehiclePlate?: Nullable<string>;
    accountTypeIdentification?: Nullable<string>;
    status?: Nullable<string>;
    fetchs?: Nullable<FetchsRequest>;
}

export class Account {
    identification?: Nullable<string>;
    idPaymentTypeSTP?: Nullable<number>;
    idPaymentModeSTP?: Nullable<number>;
    statusVigencyStartDate?: Nullable<string>;
    address?: Nullable<Address>;
    customerIdentification?: Nullable<string>;
}

export class AddressStreet {
    name?: Nullable<string>;
    code?: Nullable<string>;
    codeType?: Nullable<string>;
    descriptionType?: Nullable<string>;
}

export class Address {
    identification?: Nullable<string>;
    countryIdentification?: Nullable<string>;
    countryName?: Nullable<string>;
    stateAcronym?: Nullable<string>;
    stateIdentification?: Nullable<string>;
    stateName?: Nullable<string>;
    cityIdentification?: Nullable<string>;
    cityAcronym?: Nullable<string>;
    cityName?: Nullable<string>;
    localityIdentification?: Nullable<string>;
    localityName?: Nullable<string>;
    addressStreet?: Nullable<AddressStreet>;
    number?: Nullable<string>;
    complement?: Nullable<string>;
    superDivisionIdentification?: Nullable<string>;
    superDivisionName?: Nullable<string>;
    zipCode?: Nullable<string>;
    country?: Nullable<string>;
    state?: Nullable<string>;
    city?: Nullable<string>;
    locality?: Nullable<string>;
    street?: Nullable<string>;
    addressNumber?: Nullable<string>;
    superDivision?: Nullable<string>;
    block?: Nullable<string>;
    lot?: Nullable<string>;
    reference?: Nullable<string>;
    poBox?: Nullable<string>;
    formattedAddress?: Nullable<string>;
}

export class CustomerAddress {
    label?: Nullable<string>;
    principal?: Nullable<string>;
    address?: Nullable<Address>;
}

export class MainDocument {
    nameType?: Nullable<string>;
    acronymType?: Nullable<string>;
    value?: Nullable<string>;
}

export class Customer {
    name?: Nullable<string>;
    personType?: Nullable<number>;
    customerAddresses?: Nullable<Nullable<CustomerAddress>[]>;
    //companyAssociations?: Nullable<CompanyAssociationsInput>;
    companyAssociations?: Nullable<Nullable<CompanyAssociationInput>[]>;
    mainDocument?: Nullable<MainDocument>;
}

export class SaveAccountIdentificationResponse {
    accountIdentification?: Nullable<string>;
    faultItem?: Nullable<Nullable<FaultItemResponse>[]>;
}

export class SaveAccountResponse {
    accountSaveRequest?: Nullable<SaveAccountIdentificationResponse>[];
}


type Nullable<T> = T | null;