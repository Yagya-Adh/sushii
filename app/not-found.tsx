import Image from "next/image";

const NotFound = () => {
  return (
    <main className="mx-auto max-w-screen-lg">
      <div className="flex flex-col items-center h-full justify-center mb-2.5">
        <div className="flex inset-0">
          <Image
            src="assets/sushii.svg"
            height={300}
            width={260}
            alt="suhsii brand image"
            className="object-cover object-center h-full w-full"
          />
        </div>
        <h1 className="font-poppins font-extrabold text-8xl my-5">404</h1>
        <p className="font-poppins font-normal text-sm text-black">
          Eek! We&apos;ve lost this page. Sorry about that.{" "}
          <span className="text-sushii-coral-10">
            Click here to return home.
          </span>
        </p>
      </div>
    </main>
  );
};

export default NotFound;
