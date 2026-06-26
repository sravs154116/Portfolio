import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, Torus, MeshDistortMaterial } from '@react-three/drei';

function BackgroundShapes() {
  const group = useRef();

  useFrame((state, delta) => {
    group.current.rotation.y -= delta * 0.05;
    group.current.rotation.x -= delta * 0.02;
  });

  return (
    <group ref={group}>
      {/* Blue glowing sphere (left) */}
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <Sphere args={[0.8, 64, 64]} position={[-3, 1, -2]}>
          <meshPhysicalMaterial 
            color="#3b82f6" 
            roughness={0.1} 
            metalness={0.5} 
            clearcoat={1} 
            clearcoatRoughness={0.1} 
          />
        </Sphere>
        {/* Concentric rings around the sphere */}
        <Torus args={[1.3, 0.02, 16, 64]} position={[-3, 1, -2]} rotation={[Math.PI / 3, 0, 0]}>
          <meshBasicMaterial color="#3b82f6" transparent opacity={0.3} />
        </Torus>
        <Torus args={[1.6, 0.01, 16, 64]} position={[-3, 1, -2]} rotation={[Math.PI / 3, 0, 0]}>
          <meshBasicMaterial color="#3b82f6" transparent opacity={0.15} />
        </Torus>
      </Float>

      {/* Small bright blue sphere (far left) */}
      <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
        <Sphere args={[0.4, 32, 32]} position={[-5, -0.5, 0]}>
          <meshPhysicalMaterial color="#60a5fa" roughness={0.2} metalness={0.6} />
        </Sphere>
      </Float>

      {/* Orange spiral/spring equivalent (top left) */}
      <Float speed={1} rotationIntensity={3} floatIntensity={2}>
        <Torus args={[1, 0.15, 32, 100, Math.PI * 1.5]} position={[-1.5, 2.5, -3]} rotation={[0, Math.PI / 4, 0]}>
          <meshPhysicalMaterial color="#f97316" roughness={0.3} metalness={0.4} />
        </Torus>
      </Float>

      {/* Orange glowing sphere (top right) */}
      <Float speed={1.2} rotationIntensity={1} floatIntensity={1.8}>
        <Sphere args={[0.7, 64, 64]} position={[2.5, 2.8, -4]}>
          <meshPhysicalMaterial color="#fb923c" roughness={0.1} metalness={0.3} emissive="#ea580c" emissiveIntensity={0.4} />
        </Sphere>
      </Float>

      {/* Distorted orange blob (bottom right) */}
      <Float speed={1} rotationIntensity={2} floatIntensity={2}>
        <Sphere args={[1.5, 64, 64]} position={[4, -2, -3]}>
          <MeshDistortMaterial color="#f97316" distort={0.4} speed={2} roughness={0.2} metalness={0.5} />
        </Sphere>
      </Float>

      {/* Large soft distorted blue blob (background) */}
      <Float speed={0.5} rotationIntensity={0.5} floatIntensity={1}>
        <Sphere args={[3, 64, 64]} position={[0, 0, -8]}>
          <MeshDistortMaterial color="#1e3a8a" distort={0.3} speed={1} roughness={0.5} metalness={0.1} transparent opacity={0.6} />
        </Sphere>
      </Float>
      
      {/* Orange glowing blob (bottom left) */}
      <Float speed={1.3} rotationIntensity={1.5} floatIntensity={1.5}>
        <Sphere args={[1.2, 64, 64]} position={[-3.5, -3, -2]}>
          <MeshDistortMaterial color="#ea580c" distort={0.5} speed={3} roughness={0.2} metalness={0.4} />
        </Sphere>
      </Float>
    </group>
  );
}

const Scene3D = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
      <color attach="background" args={['#050511']} />
      
      {/* Lighting to make it look glossy and 3D */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} color="#ffffff" />
      <directionalLight position={[-5, -5, -5]} intensity={0.5} color="#3b82f6" />
      <pointLight position={[-3, 1, 0]} intensity={2} color="#60a5fa" distance={5} />
      <pointLight position={[2, 2, -2]} intensity={2} color="#fb923c" distance={6} />
      
      <BackgroundShapes />
    </Canvas>
  );
};

export default Scene3D;
