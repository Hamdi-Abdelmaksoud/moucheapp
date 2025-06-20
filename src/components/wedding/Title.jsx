import { FaHeart, FaCameraRetro } from 'react-icons/fa';

export default function Title() {
  return (
    <div className="w-full max-w-md p-6 m-4">
      <div className="flex items-center gap-2 mb-2">
        <FaCameraRetro className="text-pink-500 text-xl" />
        <h3 className="md:text-2xl font-semibold">Photographie de mariage</h3>
        {/* <FaHeart className="text-red-500 text-xl" /> */}
      </div>
      <p className="text-base sm:text-lg text-justify leading-relaxed italic text-gray-800">
        Immortaliser les moments d’émotion pure, capturer chaque regard sincère, chaque geste d’amour.
        À travers mes clichés, je raconte votre histoire avec authenticité et sensibilité, pour que
        chaque image devienne un souvenir intemporel de votre journée inoubliable.
      </p>
    </div>
  );
}
