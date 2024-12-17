import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Avatar = () => {
  const gltf = useGLTF('https://models.readyplayer.me/671aa54628caae2cc692328b.glb');
  const [rotation, setRotation] = useState(0);

//    To handle the scroll event
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
    
      // avatar looks down
      const maxRotation = -0.5; 
      const rotationValue = Math.min(scrollY / 500, 1) * maxRotation; 
      setRotation(rotationValue);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Canvas style={{ height: '500px', width: '100%' }} camera={{ position: [0, 1.6, 1.2], fov: 30 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />

      {/* 3D Model  */}
      <primitive 
        object={gltf.scene} 
        scale={1.6} 
        position={[0, -2.6, 0]} 
        rotation={[rotation, 0, 0]} 
      />

      {/* zoom */}
      <OrbitControls 
        enablePan={false}
        enableZoom={false} 
        maxPolarAngle={Math.PI / 2}  
        minPolarAngle={Math.PI / 2.5} 
      />
    </Canvas>
  );
};

export default Avatar;
