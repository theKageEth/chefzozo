import Image from "next/image";

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Image
        src="/zozo.png"
        width={80}
        height={80}
        priority={true}
        alt="Loading chef zozo logo"
      />
      <p className="text-5xl font-bold m-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent p-3">
        c:\Users\msidd\Downloads\favicon (1).icoLoading!
      </p>
    </div>
  );
};

export default Loading;
