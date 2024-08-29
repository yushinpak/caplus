import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';
import imageminSvgo from 'imagemin-svgo';
import path from 'path';
import fs from 'fs-extra';

// 이미지 경로와 출력 경로 설정
const inputDir = path.join(process.cwd(), 'src/assets/sub');
const outputDir = path.join(process.cwd(), 'public/assets/sub');

// 출력 디렉토리가 없으면 생성
fs.ensureDirSync(outputDir);

// 이미지 최적화 함수
const optimizeImages = async () => {
  try {
    const files = await imagemin([`${inputDir}/*.{jpg,png,svg}`], {
      destination: outputDir,
      plugins: [
        imageminMozjpeg({ quality: 75 }),
        imageminPngquant({ quality: [0.65, 0.80] }),
        imageminSvgo()
      ]
    });
    console.log('Images optimized:', files);
  } catch (error) {
    console.error('Error optimizing images:', error);
  }
};

optimizeImages();
