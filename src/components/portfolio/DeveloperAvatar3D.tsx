import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import { useRef, Suspense } from "react";
import * as THREE from "three";

function DeveloperModel() {
  const headRef = useRef<THREE.Group>(null);
  const leftArmRef = useRef<THREE.Mesh>(null);
  const rightArmRef = useRef<THREE.Mesh>(null);
  const laptopScreenRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    // Head bobbing (listening to music)
    if (headRef.current) {
      headRef.current.rotation.x = Math.sin(t * 2) * 0.08 + 0.1;
      headRef.current.rotation.y = Math.cos(t * 1.5) * 0.05;
    }

    // Typing hands animation (rapid slight movements)
    if (leftArmRef.current) {
      leftArmRef.current.rotation.x = -Math.PI / 4 + Math.sin(t * 12) * 0.08;
    }
    if (rightArmRef.current) {
      rightArmRef.current.rotation.x = -Math.PI / 4 + Math.cos(t * 10) * 0.08;
    }
  });

  return (
    <group position={[0, -0.8, 0]} rotation={[0, -Math.PI / 6, 0]}>
      {/* 1. Chair/Seat Back */}
      <mesh position={[0, 0.4, -0.6]}>
        <boxGeometry args={[0.8, 1.2, 0.1]} />
        <meshStandardMaterial color="#0b1528" roughness={0.5} />
      </mesh>
      
      {/* Chair Support */}
      <mesh position={[0, -0.2, -0.6]}>
        <cylinderGeometry args={[0.08, 0.08, 0.8]} />
        <meshStandardMaterial color="#1f2d4d" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* 2. Character Body (Torso) */}
      <mesh position={[0, 0.4, -0.1]}>
        <cylinderGeometry args={[0.3, 0.25, 0.9, 16]} />
        <meshStandardMaterial color="#101f3c" roughness={0.7} />
      </mesh>

      {/* 3. Character Head & Face */}
      <group ref={headRef} position={[0, 1.05, -0.1]}>
        {/* Head */}
        <mesh>
          <sphereGeometry args={[0.26, 32, 32]} />
          <meshStandardMaterial color="#e5c1a7" roughness={0.6} />
        </mesh>

        {/* Neck */}
        <mesh position={[0, -0.2, 0]}>
          <cylinderGeometry args={[0.1, 0.1, 0.2, 16]} />
          <meshStandardMaterial color="#e5c1a7" roughness={0.6} />
        </mesh>

        {/* Eyes (left & right) */}
        <mesh position={[-0.08, 0.05, 0.22]}>
          <sphereGeometry args={[0.025, 16, 16]} />
          <meshBasicMaterial color="#000000" />
        </mesh>
        <mesh position={[0.08, 0.05, 0.22]}>
          <sphereGeometry args={[0.025, 16, 16]} />
          <meshBasicMaterial color="#000000" />
        </mesh>

        {/* Stylized Glasses Frame */}
        <group position={[0, 0.05, 0.23]}>
          {/* Bridge */}
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[0.06, 0.015, 0.01]} />
            <meshBasicMaterial color="#d946ef" />
          </mesh>
          {/* Left Lens ring */}
          <mesh position={[-0.08, 0, 0]}>
            <torusGeometry args={[0.05, 0.01, 8, 24]} />
            <meshBasicMaterial color="#d946ef" />
          </mesh>
          {/* Right Lens ring */}
          <mesh position={[0.08, 0, 0]}>
            <torusGeometry args={[0.05, 0.01, 8, 24]} />
            <meshBasicMaterial color="#d946ef" />
          </mesh>
        </group>

        {/* Stylized Hair (Spiky / volume haircut) */}
        <group position={[0, 0.18, -0.05]}>
          <mesh position={[0, 0.08, 0]}>
            <sphereGeometry args={[0.22, 16, 16]} />
            <meshStandardMaterial color="#2d1d16" roughness={0.8} />
          </mesh>
          {/* Front bangs */}
          <mesh position={[0, 0.12, 0.1]} rotation={[0.2, 0, 0]}>
            <boxGeometry args={[0.24, 0.1, 0.1]} />
            <meshStandardMaterial color="#2d1d16" roughness={0.8} />
          </mesh>
        </group>

        {/* Stylized Headphones */}
        <group position={[0, 0.02, 0]}>
          {/* Headband */}
          <mesh position={[0, 0.24, 0]} rotation={[0, 0, Math.PI / 2]}>
            <torusGeometry args={[0.26, 0.025, 8, 32, Math.PI]} />
            <meshStandardMaterial color="#3b82f6" metalness={0.5} />
          </mesh>
          {/* Left Ear Cup */}
          <mesh position={[-0.26, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.08, 0.08, 0.08, 16]} />
            <meshStandardMaterial color="#3b82f6" roughness={0.3} />
          </mesh>
          {/* Right Ear Cup */}
          <mesh position={[0.26, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
            <cylinderGeometry args={[0.08, 0.08, 0.08, 16]} />
            <meshStandardMaterial color="#3b82f6" roughness={0.3} />
          </mesh>
        </group>
      </group>

      {/* 4. Left Shoulder & Arm */}
      <mesh ref={leftArmRef} position={[-0.4, 0.6, 0.1]} rotation={[-Math.PI / 4, 0, 0]}>
        <cylinderGeometry args={[0.07, 0.06, 0.5, 12]} />
        <meshStandardMaterial color="#101f3c" />
      </mesh>
      {/* Left Forearm */}
      <mesh position={[-0.4, 0.4, 0.35]} rotation={[-Math.PI / 2, 0.2, 0]}>
        <cylinderGeometry args={[0.06, 0.05, 0.4, 12]} />
        <meshStandardMaterial color="#e5c1a7" />
      </mesh>

      {/* 5. Right Shoulder & Arm */}
      <mesh ref={rightArmRef} position={[0.4, 0.6, 0.1]} rotation={[-Math.PI / 4, 0, 0]}>
        <cylinderGeometry args={[0.07, 0.06, 0.5, 12]} />
        <meshStandardMaterial color="#101f3c" />
      </mesh>
      {/* Right Forearm */}
      <mesh position={[0.4, 0.4, 0.35]} rotation={[-Math.PI / 2, -0.2, 0]}>
        <cylinderGeometry args={[0.06, 0.05, 0.4, 12]} />
        <meshStandardMaterial color="#e5c1a7" />
      </mesh>

      {/* 6. Desk Setup */}
      {/* Table Top */}
      <mesh position={[0, 0.1, 0.5]}>
        <boxGeometry args={[1.5, 0.08, 0.8]} />
        <meshStandardMaterial color="#0f172a" roughness={0.3} metalness={0.2} />
      </mesh>
      {/* Table Legs */}
      <mesh position={[-0.65, -0.35, 0.2]}>
        <cylinderGeometry args={[0.03, 0.03, 0.8]} />
        <meshStandardMaterial color="#1f2d4d" metalness={0.7} />
      </mesh>
      <mesh position={[0.65, -0.35, 0.2]}>
        <cylinderGeometry args={[0.03, 0.03, 0.8]} />
        <meshStandardMaterial color="#1f2d4d" metalness={0.7} />
      </mesh>
      <mesh position={[-0.65, -0.35, 0.75]}>
        <cylinderGeometry args={[0.03, 0.03, 0.8]} />
        <meshStandardMaterial color="#1f2d4d" metalness={0.7} />
      </mesh>
      <mesh position={[0.65, -0.35, 0.75]}>
        <cylinderGeometry args={[0.03, 0.03, 0.8]} />
        <meshStandardMaterial color="#1f2d4d" metalness={0.7} />
      </mesh>

      {/* 7. Holographic Laptop */}
      <group position={[0, 0.16, 0.45]}>
        {/* Keyboard/Base */}
        <mesh>
          <boxGeometry args={[0.45, 0.02, 0.3]} />
          <meshStandardMaterial color="#334155" roughness={0.4} />
        </mesh>
        
        {/* Laptop Screen (Rotated open) */}
        <mesh ref={laptopScreenRef} position={[0, 0.12, -0.14]} rotation={[0.3, 0, 0]}>
          <boxGeometry args={[0.45, 0.26, 0.015]} />
          <meshStandardMaterial color="#334155" roughness={0.4} />
        </mesh>
        
        {/* Screen Glow / Emissive Panel */}
        <mesh position={[0, 0.12, -0.13]} rotation={[0.3, 0, 0]}>
          <planeGeometry args={[0.42, 0.23]} />
          <meshStandardMaterial 
            color="#22d3ee" 
            emissive="#22d3ee" 
            emissiveIntensity={2} 
            roughness={0.1}
          />
        </mesh>

        {/* Screen Light illuminating the character */}
        <pointLight position={[0, 0.25, -0.05]} color="#22d3ee" intensity={1.5} distance={1.2} decay={2} />
      </group>
    </group>
  );
}

export default function DeveloperAvatar3D() {
  return (
    <div className="w-full h-[300px] sm:h-[400px] md:h-[450px] relative">
      <Suspense fallback={
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-t-primary border-white/10 rounded-full animate-spin"></div>
        </div>
      }>
        <Canvas gl={{ antialias: true }} camera={{ position: [0, 0.5, 3.2], fov: 45 }}>
          {/* Ambient light for general soft illumination */}
          <ambientLight intensity={0.5} />
          
          {/* Directional light acting as main light */}
          <directionalLight position={[5, 10, 3]} intensity={0.8} />
          
          {/* Fill lights with neon theme */}
          <pointLight position={[-3, 2, -1]} color="#d946ef" intensity={0.8} />
          <pointLight position={[3, 1, 2]} color="#3b82f6" intensity={0.6} />

          <Float speed={2.5} rotationIntensity={0.2} floatIntensity={0.3}>
            <DeveloperModel />
          </Float>

          {/* Interactive controls */}
          <OrbitControls 
            enableZoom={false} 
            maxPolarAngle={Math.PI / 2 + 0.1} 
            minPolarAngle={Math.PI / 3}
            maxAzimuthAngle={Math.PI / 4}
            minAzimuthAngle={-Math.PI / 4}
          />
        </Canvas>
      </Suspense>
    </div>
  );
}
