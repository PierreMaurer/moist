"use client"
import {Canvas, useFrame, useLoader} from '@react-three/fiber'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'
import {Suspense} from 'react'
import {ScrollControls, useScroll} from "@react-three/drei"

export const Experience = () => {
    const scroll = useScroll()
    const model = useLoader(GLTFLoader, './three/can.glb')

    useFrame(() => {
        model.scene.rotation.x = scroll.offset * Math.PI * 2
        model.scene.position.y = -scroll.offset * 10
    })

    return (
        <>
            <primitive object={model.scene} rotation={[0, 0, Math.PI * 1.5]} position={[-3, 0, 0]}/>
        </>
    )
}
export const Can = () => {
    return (
        <div style={{
            width: '100%',
            height: '100vh',
            position: 'absolute',
            top: 0,
            left: 0,
            pointerEvents: 'auto'
        }}>
            <Canvas>
                <Suspense>
                    <ScrollControls damping={0.2} maxSpeed={0.5} pages={4}>
                        <Experience/>
                    </ScrollControls>
                </Suspense>
                <ambientLight intensity={0.1} />
                <directionalLight position={[0, 0, 5]} color="white" />
            </Canvas>
        </div>
    )
}
