import {
  ContactShadows,
  Environment,
  Float,
  PresentationControls,
  Text,
} from "@react-three/drei";
import Model from "./Model";
import { useControls } from "leva";

export default function Experience() {
  const isMobile = window.innerWidth < 768;
  //   const { xr, yr, zr } = useControls({
  //     name: "rotation",
  //     xr: -0.8,
  //     yr: -0.32,
  //     zr: -0.21,
  //   });
  return (
    <>
      <Environment preset="city" />

      <color attach="background" args={["#241a1a"]} />

      <PresentationControls
        global
        rotation={isMobile ? [-0.32, -0.8, -0.21] : [0.2, -0.1, 0]}
        polar={[-0.2, 0.2]}
        azimuth={[-0.1, 0.1]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
      >
        <Float rotationIntensity={0.1}>
          <rectAreaLight
            width={2.5}
            height={1.65}
            intensity={66}
            color={"#ffffff"}
            rotation={[0.1, Math.PI, 0]}
            position={[0, 55, -1.15]}
          />
          <Model />

          <Text
            font="./bangers-v20-latin-regular.woff"
            fontSize={isMobile ? 0.4 : 0.58}
            position={isMobile ? [0, -2, 0] : [2, 0.75, 0.75]}
            rotation-y={isMobile ? -0 : -1.25}
            maxWidth={1}
            textAlign="center"
          >
            Yash's Portfolio
          </Text>
        </Float>
      </PresentationControls>

      <ContactShadows position-y={-1.4} opacity={0.5} scale={5} blur={2.4} />
    </>
  );
}
