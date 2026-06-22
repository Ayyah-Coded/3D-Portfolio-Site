import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { MobileModel } from "./MobileModel";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";

const MobileModelContainer = () => {
  return (
    <Canvas>
      <Suspense fallback="{null}">
        <Stage environment="night" intensity={0.5}>
          <MobileModel />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate/>
        <PerspectiveCamera position={[-1,0,1.8]} zoom={0.8} makeDefault/>
      </Suspense>
    </Canvas>
  );
};

export default MobileModelContainer;