import { pick } from 'lodash-es';
import { useMemo } from 'react';

export const usePickStyleProps = (props, picks) => {
  const styleProps = useMemo(() => {
    return pick(props, picks)
  }, [picks, props])

  return styleProps;
}
