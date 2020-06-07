/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

"use strict";
/**
 * Write your transction processor functions here
 */

/**
 * Sample transaction
 * @param {org.recon.biznet.Update} update - to be processed
 * @transaction
 */
function statusUpdateFunction(update) {
  update.check.checkStatus = update.newStatus;
  update.check.Org = update.newOrg;
  //  let assetRegistry = await getAssetRegistry("org.recon.biznet.Check");
  //  await assetRegistry.update(update.check);
  return getAssetRegistry("org.recon.biznet.Check").then(function (
    assetRegistry
  ) {
    return assetRegistry.update(update.check);
  });
}

/**
 * Sample transaction
 * @param {org.recon.biznet.PayerReissueUpdate} PayerReissueUpdate - to be processed
 * @transaction
 */
function providerReissueRequest(payerReissueUpdate) {
  payerReissueUpdate.check.checkStatus = payerReissueUpdate.reissueStatus;
  payerReissueUpdate.check.reissCheckNumber =
    payerReissueUpdate.reissCheckNumber;
  payerReissueUpdate.check.reissCheckAmt = payerReissueUpdate.reissCheckAmt;

  payerReissueUpdate.check.Org = payerReissueUpdate.payer;
  //  let assetRegistry = await getAssetRegistry("org.recon.biznet.Check");
  //  await assetRegistry.update(payerReissueUpdate.check);
  return getAssetRegistry("org.recon.biznet.Check").then(function (
    assetRegistry
  ) {
    return assetRegistry.update(payerReissueUpdate.check);
  });
}
