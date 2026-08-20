<template>
  <div class="dino-container">
    <div class="dino-world">
      <div class="ground"></div>
      
      <div class="cloud cloud-1">
        <svg viewBox="0 0 60 20" fill="currentColor"><path d="M20 5 Q20 0 25 0 Q35 0 40 5 Q55 5 55 12 Q55 20 40 20 L15 20 Q0 20 0 10 Q0 5 15 5 Z"/></svg>
      </div>
      <div class="cloud cloud-2">
        <svg viewBox="0 0 60 20" fill="currentColor"><path d="M20 5 Q20 0 25 0 Q35 0 40 5 Q55 5 55 12 Q55 20 40 20 L15 20 Q0 20 0 10 Q0 5 15 5 Z"/></svg>
      </div>

      <div class="obstacle obstacle-1">
        <svg viewBox="0 0 64 64" class="rock">
          <path d="M10 60 Q32 30 54 60 Z" fill="var(--vp-c-text-2)"/>
          <path d="M25 60 Q40 40 54 60 Z" fill="var(--vp-c-text-1)"/>
        </svg>
      </div>
      <div class="obstacle obstacle-2">
         <svg viewBox="0 0 64 64" class="grass">
           <path d="M32 60 Q20 30 10 20 Q25 40 32 60" fill="#10b981"/>
           <path d="M32 60 Q45 25 55 15 Q40 40 32 60" fill="#34d399"/>
           <path d="M32 60 Q32 25 32 15 Q36 35 32 60" fill="#059669"/>
         </svg>
      </div>

      <div class="rabbit-wrapper">
        <svg viewBox="0 0 64 64" class="rabbit">
          <!-- Back ear -->
          <path d="M32 22 C30 8, 35 6, 38 12 C40 18, 38 27, 35 28 Z" fill="#6366f1" class="ear-back"/>
          <!-- Front ear -->
          <path d="M40 20 C40 5, 45 5, 48 10 C50 15, 48 25, 45 28 Z" fill="#4f46e5" class="ear-front"/>
          <!-- Back leg -->
          <path d="M22 50 L14 60 L22 60 L26 50 Z" fill="#6366f1" class="leg-back"/>
          <!-- Body -->
          <ellipse cx="28" cy="40" rx="16" ry="12" fill="#4f46e5"/>
          <!-- Head -->
          <circle cx="45" cy="32" r="10" fill="#4f46e5"/>
          <!-- Eye -->
          <circle cx="48" cy="29" r="1.5" fill="#fff"/>
          <!-- Tail -->
          <circle cx="10" cy="40" r="5" fill="#fff"/>
          <!-- Front leg -->
          <path d="M35 48 L35 60 L41 60 L39 48 Z" fill="#4f46e5" class="leg-front"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dino-container {
  width: 100%;
  height: 120px;
  position: absolute;
  bottom: 0;
  left: 0;
  pointer-events: none;
  opacity: 0.8;
  z-index: 0;
}

.dino-world {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

/* Ground */
.ground {
  position: absolute;
  bottom: 20px;
  left: 0;
  width: 100%;
  height: 10px;
  background-image: 
    linear-gradient(90deg, var(--vp-c-text-3) 0%, var(--vp-c-text-3) 30%, transparent 30%, transparent 100%),
    linear-gradient(90deg, transparent 0%, transparent 40%, var(--vp-c-text-3) 40%, var(--vp-c-text-3) 60%, transparent 60%, transparent 100%);
  background-size: 30px 2px, 120px 2px;
  background-position: 0 8px, 0 4px;
  background-repeat: repeat-x;
  animation: groundScroll 1s linear infinite;
  opacity: 0.5;
}

@keyframes groundScroll {
  from { background-position: 0 8px, 0 4px; }
  to { background-position: -60px 8px, -120px 4px; }
}

/* Rabbit Wrapper (Bouncing) */
.rabbit-wrapper {
  position: absolute;
  bottom: 12px;
  left: 10%;
  width: 64px;
  height: 64px;
  animation: bounce 0.4s ease-in-out infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

/* Rabbit Legs & Ears Animation */
.leg-front { transform-origin: 37px 48px; animation: runFront 0.4s linear infinite; }
.leg-back { transform-origin: 24px 50px; animation: runBack 0.4s linear infinite; }
.ear-front { transform-origin: 40px 20px; animation: earFlap 0.4s linear infinite; }
.ear-back { transform-origin: 32px 22px; animation: earFlap 0.4s linear infinite; animation-delay: 0.1s; }

@keyframes runFront {
  0%, 100% { transform: rotate(-20deg); }
  50% { transform: rotate(20deg); }
}
@keyframes runBack {
  0%, 100% { transform: rotate(30deg); }
  50% { transform: rotate(-30deg); }
}
@keyframes earFlap {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(-5deg); }
}

/* Obstacles (Rock & Grass) */
.obstacle {
  position: absolute;
  bottom: 12px;
  left: 100%;
  width: 48px;
  height: 48px;
}

.obstacle svg {
  width: 100%;
  height: 100%;
  display: block;
}

.obstacle-1 { animation: scrollLeft 4s linear infinite; }
.obstacle-2 { animation: scrollLeft 4s linear infinite; animation-delay: 2s; width: 56px; }

/* Clouds */
.cloud {
  position: absolute;
  width: 80px;
  height: 30px;
  color: var(--vp-c-text-1);
  opacity: 0.15;
}

.cloud svg {
  width: 100%;
  height: 100%;
  display: block;
}

.cloud-1 {
  top: 10px;
  left: 100%;
  animation: scrollLeft 15s linear infinite;
  animation-delay: 2s;
}

.cloud-2 {
  top: 40px;
  left: 100%;
  width: 56px; /* Scaled down width */
  height: 21px; /* Scaled down height */
  animation: scrollLeft 22s linear infinite;
}

@keyframes scrollLeft {
  0% { transform: translateX(0); }
  100% { transform: translateX(-150vw); }
}
</style>
