import { Html, useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import { useEffect, useState } from "react";

const Model = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { xr, yr, zr } = useControls({ name: "position", xr: 0, yr: 0, zr: 0 });
  const { xr2, yr2, zr2 } = useControls({
    name: "rotation",
    xr2: 0,
    yr2: 0,
    zr2: 0,
  });

  const laptop = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );
  const phone = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/iphone-x/model.gltf"
  );

  // Check for mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const model = isMobile ? phone : laptop;

  return (
    model && (
      <primitive object={model.scene} position-y={isMobile ? -1.1 : -1.2}>
        <Html
          transform
          wrapperClass="htmlScreen"
          distanceFactor={isMobile ? 1.424 : 1.17}
          position={isMobile ? [0.155, 1.33, -0] : [0, 1.56, -1.4]}
          rotation-x={isMobile ? 0 : -0.256}
        >
          <iframe src="https://yashwanthvenkatesan.vercel.app/" />
        </Html>
      </primitive>
    )
  );
};

// Preload both models
useGLTF.preload(
  "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
);
useGLTF.preload(
  "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/iphone-x/model.gltf"
);

export default Model;
