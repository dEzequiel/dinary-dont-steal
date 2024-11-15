import { DMCNormalizer } from '../dmcNormalizer.js';
import { DMCProductNormalizer } from '../dmcProductNormalizer.js';
import { AffiliateNormalizer } from '../affiliateNormalizer.js';
import { AffiliateFAQNormalizer } from '../affiliateFAQNormalizer.js';
import { BookedProductNormalizer } from '../bookedProductNormalizer.js';
import { BudgetProductNormalizer } from '../budgetProductNormalizer.js';
import { DMCFAQNormalizer } from '../dmcFaqNormalizer.js';
import { ManagementGroupNormalizer } from '../managementGroupNormalizer.js';
import { PageNormalizer } from '../pageNormalizer.js';
import { ProviderNormalizer } from '../providerNormalizer.js';
import { TripTagNormalizer } from '../tripTagNormalizer.js';
import { TravelerNormalizer } from '../travelerNormalizer.js';
import { AdminNormalizer } from '../adminNormalizer.js';
import { DestinationCountryNormalizer } from '../destionationCountryNormalizer.js';
import { DestinationCountryZoneNormalizer } from '../destinationCountryZonesNormalizer.js';
import { PageCategoryNormalizer } from '../pageCategoryNormalizer.js';
import { TagNormalizer } from '../tagNormalizer.js';
import { BookingNormalizer } from '../bookingNormalizer.js';
import { InvoiceNormalizer } from '../invoiceNormalizer.js';
import { UserNormalizer } from '../UserNormalizer.js';
import { BudgetNormalizer } from '../budgetNormalizer.js';
import { DestinationCityNormalizer } from '../destinationCityNormalizer.js';
function NormalizerFactory() {}

NormalizerFactory.normalizers = {
  DMCProduct: DMCProductNormalizer,
  DMCFAQ: DMCFAQNormalizer,
  DMC: DMCNormalizer,
  Affiliate: AffiliateNormalizer,
  AffiliateFAQ: AffiliateFAQNormalizer,
  BookedProduct: BookedProductNormalizer,
  BudgetProduct: BudgetProductNormalizer,
  Budget: BudgetNormalizer,
  ManagementGroup: ManagementGroupNormalizer,
  Page: PageNormalizer,
  PageCategory: PageCategoryNormalizer,
  Provider: ProviderNormalizer,
  TripTag: TripTagNormalizer,
  Tag: TagNormalizer,
  Traveler: TravelerNormalizer,
  Admin: AdminNormalizer,
  User: UserNormalizer,
  DestinationCountry: DestinationCountryNormalizer,
  DestinationCountryZone: DestinationCountryZoneNormalizer,
  DestinationCity: DestinationCityNormalizer,
  Booking: BookingNormalizer,
  Invoice: InvoiceNormalizer
};

NormalizerFactory.createNormalizer = function(type) {
  const NormalizerClass = NormalizerFactory.normalizers[type];
  if (!NormalizerClass) {
    throw new Error('Unknown normalizer type');
  }
  return new NormalizerClass();
};

export { NormalizerFactory }