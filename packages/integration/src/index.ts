
import { CustomerIdentification } from "@graphql/customer";

const model = new CustomerIdentification();
model.companyIdentification = "companyIdentification";
model.nrc = "nrc";
console.log(new CustomerIdentification);