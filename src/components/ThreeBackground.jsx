import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function FloatingParticles({ count = 200 }) {
  const mesh = useRef();

  const [positions, sizes] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
      sizes[i] = Math.random() * 2 + 0.5;
    }
    return [positions, sizes];
  }, [count]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const posAttr = mesh.current.geometry.attributes.position;
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      posAttr.array[i3 + 1] += Math.sin(time * 0.3 + i * 0.1) * 0.002;
      posAttr.array[i3] += Math.cos(time * 0.2 + i * 0.15) * 0.001;
    }
    posAttr.needsUpdate = true;
    mesh.current.rotation.y = time * 0.02;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={count}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#F96D00"
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function FloatingOrbs() {
  const group = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.rotation.y = t * 0.05;
    group.current.rotation.x = Math.sin(t * 0.03) * 0.1;
  });

  return (
    <group ref={group}>
      {/* Primary large orb */}
      <mesh position={[3, 1, -2]}>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshBasicMaterial color="#F96D00" transparent opacity={0.08} />
      </mesh>
      {/* Secondary violet orb */}
      <mesh position={[-4, -1, -3]}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshBasicMaterial color="#7C3AED" transparent opacity={0.06} />
      </mesh>
      {/* Small accents */}
      <mesh position={[1, -3, -1]}>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshBasicMaterial color="#ff8c33" transparent opacity={0.1} />
      </mesh>
      <mesh position={[-2, 2, -4]}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshBasicMaterial color="#a78bfa" transparent opacity={0.07} />
      </mesh>
    </group>
  );
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ antialias: false, alpha: true }}
        dpr={[1, 1.5]}
        style={{ background: 'transparent' }}
      >
        <FloatingParticles count={180} />
        <FloatingOrbs />
      </Canvas>
    </div>
  );
}
