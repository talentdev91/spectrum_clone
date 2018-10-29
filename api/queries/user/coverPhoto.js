// @flow
import type { DBUser } from 'shared/types';
import { signImageUrl } from 'shared/imgix';

export default ({ coverPhoto }: DBUser) => {
  return signImageUrl(coverPhoto, { w: 1280, h: 384 });
};
