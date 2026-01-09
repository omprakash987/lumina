import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Line } from "@react-three/drei";
import * as THREE from "three";
import land from '../data/WordLand.json'
import { useMemo, useRef } from "react";

/* ---------- LAT LNG → 3D ---------- */
function latLngToVector3(lat, lng, radius) {
  const phi = (90 - lat) * Math.PI / 180;
  const theta = (lng + 180) * Math.PI / 180;

  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

/* ---------- GENERATE CONTINENT DOTS ---------- */
function useContinentDots(radius) {
  return useMemo(() => {
    const dots = [];

    land.features.forEach((feature) => {
      feature.geometry.coordinates.flat(2).forEach((coord) => {
        if (coord.length >= 2) {
          const [lng, lat] = coord;
          dots.push(latLngToVector3(lat, lng, radius));
        }
      });
    });

    return dots;
  }, [radius]);
}

/* ---------- CONNECTIONS ---------- */
const routes = [
  // India → USA
  [[20.5937, 78.9629], [37.0902, -95.7129]],
  // UK → Singapore
  [[55.3781, -3.4360], [1.3521, 103.8198]],
  // Germany → Brazil
  [[51.1657, 10.4515], [-14.2350, -51.9253]],
];

/* ---------- GLOBE ---------- */
function Globe() {
  const group = useRef();
  const radius = 3;
  const dots = useContinentDots(radius);

  useFrame(({ mouse }) => {
    if (!group.current) return;
    group.current.rotation.y += 0.0007;
    group.current.rotation.x = mouse.y * 0.2;
    group.current.rotation.y += mouse.x * 0.05;
  });

  return (
    <group ref={group}>
      {/* CONTINENT DOTS */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={new Float32Array(dots.flatMap(p => [p.x, p.y, p.z]))}
            count={dots.length}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.035}
          color="#d4af37"
          transparent
          opacity={0.85}
        />
      </points>

      {/* ARC CONNECTIONS + SPARK */}
      {routes.map((r, i) => {
        const start = latLngToVector3(r[0][0], r[0][1], radius);
        const end = latLngToVector3(r[1][0], r[1][1], radius);

        const mid = start.clone().add(end).multiplyScalar(0.5);
        mid.normalize().multiplyScalar(radius * 1.6);

        const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
        const curvePoints = curve.getPoints(100);

        return (
          <group key={i}>
            <Line
              points={curvePoints}
              color="#f5e27a"
              lineWidth={1}
              transparent
              opacity={0.6}
            />

            {/* SPARK */}
            <Spark curve={curve} />
          </group>
        );
      })}
    </group>
  );
}

/* ---------- MOVING SPARK ---------- */
function Spark({ curve }) {
  const ref = useRef();
  const t = useRef(Math.random());

  useFrame((_, delta) => {
    t.current += delta * 0.15;
    if (t.current > 1) t.current = 0;

    const pos = curve.getPointAt(t.current);
    ref.current.position.copy(pos);
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.06, 16, 16]} />
      <meshBasicMaterial color="#f5e27a" />
    </mesh>
  );
}

export default function GithubGlobe() {
  return (
    <Canvas camera={{ position: [0, 0, 8] }}>
      <ambientLight intensity={0.6} />
      <OrbitControls enableZoom={false} enablePan={false} />
      <Globe />
    </Canvas>
  );
}
