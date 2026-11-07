import { business } from "@/lib/site";
import { PhoneIcon } from "./Icons";

export function StickyCall() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-white/95 p-3 backdrop-blur lg:hidden">
      <a href={`tel:${business.phoneTel}`} data-track="phone_call_click" className="btn-amber pulse w-full">
        <PhoneIcon />
        Appeler le {business.phoneDisplay}
      </a>
    </div>
  );
}
