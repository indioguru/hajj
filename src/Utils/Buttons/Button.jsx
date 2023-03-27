export const Button = ({ children, url, styles = "w-3/4 px-5 py-[0.5px]" }) => {
  return (
    <a
      className={`border lg:text-3xl rounded-3xl  mt-6 block text-center ${styles} px-5 eleanor-light lg:w-fit`}
      href={url}
    >
      {children}
    </a>
  );
};
