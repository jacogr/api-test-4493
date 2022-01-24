Run `node ./index.mjs` (after installing deps). Expected output from Westmint -

```
query {
  palletVersion: [Getter],
  class: [Getter],
  account: [Getter],
  asset: [Getter],
  classMetadataOf: [Getter],
  instanceMetadataOf: [Getter],
  attribute: [Getter]
}
tx {
  create: [Getter],
  forceCreate: [Getter],
  destroy: [Getter],
  mint: [Getter],
  burn: [Getter],
  transfer: [Getter],
  redeposit: [Getter],
  freeze: [Getter],
  thaw: [Getter],
  freezeClass: [Getter],
  thawClass: [Getter],
  transferOwnership: [Getter],
  setTeam: [Getter],
  approveTransfer: [Getter],
  cancelApproval: [Getter],
  forceAssetStatus: [Getter],
  setAttribute: [Getter],
  clearAttribute: [Getter],
  setMetadata: [Getter],
  clearMetadata: [Getter],
  setClassMetadata: [Getter],
  clearClassMetadata: [Getter]
}
```
