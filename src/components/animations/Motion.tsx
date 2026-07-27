'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';

/* ──────────────────────────────────────────────────────────────────────────────
   CUSTOM CURSOR — follows mouse with a lagging ring and dot
──────────────────────────────────────────────────────────────────────────────── */
export function CustomCursor() {
  const cursorDot  = useRef<HTMLDivElement>(null);
  const cursorRing = useRef<HTMLDivElement>(null);
  const ringPos    = useRef({ x: 0, y: 0 });
  const raf        = useRef<number>(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (cursorDot.current) {
        cursorDot.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }
      ringPos.current = { x: e.clientX, y: e.clientY };
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    let rx = 0, ry = 0;

    const animateRing = () => {
      rx = lerp(rx, ringPos.current.x, 0.12);
      ry = lerp(ry, ringPos.current.y, 0.12);
      if (cursorRing.current) {
        cursorRing.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      }
      raf.current = requestAnimationFrame(animateRing);
    };

    const onEnter = () => document.body.classList.add('cursor-hover');
    const onLeave = () => document.body.classList.remove('cursor-hover');

    window.addEventListener('mousemove', onMove);
    document.querySelectorAll('a, button, [data-cursor]').forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });
    raf.current = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      <div ref={cursorDot}  className="custom-cursor hidden lg:block" style={{ willChange: 'transform' }} />
      <div ref={cursorRing} className="custom-cursor-ring hidden lg:block" style={{ willChange: 'transform' }} />
    </>
  );
}

/* ──────────────────────────────────────────────────────────────────────────────
   SCROLL PROGRESS BAR
──────────────────────────────────────────────────────────────────────────────── */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 40 });

  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX, transformOrigin: '0%' }}
    />
  );
}

/* ──────────────────────────────────────────────────────────────────────────────
   FLOATING GOLD PARTICLES — ambient background particles
──────────────────────────────────────────────────────────────────────────────── */
export function GoldParticles({ count = 12 }: { count?: number }) {
  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    size: `${4 + Math.random() * 8}px`,
    delay: `${Math.random() * 8}s`,
    duration: `${10 + Math.random() * 12}s`,
  }));

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map(p => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            bottom: '-20px',
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────────────────
   FADE UP — scroll-triggered fade + slide up
──────────────────────────────────────────────────────────────────────────────── */
const fadeUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export function FadeUp({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      custom={delay}
      variants={fadeUpVariants}
    >
      {children}
    </motion.div>
  );
}

/* ──────────────────────────────────────────────────────────────────────────────
   STAGGER CONTAINER — staggered children reveal
──────────────────────────────────────────────────────────────────────────────── */
const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const staggerChild = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function StaggerContainer({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={staggerContainer}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={staggerChild}>
      {children}
    </motion.div>
  );
}

/* ──────────────────────────────────────────────────────────────────────────────
   COUNTER — animated number count up on viewport entry
──────────────────────────────────────────────────────────────────────────────── */
export function AnimatedCounter({
  target,
  suffix = '',
  prefix = '',
  duration = 2000,
  className = '',
}: {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}) {
  const [count, setCount] = useState(0);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    const start = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out expo
      const eased = 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(eased * target));
      if (progress >= 1) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}{count.toLocaleString('en-IN')}{suffix}
    </span>
  );
}

/* ──────────────────────────────────────────────────────────────────────────────
   MAGNETIC BUTTON — follows cursor on hover
──────────────────────────────────────────────────────────────────────────────── */
export function MagneticButton({
  children,
  className = '',
  strength = 0.35,
}: {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useSpring(0, { stiffness: 300, damping: 25 });
  const y = useSpring(0, { stiffness: 300, damping: 25 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * strength);
    y.set((e.clientY - cy) * strength);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ──────────────────────────────────────────────────────────────────────────────
   3D TILT CARD — tilts in 3D on mouse move
──────────────────────────────────────────────────────────────────────────────── */
export function TiltCard({
  children,
  className = '',
  maxTilt = 10,
}: {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useSpring(0, { stiffness: 200, damping: 25 });
  const rotateY = useSpring(0, { stiffness: 200, damping: 25 });
  const scale   = useSpring(1,  { stiffness: 200, damping: 25 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width  - 0.5;
    const y = (e.clientY - rect.top)  / rect.height - 0.5;
    rotateX.set(-y * maxTilt * 2);
    rotateY.set( x * maxTilt * 2);
    scale.set(1.03);
  };

  const handleLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
  };

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, scale, transformStyle: 'preserve-3d', perspective: 1200 }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ──────────────────────────────────────────────────────────────────────────────
   PARALLAX SECTION — vertical parallax on scroll
──────────────────────────────────────────────────────────────────────────────── */
export function ParallaxLayer({
  children,
  speed = 0.3,
  className = '',
}: {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [`${-speed * 80}px`, `${speed * 80}px`]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────────────────
   REVEAL TEXT — characters fly in staggered
──────────────────────────────────────────────────────────────────────────────── */
export function RevealText({
  text,
  className = '',
  delay = 0,
  stagger = 0.035,
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  const words = text.split(' ');

  return (
    <span className={`inline-flex flex-wrap gap-x-[0.25em] ${className}`} aria-label={text}>
      {words.map((word, wi) => (
        <span key={wi} style={{ overflow: 'hidden', display: 'inline-block' }}>
          <motion.span
            initial={{ y: '110%', opacity: 0 }}
            whileInView={{ y: '0%', opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: delay + wi * stagger,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{ display: 'inline-block' }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/* ──────────────────────────────────────────────────────────────────────────────
   GLOWING CARD — hover glow + lift
──────────────────────────────────────────────────────────────────────────────── */
export function GlowCard({
  children,
  className = '',
  glowColor = 'rgba(197,160,89,0.25)',
}: {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}) {
  return (
    <motion.div
      className={className}
      whileHover={{
        y: -6,
        boxShadow: `0 24px 50px -12px rgba(18,42,35,0.18), 0 0 35px ${glowColor}`,
        transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
      }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  );
}

/* ──────────────────────────────────────────────────────────────────────────────
   SLIDE IN SECTION — slides in from left or right
──────────────────────────────────────────────────────────────────────────────── */
export function SlideIn({
  children,
  direction = 'left',
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down';
  delay?: number;
  className?: string;
}) {
  const initial = {
    left:  { x: -80, opacity: 0 },
    right: { x:  80, opacity: 0 },
    up:    { y: -60, opacity: 0 },
    down:  { y:  60, opacity: 0 },
  }[direction];

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ──────────────────────────────────────────────────────────────────────────────
   AMBIENT BACKGROUND ORBS
──────────────────────────────────────────────────────────────────────────────── */
export function AmbientOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="ambient-orb ambient-orb-1"
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -20, 30, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="ambient-orb ambient-orb-2"
        animate={{
          x: [0, -25, 35, 0],
          y: [0, 25, -15, 0],
          scale: [1, 0.9, 1.12, 1],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
      />
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────────────────
   HERO PARALLAX WRAPPER (full-screen hero with scroll-driven image parallax)
──────────────────────────────────────────────────────────────────────────────── */
export function HeroParallax({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y     = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y, scale }} className="absolute inset-0">
        {children}
      </motion.div>
      <motion.div
        style={{ opacity }}
        className="hero-gradient-fade absolute inset-x-0 bottom-0 h-1/2"
      />
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────────────────
   SCAN-LINE DIVIDER ANIMATED
──────────────────────────────────────────────────────────────────────────────── */
export function GoldDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`relative my-2 ${className}`}>
      <div className="divider-scan" />
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────────────────
   FLOATING BADGE (animated badge that hovers)
──────────────────────────────────────────────────────────────────────────────── */
export function FloatingBadge({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -8, 0],
        rotate: [-1, 1, -1],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  );
}

/* ──────────────────────────────────────────────────────────────────────────────
   IMAGE REVEAL — wipe reveal with gold curtain effect
──────────────────────────────────────────────────────────────────────────────── */
export function ImageReveal({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {children}
      <motion.div
        className="absolute inset-0 bg-[#C5A059] origin-left z-10"
        variants={{
          hidden:  { scaleX: 1 },
          visible: {
            scaleX: 0,
            transition: {
              duration: 0.9,
              delay: delay + 0.1,
              ease: [0.76, 0, 0.24, 1],
            },
          },
        }}
        style={{ transformOrigin: 'right' }}
      />
      <motion.div
        className="absolute inset-0 bg-[#1A3D33] origin-left z-20"
        variants={{
          hidden:  { scaleX: 1 },
          visible: {
            scaleX: 0,
            transition: {
              duration: 0.7,
              delay,
              ease: [0.76, 0, 0.24, 1],
            },
          },
        }}
        style={{ transformOrigin: 'right' }}
      />
    </motion.div>
  );
}

/* ──────────────────────────────────────────────────────────────────────────────
   SPARKLE DOT — animated gold sparkle
──────────────────────────────────────────────────────────────────────────────── */
export function SparkleDot({ className = '' }: { className?: string }) {
  return (
    <motion.span
      className={`inline-block w-1.5 h-1.5 rounded-full bg-[#C5A059] ${className}`}
      animate={{
        scale: [1, 1.8, 1],
        opacity: [0.6, 1, 0.6],
      }}
      transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
    />
  );
}
