// ... (keep the entire beautiful App.tsx I gave you earlier)

const WS_URL = import.meta.env.PROD 
  ? `${window.location.origin.replace(/^http/, 'ws')}/` 
  : 'ws://localhost:3000/';

// Then use WS_URL in the useEffect exactly as before
