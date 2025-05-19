import { useEffect } from "react";
import { toCents } from "../utils";

export default function useOrderTotal(setAmount) {
  useEffect(() => {
    const target = document.getElementById("order-total");
    if (!target) return;

    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "data-total"
        ) {
          const newValue = target.getAttribute("data-total");
          setAmount(toCents(+newValue));
        }
      }
    });

    observer.observe(target, { attributes: true });

    return () => observer.disconnect();
  }, [setAmount]);
}
