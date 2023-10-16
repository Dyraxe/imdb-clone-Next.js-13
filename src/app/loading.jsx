import Image from "next/image";
function loading() {
  return (
    <div className="flex justify-center">
      <Image width={384} height={384} src="spinner.svg" alt="loading spinner" />
    </div>
  );
}

export default loading;
