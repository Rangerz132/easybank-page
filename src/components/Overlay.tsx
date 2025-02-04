import { useContext } from "react";
import { OverlayContext } from "../contexts/OverlayContext";

const Overlay = () => {
  const { overlayContext, setOverlayContext } = useContext(OverlayContext);

  return (
    <div
      className={`bg-gradient-to-b from-primary-dark-blue to-transparent fixed z-40 w-screen h-screen ${
        overlayContext ? "flex" : "hidden"
      }`}
    >
      Overlay
    </div>
  );
};

export default Overlay;
