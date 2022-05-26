import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { Loader } from "@react-three/drei"

// @ts-ignore
import { FPSControls } from "react-three-fpscontrols"

import MainStage from "src/MainStage"
import Model from "src/components/Model"

export default function Viewer() {
    return (
        <>
            <Canvas shadows dpr={[1, 2]}>
                <Suspense fallback={null}>
                    <pointLight position={[10, 10, 10]} />
                    <pointLight position={[10, 10, 10]} />

                    <ambientLight intensity={0.5} />

                    {/* <MainStage /> */}
                    <Suspense fallback={null}>
                        <Model scale={[2, 2, 2]} path="/ddddmodels/office.glb" />
                    </Suspense>

                    <FPSControls
                        camProps={{
                            makeDefault: true,
                            fov: 80,
                            position: [0, 2.8, 0.7],
                        }}
                        orbitProps={{
                            target: [0, 2.8, 0],
                        }}
                        enableJoystick
                        enableKeyboard
                    />
                </Suspense>
            </Canvas>
            <Loader />
        </>
    )
}
