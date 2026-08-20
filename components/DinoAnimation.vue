<template>
  <div class="dino-container">
    <div class="dino-world">
      <div class="ground"></div>
      <div class="cloud cloud-1"></div>
      <div class="cloud cloud-2"></div>
      <div class="cacti"></div>
      <div class="dino"></div>
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
  opacity: 0.6;
  z-index: 0;
}

.dino-world {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

/* Scroll the ground using background-position to create the illusion of movement */
.ground {
  position: absolute;
  bottom: 20px;
  left: 0;
  width: 100%;
  height: 10px;
  background-image: 
    linear-gradient(90deg, var(--vp-c-text-1) 0%, var(--vp-c-text-1) 30%, transparent 30%, transparent 100%),
    linear-gradient(90deg, transparent 0%, transparent 40%, var(--vp-c-text-1) 40%, var(--vp-c-text-1) 60%, transparent 60%, transparent 100%);
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

/* Pixel art Dino character bouncing */
.dino {
  position: absolute;
  bottom: 22px;
  left: 10%;
  width: 44px;
  height: 48px;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 48"><path d="M22 0h14v2h2v14h-2v2h-4v2h-2v2h2v4h2v2h-2v2h-2v4h-2v-4h-2v4h-2v-4h-2v-4h-4v4h-2v-4h-2v-2H4v-2H2v-2H0v-6h2v-2h2v-2h2v-2h2V8h2V6h2V4h2V2h4V0zm6 4h-2v2h2V4z" fill="currentColor"/></svg>');
  background-size: contain;
  background-repeat: no-repeat;
  color: var(--vp-c-text-1);
  animation: run 0.3s steps(2) infinite;
}

@keyframes run {
  0% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
  100% { transform: translateY(0); }
}

/* Obstacles passing by */
.cacti {
  position: absolute;
  bottom: 22px;
  left: 100%;
  width: 24px;
  height: 48px;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 48"><path d="M10 0h4v48h-4zM2 16h4v16H2zM18 10h4v20h-4zM6 32h4v-4H6zM14 30h4v-4h-4z" fill="currentColor"/></svg>');
  background-size: contain;
  background-repeat: no-repeat;
  color: var(--vp-c-text-1);
  animation: scrollLeft 4s linear infinite;
}

/* Clouds floating by */
.cloud {
  position: absolute;
  width: 60px;
  height: 20px;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 20"><path d="M20 0h20v4h10v4h10v12H0V12h10V8h10V0z" fill="currentColor"/></svg>');
  background-size: contain;
  background-repeat: no-repeat;
  color: var(--vp-c-text-1);
  opacity: 0.2;
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
  transform: scale(0.7);
  animation: scrollLeft 22s linear infinite;
}

@keyframes scrollLeft {
  0% { transform: translateX(0) scale(inherit); }
  100% { transform: translateX(-150vw) scale(inherit); }
}
</style>
