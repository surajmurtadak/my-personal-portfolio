import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const ringX = useSpring(cursorX, { stiffness: 250, damping: 20, mass: 0.5 });
  const ringY = useSpring(cursorY, { stiffness: 250, damping: 20, mass: 0.5 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable custom cursor on non-touch devices
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    setIsVisible(true);

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', moveCursor, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Use event delegation for high performance hover detection without DOM query lagging
    const handleMouseOver = (e) => {
      if (
        e.target &&
        e.target.closest &&
        e.target.closest(
          'a, button, [role="button"], input, textarea, select, .cursor-pointer, .btn-primary, .btn-outline, .btn-ghost, .glass-card, .skill-bubble'
        )
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    document.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          animate={{
            width: isClicking ? 6 : isHovering ? 0 : 8,
            height: isClicking ? 6 : isHovering ? 0 : 8,
          }}
          transition={{ duration: 0.15, ease: 'easeOut' }}
          className="rounded-full bg-white"
        />
      </motion.div>

      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          animate={{
            width: isClicking ? 28 : isHovering ? 56 : 36,
            height: isClicking ? 28 : isHovering ? 56 : 36,
            borderColor: isHovering
              ? 'rgba(249, 109, 0, 0.8)'
              : 'rgba(255, 255, 255, 0.3)',
            backgroundColor: isHovering
              ? 'rgba(249, 109, 0, 0.08)'
              : 'transparent',
          }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="rounded-full border-2"
        />
      </motion.div>
    </>
  );
}
