import { useEffect } from "react";

export default function useShippingMethodSelected(setIsRadioSelected) {
  useEffect(() => {
    const getRadios = () =>
      Array.from(document.getElementsByName("order[selected_shipping_method_id]"));

    function checkRadioSelected() {
      const radios = getRadios();
      const anyChecked = radios.some((radio) => radio.checked);
      setIsRadioSelected(anyChecked);
    }

    checkRadioSelected();

    const observer = new MutationObserver(() => {
      checkRadioSelected();
      attachChangeListeners();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    function attachChangeListeners() {
      const radios = getRadios();
      radios.forEach((radio) => {
        radio.removeEventListener("change", checkRadioSelected);
        radio.addEventListener("change", checkRadioSelected);
      });
    }

    attachChangeListeners();

    return () => {
      observer.disconnect();
      const radios = getRadios();
      radios.forEach((radio) =>
        radio.removeEventListener("change", checkRadioSelected)
      );
    };
  }, [setIsRadioSelected]);
}
