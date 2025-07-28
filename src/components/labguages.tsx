import Collapsed from "@/components/languages-toggle/collapsed";
import Extended from "@/components/languages-toggle/extended";
import { useSidebar } from "@/components/ui/sidebar";
import { useState } from "react";

function Languages() {
  const { state } = useSidebar();
  const [isOpen, setIsOpen] = useState(false);

  return state === "expanded" ? (
    <Extended isOpen={isOpen} setIsOpen={setIsOpen} />
  ) : (
    <Collapsed isOpen={isOpen} setIsOpen={setIsOpen} />
  );
}

export default Languages;
