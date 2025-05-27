import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import './RubiksCube.css';

// PUBLIC_INTERFACE
const RubiksCube = () => {
  // Placeholder for cube face colors
  const colors = {
    front: '#ff0000',   // Red
    back: '#ff8c00',    // Orange
    top: '#ffffff',     // White
    bottom: '#ffff00',  // Yellow
    right: '#0000ff',   // Blue
    left: '#00ff00',    // Green
  };

  const SingleCubePiece = ({ position, colors }) => (
    <mesh position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshPhongMaterial color={colors.front} />
    </mesh>
  );

  const RubiksCubeModel = () => {
    return (
      <group>
        {/* Initial demo cube - will be expanded to full 3x3x3 */}
        <SingleCubePiece 
          position={[0, 0, 0]} 
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
      <Canvas
        camera={{ position: [5, 5, 5], fov: 50 }}
        style={{ background: '#1a1a1a' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <RubiksCubeModel />
        <OrbitControls />
      </Canvas>
      <div className="controls">
        <button className="control-btn">Reset</button>
        <button className="control-btn">Scramble</button>
      </div>
    </div>
  );
};

export default RubiksCube;
