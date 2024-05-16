import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ButtonStar(params) {
  const { className, title, handleClick } = params;

  return (
    <button
      className={`mr-4 rounded-full font-medium ${className} `}
      onClick={handleClick}
    >
      <span className="sm:hidden w-6 h-6 grid place-items-center">
        <FontAwesomeIcon icon={faX} className="w-3 h-3 text-slate-700" />
      </span>
      <span className="hidden lg:grid px-3 py-1 place-items-center">
        {title}
      </span>
    </button>
  );
}

export default ButtonStar;
