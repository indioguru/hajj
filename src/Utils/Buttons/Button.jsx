export const Button = ({ children, url, styles = "w-3/4 px-5" }) => {
  return (
    <button
      className={`border lg:text-3xl rounded-3xl py-[5px] mt-6 block text-center ${styles} px-5 eleanor-light lg:w-fit cursor-pointer hover:bg-[#625350] transition-all duration-500 `}
      href={url}
    >
      {children}
    </button>
  );
};
