import { useMemo } from "react";
import { useSelector } from "react-redux"

export const useCurrentElement = () => {
  const { currentElementId,  components } = useSelector(state => state.editor.value);
  const currentElement = useMemo(() => {
    return components.find(item => item.id === currentElementId);
  }, [components, currentElementId]);

  return currentElement;
}
