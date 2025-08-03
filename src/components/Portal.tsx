import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: ReactNode;
  containerId?: string;
}

function Portal({ children, containerId = "portal" }: PortalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  const portalContainer = document.getElementById(containerId);

  if (!portalContainer) {
    return null;
  }

  return createPortal(children, portalContainer);
}

export default Portal;
