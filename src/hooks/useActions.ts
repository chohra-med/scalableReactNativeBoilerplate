import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { ActionCreator, bindActionCreators } from 'redux';

function useActions(
  actions: Array<ActionCreator<any>>,
): Array<ActionCreator<any>> {
  const dispatch = useDispatch();
  return useMemo(() => {
    if (Array.isArray(actions)) {
      return actions.map((a) => bindActionCreators(a, dispatch));
    }
    return bindActionCreators(actions, dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...actions, dispatch]);
}

export default useActions;
