// Copyright 2020-2022 OnFinality Limited authors & contributors
// SPDX-License-Identifier: Apache-2.0

import {blake2AsHex} from '@polkadot/util-crypto';

export const METADATA_REGEX = /^_metadata$/;

export const MULTI_METADATA_REGEX = /^_metadata_[a-zA-Z0-9-]+$/;

export function getMetadataTableName(chainId: string): string {
  const hash = blake2AsHex(chainId, 64);
  return `_metadata_${hash}`.substring(0, 63); // 63 chars is the max postgres database table name length
}