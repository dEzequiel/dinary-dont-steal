import { DMCNormalizer } from '../dmcNormalizer.js';
import { DMCProductNormalizer } from '../dmcProductNormalizer.js';
import { AffiliateNormalizer } from '../affiliateNormalizer.js';
import { AffiliateFAQNormalizer } from '../affiliateFAQNormalizer.js';
import { BookedProductNormalizer } from '../bookedProductNormalizer.js';
import { BudgetProductNormalizer } from '../budgetProductNormalizer.js';

function NormalizerFactory() {}

NormalizerFactory.normalizers = {
  DMCProduct: DMCProductNormalizer,
  DMC: DMCNormalizer,
   Affiliate: AffiliateNormalizer,
   AffiliateFAQ: AffiliateFAQNormalizer,
   BookedProduct: BookedProductNormalizer,
   BudgetProduct: BudgetProductNormalizer,
};

NormalizerFactory.createNormalizer = function(type) {
  const NormalizerClass = NormalizerFactory.normalizers[type];
  if (!NormalizerClass) {
    throw new Error('Unknown normalizer type');
  }
  return new NormalizerClass();
};

export { NormalizerFactory }