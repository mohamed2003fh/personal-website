import { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";

const Particles = () => {
  const positions = useMemo(() => {
    const count = 4000
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count * 3; i++) {
      arr[i] = (Math.random() - 0.5) * 8
    }
    return arr
  }, [])

  return (
    <Points positions={positions} stride={3} frustumCulled>
      <PointMaterial
        size={0.02}
        color="#04D9C4"
        transparent
        opacity={0.7}
        depthWrite={false}
      />
    </Points>
  )
}

export function HeroCanvas() {
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <Suspense fallback={null}>
          <color attach="background" args={["transparent"]} />
          <Particles />
        </Suspense>
      </Canvas>
    </div>
  )
}
