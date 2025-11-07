import { useMemo, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import type * as THREE from "three"

function FlowField() {
  const ref = useRef<THREE.Points>(null)
  const positions = useMemo(() => {
    const count = 4500
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count * 3; i += 3) {
      arr[i] = (Math.random() - 0.5) * 18
      arr[i + 1] = (Math.random() - 0.5) * 12
      arr[i + 2] = (Math.random() - 0.5) * 16
    }
    return arr
  }, [])

  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.getElapsedTime()
    ref.current.rotation.y = t * 0.03
    ref.current.rotation.x = Math.sin(t * 0.2) * 0.1
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        size={0.08}
        transparent
        color="#04D9C4"
        sizeAttenuation
        depthWrite={false}
        opacity={0.75}
      />
    </Points>
  )
}

export function BackgroundField() {
  if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return null
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-0 opacity-70">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }} dpr={[1, 1.5]}>
        <color attach="background" args={["transparent"]} />
        <ambientLight intensity={0.4} />
        <FlowField />
      </Canvas>
    </div>
  )
}
