import { MeshProps, PrimitiveProps, useLoader } from "@react-three/fiber"
import { FC } from "react"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"

interface ModelProps extends MeshProps {
    path: string
}

const Model: FC<ModelProps> = ({ path, ...props }) => {
    const model = useLoader(GLTFLoader, path)

    return <primitive object={model.scene} {...props} />
}

export default Model
