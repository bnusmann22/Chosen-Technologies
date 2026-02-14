import react from '@vitejs/plugin-react';

export default {
  plugins: [react()],
  build: {
    outDir: 'app/build',
  },
};
