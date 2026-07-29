function Button({ children, type = "button" }) {
  return (
    <button
      type={type}
      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-md transition-colors shadow-sm cursor-pointer"
    >
      {children}
    </button>
  );
}

export default Button;
