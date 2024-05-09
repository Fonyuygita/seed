import Link from 'next/link';
import { FaMouse } from 'react-icons/fa';

const FloatingMouse = () => {
  return (
    <Link href="#about" className="absolute bottom-2 left-1/2 transform -translate-x-1/2 py-4">
      <FaMouse className="animate-float text-4xl text-white" />
    </Link>
  );
};

export default FloatingMouse;