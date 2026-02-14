import react from '@vitejs/plugin-react';

export default {
  base: '/Chosen-Technologies/',
  plugins: [react()],
  build: {
    outDir: 'app/build',
  },
};
