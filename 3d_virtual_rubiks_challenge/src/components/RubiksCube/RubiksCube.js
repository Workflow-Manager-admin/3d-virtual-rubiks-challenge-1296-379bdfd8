import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import './RubiksCube.css';

// PUBLIC_INTERFACE
const RubiksCube = () => {
  const cubeRef = useRef();

  // Placeholder for cube face colors - will be expanded in future implementations
  const colors = {
    front: '#ff0000',   // Red
    back: '#ff8c00',    // Orange
    top: '#ffffff',     // White
    bottom: '#ffff00',  // Yellow
    right: '#0000ff',   // Blue
    left: '#00ff00',    // Green
  };

  const CubeFace = ({ position, color, rotation = [0, 0, 0] }) => (
    <mesh position={position} rotation={rotation}>
      <boxGeometry args={[0.95, 0.95, 0.05]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );

  const CubeCorner = ({ position, colors }) => (
    <group position={position}>
      <CubeFace position={[0, 0, 0.475]} color={colors.front} />
      <CubeFace position={[0.475, 0, 0]} color={colors.right} rotation={[0, Math.PI / 2, 0]} />
      <CubeFace position={[0, 0.475, 0]} color={colors.top} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  );

  const RubiksCubeModel = () => {
    return (
      <group ref={cubeRef}>
        {/* Initial corner piece - more pieces will be added in future implementations */}
        <CubeCorner 
          position={[0.5, 0.5, 0.5]} 
          colors={{
            front: colors.front,
            right: colors.right,
            top: colors.top,
          }} 
        />
      </group>
    );
  };

  return (
    <div className="rubiks-cube-container">
      <Canvas camera={{ position: [3, 3, 3], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <RubiksCubeModel />
        <OrbitControls enableZoom={true} enablePan={true} />
      </Canvas>
      <div className="controls">
        <button className="control-btn">Reset</button>
        <button className="control-btn">Scramble</button>
      </div>
    </div>
  );
};

export default RubiksCube;
