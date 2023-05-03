export const Button = ({ children, styles = "w-3/4 px-5" }) => {
  return (
    <button
      className={`border text-xl lg:text-2xl rounded-3xl py-[5px] mt-6 block text-center ${styles} px-5 eleanor-light lg:w-fit cursor-pointer hover:bg-[#625350] transition-all duration-500 `}
    >
      {children}
    </button>
  );
};
