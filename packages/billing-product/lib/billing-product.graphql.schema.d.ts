export declare class FindAccountTypeRequest {
    identification?: Nullable<string>;
}
export declare class FindAddressStateRequest {
    countryIdentification?: Nullable<string>;
    stateIdentification?: Nullable<string>;
    stateAcronym?: Nullable<string>;
}
export declare class FindAgreementPartnershipFetchsRequest {
    partnershipAdditionalInformations?: Nullable<boolean>;
    operationalDataAdditionalInformations?: Nullable<boolean>;
    usagePoint?: Nullable<boolean>;
    usagePointAdditionalInformations?: Nullable<boolean>;
    usagePointAddress?: Nullable<boolean>;
    partnershipContact?: Nullable<boolean>;
    usagePointContact?: Nullable<boolean>;
    claimOnlendingParameters?: Nullable<boolean>;
    eventGroup?: Nullable<boolean>;
    ratingEventUsagePoint?: Nullable<boolean>;
    historyAdditionalInformations?: Nullable<boolean>;
}
export declare class FindAgreementPartnershipPaginationRequest {
    fromPage?: Nullable<number>;
    fromRegister?: Nullable<number>;
    offset?: Nullable<number>;
}
export declare class FindAgreementPartnershipRequest {
    identification?: Nullable<string>;
    name?: Nullable<string>;
    usagePointIdentification?: Nullable<string>;
    usagePointName?: Nullable<string>;
    typeIdentification?: Nullable<string>;
    customerIdentification?: Nullable<string>;
    usagePointAddressStreetName?: Nullable<string>;
    usagePointAddressStreetCode?: Nullable<string>;
    partnershipFinished?: Nullable<string>;
    mainPartnershipIdentification?: Nullable<string>;
    fetchs?: Nullable<FindAgreementPartnershipFetchsRequest>;
    pagination?: Nullable<FindAgreementPartnershipPaginationRequest>;
    sorts?: Nullable<FindAgreementPartnershipSortsRequest>;
}
export declare class FindAgreementPartnershipSortsRequest {
    sort?: Nullable<Nullable<string>[]>;
}
export declare class FindCompatiblesProductsAccountRequest {
    accountIdentification?: Nullable<string>;
    productType?: Nullable<string>;
    newPaymentMode?: Nullable<string>;
    notValidateProductRestriction?: Nullable<string>;
    salePointIdentification?: Nullable<string>;
}
export declare class FetchsRequest {
    contract?: Nullable<boolean>;
    recurrentRatingEvent?: Nullable<boolean>;
    accessPoint?: Nullable<boolean>;
    accessPointAddress?: Nullable<boolean>;
    account?: Nullable<boolean>;
    vehicle?: Nullable<boolean>;
    additionalInformations?: Nullable<boolean>;
    historyAdditionalInformations?: Nullable<boolean>;
    statusHistory?: Nullable<boolean>;
    alias?: Nullable<boolean>;
    rechargeValue?: Nullable<boolean>;
    ratingEventsPromotionAffected?: Nullable<boolean>;
    promotionRatingEvents?: Nullable<boolean>;
    eventGroup?: Nullable<boolean>;
    fidelity?: Nullable<boolean>;
    productHierarchy?: Nullable<boolean>;
    ratingEvents?: Nullable<boolean>;
    planComposition?: Nullable<boolean>;
    compatibilityRestrictions?: Nullable<boolean>;
    rechargeValues?: Nullable<boolean>;
    promotionPartnerships?: Nullable<boolean>;
    requirements?: Nullable<boolean>;
    productAdditionalInformations?: Nullable<boolean>;
    reasonStatus?: Nullable<boolean>;
    reasonsService?: Nullable<boolean>;
    productAssociate?: Nullable<boolean>;
    equipment?: Nullable<boolean>;
}
export declare class FindContractedProductRequest {
    companyIdentification?: Nullable<string>;
    customerIdentification?: Nullable<string>;
    accountIdentification?: Nullable<string>;
    contractIdentification?: Nullable<string>;
    contractedProductIdentification?: Nullable<string>;
    contractedProductStatus?: Nullable<string>;
    contractedProductType?: Nullable<string>;
    productIdentification?: Nullable<string>;
    productName?: Nullable<string>;
    accessPointIdentification?: Nullable<string>;
    accessPointInternalIdentification?: Nullable<string>;
    accessPointType?: Nullable<string>;
    productHierarchy?: Nullable<string>;
    accessPointEventDate?: Nullable<string>;
    fetchs?: Nullable<FetchsRequest>;
    pagination?: Nullable<PaginationRequest>;
}
export declare class PaginationRequest {
    fromPage?: Nullable<number>;
    fromRegister?: Nullable<number>;
    offset?: Nullable<number>;
}
export declare class FindContractedProductSummarizedRequest {
    companyIdentification?: Nullable<string>;
    customerIdentification?: Nullable<string>;
    accountIdentification?: Nullable<string>;
    contractedProductType?: Nullable<string>;
}
export declare class FindCoverageAreaFetchs {
    showOnlyRequestFilter?: Nullable<string>;
}
export declare class FindCoverageAreaRequest {
    partnershipIdentification?: Nullable<string>;
    usagePointIdentification?: Nullable<string>;
    productIdentification?: Nullable<string>;
    fetchs?: Nullable<FindCoverageAreaFetchs>;
}
export declare class FindDependentsRequest {
    companyIdentification?: Nullable<string>;
    accountIdentification?: Nullable<string>;
    contractedProductIdentification?: Nullable<string>;
}
export declare class EventGroupFetchs {
    ratingEvent?: Nullable<boolean>;
}
export declare class FindEventGroupRequest {
    identification?: Nullable<string>;
    purpose?: Nullable<string>;
    source?: Nullable<string>;
    eventGroupFetchs?: Nullable<EventGroupFetchs>;
}
export declare class FindFineValueRequest {
    contractedProductIdentification?: Nullable<string>;
    accessPointIdentification?: Nullable<string>;
    eventDate?: Nullable<string>;
}
export declare class FindProductRequest {
    companyIdentification?: Nullable<string>;
    productIdentification?: Nullable<string>;
    productType?: Nullable<string>;
    compatibilityProductFilter?: Nullable<CompatibilityProductFilter>;
    fetchs?: Nullable<FetchsRequest>;
}
export declare class FindProductServiceRequest {
    companyIdentification?: Nullable<string>;
    productIdentification: number;
    productType?: Nullable<number>;
    serviceActionIdentification?: Nullable<string>;
    fetchs?: Nullable<FetchsRequest>;
}
export declare class FindRatingEventRequest {
    identification?: Nullable<string>;
    type?: Nullable<string>;
    useOCC?: Nullable<boolean>;
    name?: Nullable<string>;
}
export declare class FindSalePointRequest {
    identification?: Nullable<string>;
    serviceChannelIdentification?: Nullable<string>;
    stateAcronym?: Nullable<string>;
    active?: Nullable<boolean>;
}
export declare class CompatibilityProductFilter {
    personTypeIdentification?: Nullable<number>;
    personCategoryIdentification?: Nullable<string>;
    accountTypeIdentification?: Nullable<string>;
    paymentModeIdentification?: Nullable<string>;
    cardAssociationIdentification?: Nullable<string>;
    vehicleTypeIdentification?: Nullable<string>;
    vehicleCategoryIdentification?: Nullable<string>;
    vehicleManufacturerIdentification?: Nullable<string>;
    vehicleManufactureYear?: Nullable<string>;
    serviceChannelIdentification?: Nullable<string>;
    salePointIdentification?: Nullable<string>;
    salePointStateIdentification?: Nullable<string>;
    accessPointTecnologyIdentification?: Nullable<string>;
    cardIssuerIdentification?: Nullable<string>;
    customerStatusIdentification?: Nullable<string>;
    compatibleProducts?: Nullable<Nullable<string>[]>;
    vehicleModelIdentification?: Nullable<string>;
    productCreditCardIdentification?: Nullable<string>;
}
export declare class FindServiceRequest {
    companyIdentification?: Nullable<string>;
    serviceIdentification?: Nullable<string>;
    serviceActiveDate?: Nullable<string>;
    orderServiceIdentification?: Nullable<string>;
    productIdentification?: Nullable<string>;
    serviceActionIdentification?: Nullable<string>;
    productType?: Nullable<string>;
    compatibilityProductFilter?: Nullable<CompatibilityProductFilter>;
    fetchs?: Nullable<FetchsRequest>;
}
export declare class FindServiceChannelRequest {
    identification?: Nullable<string>;
}
export declare class FindServiceOrderProductAffectedRequest {
    companyIdentification?: Nullable<string>;
    customerIdentification?: Nullable<string>;
    osIdentification?: Nullable<string>;
    osGroup?: Nullable<string>;
    occurrenceIdentification?: Nullable<string>;
    pagination?: Nullable<PaginationRequest>;
}
export declare class ProductAdditionalInformation {
    label?: Nullable<string>;
    value?: Nullable<string>;
}
export declare class ProductAdditionalInformations {
    additionalInformation?: Nullable<ProductAdditionalInformation>;
}
export declare class ProductRequirements {
    additionalInformations?: Nullable<ProductAdditionalInformations>;
}
export declare class OrderService {
    customerIdentification?: Nullable<string>;
    startDate?: Nullable<string>;
    serviceIdentification?: Nullable<string>;
    productPlanContracted?: Nullable<string>;
    contractedProductAssocIdentification?: Nullable<string>;
    accountIdentification?: Nullable<string>;
    requirements?: Nullable<ProductRequirements>;
}
export declare class OrderServiceRequest {
    userIdentification?: Nullable<string>;
    companyIdentification?: Nullable<string>;
    orderService?: Nullable<OrderService>;
}
export declare class FaultItemResponse {
    code?: Nullable<string>;
    date?: Nullable<string>;
    description?: Nullable<string>;
}
export declare class FindAccountTypeResponse {
    identification?: Nullable<string>;
    description?: Nullable<string>;
}
export declare class AddressState {
    identification?: Nullable<string>;
    name?: Nullable<string>;
    acronym?: Nullable<string>;
    IBGECode?: Nullable<string>;
}
export declare class FindAddressStateResponse {
    addressesStates?: Nullable<Nullable<AddressState>[]>;
}
export declare class ClaimOnlendingParameterResponse {
    dueDay?: Nullable<string>;
    cutoffDays?: Nullable<string>;
    businessCutoffDaysType?: Nullable<string>;
    nextOnlendingDate?: Nullable<string>;
    nextCutoffDate?: Nullable<string>;
}
export declare class EventGroup {
    identification?: Nullable<string>;
    name?: Nullable<string>;
    purpose?: Nullable<string>;
    ratingEvents?: Nullable<Nullable<EventGroupsRatingEvent>[]>;
}
export declare class EventGroupsRatingEvent {
    identification?: Nullable<string>;
    name?: Nullable<string>;
    type?: Nullable<string>;
}
export declare class FindAgreementPartnershipResponse {
    sequenceNumber?: Nullable<string>;
    identification?: Nullable<string>;
    customerIdentification?: Nullable<string>;
    name?: Nullable<string>;
    shortname?: Nullable<string>;
    typeIdentification?: Nullable<string>;
    startDate?: Nullable<string>;
    claimOnlendingParameters?: Nullable<Nullable<ClaimOnlendingParameterResponse>[]>;
    usagePoints?: Nullable<Nullable<UsagePoint>[]>;
    eventGroups?: Nullable<Nullable<EventGroup>[]>;
}
export declare class UsagePoint {
    sequenceNumber?: Nullable<string>;
    identification?: Nullable<string>;
    name?: Nullable<string>;
    typeIdentification?: Nullable<string>;
    startDate?: Nullable<string>;
    usagePointLanes?: Nullable<Nullable<UsagePointLane>[]>;
    address?: Nullable<UsagePointAddress>;
    additionalInformations?: Nullable<Nullable<UsagePointAdditionalInformation>[]>;
    historyAdditionalInformations?: Nullable<Nullable<UsagePointHistoryAdditionalInformation>[]>;
    ratingEvents?: Nullable<Nullable<UsagePointRatingEvents>[]>;
}
export declare class UsagePointAdditionalInformation {
    label?: Nullable<string>;
    value?: Nullable<string>;
}
export declare class UsagePointAddress {
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
    number?: Nullable<string>;
    complement?: Nullable<string>;
    superDivisionIdentification?: Nullable<string>;
    superDivisionName?: Nullable<string>;
    zipCode?: Nullable<string>;
    addressStreet?: Nullable<UsagePointAddressStreet>;
}
export declare class UsagePointAddressStreet {
    codeType?: Nullable<string>;
    descriptionType?: Nullable<string>;
    name?: Nullable<string>;
}
export declare class UsagePointHistoryAdditionalInformation {
    entity?: Nullable<string>;
    entityIdentification?: Nullable<string>;
    histories?: Nullable<Nullable<UsagePointHistoryAdditionalInformationHistory>[]>;
}
export declare class UsagePointHistoryAdditionalInformationHistory {
    label?: Nullable<string>;
    historyValues?: Nullable<Nullable<UsagePointHistoryAdditionalInformationHistoryValue>[]>;
}
export declare class UsagePointHistoryAdditionalInformationHistoryValue {
    value?: Nullable<string>;
    startDate?: Nullable<string>;
}
export declare class UsagePointLane {
    laneCode?: Nullable<string>;
    laneName?: Nullable<string>;
}
export declare class UsagePointRatingEvents {
    identification?: Nullable<string>;
    name?: Nullable<string>;
    type?: Nullable<string>;
    startDate?: Nullable<string>;
}
export declare class FindCompatiblesProductsAccountResponse {
    accountIdentification?: Nullable<string>;
    productType?: Nullable<number>;
    identification?: Nullable<string>;
    name?: Nullable<string>;
    productDependencies?: Nullable<Nullable<ProductDependency>[]>;
}
export declare class ProductDependency {
    productIdentification?: Nullable<string>;
    productName?: Nullable<string>;
    productType?: Nullable<string>;
}
export declare class AccessPoint {
    identification?: Nullable<string>;
    accountIdentification?: Nullable<string>;
    customerIdentification?: Nullable<string>;
    internalIdentification?: Nullable<string>;
    typeIdentification?: Nullable<string>;
    statusIdentification?: Nullable<string>;
    statusName?: Nullable<string>;
    statusVigencyStartDate?: Nullable<string>;
    useTypeName?: Nullable<string>;
    useTypeVigencyStartDate?: Nullable<string>;
    technologyIdentification?: Nullable<string>;
    technologyName?: Nullable<string>;
    technologyVigencyStartDate?: Nullable<string>;
    vehicle?: Nullable<Vehicle>;
    companyIdentification?: Nullable<string>;
}
export declare class Account {
    identification?: Nullable<string>;
    companyIdentification?: Nullable<string>;
    status?: Nullable<string>;
    balance?: Nullable<string>;
    realBalance?: Nullable<string>;
    assumedBalance?: Nullable<string>;
    statusVigencyStartDate?: Nullable<string>;
    typeIdentification?: Nullable<string>;
    periodicBillingIndicator?: Nullable<string>;
    mailBillingBlocked?: Nullable<string>;
    collectionBlocked?: Nullable<string>;
    paymentMode?: Nullable<string>;
    paymentRequestDate?: Nullable<string>;
    invoiceDetailType?: Nullable<string>;
    dueDay?: Nullable<string>;
    fiscalPolicyIdentification?: Nullable<string>;
    customerIdentification?: Nullable<string>;
    sendingType?: Nullable<string>;
    emailFormat?: Nullable<string>;
    email?: Nullable<string>;
    invoiceModeActivated?: Nullable<string>;
    contact?: Nullable<string>;
    dunningSendIndicator?: Nullable<string>;
    exemptionDunningIndicator?: Nullable<string>;
    externalDunningSendIndicator?: Nullable<string>;
    dataErrorIndicator?: Nullable<string>;
    differentiatedDueDate?: Nullable<string>;
}
export declare class AdditionalInformation {
    label?: Nullable<string>;
    value?: Nullable<string>;
}
export declare class AdditionalInformations {
    additionalInformation?: Nullable<Nullable<AdditionalInformation>[]>;
}
export declare class AssociatedAccessPointIdentification {
    identification?: Nullable<string>;
    vigencyStartDate?: Nullable<string>;
}
export declare class AssociatedAccessPointIdentifications {
    associatedAccessPointIdentification?: Nullable<Nullable<AssociatedAccessPointIdentification>[]>;
}
export declare class AssociatedBasicProduct {
    identification?: Nullable<string>;
    associationStartDate?: Nullable<string>;
}
export declare class AssociatedBasicProducts {
    associatedBasicProduct?: Nullable<Nullable<AssociatedBasicProduct>[]>;
}
export declare class AssociatedContractedProductPlanIdentifier {
    associatedContractedProductPlanIdentification?: Nullable<string>;
    contractedProductActiveStatusVigencyStartDate?: Nullable<string>;
    contractedProductCanceledStatusVigencyStartDate?: Nullable<string>;
}
export declare class AssociatedContractedProductPlanIdentifiers {
    associatedContractedProductPlanIdentifier?: Nullable<Nullable<AssociatedContractedProductPlanIdentifier>[]>;
}
export declare class Contract {
    identification?: Nullable<string>;
    companyIdentification?: Nullable<string>;
    customerIdentification?: Nullable<string>;
    customerName?: Nullable<string>;
    contractType?: Nullable<string>;
    startDate?: Nullable<string>;
    contractTypeIdentification?: Nullable<string>;
    contractTypeName?: Nullable<string>;
}
export declare class ContractedBasicProduct {
    identification?: Nullable<string>;
    accountIdentification?: Nullable<string>;
    account?: Nullable<Account>;
    contracts?: Nullable<Contracts>;
    createdByUser?: Nullable<string>;
    createdDate?: Nullable<string>;
    contractedProductActivedStatusVigencyStartDate?: Nullable<string>;
    contractedProductCancelledStatusVigencyStartDate?: Nullable<string>;
    contractedProductStatus?: Nullable<number>;
    contractedProductStatusDate?: Nullable<string>;
    contractedProductStatusHistories?: Nullable<ContractedProductStatusHistories>;
    contractTypeCode?: Nullable<string>;
    productIdentification?: Nullable<number>;
    productName?: Nullable<string>;
    productDescription?: Nullable<string>;
    negotiatedDate?: Nullable<string>;
    renewContractDate?: Nullable<string>;
    periodicityIdentification?: Nullable<number>;
    periodicityName?: Nullable<string>;
    serviceChannelIdentification?: Nullable<string>;
    salePointIdentification?: Nullable<number>;
    recurrentRatingEvents?: Nullable<RecurrentRatingEvents>;
    exemption?: Nullable<string>;
    exemptionStartDate?: Nullable<string>;
    proRateChargeType?: Nullable<number>;
    paymentType?: Nullable<number>;
    scheduleBlockIndicator?: Nullable<string>;
    scheduleBlockDate?: Nullable<string>;
    additionalInformations?: Nullable<AdditionalInformations>;
    associatedContractedProductPlanIdentifiers?: Nullable<AssociatedContractedProductPlanIdentifiers>;
    accessPoint?: Nullable<AccessPoint>;
    fidelityPromotionList?: Nullable<FidelityResponse>;
}
export declare class ContractedBasicProducts {
    contractedBasicProduct?: Nullable<Nullable<ContractedBasicProduct>[]>;
}
export declare class ContractedPlanProduct {
    identification?: Nullable<string>;
    createdByUser?: Nullable<string>;
    createdDate?: Nullable<string>;
    contractedProductActivedStatusVigencyStartDate?: Nullable<string>;
    contractedProductStatus?: Nullable<string>;
    contractedProductStatusDate?: Nullable<string>;
    contractTypeCode?: Nullable<string>;
    productIdentification?: Nullable<string>;
    productName?: Nullable<string>;
    productDescription?: Nullable<string>;
    negotiatedDate?: Nullable<string>;
    periodicityIdentification?: Nullable<string>;
    periodicityName?: Nullable<string>;
    serviceChannelIdentification?: Nullable<string>;
    salePointIdentification?: Nullable<string>;
    exemption?: Nullable<string>;
    proRateChargeType?: Nullable<string>;
    paymentType?: Nullable<string>;
    associatedBasicProducts?: Nullable<AssociatedBasicProducts>;
    additionalInformations?: Nullable<AdditionalInformations>;
    associatedContractedProductPlanIdentifiers?: Nullable<AssociatedContractedProductPlanIdentifiers>;
    accessPoint?: Nullable<AccessPoint>;
    associatedBasicContractedProductIdentification?: Nullable<string>;
    quantity?: Nullable<string>;
    quantityInitialDate?: Nullable<string>;
    contractedProductCancelledStatusVigencyStartDate?: Nullable<string>;
    eventGroups?: Nullable<EventGroups>;
    rechargeValue?: Nullable<RechargeValue>;
}
export declare class ContractedPlanProducts {
    contractedPlanProduct?: Nullable<Nullable<ContractedPlanProduct>[]>;
}
export declare class ContractedProduct {
    contractedBasicProducts?: Nullable<ContractedBasicProducts>;
    contractedSupplementaryProducts?: Nullable<ContractedSupplementaryProducts>;
    contractedPlanProducts?: Nullable<ContractedPlanProducts>;
    contractedPromotionProducts?: Nullable<ContractedPromotionProducts>;
}
export declare class ContractedProductStatusHistories {
    contractedProductStatusHistory?: Nullable<Nullable<ContractedProductStatusHistory>[]>;
}
export declare class ContractedProductStatusHistory {
    statusIdentification?: Nullable<string>;
    statusName?: Nullable<string>;
    validityStartDate?: Nullable<string>;
    validityEndDate?: Nullable<string>;
    contractedProductStatusHistoryReason?: Nullable<Nullable<ContractedProductStatusHistoryReasonResponse>[]>;
}
export declare class ContractedProductStatusHistoryReasonResponse {
    reasonStatusIdentification?: Nullable<string>;
    reasonStatusName?: Nullable<string>;
    initialDate?: Nullable<string>;
}
export declare class ContractedPromotionProduct {
    identification?: Nullable<string>;
    contracts?: Nullable<Contracts>;
    createdByUser?: Nullable<string>;
    createdDate?: Nullable<string>;
    contractedProductActivedStatusVigencyStartDate?: Nullable<string>;
    contractedProductCancelledStatusVigencyStartDate?: Nullable<string>;
    contractedProductStatus?: Nullable<number>;
    contractedProductStatusDate?: Nullable<string>;
    contractedProductStatusHistories?: Nullable<ContractedProductStatusHistories>;
    contractTypeCode?: Nullable<number>;
    productIdentification?: Nullable<string>;
    productName?: Nullable<string>;
    productDescription?: Nullable<string>;
    negotiatedDate?: Nullable<string>;
    exemption?: Nullable<string>;
    proRateChargeType?: Nullable<string>;
    paymentType?: Nullable<string>;
    associatedContractedProductIdentification?: Nullable<string>;
    associatedBasicContractedProductIdentification?: Nullable<string>;
    numberPromotionApplication?: Nullable<number>;
    discountType?: Nullable<string>;
    discountValue?: Nullable<string>;
    applicationStartDate?: Nullable<string>;
    applicationEndDate?: Nullable<string>;
    promotionRatingEvents?: Nullable<PromotionRatingEvents>;
    isVoucher?: Nullable<string>;
    creditBalancePromotion?: Nullable<string>;
}
export declare class ContractedPromotionProducts {
    contractedPromotionProduct?: Nullable<Nullable<ContractedPromotionProduct>[]>;
}
export declare class ContractedSupplementaryProduct {
    identification?: Nullable<string>;
    createdByUser?: Nullable<string>;
    createdDate?: Nullable<string>;
    contractedProductActivedStatusVigencyStartDate?: Nullable<string>;
    contractedProductCancelledStatusVigencyStartDate?: Nullable<string>;
    contractedProductStatus?: Nullable<string>;
    contractedProductStatusDate?: Nullable<string>;
    contractTypeCode?: Nullable<string>;
    productIdentification?: Nullable<string>;
    productName?: Nullable<string>;
    productDescription?: Nullable<string>;
    negotiatedDate?: Nullable<string>;
    periodicityIdentification?: Nullable<string>;
    periodicityName?: Nullable<string>;
    serviceChannelIdentification?: Nullable<string>;
    salePointIdentification?: Nullable<string>;
    exemption?: Nullable<string>;
    proRateChargeType?: Nullable<string>;
    paymentType?: Nullable<string>;
    additionalInformations?: Nullable<AdditionalInformations>;
    associatedContractedProductPlanIdentifiers?: Nullable<AssociatedContractedProductPlanIdentifiers>;
    accessPoint?: Nullable<AccessPoint>;
    associatedBasicContractedProductIdentification?: Nullable<string>;
    quantity?: Nullable<string>;
    quantityInitialDate?: Nullable<string>;
    eventGroups?: Nullable<EventGroups>;
}
export declare class ContractedSupplementaryProducts {
    contractedSupplementaryProduct?: Nullable<Nullable<ContractedSupplementaryProduct>[]>;
}
export declare class Contracts {
    contract?: Nullable<Nullable<Contract>[]>;
}
export declare class CreditBalancePromotionResponse {
    identification?: Nullable<string>;
}
export declare class EventGroups {
    eventGroup?: Nullable<Nullable<EventGroup>[]>;
}
export declare class Fidelity {
    fidelizedProduct?: Nullable<string>;
    fidelityStartDate?: Nullable<string>;
    fidelityEndDate?: Nullable<string>;
    exemptionIndicator?: Nullable<string>;
    valueReturnFromCredit?: Nullable<string>;
}
export declare class FidelityResponse {
    fidelity?: Nullable<Nullable<Fidelity>[]>;
}
export declare class FindContractedProductResponse {
    contractedProduct?: Nullable<ContractedProduct>;
    pagination?: Nullable<PaginationResponse>;
}
export declare class Histories {
    history?: Nullable<Nullable<History>[]>;
}
export declare class History {
    label?: Nullable<string>;
}
export declare class HistoryAdditionalInformation {
    entity?: Nullable<string>;
    entityIdentification?: Nullable<string>;
}
export declare class HistoryAdditionalInformations {
    historyAdditionalInformations?: Nullable<Nullable<HistoryAdditionalInformation>[]>;
}
export declare class HistoryValue {
    value?: Nullable<string>;
    startDate?: Nullable<string>;
}
export declare class HistoryValues {
    historyValue?: Nullable<Nullable<HistoryValue>[]>;
}
export declare class PaginationResponse {
    currentPage?: Nullable<number>;
    totalPages?: Nullable<number>;
    currentRegistersQuantity?: Nullable<number>;
    totalRegisters?: Nullable<number>;
}
export declare class PromotionAffected {
    identification?: Nullable<string>;
    name?: Nullable<string>;
    type?: Nullable<string>;
    discountType?: Nullable<string>;
    discountValue?: Nullable<string>;
    mnemonic?: Nullable<string>;
    additionalInformations?: Nullable<AdditionalInformations>;
}
export declare class PromotionRatingEvent {
    identification?: Nullable<string>;
    name?: Nullable<string>;
    type?: Nullable<string>;
    mnemonic?: Nullable<string>;
    ratingEventsPromotionAffected?: Nullable<RatingEventsPromotionAffected>;
}
export declare class PromotionRatingEvents {
    promotionRatingEvent?: Nullable<Nullable<PromotionRatingEvent>[]>;
}
export declare class RatingEventPromotionAffected {
    promotionAffected?: Nullable<PromotionAffected>;
}
export declare class RatingEventsPromotionAffected {
    ratingEventPromotionAffected?: Nullable<Nullable<RatingEventPromotionAffected>[]>;
}
export declare class RechargeValue {
    name?: Nullable<string>;
    value?: Nullable<string>;
    tax?: Nullable<string>;
    type?: Nullable<string>;
    automaticRecharge?: Nullable<string>;
    startDate?: Nullable<string>;
    endDate?: Nullable<string>;
}
export declare class RecurrentRatingEvent {
    currency?: Nullable<string>;
    priceList?: Nullable<string>;
    quantity?: Nullable<string>;
    ratingEventIdentification?: Nullable<string>;
    ratingEventName?: Nullable<string>;
}
export declare class RecurrentRatingEvents {
    recurrentRatingEvent?: Nullable<Nullable<RecurrentRatingEvent>[]>;
}
export declare class Vehicle {
    identification?: Nullable<string>;
    companyIdentification?: Nullable<string>;
    plate?: Nullable<string>;
    countryIdentification?: Nullable<string>;
    vehicleCategory?: Nullable<string>;
    manufacturerName?: Nullable<string>;
    modelName?: Nullable<string>;
    manufactureYear?: Nullable<string>;
    modelYear?: Nullable<string>;
    color?: Nullable<string>;
    vehicleDocument?: Nullable<string>;
    fuelType?: Nullable<string>;
    capacity?: Nullable<string>;
    power?: Nullable<string>;
    type?: Nullable<string>;
    associatedAccessPointIdentifications?: Nullable<AssociatedAccessPointIdentifications>;
}
export declare class BasicSummarized {
    productIdentifier?: Nullable<string>;
    productName?: Nullable<string>;
    quantity?: Nullable<string>;
}
export declare class BasicsSummarized {
    basicSummarized?: Nullable<Nullable<BasicSummarized>[]>;
}
export declare class ContractedProductSummarized {
    customerIdentification?: Nullable<string>;
    accountIdentification?: Nullable<string>;
    accountTypeIdentification?: Nullable<string>;
    accountTypeDescription?: Nullable<string>;
    plansSummarized?: Nullable<PlansSummarized>;
    promotionsSummarized?: Nullable<PromotionsSummarized>;
    featuresSummarized?: Nullable<FeaturesSummarized>;
    basicsSummarized?: Nullable<BasicsSummarized>;
}
export declare class FeatureSummarized {
    productIdentifier?: Nullable<string>;
    productName?: Nullable<string>;
    quantity?: Nullable<string>;
}
export declare class FeaturesSummarized {
    featureSummarized?: Nullable<Nullable<FeatureSummarized>[]>;
}
export declare class FindContractedProductSummarizedResponse {
    contractedProductSummarized?: Nullable<Nullable<ContractedProductSummarized>[]>;
}
export declare class PlanSummarized {
    productPlanIdentifier?: Nullable<string>;
    productPlanName?: Nullable<string>;
    quantity?: Nullable<string>;
}
export declare class PlansSummarized {
    planSummarized?: Nullable<Nullable<PlanSummarized>[]>;
}
export declare class PromotionSummarized {
    productIdentifier?: Nullable<string>;
    productName?: Nullable<string>;
    quantity?: Nullable<string>;
}
export declare class PromotionsSummarized {
    promotionSummarized?: Nullable<Nullable<PromotionSummarized>[]>;
}
export declare class FindCoverageAreaResponse {
    productIdentification?: Nullable<string>;
    partnershipIdentification?: Nullable<string>;
    usagePointIdentification?: Nullable<string>;
    usagePointTypeIdentification?: Nullable<string>;
    usagePointTypeName?: Nullable<string>;
    allowRoaming?: Nullable<string>;
    chargeRoaming?: Nullable<string>;
    stateIdentification?: Nullable<string>;
    stateAcronym?: Nullable<string>;
    streetCode?: Nullable<string>;
    streetName?: Nullable<string>;
    streetCodeType?: Nullable<string>;
    streetDescriptionType?: Nullable<string>;
}
export declare class FindDependentsResponse {
    companyIdentification?: Nullable<string>;
    accountIdentification?: Nullable<string>;
    productIdentification?: Nullable<string>;
    productName?: Nullable<string>;
    productType?: Nullable<number>;
}
export declare class FindEventGroupRatingEvents {
    identification?: Nullable<string>;
    name?: Nullable<string>;
    type?: Nullable<number>;
    additionalRateType?: Nullable<number>;
    inactivityFeeRateType?: Nullable<number>;
    mnemonic?: Nullable<string>;
    discountType?: Nullable<number>;
    discountValue?: Nullable<string>;
    startDate?: Nullable<string>;
    endDate?: Nullable<string>;
    inactivityDays?: Nullable<number>;
    sendTypeAccounts?: Nullable<Nullable<number>[]>;
}
export declare class FindEventGroupResponse {
    identification?: Nullable<string>;
    name?: Nullable<string>;
    purpose?: Nullable<number>;
    ratingEvents?: Nullable<Nullable<FindEventGroupRatingEvents>[]>;
}
export declare class FindFineValueResponse {
    finevalue?: Nullable<number>;
    fineStartDate?: Nullable<string>;
    stabilityFinalDate?: Nullable<string>;
    exemptionIndicator?: Nullable<string>;
    chargeCreditValue?: Nullable<number>;
    fidelizedProduct?: Nullable<string>;
}
export declare class AdditionalRateInfoResponse {
    eventGroupIdentification?: Nullable<string>;
    applicationType?: Nullable<string>;
    startDate?: Nullable<string>;
    valueRange?: Nullable<Nullable<ValueRangeResponse>[]>;
    minimunValue?: Nullable<string>;
    maximunValue?: Nullable<string>;
    percentual?: Nullable<string>;
    endDate?: Nullable<string>;
    minDays?: Nullable<string>;
    maxDays?: Nullable<string>;
}
export declare class FindProductResponse {
    products?: Nullable<Nullable<Product>[]>;
    faultItem?: Nullable<Nullable<FaultItemResponse>[]>;
}
export declare class PlanComposition {
    productsRequired?: Nullable<ProductsRequired>;
    optionalGroup?: Nullable<Nullable<OptionalGroupResponse>[]>;
}
export declare class Price {
    price?: Nullable<Nullable<PriceInfo>[]>;
}
export declare class PriceInfo {
    price?: Nullable<string>;
    currencyAcronym?: Nullable<string>;
    startDate?: Nullable<string>;
    ratingParameters?: Nullable<RatingParameters>;
}
export declare class Prices {
    price?: Nullable<Nullable<Price>[]>;
}
export declare class Product {
    identification?: Nullable<string>;
    name?: Nullable<string>;
    description?: Nullable<string>;
    productType?: Nullable<number>;
    billingType?: Nullable<number>;
    ratingEvents?: Nullable<RatingEvents>;
    eventGroups?: Nullable<EventGroups>;
    planComposition?: Nullable<PlanComposition>;
    additionalInformations?: Nullable<AdditionalInformations>;
    rechargeValues?: Nullable<Nullable<RechargeValue>[]>;
    qtyApplication?: Nullable<string>;
    isVoucher?: Nullable<string>;
    productDependencies?: Nullable<Nullable<ProductDependency>[]>;
    compatibilityRestrictions?: Nullable<CompatibilityRestrictions>;
}
export declare class ProductRequired {
    identification?: Nullable<string>;
    name?: Nullable<string>;
    description?: Nullable<string>;
    productType?: Nullable<string>;
    billingType?: Nullable<string>;
    ratingEvents?: Nullable<RatingEvents>;
    eventGroup?: Nullable<Nullable<EventGroup>[]>;
}
export declare class ProductsRequired {
    productRequired?: Nullable<Nullable<ProductRequired>[]>;
}
export declare class RatingEvent {
    identification?: Nullable<number>;
    name?: Nullable<string>;
    type?: Nullable<number>;
    discountType?: Nullable<string>;
    discountValue?: Nullable<string>;
    prices?: Nullable<Price>;
    ratingEventPromotionAffected?: Nullable<Nullable<RatingEventPromotionAffectedResponse>[]>;
    additionalRateInfo?: Nullable<Nullable<AdditionalRateInfoResponse>[]>;
}
export declare class RatingEventPromotionAffectedResponse {
    promotionAffected?: Nullable<RatingEvent>;
}
export declare class RatingEvents {
    ratingEvent?: Nullable<Nullable<RatingEvent>[]>;
}
export declare class RatingParameter {
    name?: Nullable<string>;
    value?: Nullable<string>;
    identification?: Nullable<string>;
}
export declare class RatingParameters {
    ratingParameter?: Nullable<Nullable<RatingParameter>[]>;
}
export declare class ValueRangeResponse {
    initialValue?: Nullable<string>;
    finalValue?: Nullable<string>;
    percentual?: Nullable<string>;
}
export declare class CompatibilityRestrictions {
    restriction?: Nullable<Nullable<Restriction>[]>;
}
export declare class FindProductServiceResponse {
    products?: Nullable<Nullable<ProductService>[]>;
}
export declare class ProductService {
    identification?: Nullable<string>;
    name?: Nullable<string>;
    actionIdentification?: Nullable<string>;
    identifyAccount?: Nullable<string>;
    activationDate?: Nullable<string>;
    requirements?: Nullable<Requirements>;
    product?: Nullable<Product>;
}
export declare class ProductType {
    type?: Nullable<number>;
    values?: Nullable<Values>;
}
export declare class ProductTypes {
    productType?: Nullable<Nullable<ProductType>[]>;
}
export declare class Requirement {
    identification?: Nullable<number>;
    name?: Nullable<string>;
    mandatory?: Nullable<string>;
}
export declare class Requirements {
    requirement?: Nullable<Nullable<Requirement>[]>;
}
export declare class Restriction {
    productRestrictionType?: Nullable<number>;
    values?: Nullable<Values>;
    productTypes?: Nullable<ProductTypes>;
}
export declare class Values {
    value?: Nullable<Nullable<string>[]>;
}
export declare class FindRatingEventResponse {
    identification?: Nullable<string>;
    name?: Nullable<string>;
    type?: Nullable<number>;
    useOCC?: Nullable<string>;
    mnemonic?: Nullable<string>;
}
export declare class FindSalePointResponse {
    salePoints?: Nullable<Nullable<SalePoints>[]>;
}
export declare class SalePoints {
    identification?: Nullable<string>;
    name?: Nullable<string>;
    costCenter?: Nullable<string>;
    stateIdentification?: Nullable<string>;
    daysForBlock?: Nullable<number>;
    serviceChannelIdentification?: Nullable<string>;
    active?: Nullable<string>;
    situationDate?: Nullable<string>;
}
export declare class AccessPointTechnologyResponse {
    identification?: Nullable<string>;
    name?: Nullable<string>;
}
export declare class AdditionalInformationMetadataResponse {
    entity?: Nullable<string>;
    label?: Nullable<string>;
    type?: Nullable<string>;
    length?: Nullable<string>;
    domain?: Nullable<Nullable<string>[]>;
    measurementUnit?: Nullable<string>;
}
export declare class AdditionalInformationResponse {
    label?: Nullable<string>;
    value?: Nullable<string>;
    measurementUnit?: Nullable<string>;
    createInformationUser?: Nullable<string>;
}
export declare class EquipmentManufacturerResponse {
    identification?: Nullable<string>;
    name?: Nullable<string>;
}
export declare class EquipmentModelResponse {
    identification?: Nullable<string>;
    name?: Nullable<string>;
    equipmentType?: Nullable<EquipmentTypeResponse>;
    equipmentManufacturer?: Nullable<EquipmentManufacturerResponse>;
    accessPointTechnology?: Nullable<AccessPointTechnologyResponse>;
}
export declare class EquipmentResponse {
    equipmentModel?: Nullable<EquipmentModelResponse>;
    standardEquipment?: Nullable<string>;
}
export declare class EquipmentTypeResponse {
    identification?: Nullable<string>;
    name?: Nullable<string>;
}
export declare class EventGroupResponse {
    identification?: Nullable<string>;
    name?: Nullable<string>;
    purpose?: Nullable<string>;
    allRatingEvent?: Nullable<string>;
    ratingEvent?: Nullable<Nullable<RatingEventResponse>[]>;
}
export declare class FindServiceResponse {
    services?: Nullable<Nullable<Services>[]>;
}
export declare class HistoryAdditionalInformationResponse {
    entity?: Nullable<string>;
    entityIdentification?: Nullable<string>;
    history?: Nullable<Nullable<HistoryResponse>[]>;
}
export declare class HistoryResponse {
    label?: Nullable<string>;
    historyValue?: Nullable<Nullable<HistoryValueResponse>[]>;
}
export declare class HistoryValueResponse {
    value?: Nullable<string>;
    startDate?: Nullable<string>;
    endDate?: Nullable<string>;
    createInformationUser?: Nullable<string>;
    changeInformationUser?: Nullable<string>;
}
export declare class OptionalGroupResponse {
    identification?: Nullable<string>;
    name?: Nullable<string>;
    maxQuantity?: Nullable<string>;
    minQuantity?: Nullable<string>;
    product?: Nullable<Nullable<ProductResponse>[]>;
}
export declare class PlanCompositionResponse {
    productRequired?: Nullable<Nullable<ProductResponse>[]>;
    optionalGroup?: Nullable<Nullable<OptionalGroupResponse>[]>;
}
export declare class PriceInPlanResponse {
    price?: Nullable<string>;
    currencyAcronym?: Nullable<string>;
    startDate?: Nullable<string>;
    endDate?: Nullable<string>;
    ratingParameter?: Nullable<Nullable<RatingParameterResponse>[]>;
    priceProductInPlanIdentification?: Nullable<string>;
    priceProductInPlanName?: Nullable<string>;
}
export declare class PriceResponse {
    price?: Nullable<string>;
    currencyAcronym?: Nullable<string>;
    startDate?: Nullable<string>;
    endDate?: Nullable<string>;
    ratingParameter?: Nullable<Nullable<RatingParameterResponse>[]>;
}
export declare class ProductAssociateResponse {
    featured?: Nullable<Nullable<ProductResponse>[]>;
    additional?: Nullable<Nullable<ProductResponse>[]>;
    promotional?: Nullable<Nullable<ProductResponse>[]>;
}
export declare class ProductResponse {
    identification?: Nullable<string>;
    name?: Nullable<string>;
    description?: Nullable<string>;
    productType?: Nullable<string>;
    billingType?: Nullable<string>;
    requirement?: Nullable<Nullable<ServiceRequirementResponse>[]>;
    vigencyStartDate?: Nullable<string>;
    vigencyEndDate?: Nullable<string>;
    specialOfferType?: Nullable<string>;
    partnerIndicator?: Nullable<string>;
    ratingEvent?: Nullable<Nullable<RatingEventResponse>[]>;
    eventGroup?: Nullable<Nullable<EventGroupResponse>[]>;
    promotionPartnership?: Nullable<Nullable<PromotionPartnershipResponse>[]>;
    compatibilityRestrictions?: Nullable<string>;
    productAssociate?: Nullable<Nullable<ProductAssociateResponse>[]>;
    planComposition?: Nullable<PlanCompositionResponse>;
    additionalInformation?: Nullable<Nullable<AdditionalInformationResponse>[]>;
    historyAdditionalInformation?: Nullable<Nullable<HistoryAdditionalInformationResponse>[]>;
    rechargeValue?: Nullable<Nullable<RechargeValueProductResponse>[]>;
    qtyApplication?: Nullable<string>;
    isVoucher?: Nullable<string>;
    voucherType?: Nullable<string>;
    partnershipIdentification?: Nullable<string>;
    transactionPartnership?: Nullable<string>;
    productDependencies?: Nullable<Nullable<ProductDependency>[]>;
}
export declare class PromotionPartnershipResponse {
    identification?: Nullable<string>;
    name?: Nullable<string>;
    customerIdentification?: Nullable<string>;
    customerName?: Nullable<string>;
    discountPercentagem?: Nullable<string>;
    discountValue?: Nullable<string>;
}
export declare class RatingEventResponse {
    identification?: Nullable<string>;
    name?: Nullable<string>;
    type?: Nullable<string>;
    additionalRateType?: Nullable<string>;
    inactivityFeeRateType?: Nullable<string>;
    additionalRateInfo?: Nullable<Nullable<AdditionalRateInfoResponse>[]>;
    mnemonic?: Nullable<string>;
    price?: Nullable<Nullable<PriceResponse>[]>;
    priceInPlan?: Nullable<Nullable<PriceInPlanResponse>[]>;
    discountType?: Nullable<string>;
    discountValue?: Nullable<string>;
    startDate?: Nullable<string>;
    endDate?: Nullable<string>;
    ratingEventPromotionAffected?: Nullable<Nullable<RatingEventResponse>[]>;
    additionalInformation?: Nullable<Nullable<AdditionalInformationResponse>[]>;
    historyAdditionalInformation?: Nullable<Nullable<HistoryAdditionalInformationResponse>[]>;
    inactivityDays?: Nullable<string>;
    sendTypeAccounts?: Nullable<string>;
}
export declare class RatingParameterResponse {
    name?: Nullable<string>;
    value?: Nullable<string>;
    identification?: Nullable<string>;
}
export declare class ReasonStatus {
    identification?: Nullable<string>;
    companyIdentification?: Nullable<string>;
    responsableModule?: Nullable<string>;
    name?: Nullable<string>;
    description?: Nullable<string>;
    incidenceIdentification?: Nullable<string>;
    standardReason?: Nullable<string>;
    startDate?: Nullable<string>;
    endDate?: Nullable<string>;
}
export declare class RechargeValueProductResponse {
    automaticRecharge?: Nullable<string>;
    startDate?: Nullable<string>;
    endDate?: Nullable<string>;
    name?: Nullable<string>;
    value?: Nullable<string>;
    tax?: Nullable<string>;
    type?: Nullable<string>;
}
export declare class ServiceRequirementResponse {
    identification?: Nullable<string>;
    name?: Nullable<string>;
    mandatory?: Nullable<string>;
    requirementAdditionalInformation?: Nullable<Nullable<AdditionalInformationMetadataResponse>[]>;
}
export declare class Services {
    identification?: Nullable<string>;
    name?: Nullable<string>;
    actionIdentification?: Nullable<string>;
    identifyAccount?: Nullable<string>;
    duration?: Nullable<number>;
    unitDuration?: Nullable<string>;
    activationDate?: Nullable<string>;
    deactivationDate?: Nullable<string>;
    reasonStatus?: Nullable<ReasonStatus>;
    idStatusContractedProduct?: Nullable<number>;
    idStatusAccessPoint?: Nullable<number>;
    requirement?: Nullable<Nullable<ServiceRequirementResponse>[]>;
    reasonService?: Nullable<Nullable<ReasonStatus>[]>;
    product?: Nullable<ProductResponse>;
    equipment?: Nullable<Nullable<EquipmentResponse>[]>;
}
export declare class FindServiceChannelResponse {
    identification?: Nullable<string>;
    description?: Nullable<string>;
    active?: Nullable<boolean>;
    activateDate?: Nullable<string>;
    inactiveDate?: Nullable<string>;
    hiringType?: Nullable<number>;
    channelType?: Nullable<number>;
    salesChannel?: Nullable<boolean>;
}
export declare class AssociatedAccessPoint {
    identificationAcessPoint?: Nullable<string>;
    vehiclePlate?: Nullable<string>;
    associatedPlan?: Nullable<string>;
}
export declare class AssociatedAccessPoints {
    associatedAccessPoint?: Nullable<AssociatedAccessPoint>;
}
export declare class FindServiceOrderProductAffectedResponse {
    serviceOrder?: Nullable<Nullable<ServiceOrderProductAffected>[]>;
    pagination?: Nullable<PaginationResponse>;
}
export declare class ServiceOrderProductAffected {
    sourceCustomerIdentification?: Nullable<string>;
    sourceCustomerName?: Nullable<string>;
    mainOS?: Nullable<string>;
    osIdentification?: Nullable<string>;
    serviceName?: Nullable<string>;
    osProduct?: Nullable<string>;
    osOpenDate?: Nullable<string>;
    associatedAccessPoints?: Nullable<AssociatedAccessPoints>;
}
export declare abstract class IMutation {
    abstract orderService(request?: Nullable<OrderServiceRequest>): Nullable<OrderServiceResponse> | Promise<Nullable<OrderServiceResponse>>;
}
export declare class OrderServiceResponse {
    orderServiceIdentification?: Nullable<string>;
    serviceActionIdentification?: Nullable<string>;
    productIdentification?: Nullable<string>;
    productName?: Nullable<string>;
    productType?: Nullable<string>;
}
export declare abstract class IQuery {
    abstract contractedProductFilter(request?: Nullable<FindContractedProductRequest>): Nullable<FindContractedProductResponse> | Promise<Nullable<FindContractedProductResponse>>;
    abstract productFilter(request?: Nullable<FindProductRequest>): Nullable<FindProductResponse> | Promise<Nullable<FindProductResponse>>;
    abstract productServiceFilter(request?: Nullable<FindProductServiceRequest>): Nullable<FindProductServiceResponse> | Promise<Nullable<FindProductServiceResponse>>;
    abstract contractedProductSummarizedFilter(request?: Nullable<FindContractedProductSummarizedRequest>): Nullable<FindContractedProductSummarizedResponse> | Promise<Nullable<FindContractedProductSummarizedResponse>>;
    abstract fineValueFilter(request?: Nullable<FindFineValueRequest>): Nullable<FindFineValueResponse> | Promise<Nullable<FindFineValueResponse>>;
    abstract agreementPartnershipFilter(request?: Nullable<FindAgreementPartnershipRequest>): Nullable<Nullable<FindAgreementPartnershipResponse>[]> | Promise<Nullable<Nullable<FindAgreementPartnershipResponse>[]>>;
    abstract eventGroupFilter(request?: Nullable<FindEventGroupRequest>): Nullable<Nullable<FindEventGroupResponse>[]> | Promise<Nullable<Nullable<FindEventGroupResponse>[]>>;
    abstract coverageAreaFilter(request?: Nullable<FindCoverageAreaRequest>): Nullable<Nullable<FindCoverageAreaResponse>[]> | Promise<Nullable<Nullable<FindCoverageAreaResponse>[]>>;
    abstract compatiblesProductsAccountFilter(request?: Nullable<FindCompatiblesProductsAccountRequest>): Nullable<Nullable<FindCompatiblesProductsAccountResponse>[]> | Promise<Nullable<Nullable<FindCompatiblesProductsAccountResponse>[]>>;
    abstract serviceFilter(request?: Nullable<FindServiceRequest>): Nullable<FindServiceResponse> | Promise<Nullable<FindServiceResponse>>;
    abstract serviceChannelFilter(request?: Nullable<FindServiceChannelRequest>): Nullable<Nullable<FindServiceChannelResponse>[]> | Promise<Nullable<Nullable<FindServiceChannelResponse>[]>>;
    abstract accountTypeFilter(request?: Nullable<FindAccountTypeRequest>): Nullable<Nullable<FindAccountTypeResponse>[]> | Promise<Nullable<Nullable<FindAccountTypeResponse>[]>>;
    abstract serviceOrderProductAffectedFilter(request?: Nullable<FindServiceOrderProductAffectedRequest>): Nullable<FindServiceOrderProductAffectedResponse> | Promise<Nullable<FindServiceOrderProductAffectedResponse>>;
    abstract ratingEventFilter(request?: Nullable<FindRatingEventRequest>): Nullable<Nullable<FindRatingEventResponse>[]> | Promise<Nullable<Nullable<FindRatingEventResponse>[]>>;
    abstract salePointFilter(request?: Nullable<FindSalePointRequest>): Nullable<FindSalePointResponse> | Promise<Nullable<FindSalePointResponse>>;
    abstract addressStateFilter(request?: Nullable<FindAddressStateRequest>): Nullable<FindAddressStateResponse> | Promise<Nullable<FindAddressStateResponse>>;
    abstract findDependentsProductsForAccountFilter(request?: Nullable<FindDependentsRequest>): Nullable<Nullable<FindDependentsResponse>[]> | Promise<Nullable<Nullable<FindDependentsResponse>[]>>;
}
type Nullable<T> = T | null;
export {};
