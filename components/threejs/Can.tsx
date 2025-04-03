"use client"
import {Canvas, useFrame, useLoader} from '@react-three/fiber'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'
import {Suspense, useEffect, useRef, useState} from 'react'
import {PerspectiveCamera} from "@react-three/drei"

const useWindowSize = () => {
    const [size, setSize] = useState({
        width: typeof window !== 'undefined' ? window.innerWidth : 0,
        height: typeof window !== 'undefined' ? window.innerHeight : 0
    })

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return size
}

export const Experience = () => {
    const model = useLoader(GLTFLoader, './three/can.glb')
    const scrollRef = useRef(0)
    const { width } = useWindowSize()
    
    const getScale = () => {
        if (width < 640) return {scale:0.4, positionx:-0.4, positiony: 0} // mobile
        if (width < 768) return {scale:0.5, positionx: -0.2, positiony: 0} // tablet
        if (width < 1024) return {scale:0.5, positionx: -0.5, positiony: 0}
        if (width < 1280) return {scale:0.5, positionx: -0.9, positiony: 0.2}
        if (width < 1536) return {scale:0.6, positionx: -1.2, positiony: 0.35} // small desktop
        return {scale:0.65, positionx: -1.7, positiony: 0.5} // large desktop
    }

    useEffect(() => {
        const handleScroll = () => {
            scrollRef.current = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useFrame(() => {
        model.scene.rotation.x = scrollRef.current * Math.PI * 10
        model.scene.position.y = -scrollRef.current - getScale().positiony
    })

    return (
        <>
            <primitive 
                object={model.scene} 
                rotation={[0, 0, Math.PI * 1.5]} 
                position={[getScale().positionx, 1, 0]}
                scale={getScale().scale}
            />
        </>
    )
}

export const Can = () => {
    return (
        <>
            <div className="w-auto h-full fixed top-0 left-0 pointer-events-auto z-10">
                <Canvas
                    camera={{ position: [0, 0, 5], fov: 75 }}
                    style={{
                        background: 'transparent',
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%'
                    }}
                    gl={{
                        antialias: true,
                        alpha: true,
                        preserveDrawingBuffer: true
                    }}
                >
                    <Suspense fallback={null}>
                        <Experience/>
                    </Suspense>
                    <ambientLight intensity={1} />
                    <directionalLight position={[-2, 0, 5]} intensity={2} color="white" />
                    <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                </Canvas>
            </div>
            <style jsx global>{`
                .text-mask {
                    position: relative;
                    display: inline-block;
                }
                .text-mask::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: white;
                    mix-blend-mode: screen;
                    pointer-events: none;
                }
            `}</style>
        </>
    )
}
